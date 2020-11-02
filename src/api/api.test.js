import { Language, Tense } from './enums.js';

import { api } from './api.js';

describe('api simple verbs', () => {
    test('check translation lookups are valid', async () => {
        let verbs = await api.getVerbs();
        expect(verbs.length).toBeGreaterThan(0);
        let toBe = await verbs.find(verb => verb.en.i === 'to be');
        expect(toBe.pt.i).toBe('estar');
        toBe = await api.getVerbs('to be');
        expect(toBe[0].pt.i).toBe('estar');
        toBe = await api.getVerb('to be');
        expect(toBe.pt.i).toBe('estar');
    });
    test('check conjugation lookup is valid', async () => {
        const verb = 'ser';
        const conjugations = await api.getConjugations({inf:verb});
        expect(conjugations.present[0]).toBe('sou');
    });
    test('check getLike lookup is valid', async () => {
        let like = await api.getLike('cantar', Language.PT);
        expect(like).toBe('falar');
        like = await api.getLike('ser', Language.PT);
        expect(like).toBe('ser');
        like = await api.getLike('beijocar', Language.PT);
        expect(like).toBe('ficar');
        like = await api.getLike('expor', Language.PT);
        expect(like).toBe('pôr');
        like = await api.getLike('liquefazer', Language.PT);
        expect(like).toBe('fazer');
        like = await api.getLike('almoçar', Language.PT);
        expect(like).toBe('caçar');
        like = await api.getLike('aparecer', Language.PT);
        expect(like).toBe('conhecer');
        like = await api.getLike('planear', Language.PT);
        expect(like).toBe('passear');
        like = await api.getLike('conjugar', Language.PT);
        expect(like).toBe('chegar');
        like = await api.getLike('ranger', Language.PT);
        expect(like).toBe('proteger');
        like = await api.getLike('reagir', Language.PT);
        expect(like).toBe('proteger');
        like = await api.getLike('enxaguar', Language.PT);
        expect(like).toBe('averiguar');
        like = await api.getLike('obliquar', Language.PT);
        expect(like).toBe('averiguar');
        like = await api.getLike('perseguir', Language.PT);
        expect(like).toBe('seguir');
        like = await api.getLike('potenciar', Language.PT);
        expect(like).toBe('odiar');
        like = await api.getLike('maldizer', Language.PT);
        expect(like).toBe('dizer');
        like = await api.getLike('soer', Language.PT);
        expect(like).toBe('moer');
        like = await api.getLike('suar', Language.PT);
        expect(like).toBe('extenuar');
        like = await api.getLike('substituir', Language.PT);
        expect(like).toBe('influir');
        like = await api.getLike('reduzir', Language.PT);
        expect(like).toBe('seduzir');
        like = await api.getLike('extrair', Language.PT);
        expect(like).toBe('cair');

        like = await api.getLike('to sing', Language.EN);
        expect(like).toBe('to speak');
    });
    test('use getLikeFromVerbEnding to work out like verb', () => {
        let like;
        like = api.getLikeFromVerbEnding({ inf: 'abalar', language: Language.PT, isReflexive: false });
        expect(like).toBe('falar');
        like = api.getLikeFromVerbEnding({ inf: 'adimplir', language: Language.PT, isReflexive: false });
        expect(like).toBe('partir');
        like = api.getLikeFromVerbEnding({ inf: 'acender', language: Language.PT, isReflexive: false });
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
        expect(root).toBe('cant');
        root = api.getRoot('vender', Language.PT);
        expect(root).toBe('vend');
        root = api.getRoot('partir', Language.PT);
        expect(root).toBe('part')
    });
    test('check conjugations for example verb is valid', async () => {
        let conjugations = await api.getConjugations({ inf: 'falar' });
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
        let likeConjugations = await api.getConjugations({ inf: like });
        let root = api.getRoot(verb, Language.PT);
        let conjugations = api.getConjugationsFromLikeByTense({likeRoot, likeConjugations, root, tense, isReflexive:false, inf: 'cantar'});
        expect(conjugations[0]).toBe('canto');
        conjugations = api.getConjugationsFromLike({likeRoot, likeConjugations, root, tense: [tense]});
        expect(conjugations[tense][0]).toBe('canto');
    });
    test('check -ar verbs, without a like, follow the pattern', async () => {
        let verb = 'abalar';
        let tense = 'present';
        let like = await api.getLike(verb, Language.PT);
        let likeRoot = api.getRoot(like, Language.PT);
        let likeConjugations = await api.getConjugations({ inf: like });
        let root = api.getRoot(verb, Language.PT);
        let conjugations = api.getConjugationsFromLikeByTense({likeRoot, likeConjugations, root, tense});
        expect(conjugations[0]).toBe('abalo');
        expect(conjugations[1]).toBe('abalas');
        expect(conjugations[2]).toBe('abala');
        expect(conjugations[3]).toBe('abalamos');
        expect(conjugations[4]).toBe('abalais');
        expect(conjugations[5]).toBe('abalam');
        conjugations = api.getConjugationsFromLike({likeRoot, likeConjugations, root, tense: [tense]});
        expect(conjugations[tense][0]).toBe('abalo');
    });   
    test('check one step conjugation lookup is valid', async() => {
        const verb = 'cantar';
        const conjugations = await api.getConjugations({ inf:verb, language: Language.PT});
        expect(conjugations.present[0]).toBe('canto'); 
        expect(conjugations.preterite[0]).toBe('cantei'); 
    });  
});

