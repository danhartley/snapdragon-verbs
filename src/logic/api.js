import { Language, Tense } from './enums.js';
import { data } from './data';

export const api = {       
    async getVerbs(inf) {
        return await data.getVerbs(inf);
    },
    async getVerb(inf) {
        const verbs = await data.getVerbs(inf);
        return verbs ? verbs[0] : {};
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
            }
        };

        let end = isReflexive ? 5 : 2;
        let like = likes[language][inf.substring(inf.length - end)];

        return like;
    },
    async getLike(inf, language) {
        let verb = await this.getVerb(inf);
        let like = verb[language].like === undefined
                ? this.getLikeFromVerbEnding({inf, language, isReflexive: this.getIsReflexive(inf)})
                : verb[language].like;
        return like;
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
    makeReflexive({conjugations,tense,inf}) {
        const persons = [];
        conjugations.map((c,i) => {            
            switch(tense) {
                case Tense.present:
                case Tense.preterite:
                case Tense.imperfect:
                case Tense.pluperfect:
                case Tense.present_subjunctive:
                case Tense.future_subjunctive:
                case Tense.imperfect_subjunctive:
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
        tenses.forEach(tense => {
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
    async getConjugations({inf, language = Language.PT, tenses = data.getTenses().map(t => t.en), tense = 'present', isReflexive = this.getIsReflexive(inf)}) {
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
            return conjugations;
        }
    },
    getSetDrills() {
        return data.getSetDrills();
    }
};