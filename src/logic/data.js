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
            {
                en: {
                    inf: 'to leave'
                },
                pt: {
                    inf: 'partir',
                    like: 'partir'
                }
            },
            {
                en: {
                    inf: 'to sell'
                },
                pt: {
                    inf: 'vender',
                    like: 'vender'
                }
            },
            {
                en: {
                    inf: 'to comply'
                },
                pt: {
                    inf: 'adimplir',
                }
            },
        ];
        const verbs2 = [
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'abalar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'abalizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'abanar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'abandonar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'abastecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'abater'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'abaular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'abençoar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'abolir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'abordar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'abortar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'abotoar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'abraçar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'abranger'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'abreviar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'abrigar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'abrir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'absolver'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'absorver'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'abster'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'abster-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'abstrair'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'abundar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'abusar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'acabar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'acalmar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'acamar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'acampar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'acariciar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'acatar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'aceder'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'aceitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'acelerar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'to light up'
              },
              pt: {
                inf: 'acender'
              },
              es: {
                inf: 'encender'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'acentuar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'acertar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'achar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'aclamar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'açoitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'acolher'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'acomodar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'acompanhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'aconselhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'acontecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'acoplar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'acordar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'acostar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'acostumar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'acreditar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'acrescentar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'acumular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'acusar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'adaptar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'adaptar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'adequar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'aderir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'adiantar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'adiantar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'adiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'adicionar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'adir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'adivinhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'administrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'admirar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'admitir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'admoestar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'adoçar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'adoecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'adorar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'adormecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'adornar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'adotar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'adquirir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'adubar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'advertir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'afastar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'afetar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'afilhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'afirmar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'afligir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'afogar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'afogar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'afrouxar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'afundar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'agachar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'agarrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'agir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'agitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'agoniar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'agradar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'agradecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'agravar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'agredir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'agregar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'agrupar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'aguardar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'aguçar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'aguentar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ajoelhar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ajudar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ajuizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ajustar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'alagar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'alargar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'alarmar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'albergar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'alcançar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'alçar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'alegar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'alegrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'alegrar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'aleitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'alertar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'aliar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'alienar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'alimentar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'alinhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'aliviar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'almejar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'almoçar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'alongar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'alterar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'altercar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'alternar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'alugar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'alvoroçar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'alvorotar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'amainar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'amanhecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'amar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'amarar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'amarrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'amassar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ameaçar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'amenizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'amoldar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ampliar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'amplificar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'amputar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'analisar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'andar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'anegar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'anelar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'anestesiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'angustiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'animar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'anoitecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'anotar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ansiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'antecipar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'anular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'anunciar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'apagar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'apaixonar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'apanhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'aparecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'apartar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'apascentar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'apaziguar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'apelar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'aperceber'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'apertar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'apetecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'apiedar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'aplaudir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'aplicar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'apoiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'apontar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'apostar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'apreciar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'apregoar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'aprender'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'apresentar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'apressar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'aprisionar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'aprofundar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'aprovar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'aproveitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'aproximar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'apurar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'aquecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'arder'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'arelar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'arguir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'argumentar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'armar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'armazenar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'arquivar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'arrancar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'arranhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'arranjar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'arrastar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'arremeter'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'arrepender-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'arriscar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'arruinar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'arrumar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'arrumar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'articular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ascender'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'asfixiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'aspergir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'aspirar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'assaltar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'assar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'assassinar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'assegurar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'assemelhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'assemelhar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'assentar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'assentir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'assimilar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'assinalar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'assinar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'assistir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'assobiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'associar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'assomar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'assombrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'assumir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'assustar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'assustar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'atacar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'atar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'atender'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'atenuar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'aterrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'aterrorizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'atingir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'atirar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ativar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'atordoar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'atormentar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'atrair'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'atravessar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'atribuir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'atropelar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'atualizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'atuar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'auferir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'aumentar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'autenticar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'automatizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'autorizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'avaliar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'avalizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'avançar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'avariar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'aventurar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'avergonhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'averiguar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'avisar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'avivar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'bailar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'baixar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'balançar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'balancear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'balbuciar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'balizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'banhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'banhar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'barbear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'barrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'basear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'bastar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'batalhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'bater'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'batizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'beber'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'beijar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'beijocar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'beliscar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'bendizer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'beneficiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'besuntar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'blasfemar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'blindar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'bloquear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'bocejar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'boiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'bombear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'borbulhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'bordar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'borrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'bosquejar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'botar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'bradar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'bramar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'branquear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'brecar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'brigar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'brilhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'brincar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'brindar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'bronzear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'brotar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'brunir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'bulhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'buscar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'caber'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'caçar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'caducar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cagar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cair'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'calar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'calar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'calcar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'calcular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'caldear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'calhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cambiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'caminhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'camuflar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'canalizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cancelar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cansar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cantar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cantarolar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'capitular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'captar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'capturar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'caracterizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cardar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'carecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'carpir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'carregar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'casar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'castigar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'castrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'catalisar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'catapultar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'categorizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cativar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'causar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cavar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ceder'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cegar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ceifar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'celebrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'censurar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'centelhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'centralizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'centrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cerrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'certificar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cerzir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cessar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'chamar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'chamar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'chegar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cheirar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'chocar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'choramingar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'chorar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'chover'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'chupar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'chuviscar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cifrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cingir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cintilar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'circular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'circuncidar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'circundar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'circunscrever'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cismar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'citar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'civilizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'clamar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'clarificar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'classificar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'claudicar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'clicar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'coabitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'coagular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'coalhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'coar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cobrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cobrir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'coçar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cochichar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'codificar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'coincidir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'colaborar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'colapsar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'colar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'colecionar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'colher'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'colocar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'colonizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'colorir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'coludir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'comandar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'combater'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'combinar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'começar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'comemorar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'comentar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'comer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'comercializar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'comerciar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cometer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'comover'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'compadecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'comparar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'comparecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'compartilhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'compensar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'competir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'compilar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'completar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'complicar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'compor'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'comportar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'comportar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'comprar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'comprazer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'compreender'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'comprimir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'comprometer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'comprovar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'comunicar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'conceber'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'conceder'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'concentrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'concernir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'concertar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'conciliar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'concluir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'concordar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'concorrer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'concretizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'condenar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'condicionar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'conduzir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'conectar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'confeccionar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'conferir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'confessar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'confiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'configurar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'confinar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'confirmar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'confiscar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'confluir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'conformar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'confortar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'confrontar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'confundir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'confundir-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'congelar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'congregar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'conhecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'conhecer-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'conjecturar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'conjeturar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'conjugar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'conquistar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'consagrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'conseguir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'consentir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'conservar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'considerar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'consistir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'consolar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'consolidar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'constar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'constatar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'consternar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'constituir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'constranger'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'construir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'consultar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'consumir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'contactar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'contagiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'contaminar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'contar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'contemplar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'contender'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'conter'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'contestar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'continuar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'contradizer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'contrair'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'contrariar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'contrastar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'contratar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'contribuir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'controlar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'convencer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'convergir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'conversar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'converter'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'convidar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'convir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'conviver'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'convocar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cooperar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'coordenar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'copiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'copular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'coroar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'correr'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'corresponder'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'corrigir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'corroborar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'corromper'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cortar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cortejar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'coser'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'costumar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'costurar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cotar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'coxear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cozer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cozinhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cravar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'crer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'crescer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'criar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'criticar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'crivar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'crucificar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cruzar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cuidar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'culminar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'culpar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cultivar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cumprimentar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cumprir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cumular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'curar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'cursar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'curtir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'curvar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'custar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'custodiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'danar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'dançar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'dar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'debater'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'debilitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'debutar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'decapitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'decepcionar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'decidir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'declarar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'declinar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'decompor'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'decorar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'decorrer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'dedicar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'dedicar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'deduzir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'defender'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'deferir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'definir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'degelar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'degolar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'degustar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'deitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'deitar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'deixar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'delegar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'deliberar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'delinear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'delinquir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'demitir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'demolir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'demonstrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'demorar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'denegar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'denegrir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'denunciar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'depender'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'deplorar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'depor'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'depositar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'depreciar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'deprimir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'depurar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'derivar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'derramar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'derrotar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'derrubar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'derruir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'desaconselhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'desanimar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'desaparecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'desbotar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'descalçar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'descansar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'descarregar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'descarrilar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'descartar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'descer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'descobrir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'descompor'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'desconectar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'desconfiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'descongelar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'descrever'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'desculpar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'desculpar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'desdobrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'desejar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'desembocar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'desempenhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'desenhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'desfazer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'desfrutar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'designar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'desistir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'desligar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'deslizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'desmaiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'desobedecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'desolar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'despachar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'despedir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'despedir-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'desperdiçar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'despertar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'despertar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'despir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'desprender'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'desprezar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'destacar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'destilar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'destinar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'destruir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'desviar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'detalhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'detectar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'deter'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'deteriorar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'determinar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'detestar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'detonar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'devastar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'dever'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'devolver'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'devorar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'diagnosticar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'diferenciar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'diferir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'dificultar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'difundir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'digerir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'digitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'dignificar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'dilatar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'diluir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'diminuir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'dirigir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'discernir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'disciplinar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'discriminar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'discutir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'disfarçar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'disparar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'dispensar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'dispersar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'dispor'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'dispor-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'disputar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'disseminar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'dissentir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'dissimular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'dissolver'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'distanciar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'distinguir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'distrair'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'distrair-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'distribuir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ditar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'divergir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'divertir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'divertir-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'dividir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'divisar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'divorciar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'divorciar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'divulgar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'dizer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'doar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'dobrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'documentar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'doer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'domesticar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'dominar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'dormir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'dramatizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'drenar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'duplicar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'durar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'duvidar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'edificar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'editar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'educar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'efetuar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ejacular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'elaborar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'eleger'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'elevar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'eliminar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'elogiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'eludir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'emagrecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'emanar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'emancipar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'emascular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'embarcar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'embeber'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'embelezar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'embrulhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'embruxar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'emendar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'emergir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'emigrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'emitir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'emocionar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'emparelhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'empatar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'empenhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'empenhar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'empreender'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'empregar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'emprestar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'empurrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'enaltecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'encaminhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'encantar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'encarar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'encarcerar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'encarregar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'encender'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'encetar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'encher'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'encolher'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'encomendar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'encontrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'encontrar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'encorajar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'encostar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'encurtar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'endoidecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'enfeitiçar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'enfermar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'enfiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'enfocar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'enforcar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'enfrentar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'enganar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'enganchar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'engolir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'engordar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'engraxar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'enjoar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'enlaçar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'enlevar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'enredar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'enriquecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'enrolar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ensaiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ensinar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'entediar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'entediar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'entender'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'enterrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'entrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'entregar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'entreter'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'entreter-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'entrever'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'entrevistar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'entristecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'entupir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'entusiasmar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'entusiasmar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'enumerar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'enunciar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'envelhecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'envenenar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'envergonhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'envergonhar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'enviar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'envolver'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'enxaguar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'enxergar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'enxugar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'equiparar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'equivaler'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'equivocar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'equivocar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'erguer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'erigir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'errar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'escalar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'escapar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'escavar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'esclarecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'escolher'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'esconder'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'esconder-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'escorregar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'escorrer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'escovar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'escrever'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'escusar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'escusar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'escutar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'esfoliar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'esfregar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'esfriar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'esfumar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'esgotar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'esmagar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'espalhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'espantar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'espavorir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'especializar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'especificar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'especular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'esperar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'espevitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'espiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'espionar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'espirrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'espreitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'espremer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'esquecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'esquecer-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'esquentar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'esquiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'esquilar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'esquivar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'estabelecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'estacionar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'estalar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'estar',
                like: 'estar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'estender'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'esterilizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'estigmatizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'estimar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'estimular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'estipular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'estirar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'estourar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'estragar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'estrangular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'estranhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'estrear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'estrelar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'estremecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'estressar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'estudar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'estufar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'esvaziar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'evacuar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'evadir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'evaporar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'evitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'evoluir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'evolver'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'exagerar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'exalar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'examinar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'exasperar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'exceder'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'exceler'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'exclamar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'excluir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'executar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'exercer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'exibir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'exigir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'eximir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'existir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'exonerar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'expandir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'expatriar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'expedir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'expelir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'experimentar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'expirar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'explicar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'explodir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'explorar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'expor'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'exportar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'expressar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'exprimir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'expulsar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'exterminar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'extinguir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'extraditar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'extrair'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fabricar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'facilitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fagocitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'falar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'falecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'falhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'falir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'falsear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'falsificar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'faltar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fanfarronar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fantasiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fartar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fascinar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fatigar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'faturar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'favorecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fazer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fechar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'feder'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'felicitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ferir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fertilizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ferver'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ficar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fichar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'figurar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'filmar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'filosofar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'filtrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'finalizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'financiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fincar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fingir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'firmar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fixar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'flectir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'flertar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'flexibilizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'flexionar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'florescer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'florir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fluir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'flutuar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'focalizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'focar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'foder'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'folhear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fomentar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'forçar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'formalizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'formar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'formular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fornear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fornecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fornicar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fortalecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fortificar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fotocopiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fotografar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fracassar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fraternizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fraturar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'frear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'frequentar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'frigir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fritar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'frustrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fugir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fumar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fumigar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'funcionar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fundar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fundir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'furar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'fusionar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'gaguejar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'galopar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'galvanizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ganhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'garantir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'gastar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'gelar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'gemer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'generalizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'gerar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'gerir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'gesticular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'girar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'glorificar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'golpear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'gostar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'governar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'gozar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'gracejar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'graduar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'granizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'gratificar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'gravar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'gritar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'grulhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'grunhir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'guardar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'guiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'guisar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'habitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'harmonizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'haver'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'herdar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'hesitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'hidratar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'hipnotizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'horrorizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'hospedar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'hospitalizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'humilhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'idealizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'idear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'identificar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ignorar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'igualar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'iludir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'iluminar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ilusionar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ilustrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'imaginar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'imaginar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'imergir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'imigrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'imiscuir-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'imitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'impedir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'impelir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'implantar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'implementar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'implicar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'impor'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'importar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'impressionar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'imprimir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'improvisar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'impugnar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'imunizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'inalar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'inaugurar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'incendiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'inchar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'incidir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'incinerar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'inclinar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'incluir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'incoar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'incomodar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'incorporar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'incorrer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'incrementar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'incriminar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'incubar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'indagar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'indicar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'indignar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'individualizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'industrializar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'induzir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'infectar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'inferir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'infetar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'infiltrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'inflamar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'inflar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'infligir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'influenciar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'informar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'informar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'infringir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'infundir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ingerir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ingressar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'inibir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'iniciar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'injetar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'inocular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'inovar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'inquirir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'inscrever'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'inscrever-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'inserir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'insinuar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'insistir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'inspecionar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'inspirar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'instalar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'instigar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'instituir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'instruir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'insultar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'integrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'intentar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'intercambiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'interceder'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'interceptar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'intercetar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'interessar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'interessar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'interferir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'internar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'interpor'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'interpretar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'interrogar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'interromper'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'intervir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'intimidar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'intoxicar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'introduzir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'intuir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'inundar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'invadir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'invalidar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'invejar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'inventar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'inverter'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'investigar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'investir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'invitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'invocar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ir-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'irmanar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'irradiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'irrigar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'irritar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'irromper'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'isolar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'jantar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'jazer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'jogar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'julgar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'juntar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'jurar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'justapor'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'justificar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'lactar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ladrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'lamber'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'lambiscar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'lamentar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'lamentar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'lançar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'lanchar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'largar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'latir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'lavar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'legalizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'legar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'legislar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'legitimar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'lembrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'lembrar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ler'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'levantar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'levantar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'levar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'liberar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'libertar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'licenciar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'lidar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'liderar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ligar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'limitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'limpar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'linchar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'liquefazer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'liquidar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'litigar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'livrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'localizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'lograr'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'louvar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'lubrificar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'lucrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'lutar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'luzir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'machucar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'madrugar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'madurar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'maldizer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'malquerer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'maltratar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'manchar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'mandar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'manejar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'manifestar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'manipular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'manobrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'manter'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'manufacturar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'manufaturar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'maquiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'maquiar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'maravilhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'marcar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'marchar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'marear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'mastigar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'masturbar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'matar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'mediar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'medicar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'medir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'meditar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'melhorar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'memorizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'mencionar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'menosprezar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'menstruar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'mentir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'merecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'merendar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'mergulhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'meter'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'mexer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'miar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'migrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'mijar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'mimar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'minguar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'mirar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'mistificar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'misturar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'mitigar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'mobiliar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'mobilizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'modelar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'moderar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'modernizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'modificar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'modular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'moer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'molestar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'molhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'montar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'morar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'morder'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'morrer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'mostrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'motivar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'mover'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'mudar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'multar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'multiplicar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'murmurar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'mutilar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'nadar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'narrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'nascer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'naturalizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'naufragar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'navegar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'necessitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'negar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'negociar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'neutralizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'nevar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'neviscar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'nivelar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'nomear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'notar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'notificar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'numerar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'nutrir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'obedecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'obliquar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'obrigar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'observar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'obstruir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'obter'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ocorrer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ocultar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ocupar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'odiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ofender'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'oferecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'olhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'olvidar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'omitir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'operar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'opinar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'opor'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'optar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'orçar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ordenar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ordenhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'organizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'orientar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'originar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ornar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'orquestrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'oscilar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ousar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'outorgar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ouvir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ovular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'oxidar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'oxigenar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'pactuar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'padecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'pagar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'palpitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'palrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'paquerar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'parabenizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'parafrasear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'paralisar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'parar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'parecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'parir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'parodiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'participar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'partilhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'partir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'pasmar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'passar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'passear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'patinar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'pausar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'pedalar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'pedir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'pegar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'pender'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'pendurar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'peneirar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'penetrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'penhorar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'pensar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'pentear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'pentear-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'perceber'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'percutir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'perder'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'perdoar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'perfeccionar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'perfumar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'perfurar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'perguntar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'permanecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'permitir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'perpetuar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'perseguir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'perseverar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'persistir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'personalizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'persuadir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'pertencer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'pesar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'pescar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'pesquisar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'petiscar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'picar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'pintar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'piorar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'pisar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'planar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'planificar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'plantar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'poder'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'polarizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'polinizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'polir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'poluir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'pôr'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'posicionar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'pospor'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'possibilitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'possuir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'postular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'potenciar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'poupar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'pousar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'praticar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'preceder'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'precipitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'precisar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'predicar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'predominar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'preencher'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'preferir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'pregar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'prejudicar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'prejulgar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'premiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'prender'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'preocupar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'preparar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'preparar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'prescrever'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'preservar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'presidir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'pressentir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'pressionar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'prestar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'presumir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'pretender'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'prevalecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'prevenir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'prever'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'principiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'privar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'proceder'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'processar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'proclamar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'procrastinar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'procurar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'produzir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'prognosticar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'programar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'progredir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'proibir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'proliferar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'prolongar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'prometer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'promover'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'pronunciar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'propagar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'propor'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'proporcionar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'prosseguir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'protagonizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'proteger'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'protestar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'provar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'prover'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'provir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'provocar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'publicar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'publicitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'puir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'pular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'punçar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'punir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'purificar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'puxar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'qualificar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'quantificar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'quebrantar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'quebrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'queimar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'queixar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'querer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'questionar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'radiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'raiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ralar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ranger'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'raptar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'rasgar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'raspar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'reabilitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'reagir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'realizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'rebelar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'rebelar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'rebentar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'rebobinar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'rebocar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'recapitular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'recarregar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'recear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'receber'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'reciclar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'reciprocar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'recitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'reclamar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'recolher'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'recomeçar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'recomendar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'recompensar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'reconciliar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'reconhecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'reconquistar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'reconstruir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'recordar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'recorrer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'recrutar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'recuperar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'recusar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'redigir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'redistribuir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'reduzir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'refazer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'referir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'refletir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'reflexionar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'refogar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'reforçar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'reformar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'refugiar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'refundir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'regalar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'regenerar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'reger'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'registar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'registrar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'regressar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'regular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'reinar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'reiniciar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'reintegrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'rejeitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'relacionar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'relatar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'relativizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'relaxar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'relegar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'reluzir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'remar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'remunerar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'renascer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'render'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'renovar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'renunciar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'reparar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'repatriar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'repelir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'repercutir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'repetir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'replicar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'representar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'reprimir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'reprochar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'reproduzir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'requerer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'requisitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'reservar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'residir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'resistir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'resmungar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'resolver'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'respeitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'respirar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'responder'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ressaltar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'restabelecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'restar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'restaurar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'restituir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'restringir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'resultar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'resumir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'reter'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'retificar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'retirar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'retocar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'retornar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'retroceder'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'reunir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'revalidar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'revelar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'rever'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'revisar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'revogar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'rezar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ridicularizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'rir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'riscar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'rivalizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'roçar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'rociar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'rodar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'rodear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'rogar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'rolar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'romper'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'roncar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'rondar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'roubar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'rugir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ruminar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'saber'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sabotar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sacar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'saciar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sacrificar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sacudir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sair'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'salgar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'salientar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'salpicar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'saltar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'salvaguardar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'salvar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sangrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'saquear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'satirizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'satisfazer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'saturar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'saudar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'secar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'secularizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'seduzir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'segar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'segmentar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'segregar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'seguir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'segurar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'selecionar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'semear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sentar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sentir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sentir-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'separar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'separar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sepultar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sequestrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ser'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'serrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'servir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'significar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'simbolizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'simpatizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'simplificar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'simular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sincopar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sincronizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sindicar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sintetizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sintonizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'situar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'soar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sobrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sobressair'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sobreviver'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'soçobrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'socorrer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'soer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sofrer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'soletrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'solicitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'soltar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'soluçar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'solucionar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'somar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sonhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'soprar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sorrir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sortear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sossegar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'suar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'suavizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'subir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'subjugar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sublinhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'submergir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'submeter'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'subministrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'subordinar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'subscrever'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'substanciar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'substituir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'suceder'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sucumbir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sufocar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sugerir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sujar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sujeitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sumir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'superar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'supervisar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'suplicar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'supor'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'suportar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'suprimir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'suprir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'surgir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'surpreender'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'suscitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'suspeitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'suspender'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'suspirar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sussurrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'sustentar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'suster'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'tamisar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'tanger'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'tardar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'tartamudear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'tatuar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'taxar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'tecer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'teclar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'teimar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'telefonar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'telegrafar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'temer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'temperar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'tender'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'tentar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ter'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'terminar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'tesar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'testar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'tingir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'tinir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'tirar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'titular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'tocar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'tolerar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'tomar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'tombar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'torcer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'tornar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'tornar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'torrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'torturar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'tossir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'tostar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'trabalhar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'traçar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'traduzir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'tragar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'trair'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'tramar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'transcorrer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'transcrever'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'transferir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'transformar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'transigir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'transladar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'transmitir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'transpirar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'transplantar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'transportar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'tratar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'trautear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'travar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'trazer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'treinar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'tremer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'triangular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'tricotar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'trinchar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'triturar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'triunfar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'troar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'trocar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'tropeçar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'uivar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ultrapassar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ungir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'unificar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'unir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'urdir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'urgir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'urinar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'usar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'utilizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'vacilar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'vacinar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'vagir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'valer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'validar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'valorar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'valorizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'vaporizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'variar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'varrer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'vegetar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'velar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'vencer'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'vender'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'venerar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ventar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ventilar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'ver'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'veranear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'verificar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'verter'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'vestir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'vestir-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'viajar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'vibrar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'vigiar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'vincular'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'vindicar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'violar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'vir'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'virar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'virar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'visar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'visitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'visualizar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'viver'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'voar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'voltar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'voltear'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'volver'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'vomitar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'votar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'zangar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'zangar-se'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'zarpar'
              },
              es: {
                inf: 'ESINF'
              }
            },
            {
              en: {
                inf: 'ENINF'
              },
              pt: {
                inf: 'zombar'
              },
              es: {
                inf: 'ESINF'
              }
            }
          ];
        const verbs = [ ...verbs1, ...verbs2 ];
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
                {
                    inf: 'ter',
                    present: [
                        'tenho',
                        'tens',
                        'tem',
                        'temos',
                        'tendes',
                        'têm'
                    ]
                },
                {
                    inf: 'vender',
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
                    ]
                },
                {
                    inf: 'partir',
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
                    ]
                },
                {
                    inf: 'estar',
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