describe('api reflexive verbs', () => {
    test('should return the non-flexive root', () => {
        let root; 
        root = api.getReflexiveRoot('lembrar-se', Language.PT);
        expect(root).toBe('lembr');
        root = api.getRoot('lembrar-se', Language.PT);
        expect(root).toBe('lembr');
    });
    test('check reflexive -ar verbs, with no like, follow the pattern in present tense', async() => {
        const verb = 'levantar-se';
        const conjugations = await api.getConjugations({ inf: verb, language: Language.PT});
        expect(conjugations.present[0]).toBe('levanto-me');
        expect(conjugations.present[1]).toBe('levantas-te');
        expect(conjugations.present[2]).toBe('levanta-se');
        expect(conjugations.present[3]).toBe('levantamo-nos');
        expect(conjugations.present[4]).toBe('levantais-vos');
        expect(conjugations.present[5]).toBe('levantam-se');
    });
    test('check reflexive -er verbs, with no like, follow the pattern in present tense', async() => {
        const verb = 'arrepender-se';
        const conjugations = await api.getConjugations({ inf: verb, language: Language.PT});
        expect(conjugations.present[0]).toBe('arrependo-me');
        expect(conjugations.present[1]).toBe('arrependes-te');
        expect(conjugations.present[2]).toBe('arrepende-se');
        expect(conjugations.present[3]).toBe('arrependemo-nos');
        expect(conjugations.present[4]).toBe('arrependeis-vos');
        expect(conjugations.present[5]).toBe('arrependem-se');
    });
    test('check reflexive -ir verbs, with no like, follow the pattern in present tense', async() => {
        const verb = 'divertir-se';
        const conjugations = await api.getConjugations({ inf: verb, language: Language.PT});
        expect(conjugations.present[0]).toBe('diverto-me');
        expect(conjugations.present[1]).toBe('divertes-te');
        expect(conjugations.present[2]).toBe('diverte-se');
        expect(conjugations.present[3]).toBe('divertimo-nos');
        expect(conjugations.present[4]).toBe('divertis-vos');
        expect(conjugations.present[5]).toBe('divertem-se');
    });
});

