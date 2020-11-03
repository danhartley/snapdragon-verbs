import { Option, Mode, Language, Pronoun_EN, Pronoun_PT, Tense } from './enums.js';
import { Lesson } from './lesson.js';
import { Question } from './question.js';
import { Answer } from './answer.js';
import { Score } from './score.js';
import { api } from '../api/api';

describe('lesson, question, and answer constructors, methods and default settings', () => {
    let lesson = new Lesson();
    let question = new Question('', 0, { from: 'I', to: 'Eu' });
    let answer = new Answer('eu');
    let score = new Score(question, answer);
    let verbs;
    let tenses;
    test('correct answer', () => {
        expect(score.question).toEqual(score.answer);
    });
    test('wrong answer', () => {
        answer = new Answer('tu');
        score = new Score(question, answer);
        expect(score.question).not.toEqual(score.answer);
    });
    test('direction should be EN to PT', () => {
        expect(lesson.language.from).toEqual(Language.en);
        expect(lesson.language.to).toEqual(Language.pt);
    });
    test('direction should be PT to EN', () => {
        lesson.reverseLanguageDirection();
        expect(lesson.language.from).toEqual(Language.pt);
        expect(lesson.language.to).toEqual(Language.en);
    });
    test('mode should be textEntry', () => {
        expect(lesson.mode).toEqual(Mode.multipleChoice);
    });
    test('mode should be multipleChoice', () => {
        lesson.switchMode();
        expect(lesson.mode).toEqual(Mode.textEntry);
    });
    test('option should be drill', () => {
        expect(lesson.option).toEqual(Option.drill);
    });
    test('mode should be multipleChoice', () => {
        lesson.switchOption();
        expect(lesson.option).toEqual(Option.translation);
    });
    test('lesson constructor props should override defaults', () => {
        lesson = new Lesson();
        lesson.updateProps({
            verbs: ['cantar']
        })
        expect(lesson.verbs).toStrictEqual(['cantar']);
    });
    test('calling addVerb should update verbs and return new values', () => {
        verbs = lesson.addVerb('andar');
        expect(verbs).toStrictEqual(['cantar', 'andar']);
    });
    test('calling addVerb should not add verb that is already in lesson', () => {
        verbs = lesson.addVerb('cantar');
        expect(verbs).toStrictEqual(['cantar', 'andar']);
    });
    test('calling removeVerb should update verbs and return new values', () => {
        verbs = lesson.removeVerb('andar');
        expect(verbs).toStrictEqual(['cantar']);
    });
    test('calling addTense or removeTense should update tenses and return new values', () => {
        lesson = new Lesson();
        expect(lesson.tenses).toEqual([Tense.present, Tense.imperfect, Tense.preterite, Tense.pluperfect, Tense.future, Tense.conditional,  Tense.present_subjunctive, Tense.imperfect_subjunctive, Tense.future_subjunctive ]);
        lesson.removeTense(Tense.present);
        lesson.removeTense(Tense.imperfect);
        expect(lesson.tenses).toEqual([Tense.preterite, Tense.pluperfect, Tense.future, Tense.conditional,  Tense.present_subjunctive, Tense.imperfect_subjunctive, Tense.future_subjunctive ]);
        lesson.addTense(Tense.imperfect);
        expect(lesson.tenses).toEqual([Tense.preterite, Tense.pluperfect, Tense.future, Tense.conditional,  Tense.present_subjunctive, Tense.imperfect_subjunctive, Tense.future_subjunctive, Tense.imperfect ]);
    });
});

describe('lesson use case one', () => {
    let lesson, conjugations;
    let verb = 'cantar';
    let drills;
 
    test('lesson should have one verb and one tense, with all conjugations', async () => {
        conjugations = await api.getConjugations({ inf: verb, language: Language.pt});
        expect(conjugations.present).toStrictEqual([
            'canto', 'cantas', 'canta', 'cantamos', 'cantais', 'cantam'
            ]
        );
        expect(conjugations.preterite).toStrictEqual([
            'cantei', 'cantaste', 'cantou', 'cantámos', 'cantastes', 'cantaram'
            ]
        );
    });
    test('initial verbs array should be empty', () => {
        lesson = new Lesson();
        expect(lesson.verbs).toStrictEqual([]);
    });
    test('update should add verbs to lesson', () => {
        lesson = new Lesson();
        lesson.updateProps({verbs: ['cantar', 'falar']});
        expect(lesson.verbs).toStrictEqual(['cantar', 'falar']);
    });
    test('lesson drills should return empty set when no drills have been created', async () => {
        lesson = new Lesson();
        expect(lesson.drills).toStrictEqual([]);
    });
    test('calling createDrills should set of drills for all verbs', async () => {
        lesson = new Lesson();
        lesson.updateProps({            
            tenses: [Tense.present, Tense.preterite],
            tense: [Tense.present]
        });
        lesson.addVerb('cantar');
        lesson.addVerb('falar');
        drills = await lesson.createDrills(api);
        expect(drills.length).toBe(2);
        expect(drills.find(d => d.verb === 'cantar').verb).toBe('cantar');
        expect(lesson.drills.filter(d => d.completed).length).toBe(0);
    });
    test('calling getNextDrill should return null when no drills yet created', () => {
        lesson = new Lesson();
        expect(lesson.getNextDrill()).toStrictEqual(null);
    });
    test('calling getNextDrill should return first drill', async () => {
        lesson = new Lesson();
        lesson.addVerb('cantar');
        lesson.addVerb('andar');
        await lesson.createDrills(api);
        expect(lesson.drills.length).toStrictEqual(2);
        lesson.getNextDrill();
        expect(lesson.drill.verb).toStrictEqual('cantar');
        lesson.getNextDrill();
        expect(lesson.drill.verb).toStrictEqual('andar');
    });
});

