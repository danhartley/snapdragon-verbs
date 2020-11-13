import { Language, Tense } from '../logic/enums';

import { api } from './api';

describe('api simple verbs', () => {
    test('check translation lookups are valid', async () => {
        let verbs = await api.getVerbs({language: 'en'});
        expect(verbs.length).toBeGreaterThan(0);
        let toBe = await verbs.find(verb => verb.en.i === 'to be');
        expect(toBe.pt.i).toBe('estar');
        toBe = await api.getVerbs({inf:'to be',language: Language.en});
        expect(toBe[0].pt.i).toBe('estar');
        toBe = await api.getVerb({ inf:'estar', language: Language.pt });
        expect(toBe.pt.i).toBe('estar');
    });
    test('check conjugation lookup is valid', async () => {
        const verb = 'ser';
        const conjugations = await api.getConjugations({inf:verb});
        expect(conjugations.present[0]).toBe('sou');
    });
    test('check getLike lookup is valid', async () => {
        let like = await api.getLike('cantar', Language.pt);
        expect(like).toBe('falar');
        like = await api.getLike('ser', Language.pt);
        expect(like).toBe('ser');
        like = await api.getLike('beijocar', Language.pt);
        expect(like).toBe('ficar');
        like = await api.getLike('expor', Language.pt);
        expect(like).toBe('pôr');
        like = await api.getLike('liquefazer', Language.pt);
        expect(like).toBe('fazer');
        like = await api.getLike('almoçar', Language.pt);
        expect(like).toBe('caçar');
        like = await api.getLike('aparecer', Language.pt);
        expect(like).toBe('conhecer');
        like = await api.getLike('planear', Language.pt);
        expect(like).toBe('passear');
        like = await api.getLike('conjugar', Language.pt);
        expect(like).toBe('chegar');
    });
    test('more check getLike lookup is valid', async () => {
        let like = await api.getLike('ranger', Language.pt);
        expect(like).toBe('proteger');
        like = await api.getLike('reagir', Language.pt);
        expect(like).toBe('surgir');
        like = await api.getLike('enxaguar', Language.pt);
        expect(like).toBe('averiguar');
        like = await api.getLike('obliquar', Language.pt);
        expect(like).toBe('adequar');
        like = await api.getLike('concluir', Language.pt);
        expect(like).toBe('influir');
        like = await api.getLike('perseguir', Language.pt);
        expect(like).toBe('seguir');
        like = await api.getLike('soer', Language.pt);
        expect(like).toBe('moer');
        like = await api.getLike('substituir', Language.pt);
        expect(like).toBe('influir');
        like = await api.getLike('reduzir', Language.pt);
        expect(like).toBe('seduzir');
        like = await api.getLike('extrair', Language.pt);
        expect(like).toBe('cair');
        like = await api.getLike('to sing', Language.en);
        expect(like).toBe('to speak');
        like = await api.getLike('maldizer', Language.pt);
        expect(like).toBe('dizer');
        like = await api.getLike('conduzir', Language.pt);
        expect(like).toBe('seduzir');
        like = await api.getLike('sobressair', Language.pt);
        expect(like).toBe('cair');
        like = await api.getLike('contrair', Language.pt);
        expect(like).toBe('cair');
    });
    test('use getLikeFromVerbEnding to work out like verb', () => {
        let like;
        like = api.getLikeFromVerbEnding({ inf: 'abalar', language: Language.pt, isReflexive: false });
        expect(like).toBe('falar');
        like = api.getLikeFromVerbEnding({ inf: 'adimplir', language: Language.pt, isReflexive: false });
        expect(like).toBe('partir');
        like = api.getLikeFromVerbEnding({ inf: 'acender', language: Language.pt, isReflexive: false });
        expect(like).toBe('vender');
    });
    test('use getLike to determine conjugations by ending, when there is no like', async () => {
        let like;
        like = await api.getLike('abalar', Language.pt);
        expect(like).toBe('falar');
        like = await api.getLike('adimplir', Language.pt);
        expect(like).toBe('partir');
        like = await api.getLike('acender', Language.pt);
        expect(like).toBe('vender');
    });    
    test('check verb root', () => {
        let root = api.getRoot('cantar', Language.pt);
        expect(root).toBe('cant');
        root = api.getRoot('vender', Language.pt);
        expect(root).toBe('vend');
        root = api.getRoot('partir', Language.pt);
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
        let like = await api.getLike(verb, Language.pt);
        let likeRoot = api.getRoot(like, Language.pt);
        let likeConjugations = await api.getConjugations({ inf: like });
        let root = api.getRoot(verb, Language.pt);
        let conjugations = api.getConjugationsFromLikeByTense({likeRoot, likeConjugations, root, tense, isReflexive:false, inf: 'cantar'});
        expect(conjugations[0]).toBe('canto');
        conjugations = api.getConjugationsFromLike({likeRoot, likeConjugations, root, tense: [tense]});
        expect(conjugations[tense][0]).toBe('canto');
    });
    test('check -ar verbs, without a like, follow the pattern', async () => {
        let verb = 'abalar';
        let tense = 'present';
        let like = await api.getLike(verb, Language.pt);
        let likeRoot = api.getRoot(like, Language.pt);
        let likeConjugations = await api.getConjugations({ inf: like });
        let root = api.getRoot(verb, Language.pt);
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
        const conjugations = await api.getConjugations({ inf:verb, language: Language.pt});
        expect(conjugations.present[0]).toBe('canto'); 
        expect(conjugations.preterite[0]).toBe('cantei'); 
    });  
});