describe('api regular verb conjugation patterns in the present', () => {
    let verb, conjugations;
    test('check -ar verbs, with no like, follow the pattern in present tense', async() => {
        verb = 'abalar';
        conjugations = await api.getConjugations({ inf: verb, language: Language.PT});
        expect(conjugations.present[0]).toBe('abalo');
        expect(conjugations.present[1]).toBe('abalas');
        expect(conjugations.present[2]).toBe('abala');
        expect(conjugations.present[3]).toBe('abalamos');
        expect(conjugations.present[4]).toBe('abalais');
        expect(conjugations.present[5]).toBe('abalam');
    });
    test('check -er verbs, with no like, follow the pattern in present tense', async() => {
        verb = 'acender';
        conjugations = await api.getConjugations({ inf: verb, language: Language.PT});
        expect(conjugations.present[0]).toBe('acendo');
        expect(conjugations.present[1]).toBe('acendes');
        expect(conjugations.present[2]).toBe('acende');
        expect(conjugations.present[3]).toBe('acendemos');
        expect(conjugations.present[4]).toBe('acendeis');
        expect(conjugations.present[5]).toBe('acendem');
    });
    test('check -ir verbs, with no like, follow the pattern in present tense', async() => {
        verb = 'adimplir';
        conjugations = await api.getConjugations({ inf: verb, language: Language.PT});
        expect(conjugations.present[0]).toBe('adimplo');
        expect(conjugations.present[1]).toBe('adimples');
        expect(conjugations.present[2]).toBe('adimple');
        expect(conjugations.present[3]).toBe('adimplimos');
        expect(conjugations.present[4]).toBe('adimplis');
        expect(conjugations.present[5]).toBe('adimplem');
    });
});

describe('api regular verb conjugation patterns in the preterite', () => {
    let verb, conjugations;
    test('check -ar verbs, with no like, follow the pattern in preterite tense', async() => {
        verb = 'abalar';
        conjugations = await api.getConjugations({ inf: verb, language: Language.PT});
        expect(conjugations.preterite[0]).toBe('abalei');
        expect(conjugations.preterite[1]).toBe('abalaste');
        expect(conjugations.preterite[2]).toBe('abalou');
        expect(conjugations.preterite[3]).toBe('abalámos');
        expect(conjugations.preterite[4]).toBe('abalastes');
        expect(conjugations.preterite[5]).toBe('abalaram');
    });
    test('check -er verbs, with no like, follow the pattern in preterite tense', async() => {
        const verb = 'acender';
        const conjugations = await api.getConjugations({ inf: verb, language: Language.PT});
        expect(conjugations.preterite[0]).toBe('acendi');
        expect(conjugations.preterite[1]).toBe('acendeste');
        expect(conjugations.preterite[2]).toBe('acendeu');
        expect(conjugations.preterite[3]).toBe('acendemos');
        expect(conjugations.preterite[4]).toBe('acendestes');
        expect(conjugations.preterite[5]).toBe('acenderam');
    });
    test('check -ir verbs, with no like, follow the pattern in preterite tense', async() => {
        verb = 'adimplir';
        conjugations = await api.getConjugations({ inf: verb, language: Language.PT});
        expect(conjugations.preterite[0]).toBe('adimpli');
        expect(conjugations.preterite[1]).toBe('adimpliste');
        expect(conjugations.preterite[2]).toBe('adimpliu');
        expect(conjugations.preterite[3]).toBe('adimplimos');
        expect(conjugations.preterite[4]).toBe('adimplistes');
        expect(conjugations.preterite[5]).toBe('adimpliram');
    });
});

describe('check conjugations for regular verbs', () => {    
    let verb, conjugations;
    test('check for levantar-se', async () => {
        verb = 'levantar-se';
        conjugations = await api.getConjugations({inf:verb, isReflexive:true, language:Language.pt, tense: Tense.present});
        expect(conjugations.present[0]).toBe('levanto-me');
        expect(conjugations.present[3]).toBe('levantamo-nos');
        conjugations = await api.getConjugations({inf:verb, isReflexive:true, language:Language.pt, tense: Tense.imperfect});
        expect(conjugations[Tense.imperfect][0]).toBe('levantava-me');
        expect(conjugations[Tense.imperfect][3]).toBe('levantávamo-nos');
        conjugations = await api.getConjugations({inf:verb, isReflexive:true, language:Language.pt, tense: Tense.preterite});
        expect(conjugations[Tense.preterite][0]).toBe('levantei-me');
        expect(conjugations[Tense.preterite][3]).toBe('levantámo-nos');
        conjugations = await api.getConjugations({inf:verb, isReflexive:true, language:Language.pt, tense: Tense.pluperfect});
        expect(conjugations[Tense.pluperfect][0]).toBe('levantara-me');
        expect(conjugations[Tense.pluperfect][3]).toBe('levantáramo-nos');
    });
});

