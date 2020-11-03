import { Language, Tense } from '../logic/enums.js';
import { data } from './data';

export const api = {       
    async getVerbs(inf) {
        return await data.getVerbs(inf);
    },
    async getVerb(inf, language = Language.pt) {
        const verbs = await data.getVerbs(inf, language);
        return verbs ? verbs[0] : {};
    },
    async getAllConjugations(language) {
        return await data.getAllConjugations(language);
    },   
    getLikeFromVerbEnding({ inf, language, isReflexive }) {
        
        let likes = isReflexive 
        ? {
            pt: {         
                'ar-se': 'falar',
                'er-se': 'vender',
                'ir-se': 'partir',
            }
        } 
        : {
            pt: {         
                'ar': 'falar',
                'er': 'vender',
                'ir': 'partir',
            },
            es: {         
                'ar': 'hablar',
                'er': 'comer',
                'ir': 'vivir',
            },
        };

        let end = isReflexive ? 5 : 2;
        let like = likes[language][inf.substring(inf.length - end)];

        switch(language) {
            case Language.pt:        
            if(inf.substring(inf.length -3) === 'car' && inf !== 'ficar') {
                like = 'ficar';
            }
            if(inf.substring(inf.length -2) === 'or' && inf !== 'pôr') {
                like = 'pôr';
            }
            if(inf.substring(inf.length -5) === 'fazer' && inf !== 'fazer') {
                like = 'fazer';
            }
            if(inf.substring(inf.length -3) === 'çar' && inf !== 'caçar') {
                like = 'caçar';
            }
            if((inf.substring(inf.length -3) === 'cer' || inf.substring(inf.length -3) === 'cir') && inf !== 'conhecer') {
                like = 'conhecer';
            }
            if((inf.substring(inf.length -3) === 'ger' || inf.substring(inf.length -3) === 'gir') && inf !== 'proteger') {
                like = 'proteger';
            }
            if(inf.substring(inf.length -3) === 'ear' && inf !== 'passear') {
                like = 'passear';
            }
            if(inf.substring(inf.length -3) === 'gar' && inf !== 'chegar') {
                like = 'chegar';
            }
            if(inf.substring(inf.length -3) === 'uar' && inf !== 'extenuar') {
                like = 'extenuar';
            }
            if((inf.substring(inf.length -4) === 'guar' || inf.substring(inf.length -4) === 'quar') && inf !== 'averiguar') {
                like = 'averiguar';
            }
            if(inf.substring(inf.length -3) === 'uir' && inf !== 'influir') {
                like = 'influir';
            }
            if(inf.substring(inf.length -4) === 'guir' && inf !== 'seguir') {
                like = 'seguir';
            }
            if(inf.substring(inf.length -3) === 'iar' && inf !== 'odiar') {
                like = 'odiar';
            }
            if(inf.substring(inf.length -4) === 'izer' && inf !== 'dizer') {
                like = 'dizer';
            }
            if(inf.substring(inf.length -4) === 'ozer' && inf !== 'cozer') {
                like = 'cozer';
            }
            if(inf.substring(inf.length -4) === 'uzir' && inf !== 'seduzir') {
                like = 'seduzir';
            }
            if(inf.substring(inf.length -3) === 'oer' && inf !== 'moer') {
                like = 'moer';
            }
            if(inf.substring(inf.length -3) === 'air' && inf !== 'cair') {
                like = 'cair';
            }
            break;
        }

        return like;
    },
    async getLike(inf, language) {
        let verb = await this.getVerb(inf, language);
        let like = verb[language].like === undefined
                ? this.getLikeFromVerbEnding({inf, language, isReflexive: this.getIsReflexive(inf)})
                : verb[language].like;
        return like;
    },
    getReflexiveRoot(inf, language) {
        switch(language) {
            case Language.pt:
                return inf.slice(0, inf.length -5);
            case Language.en:
                return inf;
        }
    },
    getRoot(inf, language) {
        const isReflexive = (inf.indexOf('-se') > -1);
        switch(language) {
            case Language.pt:
                return isReflexive ? this.getReflexiveRoot(inf, language) : inf.slice(0, inf.length -2);
            case Language.en:
                return inf;
        }
    },
    makeReflexive({conjugations,tense,inf}) {
        inf = inf.indexOf('-se') > -1 ? inf.slice(0, inf.indexOf('-se')) : inf;
        const persons = [];
        conjugations.map((c,i) => {            
            switch(tense) {
                case Tense.present:
                case Tense.imperfect:
                case Tense.preterite:
                case Tense.pluperfect:
                    switch(i){
                        case 0: persons[0] = `${c}-me`;
                        case 1: persons[1] = `${c}-te`;
                        case 2: persons[2] = `${c}-se`;
                        case 3: persons[3] = `${c.slice(0, c.length -1)}-nos`;
                        case 4: persons[4] = `${c}-vos`;
                        case 5: persons[5] = `${c}-se`;
                    }
                    break;
                case Tense.future:
                    switch(i){
                        case 0: persons[0] = `${inf}-me-ei`;
                        case 1: persons[1] = `${inf}-te-ás`;
                        case 2: persons[2] = `${inf}-se-á`;
                        case 3: persons[3] = `${inf}-nos-emos`;
                        case 4: persons[4] = `${inf}-vos-eis`;
                        case 5: persons[5] = `${inf}-se-ão`;
                    }
                    break;
                case Tense.conditional:
                    switch(i){
                        case 0: persons[0] = `${inf}-me-ia`;
                        case 1: persons[1] = `${inf}-te-ias`;
                        case 2: persons[2] = `${inf}-se-ia`;
                        case 3: persons[3] = `${inf}-nos-íamos`;
                        case 4: persons[4] = `${inf}-vos-íeis`;
                        case 5: persons[5] = `${inf}-se-iam`;
                    }
                    break;
                    case Tense.present_subjunctive:
                    case Tense.imperfect_subjunctive:
                    case Tense.future_subjunctive:
                            switch(i){
                                case 0: persons[0] = `me ${c}`;
                                case 1: persons[1] = `te ${c}`;
                                case 2: persons[2] = `se ${c}`;
                                case 3: persons[3] = `nos ${c}`;
                                case 4: persons[4] = `vos ${c}`;
                                case 5: persons[5] = `se ${c}`;
                            }
                    break;
                    default: return c;
            } 
        });
        return persons;
    },
    getConjugationsFromLikeByTense({likeRoot, likeConjugations, root, tense, isReflexive, inf}) {
        const conjugations = likeConjugations[tense].map(p => p.replace(likeRoot, root));
        const tenseConjugations = isReflexive 
            ? this.makeReflexive({conjugations, tense, inf})
            : conjugations;
        return tenseConjugations;
    },
    getConjugationsFromLike({likeRoot, likeConjugations, root, tenses = ['present'], isReflexive = false, inf}) {
        let conjugations = {};
        tenses.filter(t => t).forEach(tense => {
            let nextTense = this.getConjugationsFromLikeByTense({likeRoot, likeConjugations, root, tense, isReflexive, inf});
            conjugations[tense] = nextTense;
        });
        return conjugations;
    },
    getTenses() {
        return data.getTenses();
    },
    getIsReflexive(inf) {
        return (inf.indexOf('-se') > -1);
    },
    mergeLikeWithVerb({inf, like, conjugations}) {
        switch(like) {
            case 'ficar':
                let merged = {};
                let mergedRoot = inf.slice(0, inf.length - 2);
                    mergedRoot = mergedRoot.replace(mergedRoot[mergedRoot.length -1], 'qu');
                Object.keys(conjugations).map(key => {                    
                    merged[key] = conjugations[key].map(person => person.replace('fiqu', mergedRoot));
                });
                return merged;
            default:
                return conjugations;
        }
    },
    mergePersons(conjugation, partial) {
        return partial.map((person, index) => {
            return person === '' ? conjugation[index] : person;
        });
    },
    mergePartials(conjugations,partials) {
        const jugations = {};
        Object.keys(conjugations).map(tense => {
            jugations[tense] = partials[tense] ? this.mergePersons(conjugations[tense], partials[tense]) : conjugations[tense];
        });
        return jugations;
    },
    async getConjugations({inf, language = Language.pt, tenses = data.getTenses().map(t => t.en), tense = 'present', isReflexive = this.getIsReflexive(inf)}) {
        let like, likeRoot, likeConjugations, root;
        let { conjugations, partials } = await data.getConjugations({inf, language, tenses, tense});
        if(conjugations) {
            return conjugations;
        } 
        else {
            like = await this.getLike(inf, language);
            likeRoot = this.getRoot(like, language);
            likeConjugations = await this.getConjugations({ inf: like, language, tenses, tense });
            root = this.getRoot(inf, language);
            conjugations = this.getConjugationsFromLike({likeRoot, likeConjugations, root, tenses, isReflexive, inf});
            conjugations = !!partials 
                ? this.mergePartials(conjugations, partials) : conjugations;
            return this.mergeLikeWithVerb({inf, like, conjugations});
        }
    },
    getSetDrills(language) {
        return data.getSetDrills(language);
    },
    getVerbGroups(group, language, verbs) {
        return data.getVerbGroups(group, language, verbs);
    }
};