import { Option, Mode, Language, Pronoun_EN, Pronoun_PT } from './enums.js';
import { Question } from './question.js';
import { Score } from './score.js';

export class Lesson {
    constructor (
        global = {
            language: Language.EN
        },
        options = [ Option.drill, Option.translation ],
        option = Option.drill,
        verbs = [],
        tenses = ['present'],
        tense = 'present',
        pronouns = '111111',
        languages = [ Language.EN, Language.PT ],
        language = { 
            from: Language.EN,
            to: Language.PT 
        },
        modes = [ Mode.multipleChoice, Mode.textEntry ],
        mode = Mode.multipleChoice,
        randoms = [ true, false ],
        random = false
    ) {
        this.global = global;
        this.options = options,
        this.option = option,
        this.verbs = verbs;
        this.verb = null;
        this.tenses = tenses;
        this.tense = tense;
        this.pronouns = pronouns;
        this.languages = languages;
        this.language = language;
        this.modes = modes;
        this.mode = mode;
        this.randoms = randoms;
        this.random = random;
        this.drills = [];
        this.scores = [];
        this.drill = null;
    };
    updateProps = props => {
        this.options = props.options || this.options,
        this.option = props.option || this.option,
        this.verbs = props.verbs || this.verbs;
        this.pronouns = props.pronouns || this.pronouns;
        this.languages = props.languages || this.languages;
        this.language = props.language || this.language;
        this.modes = props.modes || this.modes;
        this.mode = props.mode || this.mode;
        this.randoms = props.randoms || this.randoms;
        this.random = props.random || this.random;
    };
    switchOption = () => {
        this.option = this.option === Option.drill
            ? this.option = Option.translation
            : this.option = Option.drill;
    };
    reverseLanguageDirection = () => {
        const from = this.language.from;
        const to = this.language.to;
        this.language.from = to;
        this.language.to = from;
    };
    switchMode = () => {
        this.mode = this.mode === Mode.multipleChoice
            ? Mode.textEntry
            : Mode.multipleChoice;
    };
    getNextDrill = () => {
        if(this.drills.length > 0) {
            
            let currentVerb = this.verb;

            if(currentVerb) {
                this.drills.find(d => d.verb === currentVerb).completed = true;
                this.verb = this.verbs[this.verbs.indexOf(currentVerb) + 1];
            } else {
                currentVerb = this.verbs[0];
                this.verb = currentVerb;
            }

            const uncompletedDrills = this.drills.filter(drill => !drill.completed);
            
            if(uncompletedDrills.length > 0) {           
                this.drill = uncompletedDrills.find(d => d.verb === this.verb);                
                return this.drill;                
            } else {
                this.drill = null;
                return null
            }
        } else {
            this.drill = null;
            return null;
        }
    };
    createDrill = async (api, verb) => {
        let conjugations, pronoun, drill, question;
        if(this.option === Option.drill) {
            drill = {
                verb,
                questions: [],
                completed: false
            };
            conjugations = await api.getConjugations(verb, this.language.to);
            conjugations[this.tense].forEach((conjugation, index) => {
                pronoun = Pronoun_PT[index];
                question = new Question(pronoun, pronoun, {
                    from: conjugation,
                    to: conjugation
                });
                drill.questions.push(question);
            });
            this.drills.push(drill);
        }
    };
    createDrills = async api => {
        this.drills = [];
        const getDrills = async (api, verbs, fnc) => Promise.all(verbs.map(async verb => {
            await fnc(api, verb);
        }));
        await getDrills(api, this.verbs, this.createDrill);
        return await this.drills;
    };
    addVerb = inf => {
        if(this.verbs.includes(inf)) return this.verbs;
        this.verbs.push(inf);        
        return this.verbs;
    };
    removeVerb = inf => {
        this.verbs = this.verbs.filter(verb => verb !== inf);
        return this.verbs;
    };
    addTense = tense => {
        this.tenses.push(tense);
        return this.tenses;
    };
    removeTense = tense => {
        this.tenses = this.tenses.filter(t => t !== tense);
        return this.tenses;
    };
    markLesson = qandas => {
        if(qandas && qandas.length > 0) {
            this.scores = qandas.map(qanda => {
                const score = new Score(qanda.question, qanda.answer, qanda.key);
                return { question: score.question, answer: score.answer, isCorrect: score.isCorrect(), key: score.key };
            });            
            return this.scores;
        };
    }
};