describe('makeReflexive converts regular verb into a reflexive verb', () => {
    let verb, conjugations, reflexiveConjugations;
    test('check present, preterite, imperfect and pluperfect', () => {
        verb = 'lavar';
        conjugations = [
            'lavo',
            'lavas',
            'lava',
            'lavamos',
            'lavais',
            'lavam',
        ];
        reflexiveConjugations = api.makeReflexive({conjugations, tense: Tense.present, inf: 'lavar'});
        expect(reflexiveConjugations).toStrictEqual([
            'lavo-me',
            'lavas-te',
            'lava-se',
            'lavamo-nos',
            'lavais-vos',
            'lavam-se',
        ]);
        conjugations = [
            'lavei',
            'lavaste',
            'lavou',
            'lavámos',
            'lavastes',
            'lavaram',
        ];
        reflexiveConjugations = api.makeReflexive({conjugations, tense:Tense.preterite, inf: 'lavar'});
        expect(reflexiveConjugations).toStrictEqual([
            'lavei-me',
            'lavaste-te',
            'lavou-se',
            'lavámo-nos',
            'lavastes-vos',
            'lavaram-se',
        ]);
        conjugations = [
            'lavava',
            'lavavas',
            'lavava',
            'lavávamos',
            'laváveis',
            'lavavam',
        ];
        reflexiveConjugations = api.makeReflexive({conjugations, tense:Tense.preterite, inf: 'lavar'});
        expect(reflexiveConjugations).toStrictEqual([
            'lavava-me',
            'lavavas-te',
            'lavava-se',
            'lavávamo-nos',
            'laváveis-vos',
            'lavavam-se',
        ]);
        conjugations = [
            'lavara',
            'lavaras',
            'lavara',
            'laváramos',
            'laváreis',
            'lavaram',
        ];
        reflexiveConjugations = api.makeReflexive({conjugations, tense:Tense.preterite, inf: 'lavar'});
        expect(reflexiveConjugations).toStrictEqual([
            'lavara-me',
            'lavaras-te',
            'lavara-se',
            'laváramo-nos',
            'laváreis-vos',
            'lavaram-se',
        ]);
        reflexiveConjugations = api.makeReflexive({conjugations:[0,1,2,3,4,5], tense:Tense.future, inf:'lavar'});
        expect(reflexiveConjugations).toStrictEqual([
            'lavar-me-ei',
            'lavar-te-ás',
            'lavar-se-á',
            'lavar-nos-emos',
            'lavar-vos-eis',
            'lavar-se-ão',
        ]);
        reflexiveConjugations = api.makeReflexive({conjugations:[0,1,2,3,4,5], tense:Tense.conditional, inf:'lavar'});
        expect(reflexiveConjugations).toStrictEqual([
            'lavar-me-ia',
            'lavar-te-ias',
            'lavar-se-ia',
            'lavar-nos-íamos',
            'lavar-vos-íeis',
            'lavar-se-iam',
        ]);
    });
});

describe('use mergeLikeWithVerb to determine the new root for like verbs', () => {
    test('verbs like ficar', () => {
        let like, inf, expected;
        like = 'ficar';
        inf = 'alancar';
        expected = api.mergeLikeWithVerb({inf, like, conjugations: { 
            preterite: [ 'fiquei' ]
         }});
        expect(expected['preterite'][0]).toBe('alanquei');
    });
});