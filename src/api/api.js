import { Language, Tense } from '../logic/enums.js';
import { data } from './data';

export const api = {    
    getIsReflexive(inf, language) {
        let isReflexive = false;
        switch(language) {
            case Language.pt:
                isReflexive = inf.indexOf('-se') > -1;
                break;
            case Language.es:
                isReflexive = inf.slice(inf.length - 2) === 'se';
                break;
        }
        return isReflexive;
    },   
    async getVerbs({inf, language}) {
        return await data.getVerbs({inf, language});
    },
    async getVerb({inf, language = Language.pt}) {
        const verbs = await data.getVerbs({inf, language});
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
            },
            es: {         
                'arse': 'falar',
                'erse': 'vender',
                'irse': 'partir',
            },
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
                'ír': 'vivir',
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
                    like = 'fazer';// check
                }
                if(inf.substring(inf.length -3) === 'çar' && inf !== 'caçar') {
                    like = 'caçar';
                }
                if((inf.substring(inf.length -3) === 'cer' || inf.substring(inf.length -3) === 'cir') && inf !== 'conhecer') {
                    like = 'conhecer';
                }
                if((inf.substring(inf.length -3) === 'gir') && inf !== 'surgir') {
                    like = 'surgir'
                }
                if((inf.substring(inf.length -3) === 'ger') && inf !== 'proteger') {
                    like = 'proteger';
                }
                if(inf.substring(inf.length -3) === 'ear' && inf !== 'passear') {
                    like = 'passear';
                }
                if(inf.substring(inf.length -3) === 'gar' && inf !== 'chegar') {
                    like = 'chegar';
                }
                // if(inf.substring(inf.length -3) === 'uar' && inf !== 'extenuar') {
                //     like = 'extenuar';
                // }
                if(inf.substring(inf.length -4) === 'guar' && inf !== 'averiguar') {
                    like = 'averiguar';
                }
                if(inf.substring(inf.length -4) === 'quar' && inf !== 'adequar') {
                    like = 'adequar';
                }
                if(inf.substring(inf.length -3) === 'uir' && inf !== 'influir') {
                    like = 'influir';
                }
                if(inf.substring(inf.length -4) === 'guir' && inf !== 'seguir') {
                    like = 'seguir';
                }
                // if(inf.substring(inf.length -3) === 'iar' && inf !== 'odiar') {
                //     like = 'odiar';
                // }
                if(inf.substring(inf.length -5) === 'dizer' && inf !== 'dizer') {
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
        let verb = await this.getVerb({ inf, language });
        let like = verb[language].like === undefined
                ? this.getLikeFromVerbEnding({inf, language, isReflexive: this.getIsReflexive(inf, language)})
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
        const isReflexive = this.getIsReflexive(inf, language);
        switch(language) {
            case Language.pt:
                return isReflexive ? this.getReflexiveRoot(inf, language) : inf.slice(0, inf.length -2);
            case Language.es:
                return isReflexive ? this.getReflexiveRoot(inf, language) : inf.slice(0, inf.length -2);
            case Language.en:
                return inf;
        }
    },
    makeReflexive({conjugations,tense,inf, language = Language.pt}) {
        inf = this.getIsReflexive(inf, language) 
            ? language === Language.pt 
                ? inf.slice(0, inf.indexOf('-se')) 
                : inf.slice(inf.length - 2) 
            : inf;
        const persons = [];
        switch(language) {
            case Language.pt:
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
                break;
        }
        return persons;
    },
    getConjugationsFromLikeByTense({likeRoot, likeConjugations, root, tense, isReflexive, inf, language}) {
        if(likeConjugations[tense] !== undefined) {
            const conjugations = likeConjugations[tense].map(p => p.replace(likeRoot, root));
            const tenseConjugations = isReflexive 
                ? this.makeReflexive({conjugations, tense, inf, language})
                : conjugations;
            return tenseConjugations;
        } else {
            return undefined;
        }
    },
    getConjugationsFromLike({likeRoot, likeConjugations, root, tenses = [Tense.present], isReflexive = false, inf, language}) {
        let conjugations = {};
        tenses.filter(t => t).forEach(tense => {
            let nextTense = this.getConjugationsFromLikeByTense({likeRoot, likeConjugations, root, tense, isReflexive, inf, language});
            if(nextTense !== undefined) {
                conjugations[tense] = nextTense;
            }
        });
        return conjugations;
    },
    getTenses(language) {
        return data.getTenses(language);
    },    
    mergeLikeWithVerb({inf, like, conjugations}) {
        let merged = {}, mergedRoot;
        switch(like) {
            case 'ficar':                
                mergedRoot = inf.slice(0, inf.length - 2);
                mergedRoot = mergedRoot.replace(mergedRoot[mergedRoot.length -1], 'qu');
                Object.keys(conjugations).map(key => {                    
                    merged[key] = conjugations[key].map(person => person.replace('fiqu', mergedRoot));
                });
                return merged;
            case 'caçar':
                mergedRoot = inf.slice(0, inf.length - 2);
                mergedRoot = mergedRoot.replace('ç', 'c');
                Object.keys(conjugations).map(key => {                    
                    merged[key] = conjugations[key].map(person => person.replace('cac', mergedRoot));
                });
                return merged;
            case 'surgir':
                mergedRoot = inf.slice(0, inf.length - 2);
                mergedRoot = mergedRoot.replace('g', 'j');
                Object.keys(conjugations).map(key => {                    
                    merged[key] = conjugations[key].map(person => person.replace('surj', mergedRoot));
                });
                return merged;
            case 'proteger':
                mergedRoot = inf.slice(0, inf.length - 2);
                mergedRoot = mergedRoot.replace('g', 'j');
                Object.keys(conjugations).map(key => {                    
                    merged[key] = conjugations[key].map(person => person.replace('protej', mergedRoot));
                });
                return merged;
            case 'averiguar':
                mergedRoot = inf.slice(0, inf.length - 4);
                Object.keys(conjugations).map(key => {                    
                    merged[key] = conjugations[key].map(person => person.replace('averi', mergedRoot));
                });
                return merged;
            case 'adequar':
                mergedRoot = inf.slice(0, inf.length - 4);
                Object.keys(conjugations).map(key => {                    
                    merged[key] = conjugations[key].map(person => person.replace('ade', mergedRoot));
                });
                return merged;
            case 'influir':
                mergedRoot = inf.slice(0, inf.length - 3);
                Object.keys(conjugations).map(key => {                    
                    merged[key] = conjugations[key].map(person => person.replace('infl', mergedRoot));
                });
                return merged;
            case 'moer':
                mergedRoot = inf.slice(0, inf.length - 3);
                Object.keys(conjugations).map(key => {                    
                    merged[key] = conjugations[key].map(person => person.replace('m', mergedRoot));
                });
                return merged;
            // case 'cair':
            //     mergedRoot = inf.slice(0, inf.length - 3);
            //     Object.keys(conjugations).map(key => {                    
            //         merged[key] = conjugations[key].map(person => person.replace('c', mergedRoot));
            //     });
            //     return merged;
            case 'seguir':
                mergedRoot = inf.replace('seguir', '');
                Object.keys(conjugations).map(key => {       
                    switch(key) {
                        case Tense.present:
                            merged[key] = conjugations[key];
                            conjugations[key].map((person, i) => {                                
                                if(i === 0) merged[key][i] = `${mergedRoot}${person}`;
                            });                            
                            break;
                        case Tense.present_subjunctive:
                            merged[key] = conjugations[key];
                            conjugations[key].map((person, i) => {                                
                                merged[key][i] = `${mergedRoot}${person}`;
                            });                            
                            break;
                        default:
                            merged[key] = conjugations[key];
                    }
                });
                return merged;
            case 'seguir':
                mergedRoot = inf.replace('seduzir', '');
                Object.keys(conjugations).map(key => {       
                    switch(key) {
                        case Tense.present:
                            merged[key] = conjugations[key];
                            conjugations[key].map((person, i) => {                                
                                if(i === 2) merged[key][i] = `${mergedRoot}${person}`;
                            });                            
                            break;
                        default:
                            merged[key] = conjugations[key];
                    }
                });
                return merged;
            case 'dizer':
                mergedRoot = inf.replace('dizer', '');
                Object.keys(conjugations).map(key => {                    
                    merged[key] = conjugations[key].map(person => {
                        return person.indexOf(mergedRoot) > -1 ? person : `${mergedRoot}${person}`;
                    });
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
    async getConjugations({inf, language = Language.pt, tenses = data.getTenses(language), tense = Tense.present, isReflexive = this.getIsReflexive(inf, language)}) {
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
            conjugations = this.getConjugationsFromLike({likeRoot, likeConjugations, root, tenses, isReflexive, inf, language});
            conjugations = !!partials 
                ? this.mergePartials(conjugations, partials) : conjugations;
            return this.mergeLikeWithVerb({inf, like, conjugations});
        }
    },
    getSetDrills(language) {
        return data.getSetDrills(language);
    },
    getVerbGroups({group, language, verbs, tense}) {
        return data.getVerbGroups({group, language, verbs, tense});
    }
};