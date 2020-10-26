import { getVerbsList } from './data-verbs';
import { getVerbConjugations } from './data-conjugations';

const clean = str => {
    let cleaned = str;
        cleaned = cleaned.trim();
        cleaned = cleaned.toLowerCase();
    return cleaned;
};

export const data = {
    async getVerbs(inf) {
        return await getVerbsList(inf);
    },
    async getConjugations({inf}) {

        const { conjugations, partials } = await getVerbConjugations();

        let filteredConjugations = conjugations.find(verb => clean(verb.i) === clean(inf));   
        let filteredPartials = partials.find(verb => clean(verb.i) === clean(inf));   

        return new Promise(resolve => resolve({conjugations: filteredConjugations, partials:filteredPartials}));
    },
    getTenses() {
        const tenses = [
            {
                en: 'present',
                pt: 'presente',
                es: 'presente'
            }
            , {
                en: 'preterite',
                pt: 'pretérito',
                es: 'pretérito',
            }
            , {
                en: 'imperfect',
                pt: 'imperfeito',
                es: 'imperfecto',
            }
            , {
                en: 'future',
                pt: 'futuro',
                es: 'futuro',
            }
            , {
                en: 'conditional',
                pt: 'condicional',
                es: 'condicional',
            }
            , {
                en: 'pluperfect',
                pt: 'mais-que-perfeito',
                es: 'pluscuamperfecto',
            }
            , {
                en: 'present subjunctive',
                pt: 'subjuntivo, presente',
                es: 'subjuntivo, presente',
            }
            , {
                en: 'imperfect subjunctive',
                pt: 'subjuntivo, imperfeito',
                es: 'subjuntivo, imperfeito',
            }
            , {
                en: 'future subjunctive',
                pt: 'subjuntivo, futuro',
                es: 'subjuntivo, futuro',
            }
        ];
        return tenses;
    },
    getSetDrills() {
        return [
            {
                id: 1,
                name: 'Common irregular verbs, 1-12',
                verbs: [ { name:'ser' }, { name:'ter' }, { name:'estar' }, { name: 'poder' }, { name:'fazer', }, { name:'ir' }, {  name: 'haver' }, { name: 'dizer' }, { name: 'dar' }, { name: 'ver' }, { name:'saber' }, { name: 'querer' } ]
            },
            {
                id: 2,
                name: 'Common irregular verbs, 13-24',
                verbs: [ { name:'ficar' }, { name:'vir' }, { name: 'chegar' }, { name: 'começar'}, { name: 'parecer' }, { name: 'sair' }, { name: 'conseguir' }, { name: 'sentir' }, { name: 'conhecer'},  { name:'pôr' }, { name: 'ouvir' }, { name: 'perder' } ]
            },
            {
                id: 3,
                name: 'Commmon irregular verbs, 25-40 ',
                verbs: [ { name: 'pedir' }, { name: 'seguir' }, { name:'trazer' }, { name: 'cair' }, { name: 'surgir' }, { name: 'nascer' }, { name: 'produzir' }, { name:'ler' }, { name: 'servir' }, { name: 'subir' }, { name: 'fugir' }, { name: 'rir' }, { name:'dormir' }, { name: 'caber'}, { name:'crer' } ]
            },
            {
                id: 4,
                name: 'Regular -ar, -er and -ir verbs',
                verbs: [ { name:'falar' }, { name:'partir' }, { name:'vender' } ]
            },
            {
                id: 5,
                name: 'Common reflexive verbs',
                verbs: [ { name:'lembrar-se' }, { name:'levantar-se' }, { name:'vestir-se' } ]
            },
            {
                id: 6,
                name: '15 Common regular verbs',
                verbs: [ { name: 'dever' }, { name: 'passar' }, { name: 'deixar' }, { name: 'encontrar' }, { name: 'levar' }, { name: 'partir' }, { name: 'pensar'}, { name: 'apresentar' }, { name: 'olhar' }, { name: 'voltar' }, { name: 'achar' }, { name: 'existir' }, { name: 'entrar' }, { name: 'chamar' }, { name: 'considerar' } ]
            },
            {
                id: 7,
                name: 'Clear all verbs',
                verbs: []
            },
        ];
    }
};