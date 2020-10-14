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
    test('use getLikeFromVerbEnding to work out like verb', () => {
        let like;
        like = api.getLikeFromVerbEnding('abalar', Language.PT);
        expect(like).toBe('falar');
        like = api.getLikeFromVerbEnding('adimplir', Language.PT);
        expect(like).toBe('partir');
        like = api.getLikeFromVerbEnding('acender', Language.PT);
        expect(like).toBe('vender');
    });
    test('use getLike to determine conjugations by ending, when there is no like', async () => {
        let like;
        like = await api.getLike('abalar', Language.PT);
        expect(like).toBe('falar');
        like = await api.getLike('adimplir', Language.PT);
        expect(like).toBe('partir');
        like = await api.getLike('acender', Language.PT);
        expect(like).toBe('vender');
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
    test('check -ar verbs, without a like, follow the pattern', async () => {
        let verb = 'abalar';
        let tense = 'present';
        let like = await api.getLike(verb, Language.PT);
        let likeRoot = api.getRoot(like, Language.PT);
        let likeConjugations = await api.getConjugations(like);
        let root = api.getRoot(verb, Language.PT);
        let conjugations = api.getConjugationsFromLikeByTense(likeRoot, likeConjugations, root, tense);
        expect(conjugations[tense][0]).toBe('abalo');
        expect(conjugations[tense][1]).toBe('abalas');
        expect(conjugations[tense][2]).toBe('abala');
        expect(conjugations[tense][3]).toBe('abalamos');
        expect(conjugations[tense][4]).toBe('abalais');
        expect(conjugations[tense][5]).toBe('abalam');
        conjugations = api.getConjugationsFromLike(likeRoot, likeConjugations, root, [tense]);
        expect(conjugations[tense][0]).toBe('abalo');
    });   
    test('check one step conjugation lookup is valid', async() => {
        const verb = 'cantar';
        const conjugations = await api.getConjugations(verb, Language.PT);
        expect(conjugations.present[0]).toBe('canto'); 
        expect(conjugations.preterite[0]).toBe('cantei'); 
    });  
});

describe('api regular verb conjugation patterns in the present', () => {
    test('check -ar verbs, with no like, follow the pattern in present tense', async() => {
        const verb = 'abalar';
        const conjugations = await api.getConjugations(verb, Language.PT);
        expect(conjugations.present[0]).toBe('abalo');
        expect(conjugations.present[1]).toBe('abalas');
        expect(conjugations.present[2]).toBe('abala');
        expect(conjugations.present[3]).toBe('abalamos');
        expect(conjugations.present[4]).toBe('abalais');
        expect(conjugations.present[5]).toBe('abalam');
    });
    test('check -er verbs, with no like, follow the pattern in present tense', async() => {
        const verb = 'acender';
        const conjugations = await api.getConjugations(verb, Language.PT);
        expect(conjugations.present[0]).toBe('acendo');
        expect(conjugations.present[1]).toBe('acendes');
        expect(conjugations.present[2]).toBe('acende');
        expect(conjugations.present[3]).toBe('acendemos');
        expect(conjugations.present[4]).toBe('acendeis');
        expect(conjugations.present[5]).toBe('acendem');
    });
    test('check -ir verbs, with no like, follow the pattern in present tense', async() => {
        const verb = 'adimplir';
        const conjugations = await api.getConjugations(verb, Language.PT);
        expect(conjugations.present[0]).toBe('adimplo');
        expect(conjugations.present[1]).toBe('adimples');
        expect(conjugations.present[2]).toBe('adimple');
        expect(conjugations.present[3]).toBe('adimplimos');
        expect(conjugations.present[4]).toBe('adimplis');
        expect(conjugations.present[5]).toBe('adimplem');
    });
});

describe('api regular verb conjugation patterns in the preterite', () => {
    test('check -ar verbs, with no like, follow the pattern in preterite tense', async() => {
        const verb = 'abalar';
        const conjugations = await api.getConjugations(verb, Language.PT);
        expect(conjugations.preterite[0]).toBe('abalei');
        expect(conjugations.preterite[1]).toBe('abalaste');
        expect(conjugations.preterite[2]).toBe('abalou');
        expect(conjugations.preterite[3]).toBe('abalámos');
        expect(conjugations.preterite[4]).toBe('abalastes');
        expect(conjugations.preterite[5]).toBe('abalaram');
    });
    test('check -er verbs, with no like, follow the pattern in preterite tense', async() => {
        const verb = 'acender';
        const conjugations = await api.getConjugations(verb, Language.PT);
        expect(conjugations.preterite[0]).toBe('acendi');
        expect(conjugations.preterite[1]).toBe('acendeste');
        expect(conjugations.preterite[2]).toBe('acendeu');
        expect(conjugations.preterite[3]).toBe('acendemos');
        expect(conjugations.preterite[4]).toBe('acendestes');
        expect(conjugations.preterite[5]).toBe('acenderam');
    });
    test('check -ir verbs, with no like, follow the pattern in preterite tense', async() => {
        const verb = 'adimplir';
        const conjugations = await api.getConjugations(verb, Language.PT);
        expect(conjugations.preterite[0]).toBe('adimpli');
        expect(conjugations.preterite[1]).toBe('adimpliste');
        expect(conjugations.preterite[2]).toBe('adimpliu');
        expect(conjugations.preterite[3]).toBe('adimplimos');
        expect(conjugations.preterite[4]).toBe('adimplistes');
        expect(conjugations.preterite[5]).toBe('adimpliram');
    });
});