import { Option, Mode, Language, Pronoun_EN, Pronoun_PT } from './enums.js';
import { Lesson } from './lesson.js';
import { Question } from './question.js';
import { Answer } from './answer.js';
import { Score } from './score.js';
import { api } from './api.js';

describe('lesson, question, and answer constructors, methods and default settings', () => {
    let lesson = new Lesson();
    let question = new Question('', 0, { from: 'I', to: 'Eu' });
    let answer = new Answer('eu');
    let score = new Score(lesson, question, answer);
    let verbs;
    let tenses;
    test('correct answer', () => {
        expect(score.question).toEqual(score.answer);
    });
    test('wrong answer', () => {
        answer = new Answer('tu');
        score = new Score(lesson, question, answer);
        expect(score.question).not.toEqual(score.answer);
    });
    test('direction should be EN to PT', () => {
        expect(lesson.language.from).toEqual(Language.EN);
        expect(lesson.language.to).toEqual(Language.PT);
    });
    test('direction should be PT to EN', () => {
        lesson.reverseLanguageDirection();
        expect(lesson.language.from).toEqual(Language.PT);
        expect(lesson.language.to).toEqual(Language.EN);
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
            verbs: {
                up: ['cantar'],
                down: []
            }
        })
        expect(lesson.verbs.up).toStrictEqual(['cantar']);
    });
    test('calling addVerb should update verbs and return new values', () => {
        verbs = lesson.addVerb('andar');
        expect(verbs).toStrictEqual({
            up: ['cantar', 'andar'],
            down: []
        })
    });
    test('calling addVerb should not add verb that is already in lesson', () => {
        verbs = lesson.addVerb('cantar');
        expect(verbs).toStrictEqual({
            up: ['cantar', 'andar'],
            down: []
        })
    });
    test('calling removeVerb should update verbs and return new values', () => {
        verbs = lesson.removeVerb('andar');
        expect(verbs).toStrictEqual({
            up: ['cantar'],
            down: []
        })
    });
    test('calling addTense should update tenses and return new values', () => {
        tenses = lesson.addTense('imperfect');
        expect(tenses).toStrictEqual(['present','imperfect']);
    });
    test('calling removeTense should update tenses and return new values', () => {
        tenses = lesson.removeTense('imperfect');
        expect(tenses).toStrictEqual(['present']);
    });
});

describe('lesson use case one', () => {
    let lesson, conjugations;
    let verb = 'cantar';
    let questions;
 
    test('lesson should have one verb and one tense, with all conjugations', async () => {
        conjugations = await api.getConjugations(verb, Language.PT);
        expect(conjugations.present).toStrictEqual([
            'canto', 'cantas', 'canta', 'cantamos', 'cantais', 'cantam'
            ]
        );
        expect(conjugations.preterite).toStrictEqual([
            'cantei', 'cantaste', 'cantou', 'cantámos', 'cantastes', 'cantaram'
            ]
        );
    });
    test('update should add verbs to lesson', () => {
        lesson = new Lesson();
        lesson.updateProps({verbs: {
            up: ['cantar', 'falar'],
            down: []
        }});
        expect(lesson.verbs).toStrictEqual({
            up: ['cantar', 'falar'],
            down: []
        });
    });
    test('calling getNextVerb should move existing verb to down array', async () => {
        lesson.getNextVerb();
        expect(lesson.verbs).toStrictEqual({
            up: ['falar'],
            down: ['cantar']
        });
        conjugations = await api.getConjugations(lesson.verbs.up[0], Language.PT);
        expect(conjugations.present).toStrictEqual([
            'falo', 'falas', 'fala', 'falamos', 'falais', 'falam'
            ]
        );
        lesson.getNextVerb();
        expect(lesson.verbs).toStrictEqual({
            up: [],
            down: ['cantar', 'falar']
        });
        lesson.getNextVerb();
        expect(lesson.verbs).toStrictEqual({
            up: [],
            down: ['cantar', 'falar']
        });
    });
    test('calling getNextVerb should create set of questions', async () => {
        lesson.updateProps({
            verbs: {
                up: ['cantar', 'falar'],
                down: []
            },
            tenses: ['present', 'preterite'],
            tense: ['present']
        });
        questions = await lesson.createQuestions(api);
        expect(questions.length).toBe(6);
        expect(questions[0].label).toBe('eu');
        expect(questions[0].pronoun).toBe('eu');
        expect(questions[0].value.to).toBe('canto');
        // console.log(lesson);
    });
});