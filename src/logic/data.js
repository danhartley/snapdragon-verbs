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
                name: 'Common irregular verbs',
                verbs: [ { name:'ser' }, { name:'estar' }, { name:'ter' }, { name:'fazer', }, { name:'ir' }, { name:'vir' }, { name: 'ver' }, { name: 'querer' }, { name: 'dar' }, { name: 'dizer' }, {  name: 'haver' }, { name: 'poder' } ]
            },
            {
                id: 2,
                name: 'More irregular verbs',
                verbs: [ { name:'saber' }, { name:'pôr' }, { name:'trazer' }, { name:'dormir', }, { name:'ler' }, { name:'crer' }, { name: 'ouvir' }, { name: 'pedir' }, { name: 'subir' }, { name: 'seguir' }, { name: 'progredir'} ]
            },
            {
                id: 3,
                name: 'Regular -ar, -er and -ir verbs',
                verbs: [ { name:'falar' }, { name:'partir' }, { name:'vender' } ]
            },
            {
                id: 4,
                name: 'Common reflexive verbs',
                verbs: [ { name:'lembrar-se' }, { name:'levantar-se' }, { name:'vestir-se' } ]
            },
            {
                id: 5,
                name: 'Clear all verbs',
                verbs: []
            },
        ];
    }
};