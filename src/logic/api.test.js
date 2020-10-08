import { Language } from './enums.js';

import { api } from './api.js';

describe('api', () => {
    test('check translation lookups are valid', async () => {
        let verbs = await api.getVerbs();
        expect(verbs.length).toBeGreaterThan(0);
        let toBe = await verbs.find(verb => verb.en.inf === 'to be');
        expect(toBe.pt.inf).toBe('ser');
        toBe = await api.getVerbs('to be');
        expect(toBe[0].pt.inf).toBe('ser');
        toBe = await api.getVerb('to be');
        expect(toBe.pt.inf).toBe('ser');
    });
    test('check conjugation lookup is valid', async () => {
        const verb = 'ser';
        const conjugations = await api.getConjugations(verb);
        expect(conjugations.present[0]).toBe('sou');
    });
    test('check like lookup is valid', async () => {
        let like = await api.getLike('cantar', Language.PT);
        expect(like).toBe('falar');
        like = await api.getLike('ser', Language.PT);
        expect(like).toBe('ser');
        like = await api.getLike('to sing', Language.EN);
        expect(like).toBe('to speak');
    });
    test('check verb root', () => {
        let root = api.getRoot('cantar', Language.PT);
        expect(root).toBe('cant')
        root = api.getRoot('vender', Language.PT);
        expect(root).toBe('vend')
        root = api.getRoot('partir', Language.PT);
        expect(root).toBe('part')
    });
    test('check conjugations for example verb is valid', async () => {
        let conjugations = await api.getConjugations('falar');
        expect(conjugations.present[0]).toBe('falo');
        expect(conjugations.present[1]).toBe('falas');
        expect(conjugations.present[2]).toBe('fala');
        expect(conjugations.present[3]).toBe('falamos');
        expect(conjugations.present[4]).toBe('falais');
        expect(conjugations.present[5]).toBe('falam');
    });
    test('check verb follows the example of like is valid', async () => {
        let verb = 'cantar';
        let tense = 'present';
        let like = await api.getLike(verb, Language.PT);
        let likeRoot = api.getRoot(like, Language.PT);
        let likeConjugations = await api.getConjugations(like);
        let root = api.getRoot(verb, Language.PT);
        let conjugations = api.getConjugationsFromLikeByTense(likeRoot, likeConjugations, root, tense);
        expect(conjugations[tense][0]).toBe('canto');
        conjugations = api.getConjugationsFromLike(likeRoot, likeConjugations, root, [tense]);
        expect(conjugations[tense][0]).toBe('canto');
    });
    test('check one step conjugation lookup is valid', async() => {
        const verb = 'cantar';
        const conjugations = await api.getConjugations(verb, Language.PT);
        expect(conjugations.present[0]).toBe('canto'); 
        expect(conjugations.preterite[0]).toBe('cantei'); 
    });
});