describe('check merges', () => {
    let conjugations;
    test('check merge changes, pt', async () => {
        conjugations = await api.getConjugations({inf:'beijocar'});
        expect(conjugations[Tense.preterite][0]).toBe('beijoquei');
        expect(conjugations[Tense.present_subjunctive][0]).toBe('beijoque');
        let conjugations = await api.getConjugations({inf:'almoçar'});
        expect(conjugations[Tense.preterite][0]).toBe('almocei');
        expect(conjugations[Tense.present_subjunctive][0]).toBe('almoce');
        conjugations = await api.getConjugations({inf:'agir'});
        expect(conjugations[Tense.preterite][0]).toBe('agi');
        expect(conjugations[Tense.present_subjunctive][0]).toBe('aja');
        conjugations = await api.getConjugations({inf:'abranger'});
        expect(conjugations[Tense.present][0]).toBe('abranjo');
        expect(conjugations[Tense.present_subjunctive][0]).toBe('abranja');
        conjugations = await api.getConjugations({inf:'golpear'});
        expect(conjugations[Tense.present][0]).toBe('golpeio');
        expect(conjugations[Tense.present_subjunctive][0]).toBe('golpeie');
        conjugations = await api.getConjugations({inf:'apagar'});
        expect(conjugations[Tense.preterite][0]).toBe('apaguei');
        expect(conjugations[Tense.present_subjunctive][0]).toBe('apague');
        conjugations = await api.getConjugations({inf:'apaziguar'});
        expect(conjugations[Tense.preterite][0]).toBe('apazigüei');
        expect(conjugations[Tense.present_subjunctive][0]).toBe('apazigúe');
        conjugations = await api.getConjugations({inf:'adequar'});
        expect(conjugations[Tense.preterite][0]).toBe('adeqüei');
        expect(conjugations[Tense.present_subjunctive][0]).toBe('adeqúe');
        conjugations = await api.getConjugations({inf:'adequar'});
        expect(conjugations[Tense.preterite][0]).toBe('adeqüei');
        expect(conjugations[Tense.present_subjunctive][0]).toBe('adeqúe');
        conjugations = await api.getConjugations({inf:'enxaguar'});
        expect(conjugations[Tense.preterite][0]).toBe('enxagüei');
        expect(conjugations[Tense.present_subjunctive][0]).toBe('enxagúe');
        conjugations = await api.getConjugations({inf:'obliquar'});
        expect(conjugations[Tense.preterite][0]).toBe('obliqüei');
        expect(conjugations[Tense.present_subjunctive][0]).toBe('obliqúe');
        conjugations = await api.getConjugations({inf:'influir'});
        expect(conjugations[Tense.present][1]).toBe('influis');
        expect(conjugations[Tense.preterite][0]).toBe('influí');
        expect(conjugations[Tense.imperfect][0]).toBe('influía');
        expect(conjugations[Tense.pluperfect][0]).toBe('influíra');
        expect(conjugations[Tense.imperfect_subjunctive][0]).toBe('influísse');
        conjugations = await api.getConjugations({inf:'concluir'});
        expect(conjugations[Tense.present][1]).toBe('concluis');
        expect(conjugations[Tense.preterite][0]).toBe('concluí');
        expect(conjugations[Tense.imperfect][0]).toBe('concluía');
        expect(conjugations[Tense.pluperfect][0]).toBe('concluíra');
        expect(conjugations[Tense.imperfect_subjunctive][0]).toBe('concluísse');
        conjugations = await api.getConjugations({inf:'seguir'});
        expect(conjugations[Tense.present][0]).toBe('sigo');
        expect(conjugations[Tense.present_subjunctive][0]).toBe('siga');
        conjugations = await api.getConjugations({inf:'perseguir'});
        expect(conjugations[Tense.present][0]).toBe('persigo');
        expect(conjugations[Tense.present_subjunctive][0]).toBe('persiga');
    });
    test('check more merge changes, pt', async () => {
        conjugations = await api.getConjugations({inf:'dizer'});
        expect(conjugations[Tense.present][0]).toBe('digo');
        expect(conjugations[Tense.present][2]).toBe('diz');
        expect(conjugations[Tense.future][0]).toBe('direi');
        expect(conjugations[Tense.preterite][0]).toBe('disse');
        expect(conjugations[Tense.pluperfect][0]).toBe('dissera');
        expect(conjugations[Tense.present_subjunctive][0]).toBe('diga');
        conjugations = await api.getConjugations({inf:'maldizer'});
        expect(conjugations[Tense.present][0]).toBe('maldigo');
        expect(conjugations[Tense.present][2]).toBe('maldiz');
        expect(conjugations[Tense.future][0]).toBe('maldirei');
        expect(conjugations[Tense.preterite][0]).toBe('maldisse');
        expect(conjugations[Tense.pluperfect][0]).toBe('maldissera');
        expect(conjugations[Tense.present_subjunctive][0]).toBe('maldiga');
        conjugations = await api.getConjugations({inf:'seduzir'});
        expect(conjugations[Tense.present][2]).toBe('seduz');
        conjugations = await api.getConjugations({inf:'moer'});
        expect(conjugations[Tense.present][1]).toBe('móis');
        expect(conjugations[Tense.present][2]).toBe('mói');
        expect(conjugations[Tense.preterite][0]).toBe('moí');
        expect(conjugations[Tense.imperfect][0]).toBe('moía');
        conjugations = await api.getConjugations({inf:'soer'});
        expect(conjugations[Tense.present][1]).toBe('sóis');
        expect(conjugations[Tense.present][2]).toBe('sói');
        expect(conjugations[Tense.preterite][0]).toBe('soí');
        expect(conjugations[Tense.imperfect][0]).toBe('soía');
        conjugations = await api.getConjugations({inf:'cair'});
        expect(conjugations[Tense.present]).toStrictEqual(['caio', 'cais', 'cai', 'caímos', 'caís', 'caem']);
        conjugations = await api.getConjugations({inf:'contrair'});
        expect(conjugations[Tense.present]).toStrictEqual(['contraio', 'contrais', 'contrai', 'contraímos', 'contraís', 'contraem']);
    });
});

