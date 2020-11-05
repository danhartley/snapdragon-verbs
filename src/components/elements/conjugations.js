import { ConjugationList } from './lists';
import { Language, Tense } from '../../logic/enums.js'
import { useState, useEffect, useRef } from 'preact/hooks';
import { api } from '../../api/api';
import { utils } from '../../utils/utils';

export const compareActualConjugationWithRegularInfConjugation = async ({actual, inf, language}) => {

    const { conjugations } = await api.getAllConjugations(language);

    let regularInf, regular;
    let ending = inf.slice(inf.length - 2);
    let root;
    let regularRoot;
    let isReflexive;

    switch(language) {
        case Language.pt:
        switch(ending) {
            case 'ar': regularInf = 'falar'; break;
            case 'er': regularInf = 'vender'; break;
            case 'ir': regularInf = 'partir'; break;
            default: regularInf = null;
        }
        break;
        case Language.es:
        switch(ending) {
            case 'ar': regularInf = 'hablar'; break;
            case 'er': regularInf = 'comer'; break;
            case 'ir': regularInf = 'vivir'; break;
            default: regularInf = null;
        }
        break;
    }

    if(regularInf) {
        root = inf.slice(0, inf.length - 2);
        regularRoot = regularInf.slice(0, regularInf.length - 2);
        regular = conjugations.find(c => c.i === regularInf);
        isReflexive = false;
    } else {        
        ending = inf.slice(inf.length - 5);
        switch(language) {
            case language.pt:
            switch(ending) {
                case 'ar-se': regularInf = 'falar'; break;
                case 'er-se': regularInf = 'vender'; break;
                case 'ir-se': regularInf = 'partir'; break;
            }
            break;
            case language.es:
            switch(ending) {
                case 'ar-se': regularInf = 'hablar'; break;
                case 'er-se': regularInf = 'comer'; break;
                case 'ir-se': regularInf = 'vivir'; break;
            }
            break;
        }
        root = inf.slice(0, inf.length - 5);
        regularRoot = regularInf.slice(0, regularInf.length - 2);
        regular = conjugations.find(c => c.i === regularInf);
        let regularReflexive = {};
        Object.keys(Tense).map(key => {
             regularReflexive[Tense[key]] = api.makeReflexive({ conjugations: regular[Tense[key]], tense: Tense[key], inf: regularInf, language });
        });
        regular = regularReflexive;
        isReflexive = true;
    }

    let _conjugations = {};

    const getExpected = (regularExpected, regularRoot, isReflexive, root, tense, person, language) => {
        let ending, expected;
        if(isReflexive) {
            switch(language) {
                case language.pt:
                switch(tense) {
                    case Tense.present_subjunctive:
                    case Tense.imperfect_subjunctive:
                    case Tense.future_subjunctive:
                        ending = regularExpected.split(' ')[1];
                        ending = ending.slice(regularRoot.length);
                        switch(person){
                            case 0: expected = `me ${root}${ending}`; break;
                            case 1: expected = `te ${root}${ending}`; break;
                            case 2: expected = `se ${root}${ending}`; break;
                            case 3: expected = `nos ${root}${ending}`; break;
                            case 4: expected = `vos ${root}${ending}`; break;
                            case 5: expected = `se ${root}${ending}`; break;
                        }           
                    return expected;         
                    default:
                        ending = regularExpected.slice(regularRoot.length);
                        return root + ending;        
                }
            }
        } else {
            ending = regularExpected.slice(regularRoot.length);
            return root + ending;
        }
    };

    Object.keys(actual).map(tense => {
        if(tense !== 'i' && tense !== 'gerund' && tense !== 'participle') {
            const pronouns = [];
            actual[tense].forEach((conjugation, i) => {
                const regularExpected = regular[tense][i];
                const expected = getExpected(regularExpected, regularRoot, isReflexive, root, tense, i, language);
                const pronoun = {
                    form: conjugation,
                    isIrregular: conjugation !== expected
                }
                pronouns.push(pronoun);
            });
            _conjugations[tense] = pronouns;
        }
    });

    return _conjugations;
};

export const Conjugations = ({drill, language}) => {

    const [comparedConjugations, setComparedConjugations] = useState(null);

    useEffect( async () => {
        let comparedConjugations = await compareActualConjugationWithRegularInfConjugation({ actual: drill.conjugations, inf: drill.verb, language });
        setComparedConjugations(comparedConjugations);
    }, []);

    let tenses = utils.getTensesByLanguage(language);
        tenses = tenses.map(t => t.replace('_', ' '));
    
     return (
        comparedConjugations === null ? '' :
        <>
            <section class="flex drills">
                <h2>
                    <span><a href="#app">{drill.verb}</a><a/></span><span class="translation">{drill.translation}</span>
                </h2>
            </section>
            <section class="conjugations">
            {                
                tenses.map(tense => {
                    return <div>
                        <h5>{tense}</h5>
                        <div class="margin-left">
                            <ConjugationList items={comparedConjugations[tense]} />
                        </div>
                    </div>
                })
            }
            </section>
        </>
    )
};