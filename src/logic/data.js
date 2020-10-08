const clean = str => {
    let cleaned = str;
        cleaned = cleaned.trim();
        cleaned = cleaned.toLowerCase();
    return cleaned;
};

export const data = {
    getVerbs(inf) {
        const verbs = [
            {
                en: {
                    inf: 'to be',
                    like: 'to be'
                },
                pt: {
                    inf: 'ser',
                    like: 'ser'
                },
                es: {
                    inf: 'ser',
                    like: 'ser'
                }
            }, 
            {
                en: {
                    inf: 'to have',
                    like: 'to have'
                },
                pt: {
                    inf: 'ter',
                    like: 'ter'
                },
                es: {
                    inf: 'tener',
                    like: 'tener'
                }
            },
            {
                en: {
                    inf: 'to speak',
                    like: 'to speak'
                },
                pt: {
                    inf: 'falar',
                    like: 'falar'
                },
                es: {
                    inf: 'hablar',
                    like: 'hablar'
                }
            },
            {
                en: {
                    inf: 'to sing',
                    like: 'to speak'
                },
                pt: {
                    inf: 'cantar',
                    like: 'falar'
                }
            },
            {
                en: {
                    inf: 'to walk',
                    like: 'to walk'
                },
                pt: {
                    inf: 'andar',
                    like: 'falar'
                }
            },
        ];
        const filteredVerbs = inf
                ? verbs.filter(verb => (verb.en && verb.en.inf === inf) || (verb.pt && verb.pt.inf === inf) || (verb.es && verb.es.inf === inf))
                : verbs;
        return new Promise(resolve => resolve(filteredVerbs));
    },
    getConjugations(inf) {
        const conjugations = [
                {
                    inf: 'ser',
                    present: [
                        'sou',
                        'és',
                        'é',
                        'somos',
                        'sois',
                        'são'
                    ]
                },
                {
                    inf: 'falar',
                    present: [
                        'falo',
                        'falas',
                        'fala',
                        'falamos',
                        'falais',
                        'falam'
                    ],
                    preterite: [
                        'falei',
                        'falaste',
                        'falou',
                        'falámos',
                        'falastes',
                        'falaram'
                    ]
                },
            ];
        const filteredConjugations = conjugations.find(verb => clean(verb.inf) === clean(inf));
        return new Promise(resolve => resolve(filteredConjugations));
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
                en: 'pluperfect',
                pt: 'mais-que-perfeito',
                es: 'pluscuamperfecto',
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
        ];
        return tenses;
    }
};