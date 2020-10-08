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
    async getLike(inf, language) {
        let verb = await this.getVerb(inf, language);
        return verb = verb 
            ? verb[language.toLowerCase()]
              ? verb[language.toLowerCase()].like 
              : inf
            : inf;
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
            likeConjugations = await this.getConjugations(like);
            root = this.getRoot(inf, language);
            conjugations = this.getConjugationsFromLike(likeRoot, likeConjugations, root, tenses);
            return conjugations;
        }
    },
};