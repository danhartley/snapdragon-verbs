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
    let drills;
 
    test('lesson should have one verb and one tense, with all conjugations', async () => {
        conjugations = await api.getConjugations({ inf: verb, language: Language.PT});
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
            tenses: ['present', 'preterite'],
            tense: ['present']
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