describe('lessons score', () => {
    let lesson, answers, drill;
    test('expect lesson to have initial empty set of scores', () => {
        lesson = new Lesson();
        answers = [];
        lesson.markLesson(answers);
        expect(lesson.scores.length).toBe(0);
    });
    test('expect markLesson to return a score for each question', () => {
        lesson = new Lesson();
        answers = [
            {
                question: {value: {to: 'A'}},
                answer: {value: 'B'}
            },
            {
                question: {value: {to: 'C'}},
                answer: {value: 'C'}
            }
        ];
        lesson.markLesson(answers);
        expect(lesson.scores.length).toBe(2);
        expect(lesson.scores[0].isCorrect).toBe(false);
        expect(lesson.scores[1].isCorrect).toBe(true);
    });
    test('expect markLesson to remove duplicates', () => {
        lesson = new Lesson();
        answers = [
            {
                question: {value: {to: 'A'}},
                answer: {value: 'B'}
            },
            {
                question: {value: {to: 'C'}},
                answer: {value: 'C'}
            }
        ];
        lesson.markLesson(answers);
        expect(lesson.scores.length).toBe(2);
        expect(lesson.scores[0].isCorrect).toBe(false);
        expect(lesson.scores[1].isCorrect).toBe(true);
    });
    test('expect to progress from one verb drill to the next', async () => {

        lesson = new Lesson();
        lesson.addVerb('cantar');
        lesson.addVerb('ter');

        expect(lesson.verbs.length).toBe(2);

        await lesson.createDrills(api);
        lesson.getNextDrill();
        expect(lesson.verb).toBe('cantar');
        expect(lesson.drills.length).toBe(2);
        expect(lesson.drills.filter(d => d.completed).length).toBe(0);
        expect(lesson.drills.find(d => d.verb === 'cantar').questions[0].value.to).toBe('canto');
        expect(lesson.drills.find(d => d.verb === 'ter').questions[0].value.to).toBe('tenho');

        drill = lesson.getNextDrill();
        expect(lesson.drills.filter(d => d.completed).length).toBe(1);
        expect(lesson.verb).toBe('ter');
    });
});

describe('es lesson', () => {
    let lesson, drills, drill;
    test('calling createDrills should set of drills for all verbs', async () => {
        lesson = new Lesson();
        lesson.updateProps({language: { from: Language.en, to: Language.es } });
        lesson.updateProps({            
            tenses: [Tense.present],
            tense: [Tense.present]
        });
        lesson.addVerb('hablar');
        lesson.addVerb('comer');
        lesson.addVerb('vivir');
        drills = await lesson.createDrills(api);
        expect(drills.length).toBe(3);
        expect(drills.find(d => d.verb === 'hablar').verb).toBe('hablar');
        expect(lesson.drills.filter(d => d.completed).length).toBe(0);
    });
    test('createDrill should add new drill to lesosn', async () => {
        lesson = new Lesson();
        lesson.option = Option.drill;
        lesson.tense = Tense.present;
        lesson.tenses = [Tense.present];
        lesson.language = { from: Language.en, to: Language.es };
        await lesson.createDrill(api, 'hablar');
        drill = lesson.drills[0];
        expect(drill.questions.length).toBe(6);
        await lesson.createDrill(api, 'comer');
        drill = lesson.drills[1];
        expect(drill.questions.length).toBe(6);
        await lesson.createDrill(api, 'vivir');
        drill = lesson.drills[2];
        expect(drill.questions.length).toBe(6);
        expect(lesson.drills.length).toBe(3);
    });
});