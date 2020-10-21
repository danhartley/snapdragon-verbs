import { Language } from './enums.js';
import { data } from './data';

export const api = {       
    async getVerbs(inf) {
        return await data.getVerbs(inf);
    },
    async getVerb(inf) {
        const verbs = await data.getVerbs(inf);
        return verbs ? verbs[0] : {};
    },
    getLikeFromVerbEnding(verb, language, tense = 'present') {
        
        const isReflexive = (verb.indexOf('-se') > -1);

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
            }
        };

        let end = isReflexive ? 5 : 2;

        let like; 
        
        switch(tense) {
            case 'present':
                like = likes[language][verb.substring(verb.length - end)];
                break;
            case 'preterite':
                like = likes[language][verb.substring(verb.length - end)];
                break;
            default:
                like = likes[language][verb.substring(verb.length - end)];
                break;
        }        

        return like;
    },
    async getLike(inf, language) {
        let verb = await this.getVerb(inf);
        return verb[language].like === undefined
                ? this.getLikeFromVerbEnding(inf, language)
                : verb[language].like;
    },
    getReflexiveRoot(inf, language) {
        switch(language) {
            case Language.PT:
                return inf.slice(0, inf.length -5);
            case Language.EN:
                return inf;
        }
    },
    getRoot(inf, language) {
        const isReflexive = (inf.indexOf('-se') > -1);
        switch(language) {
            case Language.PT:
                return isReflexive ? this.getReflexiveRoot(inf, language) : inf.slice(0, inf.length -2);
            case Language.EN:
                return inf;
        }
    },
    getConjugationsFromLikeByTense(likeRoot, likeConjugations, root, tense) {
        return {
            [tense]: likeConjugations[tense].map(p => p.replace(likeRoot, root))
        }
    },
    getConjugationsFromLike(likeRoot, likeConjugations, root, tenses = ['present']) {
        let conjugations = {};
        tenses.forEach(tense => {
            conjugations = { ...conjugations , ...this.getConjugationsFromLikeByTense(likeRoot, likeConjugations, root, tense) }
        });
        return conjugations;
    },
    getTenses() {
        return data.getTenses();
    },
    async getConjugations({inf, language = Language.PT, isReflexive = false, tenses = ['present', 'preterite', 'imperfect'], tense = 'present'}) {        
        let like, likeRoot, likeConjugations, root, conjugations;
        conjugations = await data.getConjugations({inf, language, isReflexive, tenses, tense});
        if(conjugations) {
            return conjugations;
        } 
        else {
            like = await this.getLike(inf, language);
            likeRoot = this.getRoot(like, language);
            likeConjugations = await this.getConjugations({ inf: like, language, isReflexive: (inf.indexOf('-se') > -1), tenses, tense });
            root = this.getRoot(inf, language);
            conjugations = this.getConjugationsFromLike(likeRoot, likeConjugations, root, tenses);
            return conjugations;
        }
    },
    getSetDrills() {
        return data.getSetDrills();
    }
};