describe('api reflexive verbs', () => {
    test('should return the non-flexive root', () => {
        let root; 
        root = api.getReflexiveRoot('lembrar-se', Language.pt);
        expect(root).toBe('lembr');
        root = api.getRoot('lembrar-se', Language.pt);
        expect(root).toBe('lembr');
    });
    test('check reflexive -ar verbs, with no like, follow the pattern in present tense', async() => {
        const verb = 'levantar-se';
        const conjugations = await api.getConjugations({ inf: verb, language: Language.pt});
        expect(conjugations.present[0]).toBe('levanto-me');
        expect(conjugations.present[1]).toBe('levantas-te');
        expect(conjugations.present[2]).toBe('levanta-se');
        expect(conjugations.present[3]).toBe('levantamo-nos');
        expect(conjugations.present[4]).toBe('levantais-vos');
        expect(conjugations.present[5]).toBe('levantam-se');
    });
    test('check reflexive -er verbs, with no like, follow the pattern in present tense', async() => {
        const verb = 'arrepender-se';
        const conjugations = await api.getConjugations({ inf: verb, language: Language.pt});
        expect(conjugations.present[0]).toBe('arrependo-me');
        expect(conjugations.present[1]).toBe('arrependes-te');
        expect(conjugations.present[2]).toBe('arrepende-se');
        expect(conjugations.present[3]).toBe('arrependemo-nos');
        expect(conjugations.present[4]).toBe('arrependeis-vos');
        expect(conjugations.present[5]).toBe('arrependem-se');
    });
    test('check reflexive -ir verbs, with no like, follow the pattern in present tense', async() => {
        const verb = 'divertir-se';
        const conjugations = await api.getConjugations({ inf: verb, language: Language.pt});
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
        conjugations = await api.getConjugations({ inf: verb, language: Language.pt});
        expect(conjugations.present[0]).toBe('abalo');
        expect(conjugations.present[1]).toBe('abalas');
        expect(conjugations.present[2]).toBe('abala');
        expect(conjugations.present[3]).toBe('abalamos');
        expect(conjugations.present[4]).toBe('abalais');
        expect(conjugations.present[5]).toBe('abalam');
    });
    test('check -er verbs, with no like, follow the pattern in present tense', async() => {
        verb = 'acender';
        conjugations = await api.getConjugations({ inf: verb, language: Language.pt});
        expect(conjugations.present[0]).toBe('acendo');
        expect(conjugations.present[1]).toBe('acendes');
        expect(conjugations.present[2]).toBe('acende');
        expect(conjugations.present[3]).toBe('acendemos');
        expect(conjugations.present[4]).toBe('acendeis');
        expect(conjugations.present[5]).toBe('acendem');
    });
    test('check -ir verbs, with no like, follow the pattern in present tense', async() => {
        verb = 'adimplir';
        conjugations = await api.getConjugations({ inf: verb, language: Language.pt});
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
        conjugations = await api.getConjugations({ inf: verb, language: Language.pt});
        expect(conjugations.preterite[0]).toBe('abalei');
        expect(conjugations.preterite[1]).toBe('abalaste');
        expect(conjugations.preterite[2]).toBe('abalou');
        expect(conjugations.preterite[3]).toBe('abalámos');
        expect(conjugations.preterite[4]).toBe('abalastes');
        expect(conjugations.preterite[5]).toBe('abalaram');
    });
    test('check -er verbs, with no like, follow the pattern in preterite tense', async() => {
        const verb = 'acender';
        const conjugations = await api.getConjugations({ inf: verb, language: Language.pt});
        expect(conjugations.preterite[0]).toBe('acendi');
        expect(conjugations.preterite[1]).toBe('acendeste');
        expect(conjugations.preterite[2]).toBe('acendeu');
        expect(conjugations.preterite[3]).toBe('acendemos');
        expect(conjugations.preterite[4]).toBe('acendestes');
        expect(conjugations.preterite[5]).toBe('acenderam');
    });
    test('check -ir verbs, with no like, follow the pattern in preterite tense', async() => {
        verb = 'adimplir';
        conjugations = await api.getConjugations({ inf: verb, language: Language.pt});
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

describe('tests for es', () => {
    let verb = 'hablar', conjugations;
    test('check getLike lookup is valid', async () => {
        let like = await api.getLike('hablar', Language.es);
        expect(like).toBe('hablar');
    }); 
    test('check one step conjugation lookup is valid', async() => {        
        const conjugations = await api.getConjugations({ inf:verb, language: Language.es});
        expect(conjugations.present[0]).toBe('hablo');
    });
    test('check -ar verbs, with no like, follow the pattern in present tense', async() => {
        verb = 'tomar';
        conjugations = await api.getConjugations({ inf: verb, language: Language.es});
        expect(conjugations.present[0]).toBe('tomo');
        expect(conjugations.present[1]).toBe('tomas');
        expect(conjugations.present[2]).toBe('toma');
        expect(conjugations.present[3]).toBe('tomamos');
        expect(conjugations.present[4]).toBe('tomáis');
        expect(conjugations.present[5]).toBe('toman');
        verb = 'aprender';
        conjugations = await api.getConjugations({ inf: verb, language: Language.es});
        expect(conjugations.present[0]).toBe('aprendo');
        expect(conjugations.present[1]).toBe('aprendes');
        expect(conjugations.present[2]).toBe('aprende');
        expect(conjugations.present[3]).toBe('aprendemos');
        expect(conjugations.present[4]).toBe('aprendéis');
        expect(conjugations.present[5]).toBe('aprenden');
        verb = 'aplaudir';
        conjugations = await api.getConjugations({ inf: verb, language: Language.es});
        expect(conjugations.present[0]).toBe('aplaudo');
        expect(conjugations.present[1]).toBe('aplaudes');
        expect(conjugations.present[2]).toBe('aplaude');
        expect(conjugations.present[3]).toBe('aplaudimos');
        expect(conjugations.present[4]).toBe('aplaudís');
        expect(conjugations.present[5]).toBe('aplauden');
    });
});