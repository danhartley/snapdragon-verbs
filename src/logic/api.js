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
        
        const likes = {
            pt: {                
                'ar': 'falar',
                'ir': 'partir',
                'er': 'vender'
            }
        };

        let like; 
        
        switch(tense) {
            case 'present':
                like = likes[language][verb.substring(verb.length -2, verb.length)];
                break;
            case 'preterite':
                like = likes[language][verb.substring(verb.length -2, verb.length)];
                break;
            default:
                like = likes[language][verb.substring(verb.length -2, verb.length)];
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
    getRoot(inf, language) {
        switch(language) {
            case Language.PT:
                return inf.slice(0, inf.length -2);
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
    async getConjugations(inf, language) {        
        let tenses, like, likeRoot, likeConjugations, root, conjugations;
        conjugations = await data.getConjugations(inf);
        if(conjugations) {
            return conjugations;
        } 
        else {
            tenses = ['present', 'preterite'];
            like = await this.getLike(inf, language);
            likeRoot = this.getRoot(like, language);
            likeConjugations = await this.getConjugations(like, language);
            root = this.getRoot(inf, language);
            conjugations = this.getConjugationsFromLike(likeRoot, likeConjugations, root, tenses);
            return conjugations;
        }
    }
};