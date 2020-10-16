const clean = str => {
    let cleaned = str;
        cleaned = cleaned.trim();
        cleaned = cleaned.toLowerCase();
    return cleaned;
};

export const data = {
    getVerbs(inf) {
        const verbs1 = [
            {
                en: {
                    i: 'to be',
                    like: 'to be'
                },
                pt: {
                    i: 'ser',
                    like: 'ser'
                },
                es: {
                    i: 'ser',
                    like: 'ser'
                }
            }, 
            {
                en: {
                    i: 'to have',
                    like: 'to have'
                },
                pt: {
                    i: 'ter',
                    like: 'ter'
                },
                es: {
                    i: 'tener',
                    like: 'tener'
                }
            },
            {
                en: {
                    i: 'to speak',
                    like: 'to speak'
                },
                pt: {
                    i: 'falar',
                    like: 'falar'
                },
                es: {
                    i: 'hablar',
                    like: 'hablar'
                }
            },
            {
                en: {
                    i: 'to sing',
                    like: 'to speak'
                },
                pt: {
                    i: 'cantar'
                }
            },
            {
                en: {
                    i: 'to walk',
                    like: 'to walk'
                },
                pt: {
                    i: 'andar'
                }
            },
            {
                en: {
                    i: 'to leave'
                },
                pt: {
                    i: 'partir',
                    like: 'partir'
                }
            },
            {
                en: {
                    i: 'to sell'
                },
                pt: {
                    i: 'vender',
                    like: 'vender'
                }
            },
            {
                en: {
                    i: 'to comply'
                },
                pt: {
                    i: 'adimplir',
                }
            },
        ];
       const verbs2 = [{
		"en": {
			"i": "ENINF"
		},
		"pt": {
			"i": "abalar"
		}
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "abalizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "abanar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "abandonar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "abastecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "abater"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "abaular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "abençoar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "abolir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "abordar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "abortar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "abotoar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "abraçar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "abranger"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "abreviar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "abrigar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "abrir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "absolver"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "absorver"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "abster"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "abster-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "abstrair"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "abundar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "abusar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "acabar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "acalmar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "acamar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "acampar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "acariciar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "acatar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "aceder"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "aceitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "acelerar"
            }
        },
        {
            "en": {
                "i": "to light up"
            },
            "pt": {
                "i": "acender"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "acentuar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "acertar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "achar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "aclamar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "açoitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "acolher"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "acomodar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "acompanhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "aconselhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "acontecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "acoplar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "acordar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "acostar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "acostumar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "acreditar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "acrescentar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "acumular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "acusar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "adaptar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "adaptar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "adequar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "aderir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "adiantar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "adiantar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "adiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "adicionar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "adir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "adivinhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "administrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "admirar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "admitir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "admoestar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "adoçar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "adoecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "adorar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "adormecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "adornar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "adotar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "adquirir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "adubar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "advertir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "afastar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "afetar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "afilhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "afirmar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "afligir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "afogar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "afogar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "afrouxar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "afundar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "agachar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "agarrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "agir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "agitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "agoniar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "agradar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "agradecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "agravar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "agredir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "agregar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "agrupar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "aguardar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "aguçar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "aguentar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ajoelhar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ajudar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ajuizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ajustar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "alagar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "alargar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "alarmar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "albergar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "alcançar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "alçar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "alegar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "alegrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "alegrar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "aleitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "alertar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "aliar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "alienar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "alimentar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "alinhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "aliviar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "almejar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "almoçar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "alongar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "alterar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "altercar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "alternar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "alugar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "alvoroçar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "alvorotar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "amainar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "amanhecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "amar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "amarar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "amarrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "amassar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ameaçar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "amenizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "amoldar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ampliar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "amplificar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "amputar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "analisar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "andar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "anegar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "anelar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "anestesiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "angustiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "animar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "anoitecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "anotar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ansiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "antecipar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "anular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "anunciar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "apagar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "apaixonar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "apanhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "aparecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "apartar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "apascentar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "apaziguar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "apelar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "aperceber"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "apertar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "apetecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "apiedar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "aplaudir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "aplicar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "apoiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "apontar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "apostar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "apreciar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "apregoar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "aprender"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "apresentar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "apressar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "aprisionar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "aprofundar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "aprovar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "aproveitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "aproximar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "apurar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "aquecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "arder"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "arelar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "arguir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "argumentar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "armar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "armazenar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "arquivar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "arrancar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "arranhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "arranjar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "arrastar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "arremeter"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "arrepender-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "arriscar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "arruinar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "arrumar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "arrumar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "articular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ascender"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "asfixiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "aspergir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "aspirar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "assaltar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "assar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "assassinar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "assegurar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "assemelhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "assemelhar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "assentar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "assentir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "assimilar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "assinalar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "assinar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "assistir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "assobiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "associar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "assomar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "assombrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "assumir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "assustar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "assustar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "atacar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "atar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "atender"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "atenuar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "aterrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "aterrorizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "atingir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "atirar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ativar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "atordoar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "atormentar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "atrair"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "atravessar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "atribuir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "atropelar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "atualizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "atuar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "auferir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "aumentar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "autenticar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "automatizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "autorizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "avaliar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "avalizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "avançar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "avariar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "aventurar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "avergonhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "averiguar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "avisar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "avivar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "bailar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "baixar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "balançar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "balancear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "balbuciar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "balizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "banhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "banhar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "barbear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "barrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "basear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "bastar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "batalhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "bater"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "batizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "beber"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "beijar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "beijocar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "beliscar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "bendizer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "beneficiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "besuntar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "blasfemar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "blindar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "bloquear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "bocejar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "boiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "bombear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "borbulhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "bordar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "borrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "bosquejar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "botar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "bradar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "bramar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "branquear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "brecar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "brigar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "brilhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "brincar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "brindar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "bronzear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "brotar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "brunir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "bulhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "buscar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "caber"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "caçar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "caducar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cagar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cair"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "calar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "calar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "calcar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "calcular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "caldear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "calhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cambiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "caminhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "camuflar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "canalizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cancelar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cansar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cantar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cantarolar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "capitular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "captar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "capturar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "caracterizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cardar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "carecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "carpir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "carregar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "casar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "castigar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "castrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "catalisar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "catapultar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "categorizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cativar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "causar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cavar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ceder"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cegar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ceifar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "celebrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "censurar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "centelhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "centralizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "centrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cerrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "certificar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cerzir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cessar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "chamar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "chamar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "chegar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cheirar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "chocar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "choramingar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "chorar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "chover"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "chupar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "chuviscar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cifrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cingir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cintilar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "circular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "circuncidar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "circundar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "circunscrever"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cismar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "citar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "civilizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "clamar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "clarificar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "classificar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "claudicar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "clicar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "coabitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "coagular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "coalhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "coar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cobrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cobrir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "coçar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cochichar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "codificar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "coincidir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "colaborar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "colapsar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "colar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "colecionar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "colher"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "colocar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "colonizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "colorir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "coludir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "comandar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "combater"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "combinar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "começar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "comemorar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "comentar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "comer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "comercializar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "comerciar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cometer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "comover"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "compadecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "comparar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "comparecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "compartilhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "compensar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "competir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "compilar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "completar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "complicar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "compor"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "comportar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "comportar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "comprar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "comprazer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "compreender"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "comprimir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "comprometer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "comprovar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "comunicar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "conceber"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "conceder"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "concentrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "concernir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "concertar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "conciliar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "concluir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "concordar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "concorrer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "concretizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "condenar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "condicionar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "conduzir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "conectar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "confeccionar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "conferir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "confessar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "confiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "configurar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "confinar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "confirmar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "confiscar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "confluir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "conformar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "confortar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "confrontar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "confundir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "confundir-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "congelar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "congregar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "conhecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "conhecer-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "conjecturar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "conjeturar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "conjugar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "conquistar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "consagrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "conseguir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "consentir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "conservar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "considerar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "consistir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "consolar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "consolidar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "constar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "constatar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "consternar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "constituir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "constranger"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "construir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "consultar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "consumir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "contactar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "contagiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "contaminar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "contar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "contemplar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "contender"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "conter"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "contestar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "continuar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "contradizer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "contrair"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "contrariar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "contrastar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "contratar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "contribuir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "controlar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "convencer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "convergir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "conversar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "converter"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "convidar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "convir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "conviver"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "convocar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cooperar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "coordenar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "copiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "copular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "coroar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "correr"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "corresponder"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "corrigir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "corroborar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "corromper"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cortar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cortejar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "coser"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "costumar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "costurar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cotar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "coxear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cozer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cozinhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cravar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "crer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "crescer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "criar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "criticar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "crivar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "crucificar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cruzar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cuidar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "culminar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "culpar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cultivar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cumprimentar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cumprir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cumular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "curar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "cursar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "curtir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "curvar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "custar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "custodiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "danar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "dançar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "dar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "debater"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "debilitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "debutar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "decapitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "decepcionar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "decidir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "declarar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "declinar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "decompor"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "decorar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "decorrer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "dedicar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "dedicar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "deduzir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "defender"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "deferir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "definir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "degelar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "degolar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "degustar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "deitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "deitar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "deixar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "delegar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "deliberar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "delinear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "delinquir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "demitir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "demolir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "demonstrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "demorar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "denegar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "denegrir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "denunciar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "depender"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "deplorar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "depor"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "depositar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "depreciar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "deprimir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "depurar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "derivar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "derramar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "derrotar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "derrubar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "derruir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "desaconselhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "desanimar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "desaparecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "desbotar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "descalçar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "descansar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "descarregar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "descarrilar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "descartar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "descer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "descobrir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "descompor"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "desconectar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "desconfiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "descongelar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "descrever"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "desculpar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "desculpar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "desdobrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "desejar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "desembocar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "desempenhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "desenhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "desfazer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "desfrutar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "designar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "desistir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "desligar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "deslizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "desmaiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "desobedecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "desolar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "despachar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "despedir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "despedir-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "desperdiçar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "despertar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "despertar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "despir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "desprender"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "desprezar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "destacar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "destilar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "destinar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "destruir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "desviar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "detalhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "detectar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "deter"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "deteriorar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "determinar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "detestar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "detonar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "devastar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "dever"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "devolver"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "devorar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "diagnosticar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "diferenciar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "diferir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "dificultar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "difundir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "digerir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "digitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "dignificar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "dilatar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "diluir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "diminuir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "dirigir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "discernir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "disciplinar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "discriminar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "discutir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "disfarçar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "disparar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "dispensar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "dispersar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "dispor"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "dispor-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "disputar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "disseminar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "dissentir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "dissimular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "dissolver"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "distanciar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "distinguir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "distrair"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "distrair-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "distribuir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ditar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "divergir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "divertir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "divertir-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "dividir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "divisar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "divorciar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "divorciar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "divulgar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "dizer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "doar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "dobrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "documentar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "doer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "domesticar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "dominar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "dormir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "dramatizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "drenar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "duplicar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "durar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "duvidar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "edificar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "editar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "educar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "efetuar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ejacular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "elaborar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "eleger"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "elevar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "eliminar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "elogiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "eludir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "emagrecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "emanar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "emancipar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "emascular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "embarcar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "embeber"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "embelezar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "embrulhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "embruxar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "emendar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "emergir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "emigrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "emitir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "emocionar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "emparelhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "empatar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "empenhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "empenhar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "empreender"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "empregar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "emprestar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "empurrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "enaltecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "encaminhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "encantar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "encarar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "encarcerar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "encarregar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "encender"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "encetar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "encher"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "encolher"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "encomendar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "encontrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "encontrar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "encorajar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "encostar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "encurtar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "endoidecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "enfeitiçar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "enfermar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "enfiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "enfocar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "enforcar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "enfrentar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "enganar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "enganchar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "engolir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "engordar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "engraxar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "enjoar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "enlaçar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "enlevar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "enredar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "enriquecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "enrolar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ensaiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ensinar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "entediar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "entediar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "entender"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "enterrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "entrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "entregar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "entreter"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "entreter-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "entrever"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "entrevistar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "entristecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "entupir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "entusiasmar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "entusiasmar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "enumerar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "enunciar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "envelhecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "envenenar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "envergonhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "envergonhar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "enviar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "envolver"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "enxaguar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "enxergar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "enxugar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "equiparar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "equivaler"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "equivocar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "equivocar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "erguer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "erigir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "errar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "escalar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "escapar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "escavar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "esclarecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "escolher"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "esconder"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "esconder-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "escorregar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "escorrer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "escovar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "escrever"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "escusar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "escusar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "escutar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "esfoliar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "esfregar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "esfriar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "esfumar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "esgotar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "esmagar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "espalhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "espantar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "espavorir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "especializar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "especificar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "especular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "esperar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "espevitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "espiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "espionar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "espirrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "espreitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "espremer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "esquecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "esquecer-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "esquentar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "esquiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "esquilar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "esquivar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "estabelecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "estacionar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "estalar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "estar",
                "like": "estar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "estender"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "esterilizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "estigmatizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "estimar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "estimular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "estipular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "estirar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "estourar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "estragar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "estrangular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "estranhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "estrear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "estrelar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "estremecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "estressar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "estudar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "estufar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "esvaziar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "evacuar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "evadir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "evaporar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "evitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "evoluir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "evolver"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "exagerar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "exalar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "examinar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "exasperar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "exceder"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "exceler"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "exclamar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "excluir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "executar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "exercer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "exibir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "exigir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "eximir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "existir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "exonerar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "expandir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "expatriar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "expedir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "expelir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "experimentar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "expirar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "explicar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "explodir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "explorar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "expor"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "exportar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "expressar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "exprimir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "expulsar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "exterminar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "extinguir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "extraditar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "extrair"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fabricar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "facilitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fagocitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "falecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "falhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "falir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "falsear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "falsificar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "faltar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fanfarronar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fantasiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fartar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fascinar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fatigar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "faturar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "favorecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fazer",
                like: 'fazer'
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fechar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "feder"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "felicitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ferir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fertilizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ferver"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ficar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fichar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "figurar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "filmar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "filosofar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "filtrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "finalizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "financiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fincar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fingir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "firmar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fixar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "flectir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "flertar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "flexibilizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "flexionar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "florescer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "florir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fluir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "flutuar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "focalizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "focar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "foder"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "folhear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fomentar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "forçar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "formalizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "formar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "formular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fornear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fornecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fornicar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fortalecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fortificar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fotocopiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fotografar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fracassar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fraternizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fraturar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "frear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "frequentar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "frigir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fritar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "frustrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fugir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fumar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fumigar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "funcionar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fundar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fundir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "furar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "fusionar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "gaguejar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "galopar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "galvanizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ganhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "garantir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "gastar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "gelar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "gemer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "generalizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "gerar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "gerir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "gesticular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "girar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "glorificar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "golpear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "gostar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "governar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "gozar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "gracejar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "graduar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "granizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "gratificar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "gravar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "gritar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "grulhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "grunhir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "guardar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "guiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "guisar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "habitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "harmonizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "haver"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "herdar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "hesitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "hidratar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "hipnotizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "horrorizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "hospedar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "hospitalizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "humilhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "idealizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "idear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "identificar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ignorar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "igualar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "iludir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "iluminar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ilusionar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ilustrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "imaginar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "imaginar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "imergir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "imigrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "imiscuir-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "imitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "impedir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "impelir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "implantar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "implementar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "implicar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "impor"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "importar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "impressionar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "imprimir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "improvisar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "impugnar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "imunizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "inalar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "inaugurar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "incendiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "inchar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "incidir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "incinerar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "inclinar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "incluir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "incoar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "incomodar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "incorporar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "incorrer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "incrementar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "incriminar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "incubar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "indagar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "indicar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "indignar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "individualizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "industrializar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "induzir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "infectar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "inferir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "infetar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "infiltrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "inflamar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "inflar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "infligir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "influenciar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "informar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "informar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "infringir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "infundir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ingerir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ingressar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "inibir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "iniciar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "injetar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "inocular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "inovar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "inquirir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "inscrever"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "inscrever-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "inserir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "insinuar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "insistir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "inspecionar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "inspirar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "instalar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "instigar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "instituir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "instruir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "insultar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "integrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "intentar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "intercambiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "interceder"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "interceptar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "intercetar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "interessar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "interessar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "interferir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "internar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "interpor"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "interpretar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "interrogar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "interromper"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "intervir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "intimidar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "intoxicar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "introduzir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "intuir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "inundar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "invadir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "invalidar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "invejar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "inventar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "inverter"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "investigar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "investir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "invitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "invocar"
            }
        },
        {
            "en": {
                "i": "to go"
            },
            "pt": {
                "i": "ir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ir-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "irmanar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "irradiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "irrigar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "irritar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "irromper"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "isolar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "jantar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "jazer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "jogar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "julgar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "juntar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "jurar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "justapor"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "justificar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "lactar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ladrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "lamber"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "lambiscar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "lamentar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "lamentar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "lançar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "lanchar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "largar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "latir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "lavar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "legalizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "legar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "legislar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "legitimar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "lembrar"
            }
        },
        {
            "en": {
                "i": "to remember"
            },
            "pt": {
                "i": "lembrar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ler"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "levantar"
            }
        },
        {
            "en": {
                "i": "to stand up"
            },
            "pt": {
                "i": "levantar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "levar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "liberar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "libertar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "licenciar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "lidar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "liderar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ligar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "limitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "limpar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "linchar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "liquefazer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "liquidar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "litigar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "livrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "localizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "lograr"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "louvar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "lubrificar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "lucrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "lutar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "luzir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "machucar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "madrugar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "madurar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "maldizer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "malquerer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "maltratar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "manchar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "mandar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "manejar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "manifestar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "manipular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "manobrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "manter"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "manufacturar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "manufaturar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "maquiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "maquiar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "maravilhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "marcar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "marchar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "marear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "mastigar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "masturbar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "matar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "mediar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "medicar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "medir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "meditar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "melhorar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "memorizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "mencionar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "menosprezar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "menstruar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "mentir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "merecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "merendar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "mergulhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "meter"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "mexer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "miar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "migrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "mijar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "mimar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "minguar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "mirar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "mistificar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "misturar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "mitigar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "mobiliar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "mobilizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "modelar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "moderar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "modernizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "modificar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "modular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "moer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "molestar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "molhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "montar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "morar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "morder"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "morrer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "mostrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "motivar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "mover"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "mudar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "multar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "multiplicar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "murmurar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "mutilar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "nadar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "narrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "nascer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "naturalizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "naufragar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "navegar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "necessitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "negar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "negociar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "neutralizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "nevar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "neviscar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "nivelar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "nomear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "notar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "notificar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "numerar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "nutrir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "obedecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "obliquar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "obrigar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "observar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "obstruir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "obter"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ocorrer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ocultar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ocupar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "odiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ofender"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "oferecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "olhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "olvidar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "omitir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "operar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "opinar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "opor"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "optar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "orçar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ordenar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ordenhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "organizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "orientar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "originar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ornar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "orquestrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "oscilar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ousar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "outorgar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ouvir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ovular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "oxidar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "oxigenar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "pactuar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "padecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "pagar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "palpitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "palrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "paquerar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "parabenizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "parafrasear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "paralisar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "parar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "parecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "parir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "parodiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "participar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "partilhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "partir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "pasmar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "passar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "passear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "patinar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "pausar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "pedalar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "pedir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "pegar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "pender"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "pendurar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "peneirar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "penetrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "penhorar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "pensar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "pentear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "pentear-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "perceber"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "percutir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "perder"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "perdoar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "perfeccionar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "perfumar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "perfurar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "perguntar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "permanecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "permitir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "perpetuar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "perseguir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "perseverar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "persistir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "personalizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "persuadir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "pertencer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "pesar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "pescar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "pesquisar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "petiscar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "picar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "pintar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "piorar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "pisar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "planar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "planificar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "plantar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "poder"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "polarizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "polinizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "polir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "poluir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "pôr"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "posicionar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "pospor"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "possibilitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "possuir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "postular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "potenciar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "poupar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "pousar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "praticar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "preceder"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "precipitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "precisar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "predicar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "predominar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "preencher"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "preferir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "pregar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "prejudicar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "prejulgar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "premiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "prender"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "preocupar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "preparar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "preparar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "prescrever"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "preservar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "presidir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "pressentir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "pressionar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "prestar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "presumir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "pretender"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "prevalecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "prevenir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "prever"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "principiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "privar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "proceder"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "processar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "proclamar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "procrastinar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "procurar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "produzir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "prognosticar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "programar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "progredir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "proibir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "proliferar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "prolongar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "prometer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "promover"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "pronunciar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "propagar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "propor"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "proporcionar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "prosseguir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "protagonizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "proteger"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "protestar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "provar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "prover"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "provir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "provocar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "publicar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "publicitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "puir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "pular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "punçar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "punir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "purificar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "puxar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "qualificar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "quantificar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "quebrantar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "quebrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "queimar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "queixar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "querer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "questionar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "radiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "raiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ralar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ranger"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "raptar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "rasgar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "raspar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "reabilitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "reagir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "realizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "rebelar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "rebelar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "rebentar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "rebobinar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "rebocar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "recapitular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "recarregar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "recear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "receber"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "reciclar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "reciprocar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "recitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "reclamar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "recolher"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "recomeçar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "recomendar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "recompensar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "reconciliar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "reconhecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "reconquistar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "reconstruir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "recordar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "recorrer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "recrutar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "recuperar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "recusar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "redigir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "redistribuir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "reduzir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "refazer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "referir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "refletir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "reflexionar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "refogar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "reforçar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "reformar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "refugiar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "refundir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "regalar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "regenerar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "reger"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "registar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "registrar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "regressar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "regular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "reinar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "reiniciar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "reintegrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "rejeitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "relacionar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "relatar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "relativizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "relaxar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "relegar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "reluzir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "remar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "remunerar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "renascer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "render"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "renovar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "renunciar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "reparar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "repatriar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "repelir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "repercutir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "repetir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "replicar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "representar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "reprimir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "reprochar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "reproduzir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "requerer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "requisitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "reservar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "residir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "resistir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "resmungar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "resolver"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "respeitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "respirar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "responder"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ressaltar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "restabelecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "restar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "restaurar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "restituir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "restringir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "resultar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "resumir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "reter"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "retificar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "retirar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "retocar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "retornar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "retroceder"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "reunir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "revalidar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "revelar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "rever"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "revisar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "revogar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "rezar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ridicularizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "rir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "riscar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "rivalizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "roçar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "rociar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "rodar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "rodear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "rogar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "rolar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "romper"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "roncar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "rondar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "roubar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "rugir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ruminar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "saber"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sabotar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sacar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "saciar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sacrificar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sacudir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sair"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "salgar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "salientar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "salpicar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "saltar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "salvaguardar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "salvar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sangrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "saquear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "satirizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "satisfazer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "saturar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "saudar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "secar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "secularizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "seduzir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "segar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "segmentar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "segregar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "seguir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "segurar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "selecionar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "semear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sentar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sentir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sentir-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "separar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "separar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sepultar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sequestrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "serrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "servir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "significar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "simbolizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "simpatizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "simplificar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "simular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sincopar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sincronizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sindicar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sintetizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sintonizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "situar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "soar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sobrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sobressair"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sobreviver"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "soçobrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "socorrer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "soer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sofrer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "soletrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "solicitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "soltar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "soluçar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "solucionar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "somar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sonhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "soprar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sorrir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sortear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sossegar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "suar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "suavizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "subir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "subjugar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sublinhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "submergir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "submeter"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "subministrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "subordinar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "subscrever"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "substanciar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "substituir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "suceder"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sucumbir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sufocar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sugerir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sujar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sujeitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sumir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "superar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "supervisar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "suplicar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "supor"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "suportar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "suprimir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "suprir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "surgir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "surpreender"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "suscitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "suspeitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "suspender"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "suspirar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sussurrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "sustentar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "suster"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "tamisar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "tanger"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "tardar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "tartamudear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "tatuar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "taxar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "tecer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "teclar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "teimar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "telefonar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "telegrafar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "temer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "temperar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "tender"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "tentar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "terminar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "tesar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "testar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "tingir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "tinir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "tirar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "titular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "tocar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "tolerar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "tomar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "tombar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "torcer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "tornar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "tornar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "torrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "torturar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "tossir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "tostar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "trabalhar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "traçar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "traduzir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "tragar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "trair"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "tramar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "transcorrer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "transcrever"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "transferir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "transformar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "transigir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "transladar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "transmitir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "transpirar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "transplantar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "transportar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "tratar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "trautear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "travar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "trazer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "treinar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "tremer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "triangular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "tricotar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "trinchar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "triturar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "triunfar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "troar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "trocar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "tropeçar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "uivar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ultrapassar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ungir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "unificar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "unir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "urdir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "urgir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "urinar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "usar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "utilizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "vacilar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "vacinar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "vagir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "valer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "validar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "valorar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "valorizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "vaporizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "variar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "varrer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "vegetar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "velar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "vencer"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "vender"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "venerar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ventar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ventilar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "ver"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "veranear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "verificar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "verter"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "vestir"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "vestir-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "viajar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "vibrar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "vigiar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "vincular"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "vindicar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "violar"
            }
        },
        {
            "en": {
                "i": "to come"
            },
            "pt": {
                "i": "vir",
                like: 'vir'
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "virar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "virar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "visar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "visitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "visualizar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "viver"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "voar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "voltar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "voltear"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "volver"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "vomitar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "votar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "zangar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "zangar-se"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "zarpar"
            }
        },
        {
            "en": {
                "i": "ENINF"
            },
            "pt": {
                "i": "zombar"
            }
        }
        ];
        const verbs = [ ...verbs1, ...verbs2 ];
        const filteredVerbs = inf
                ? verbs.filter(verb => (verb.en && verb.en.i === inf) || (verb.pt && verb.pt.i === inf) || (verb.es && verb.es.i === inf))
                : verbs;
        return new Promise(resolve => resolve(filteredVerbs));
    },
    getConjugations(inf, isReflexive) {
        const conjugations = [
                {
                    i: 'ser',
                    present: [
                        'sou',
                        'és',
                        'é',
                        'somos',
                        'sois',
                        'são'
                    ],
                    preterite: [
                        'fui',
                        'foste',
                        'foi',
                        'fomos',
                        'fostes',
                        'foram'
                    ],
                    imperfect: [
                        'era',
                        'eras',
                        'era',
                        'éramos',
                        'éreis',
                        'eram'
                    ],
                    future: [
                        'serei',
                        'serás',
                        'será',
                        'seremos',
                        'sereis',
                        'serāo'
                    ],
                    conditional: [
                        'seria',
                        'serias',
                        'serias',
                        'seríamos',
                        'seríeis',
                        'seriam'
                    ],
                    pluperfect: [
                        'fora',
                        'foras',
                        'foras',
                        'fôramos',
                        'fôreis',
                        'foram'
                    ],
                },
                {
                    i: 'falar',
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
                    ],
                    imperfect: [
                        'falava',
                        'falavas',
                        'falava',
                        'falávamos',
                        'faláveis',
                        'falavam'
                    ],
                    future: [
                        'falarei',
                        'falarás',
                        'falará',
                        'falaremos',
                        'falareis',
                        'falarāo'
                    ],
                    conditional: [
                        'falaria',
                        'falarias',
                        'falaria',
                        'falaríamos',
                        'falaríeis',
                        'falariam'
                    ],
                    pluperfect: [
                        'falara',
                        'falaras',
                        'falara',
                        'faláramos',
                        'faláreis',
                        'falaram'
                    ]
                },
                {
                    i: 'ter',
                    present: [
                        'tenho',
                        'tens',
                        'tem',
                        'temos',
                        'tendes',
                        'têm'
                    ],
                    preterite: [
                        'tive',
                        'tiveste',
                        'teve',
                        'tivemos',
                        'tiveis',
                        'tiveram'
                    ],
                    imperfect: [
                        'tinha',
                        'tinhas',
                        'tinha',
                        'tínhamos',
                        'tínheis',
                        'tinham'
                    ],
                    future: [
                        'terei',
                        'terás',
                        'terá',
                        'teremos',
                        'tereis',
                        'terāo'
                    ],
                    conditional: [
                        'teria',
                        'terias',
                        'teria',
                        'teríamos',
                        'teríeis',
                        'teriam'
                    ],
                    pluperfect: [
                        'tivera',
                        'tiveras',
                        'tivera',
                        'tivéramos',
                        'tivéreis',
                        'tiveram'
                    ]
                },
                {
                    i: 'vender',
                    present: [
                        'vendo',
                        'vendes',
                        'vende',
                        'vendemos',
                        'vendeis',
                        'vendem'
                    ],
                    preterite: [
                        'vendi',
                        'vendeste',
                        'vendeu',
                        'vendemos',
                        'vendestes',
                        'venderam'   
                    ],
                    imperfect: [
                        'vendia',
                        'vendias',
                        'vendia',
                        'vendíamos',
                        'vendíeis',
                        'vendiam'
                    ],
                    future: [
                        'venderei',
                        'venderás',
                        'venderá',
                        'venderemos',
                        'vendereis',
                        'venderāo'
                    ],
                    conditional: [
                        'vernderia',
                        'venderias',
                        'venderia',
                        'venderíamos',
                        'venderíeis',
                        'venderiam'
                    ],
                    pluperfect: [
                        'vendera',
                        'venderas',
                        'vendera',
                        'vendêramos',
                        'vendêreis',
                        'venderam'
                    ]
                },
                {
                    i: 'partir',
                    present: [
                        'parto',
                        'partes',
                        'parte',
                        'partimos',
                        'partis',
                        'partem'
                    ],
                    preterite: [
                        'parti',
                        'partiste',
                        'partiu',
                        'partimos',
                        'partistes',
                        'partiram'
                    ],
                    imperfect: [
                        'partia',
                        'partias',
                        'partia',
                        'partíamos',
                        'partíeis',
                        'partiam'
                    ],
                    future: [
                        'partirei',
                        'partirás',
                        'partirá',
                        'partiremos',
                        'partireis',
                        'partirão'
                    ],
                    conditional: [
                        'partiria',
                        'partirias',
                        'partiria',
                        'partiríamos',
                        'partiríeis',
                        'partiriam'
                    ],
                    pluperfect: [
                        'partira',
                        'partiras',
                        'partira',
                        'partíramos',
                        'partíreis',
                        'partiram'
                    ]
                },
                {
                    i: 'estar',
                    present: [
                        'estou',
                        'estás',
                        'está',
                        'estamos',
                        'estais',
                        'estāo'
                    ],
                    preterite: [
                        'estive',
                        'estiveste',
                        'esteve',
                        'estivemos',
                        'estivestes',
                        'estiveram'
                    ],
                    imperfect: [
                        'estava',
                        'estavas',
                        'estava',
                        'estávamos',
                        'estáveis',
                        'estavam'
                    ],
                    future: [
                        'estarei',
                        'estarás',
                        'estará',
                        'estaremos',
                        'estareis',
                        'estarāo'
                    ],
                    conditional: [
                        'estaria',
                        'estarias',
                        'estaria',
                        'estaríamos',
                        'estaríeis',
                        'estariam'
                    ],
                    pluperfect: [
                        'eestivera',
                        'estiveras',
                        'estivera',
                        'estivéramos',
                        'estivéreis',
                        'estiveram'
                    ]
                },
                {
                i: 'fazer',
                present: [
                    'faço',
                    'fazes',
                    'faz',
                    'fazemos',
                    'fazeis',
                    'fazem'
                ],
                preterite: [
                    'fiz',
                    'fizeste',
                    'fez',
                    'fizemos',
                    'fizeis',
                    'fizeram'
                ],                
                imperfect: [
                    'fazia',
                    'fazias',
                    'fazia',
                    'fazíamos',
                    'fazíeis',
                    'faziam'
                ],
                future: [
                    'farei',
                    'farás',
                    'fará',
                    'faremos',
                    'fareis',
                    'farāo'
                ],
                conditional: [
                    'faria',
                    'farias',
                    'faria',
                    'faríamos',
                    'faríeis',
                    'faríam'
                ],
                pluperfect: [
                    'fizera',
                    'fizeras',
                    'fizera',
                    'fizéramos',
                    'fizéreis',
                    'fizeram'
                ]
                },
                {
                    i: 'ir',
                    present: [
                        'voy',
                        'vais',
                        'vai',
                        'vamos',
                        'vais',
                        'vāo'
                    ],
                    preterite: [
                        'fui',
                        'foste',
                        'foi',
                        'fomos',
                        'fostes',
                        'foram'
                    ],                    
                    imperfect: [
                        'ia',
                        'ias',
                        'ia',
                        'íamos',
                        'íeis',
                        'iam'
                    ],
                    future: [
                        'irei',
                        'irás',
                        'irá',
                        'iremos',
                        'ireis',
                        'irāo'
                    ],
                    conditional: [
                        'iria',
                        'irias',
                        'iria',
                        'iríamos',
                        'iríeis',
                        'iriam'
                    ],
                    pluperfect: [
                        'fora',
                        'foras',
                        'fora',
                        'fôramos',
                        'fôreis',
                        'foram'
                    ]
                },
                {
                    i: 'vir',
                    present: [
                        'venho',
                        'vens',
                        'vem',
                        'vimos',
                        'vindes',
                        'vêm'
                    ],
                    preterite: [
                        'vim',
                        'vieste',
                        'veio',
                        'viemos',
                        'viestes',
                        'vieram'
                    ],                    
                    imperfect: [
                        'vinha',
                        'vinhas',
                        'vinha',
                        'vínhamos',
                        'vínheis',
                        'vínham'
                    ],
                    future: [
                        'virei',
                        'virás',
                        'virá',
                        'viremos',
                        'vireis',
                        'virāo'
                    ],
                    conditional: [
                        'viria',
                        'virias',
                        'viria',
                        'viríamos',
                        'viríeis',
                        'viriam'
                    ],
                    pluperfect: [
                        'viera',
                        'vieras',
                        'viera',
                        'viéramos',
                        'viéreis',
                        'vieram'
                    ]
                }
            ];
        
        let filteredConjugations = conjugations.find(verb => clean(verb.i) === clean(inf));

        if(isReflexive && filteredConjugations) {
            let present = filteredConjugations.present.map((c,i) => {
                switch(i){
                    case 0: return `${c}-me`;
                    case 1: return `${c}-te`;
                    case 2: return `${c}-se`;
                    case 3: return `${c.slice(0, c.length -1)}-nos`;
                    case 4: return `${c}-vos`;
                    case 5: return `${c}-se`;
                }
            });
            let preterite = filteredConjugations.present.map((c,i) => {
                switch(i){
                    case 0: return `${c}-me`;
                    case 1: return `${c}-te`;
                    case 2: return `${c}-se`;
                    case 3: return `${c.slice(0, c.length -1)}-nos`;
                    case 4: return `${c}-vos`;
                    case 5: return `${c}-se`;
                }
            });
            filteredConjugations.present = present;
            filteredConjugations.preterite = preterite;
        }

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