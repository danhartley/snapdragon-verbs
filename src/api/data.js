import { Language, Language_NAV, VerbGroup } from '../logic/enums.js';
import { getVerbsList } from './data-verbs';
import { getVerbConjugations } from './data-conjugations';
import { utils } from '../utils/utils';

const clean = str => {
    let cleaned = str;
        cleaned = cleaned.trim();
        cleaned = cleaned.toLowerCase();
    return cleaned;
};

export const data = {
    async getVerbs(inf, language = Language.pt) {
        return await getVerbsList(inf, language);
    },
    async getAllConjugations(language) {
        return await getVerbConjugations(language);
    },    
    async getConjugations({inf, language}) {

        const { conjugations, partials } = await getVerbConjugations(language);

        let filteredConjugations = conjugations.find(verb => clean(verb.i) === clean(inf));   
        let filteredPartials = partials.find(verb => clean(verb.i) === clean(inf));   

        return new Promise(resolve => resolve({conjugations: filteredConjugations, partials:filteredPartials}));
    },
    getTenses() {
        const tenses = [
            {
                en: 'present',
                pt: 'presente',
                es: 'presente'
            }
            , {
                en: 'preterite',
                pt: 'pretérito',
                es: 'pretérito',
            }
            , {
                en: 'imperfect',
                pt: 'imperfeito',
                es: 'imperfecto',
            }
            , {
                en: 'future',
                pt: 'futuro',
                es: 'futuro',
            }
            , {
                en: 'conditional',
                pt: 'condicional',
                es: 'condicional',
            }
            , {
                en: 'pluperfect',
                pt: 'mais-que-perfeito',
                es: 'pluscuamperfecto',
            }
            , {
                en: 'present subjunctive',
                pt: 'subjuntivo, presente',
                es: 'subjuntivo, presente',
            }
            , {
                en: 'imperfect subjunctive',
                pt: 'subjuntivo, imperfeito',
                es: 'subjuntivo, imperfeito',
            }
            , {
                en: 'future subjunctive',
                pt: 'subjuntivo, futuro',
                es: 'subjuntivo, futuro',
            }
        ];
        return tenses;
    },
    getSetDrills(language) {
        switch(language) {
            case Language.pt:
            return [
                {
                    id: 1,
                    name: 'Common irregular verbs, 1-12',
                    verbs: [ { name:'ser' }, { name:'ter' }, { name:'estar' }, { name: 'poder' }, { name:'fazer', }, { name:'ir' }, {  name: 'haver' }, { name: 'dizer' }, { name: 'dar' }, { name: 'ver' }, { name:'saber' }, { name: 'querer' } ]
                },
                {
                    id: 2,
                    name: 'Common irregular verbs, 13-24',
                    verbs: [ { name:'ficar' }, { name:'vir' }, { name: 'chegar' }, { name: 'começar'}, { name: 'parecer' }, { name: 'sair' }, { name: 'conseguir' }, { name: 'sentir' }, { name: 'conhecer'},  { name:'pôr' }, { name: 'ouvir' }, { name: 'perder' } ]
                },
                {
                    id: 3,
                    name: 'Commmon irregular verbs, 25-36 ',
                    verbs: [ { name: 'pedir' }, { name: 'seguir' }, { name:'trazer' }, { name: 'cair' }, { name: 'surgir' }, { name: 'nascer' }, { name: 'produzir' }, { name:'ler' }, { name: 'servir' }, { name: 'subir' }, { name: 'fugir' }, { name: 'rir' }, { name:'dormir' }, { name: 'caber'}, { name:'crer' } ]
                },
                {
                    id: 4,
                    name: 'Regular -ar, -er and -ir verbs',
                    verbs: [ { name:'falar' }, { name:'partir' }, { name:'vender' } ]
                },
                {
                    id: 5,
                    name: 'Common reflexive verbs',
                    verbs: [ { name:'lembrar-se' }, { name:'levantar-se' }, { name:'vestir-se' } ]
                },
                {
                    id: 6,
                    name: '12 Common regular verbs',
                    verbs: [ { name: 'dever' }, { name: 'deixar' }, { name: 'encontrar' }, { name: 'levar' }, { name: 'partir' }, { name: 'pensar'}, { name: 'olhar' }, { name: 'voltar' }, { name: 'achar' }, { name: 'existir' }, { name: 'entrar' }, { name: 'chamar' } ]
                },
                {
                    id: 7,
                    name: 'Clear all verbs',
                    verbs: []
                },
            ];
            case Language.es:                
            return [
                {
                    id: 1,
                    name: 'Regular -ar, -er and -ir verbs',
                    verbs: [ { name:'hablar' }, { name:'comer' }, { name:'vivir' } ]
                },
            ];
        }
    },
    getVerbGroups(group, language, verbs) {
        let _verbs = [], tense;
        switch(language) {
            case Language.pt:
                switch(group) {
                    case VerbGroup.all_verbs:
                        utils.shuffleArray(verbs).forEach((v,i) => {
                            if(i < 100) {
                                _verbs.push({ name: v });
                            }
                        });
                        break;
                    case VerbGroup.irregular_verbs:
                        this.getSetDrills(language).filter(drill => drill.id < 4).forEach(group => {
                            _verbs = [ ..._verbs, ...group.verbs ];
                        });
                        break;
                    case VerbGroup.common_regular_verbs:
                        _verbs = this.getSetDrills(language).find(drill => drill.id === 6).verbs;
                        break;
                    case VerbGroup.imperfect_irregular_verbs:
                        _verbs = [
                            { name: 'vir' },
                            { name: 'ter' },
                            { name: 'ser' },
                            { name: 'pôr' },
                        ];
                        tense = Tense.imperfect;
                        break;
                    case VerbGroup.preterite_irregular_verbs:
                        _verbs = [
                            { name: 'ser' },
                            { name: 'estar' },
                            { name: 'ter' },
                            { name: 'ir' },
                            { name: 'vir' },
                            { name: 'poder' },
                            { name: 'fazer' },
                            { name: 'saber' },
                        ];
                        tense = Tense.preterite;
                        break;
                    case VerbGroup.future_irregular_verbs:
                        _verbs = [
                            { name: 'trazer' },
                            { name: 'dizer' },
                            { name: 'fazer' },
                        ];
                        tense = Tense.future;
                        break;
                    case VerbGroup.conditional:
                        _verbs = [
                            { name: 'trazer' },
                            { name: 'dizer' },
                            { name: 'fazer' },
                        ];
                        tense = Tense.future;
                        break;
                    case VerbGroup.conditional_irregular_verbs:
                        _verbs = [
                            { name: 'trazer' },
                            { name: 'dizer' },
                            { name: 'fazer' },
                        ];
                        tense = Tense.conditional;
                        break;
                    case VerbGroup.subjunctive_irregular_verbs:
                        _verbs = [
                            { name: 'trazer' },
                            { name: 'dizer' },
                            { name: 'fazer' },
                            { name: 'ser' },
                            { name: 'estar' },
                            { name: 'haver' },
                            { name: 'saber' },
                            { name: 'querer' },
                            { name: 'ter' },
                            { name: 'pôr' },
                            { name: 'ver' },
                            { name: 'poder' },
                            { name: 'ler' },
                            { name: 'vir' },
                            { name: 'ouvir' },
                            { name: 'perder' },
                            { name: 'dar' },
                            { name: 'ir' },
                        ];
                        tense = Tense.present_subjunctive;
                        break;
                }
                break;
            case Language.es:
                switch(group) {
                    case VerbGroup.all_verbs:
                        utils.shuffleArray(verbs).forEach((v,i) => {
                            if(i < 100) {
                                _verbs.push({ name: v });
                            }
                        });
                    break;
                }
        }
        return { groupVerbs: _verbs, tense };
    }
};