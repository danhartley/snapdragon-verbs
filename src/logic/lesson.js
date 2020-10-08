import { Option, Mode, Language, Pronoun_EN, Pronoun_PT } from './enums.js';
import { Question } from './question.js';

export class Lesson {
    constructor (
        global = {
            language: Language.EN
        },
        options = [ Option.drill, Option.translation ],
        option = Option.drill,
        verbs = {
            up: [ 'to be' ],
            down: []
        },
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
        this.tenses = tenses;
        this.tense = tense;
        this.pronouns = pronouns;
        this.languages = languages;
        this.language = language;
        this.modes = modes;
        this.mode = mode;
        this.randoms = randoms;
        this.random = random;
        this.questions = [];
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
    getNextVerb = () => {
        if(this.verbs.up.length > 0) {
            const lastVerb = this.verbs.up.shift();
            this.verbs.down.push(lastVerb);
        }
    };
    createQuestions = async api => {
        let verb, conjugations, pronoun, question;
        if(this.option === Option.drill) {
            verb = this.verbs.up[0];
            conjugations = await api.getConjugations(this.verbs.up[0], this.language.to);
            conjugations[this.tense].forEach((conjugation, index) => {
                pronoun = Pronoun_PT[index];
                question = new Question(pronoun, pronoun, {
                    from: conjugation,
                    to: conjugation
                });
                this.questions.push(question);
            });
            return this.questions;
        }
    };
    addVerb = inf => {
        this.verbs.up.push(inf);
        return this.verbs;
    };
    removeVerb = inf => {
        this.verbs.up = this.verbs.up.filter(verb => verb !== inf);
        return this.verbs;
    };
    addTense = tense => {
        this.tenses.push(tense);
        return this.tenses;
    };
    removeTense = tense => {
        this.tenses = this.tenses.filter(t => t !== tense);
        return this.tenses;
    }
};