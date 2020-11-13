import { Language } from '../logic/enums.js';

export const getVerbsList = ({inf, language = Language.pt}) => {
    const verbs = [{
        en: {
                i: 'to shake'
            },
            pt: {
                i: 'abalar'
            }
        }, {
        en: {
                i: 'to approve'
            },
            pt: {
                i: 'abalizar'
            }
        }, {
            en: {
                i: 'to shake'
            },
            pt: {
                i: 'abanar'
            }
        }, {
            en: {
                i: 'to abandon'
            },
            pt: {
                i: 'abandonar'
            }
        }, {
            en: {
                i: 'to fuel'
            },
            pt: {
                i: 'abastecer'
            }
        }, {
            en: {
                i: 'to shoot down'
            },
            pt: {
                i: 'abater'
            }
        }, {
            en: {
                i: 'to pour'
            },
            pt: {
                i: 'abocar',
                'like': 'ficar'
            }
        }, {
            en: {
                i: 'to bulge'
            },
            pt: {
                i: 'abaular'
            }
        }, {
            en: {
                i: 'to abdicate'
            },
            pt: {
                i: 'abdicar',
                'like': 'ficar'
            }
        }, {
            en: {
                i: 'to bless'
            },
            pt: {
                i: 'abençoar'
            }
        }, {
            en: {
                i: 'to abolish'
            },
            pt: {
                i: 'abolir'
            }
        }, {
            en: {
                i: 'to bore'
            },
            pt: {
                i: 'aborrascar',
                'like': 'ficar'
            }
        }, {
            en: {
                i: 'to approach'
            },
            pt: {
                i: 'abordar'
            }
        }, {
            en: {
                i: 'to abort'
            },
            pt: {
                i: 'abortar'
            }
        }, {
            en: {
                i: 'to button up'
            },
            pt: {
                i: 'abotoar'
            }
        }, {
            en: {
                i: 'to hug'
            },
            pt: {
                i: 'abraçar'
            }
        }, {
            en: {
                i: 'to reach'
            },
            pt: {
                i: 'abranger'
            }
        }, {
            en: {
                i: 'to abbreviate'
            },
            pt: {
                i: 'abreviar'
            }
        }, {
            en: {
                i: 'to harbour'
            },
            pt: {
                i: 'abrigar'
            }
        }, {
            en: {
                i: 'to open'
            },
            pt: {
                i: 'abrir'
            }
        }, {
            en: {
                i: 'to absolve'
            },
            pt: {
                i: 'absolver'
            }
        }, {
            en: {
                i: 'to absorb'
            },
            pt: {
                i: 'absorver'
            },
            es: {
                i: 'absorber'
            }
        }, {
            en: {
                i: 'to abstain'
            },
            pt: {
                i: 'abster'
            }
        }, {
            en: {
                i: 'to abstain'
            },
            pt: {
                i: 'abster-se'
            }
        }, {
            en: {
                i: 'to abstract'
            },
            pt: {
                i: 'abstrair'
            }
        }, {
            en: {
                i: 'to abound'
            },
            pt: {
                i: 'abundar'
            },
            es: {
                i: 'abundar'
            }
        }, {
            en: {
                i: 'to abuse'
            },
            pt: {
                i: 'abusar'
            }
        }, {
            en: {
                i: 'to end'
            },
            pt: {
                i: 'acabar'
            },
            es: {
                i: 'finalizar'
            }
        }, {
            en: {
                i: 'to calm down'
            },
            pt: {
                i: 'acalmar'
            }
        }, {
            en: {
                i: 'to take'
            },
            pt: {
                i: 'acamar'
            },
            es: {
                i: 'tomar'
            }
        }, {
            en: {
                i: 'to hoard'
            },
            pt: {
                i: 'açambarcar',
                'like': 'ficar'
            }
        }, {
            en: {
                i: 'to camp'
            },
            pt: {
                i: 'acampar'
            }
        }, {
            en: {
                i: 'to caress'
            },
            pt: {
                i: 'acariciar'
            }
        }, {
            en: {
                i: 'to mate'
            },
            pt: {
                i: 'acascar',
                'like': 'ficar'
            }
        }, {
            en: {
                i: 'to accept'
            },
            pt: {
                i: 'acatar'
            }
        }, {
            en: {
                i: 'to access'
            },
            pt: {
                i: 'aceder'
            }
        }, {
            en: {
                i: 'to accept'
            },
            pt: {
                i: 'aceitar'
            }
        }, {
            en: {
                i: 'to speed up'
            },
            pt: {
                i: 'acelerar'
            }
        }, {
            en: {
                i: 'to light up'
            },
            pt: {
                i: 'acender'
            },
            es: {
                i: 'alumbrar'
            }
        }, {
            en: {
                i: 'to accentuate'
            },
            pt: {
                i: 'acentuar'
            }
        }, {
            en: {
                i: 'to approach'
            },
            pt: {
                i: 'acercar',
                'like': 'ficar'
            }
        }, {
            en: {
                i: 'to hit'
            },
            pt: {
                i: 'acertar'
            },
            es: {
                i: 'golpear'
            }
        }, {
            en: {
                i: 'to find'
            },
            pt: {
                i: 'achar'
            }
        }, {
            en: {
                i: 'to reduce'
            },
            pt: {
                i: 'achicar',
                'like': 'ficar'
            }
        }, {
            en: {
                i: 'to acidify'
            },
            pt: {
                i: 'acidificar',
                'like': 'ficar'
            }
        }, {
            en: {
                i: 'to acclaim'
            },
            pt: {
                i: 'aclamar'
            }
        }, {
            en: {
                i: 'to flog'
            },
            pt: {
                i: 'açoitar'
            }
        }, {
            en: {
                i: 'to welcome'
            },
            pt: {
                i: 'acolher'
            }
        }, {
            en: {
                i: 'to accommodate'
            },
            pt: {
                i: 'acomodar'
            }
        }, {
            en: {
                i: 'to go along'
            },
            pt: {
                i: 'acompanhar'
            }
        }, {
            en: {
                i: 'to advise'
            },
            pt: {
                i: 'aconselhar'
            },
            es: {
                i: 'asesorar'
            }
        }, {
            en: {
                i: 'to happen'
            },
            pt: {
                i: 'acontecer'
            },
            es: {
                i: 'suceder'
            }
        }, {
            en: {
                i: 'to couple'
            },
            pt: {
                i: 'acoplar'
            }
        }, {
            en: {
                i: 'to wake up'
            },
            pt: {
                i: 'acordar'
            }
        }, {
            en: {
                i: 'to lean in'
            },
            pt: {
                i: 'acostar-se'
            }
        }, {
            en: {
                i: 'to accustom'
            },
            pt: {
                i: 'acostumar'
            },
            es: {
                i: 'habituar'
            }
        }, {
            en: {
                i: 'to believe'
            },
            pt: {
                i: 'acreditar'
            },
            es: {
                i: 'creer'
            }
        }, {
            en: {
                i: 'to add'
            },
            pt: {
                i: 'acrescentar'
            },
            es: {
                i: 'añadir'
            }
        }, {
            en: {
                i: 'to accumulate'
            },
            pt: {
                i: 'acumular'
            }
        }, {
            en: {
                i: 'to help'
            },
            pt: {
                i: 'acudir'
            },
            es: {
                i: 'ayudar'
            }
        }, {
            en: {
                i: 'to accuse'
            },
            pt: {
                i: 'acusar'
            }
        }, {
            en: {
                i: 'to adapt'
            },
            pt: {
                i: 'adaptar'
            }
        }, {
            en: {
                i: 'to adapt'
            },
            pt: {
                i: 'adaptar-se'
            }
        }, {
            en: {
                i: 'to suit'
            },
            pt: {
                i: 'adequar'
            }
        }, {
            en: {
                i: 'to adhere'
            },
            pt: {
                i: 'aderir'
            }
        }, {
            en: {
                i: 'to anticipate'
            },
            pt: {
                i: 'adiantar'
            }
        }, {
            en: {
                i: 'to get ahead'
            },
            pt: {
                i: 'adiantar-se'
            }
        }, {
            en: {
                i: 'to put off'
            },
            pt: {
                i: 'adiar'
            }
        }, {
            en: {
                i: 'to add'
            },
            pt: {
                i: 'adicionar'
            },
            es: {
                i: 'añadir'
            }
        }, {
            en: {
                i: 'to adhere'
            },
            pt: {
                i: 'adir'
            }
        }, {
            en: {
                i: 'to comply'
            },
            pt: {
                i: 'adimplir'
            }
        }, {
            en: {
                i: 'to guess'
            },
            pt: {
                i: 'adivinhar'
            }
        }, {
            en: {
                i: 'to administer'
            },
            pt: {
                i: 'administrar'
            }
        }, {
            en: {
                i: 'to admire'
            },
            pt: {
                i: 'admirar'
            }
        }, {
            en: {
                i: 'to admit'
            },
            pt: {
                i: 'admitir'
            }
        }, {
            en: {
                i: 'to admonish'
            },
            pt: {
                i: 'admoestar'
            }
        }, {
            en: {
                i: 'to sweeten'
            },
            pt: {
                i: 'adoçar'
            }
        }, {
            en: {
                i: 'to sweeten'
            },
            pt: {
                i: 'adocicar',
                'like': 'ficar'
            }
        }, {
            en: {
                i: 'to sicken'
            },
            pt: {
                i: 'adoecer'
            }
        }, {
            en: {
                i: 'to worship'
            },
            pt: {
                i: 'adorar'
            }
        }, {
            en: {
                i: 'to fall asleep'
            },
            pt: {
                i: 'adormecer'
            }
        }, {
            en: {
                i: 'to adorn'
            },
            pt: {
                i: 'adornar'
            }
        }, {
            en: {
                i: 'to adopt'
            },
            pt: {
                i: 'adotar'
            }
        }, {
            en: {
                i: 'to purchase'
            },
            pt: {
                i: 'adquirir'
            }
        }, {
            en: {
                i: 'to compost'
            },
            pt: {
                i: 'adubar'
            }
        }, {
            en: {
                i: 'to hook'
            },
            pt: {
                i: 'aduncar',
                'like': 'ficar'
            }
        }, {
            en: {
                i: 'to warn'
            },
            pt: {
                i: 'advertir'
            },
            es: {
                i: 'avisar'
            }
        }, 
        {
            en: {
                i: 'to put away'
            },
            pt: {
                i: 'afastar'
            }
        }, 
        {
            en: {
                i: 'to move away'
            },
            pt: {
                i: 'afastar-se'
            },
                es: {
                i: 'alejarse'
            }
        }, 
        {
            en: {
                i: 'to affect'
            },
            pt: {
                i: 'afetar'
            },
            es: {
                i: 'afectar'
            }
        }, {
            en: {
                i: 'to stay'
            },
            pt: {
                i: 'aficar',
                'like': 'ficar'
            },
            es: {
                i: 'quedar'
            }
        }, {
            en: {
                i: 'to adopt'
            },
            pt: {
                i: 'afilhar'
            }
        }, {
            en: {
                i: 'to claim'
            },
            pt: {
                i: 'afirmar'
            }
        }, {
            en: {
                i: 'to afflict'
            },
            pt: {
                i: 'afligir'
            }
        }, {
            en: {
                i: 'to drown'
            },
            pt: {
                i: 'afogar'
            }
        }, {
            en: {
                i: 'to drown'
            },
            pt: {
                i: 'afogar-se'
            }
        }, {
            en: {
                i: 'to loosen'
            },
            pt: {
                i: 'afrouxar'
            }
        }, {
            en: {
                i: 'to enjoy'
            },
            pt: {
                i: 'afruticar',
                'like': 'ficar'
            },
            es: {
                i: 'disfrutar'
            }
        }, {
            en: {
                i: 'to make like agate'
            },
            pt: {
                i: 'agatificar',
                'like': 'ficar'
            }
        }, {
            en: {
                i: 'to sink'
            },
            pt: {
                i: 'afundar'
            }
        }, {
            en: {
                i: 'to crouch'
            },
            pt: {
                i: 'agachar-se'
            }
        }, {
            en: {
                i: 'to grab'
            },
            pt: {
                i: 'agarrar'
            }
        }, {
            en: {
                i: 'to act'
            },
            pt: {
                i: 'agir'
            }
        }, {
            en: {
                i: 'to shake'
            },
            pt: {
                i: 'agitar'
            }
        }, {
            en: {
                i: 'to agonise'
            },
            pt: {
                i: 'agoniar'
            }
        }, {
            en: {
                i: 'to please'
            },
            pt: {
                i: 'agradar'
            }
        }, {
            en: {
                i: 'to thank'
            },
            pt: {
                i: 'agradecer'
            }
        }, {
            en: {
                i: 'to aggravate'
            },
            pt: {
                i: 'agravar'
            }
        }, {
            en: {
                i: 'to attack'
            },
            pt: {
                i: 'agredir'
            },
            es: {
                i: 'atacar'
            }
        }, {
            en: {
                i: 'to aggregate'
            },
            pt: {
                i: 'agregar'
            }
        }, {
            en: {
                i: 'to agroup'
            },
            pt: {
                i: 'agrupar'
            }
        }, {
            en: {
                i: 'to wait'
            },
            pt: {
                i: 'aguardar'
            }
        }, {
            en: {
                i: 'to sharpen'
            },
            pt: {
                i: 'aguçar'
            }
        }, {
            en: {
                i: 'to endure'
            },
            pt: {
                i: 'aguentar'
            }
        }, {
            en: {
                i: 'to kneel'
            },
            pt: {
                i: 'ajoelhar-se'
            }
        }, {
            en: {
                i: 'to sprinkle'
            },
            pt: {
                i: 'ajorcar',
                'like': 'ficar'
            }
        }, {
            en: {
                i: 'to help'
            },
            pt: {
                i: 'ajudar'
            },
            es: {
                i: 'ayudar'
            }
        }, {
            en: {
                i: 'to award'
            },
            pt: {
                i: 'ajudicar',
                'like': 'ficar'
            }
        }, {
            en: {
                i: 'to judge'
            },
            pt: {
                i: 'ajuizar'
            },
            es: {
                i: 'juzgar'
            }
        }, {
            en: {
                i: 'to adjust'
            },
            pt: {
                i: 'ajustar'
            }
        }, {
            en: {
                i: 'to flood'
            },
            pt: {
                i: 'alagar'
            }
        }, {
            en: {
                i: 'to distill'
            },
            pt: {
                i: 'alambicar',
                'like': 'ficar'
            }
        }, {
            en: {
                i: 'to bend'
            },
            pt: {
                i: 'alancar',
                'like': 'ficar'
            }
        }, {
            en: {
                i: 'to widen'
            },
            pt: {
                i: 'alargar'
            }
        }, {
            en: {
                i: 'to alarm'
            },
            pt: {
                i: 'alarmar'
            },
            es: {
                i: 'alarmar'
            }
        }, {
            en: {
                i: 'to house'
            },
            pt: {
                i: 'albergar'
            }
        }, {
            en: {
                i: 'to rumble'
            },
            pt: {
                i: 'alborcar',
                'like': 'ficar'
            }
        }, {
            en: {
                i: 'to reach out'
            },
            pt: {
                i: 'alcandorar',
                'like': 'ficar'
            }
        }, {
            en: {
                i: 'to alkalise'
            },
            pt: {
                i: 'alcalcificar',
                'like': 'ficar'
            }
        }, {
            en: {
                i: 'to alcoholise'
            },
            pt: {
                i: 'alcoolificar',
                'like': 'ficar'
            }
        }, {
            en: {
                i: 'to catch up'
            },
            pt: {
                i: 'alcançar'
            }
        }, {
            en: {
                i: 'to lift'
            },
            pt: {
                i: 'alçar'
            },
            es: {
                i: 'alzar'
            }
        }, {
            en: {
                i: 'to claim'
            },
            pt: {
                i: 'alegar'
            }
        }, {
            en: {
                i: 'to rejoice'
            },
            pt: {
                i: 'alegrar'
            }
        }, {
            en: {
                i: 'to rejoice'
            },
            pt: {
                i: 'alegrar-se'
            }
        }, {
            en: {
                i: 'to suck'
            },
            pt: {
                i: 'aleitar'
            }
        }, {
            en: {
                i: 'to alert'
            },
            pt: {
                i: 'alertar'
            },
            es: {
                i: 'alertar'
            }
        }, {
            en: {
                i: 'to ally'
            },
            pt: {
                i: 'aliar'
            }
        }, {
            en: {
                i: 'to alienate'
            },
            pt: {
                i: 'alienar'
            }
        }, {
            en: {
                i: 'to feed'
            },
            pt: {
                i: 'alimentar'
            },
            es: {
                i: 'alimentar'
            }
        }, {
            en: {
                i: 'to line up'
            },
            pt: {
                i: 'alinhar'
            }
        }, {
            en: {
                i: 'to relieve'
            },
            pt: {
                i: 'aliviar'
            }
        }, {
            en: {
                i: 'to crave'
            },
            pt: {
                i: 'almejar'
            }
        }, {
            en: {
                i: 'to have lunch'
            },
            pt: {
                i: 'almoçar'
            }
        }, {
            en: {
                i: 'to stretch'
            },
            pt: {
                i: 'alongar'
            }
        }, {
            en: {
                i: 'to haunt'
            },
            pt: {
                i: 'aloucar',
                'like': 'ficar'
            }
        }, {
            en: {
                i: 'to melt'
            },
            pt: {
                i: 'amalucar',
                'like': 'ficar'
            }
        }, {
            en: {
                i: 'to hum'
            },
            pt: {
                i: 'amaricar',
                'like': 'ficar'
            }
        }, {
            en: {
                i: 'to soften'
            },
            pt: {
                i: 'amacacar',
                'like': 'ficar'
            }
        }, {
            en: {
                i: 'to rumple'
            },
            pt: {
                i: 'amaçarocar',
                'like': 'ficar'
            }
        }, {
            en: {
                i: 'to tie up'
            },
            pt: {
                i: 'amarrecar',
                'like': 'ficar'
            }
        }, {
            en: {
                i: 'to change'
            },
            pt: {
                i: 'alterar'
            },
            es: {
                i: 'cambiar'
            }
        }, {
            en: {
                i: 'to alter'
            },
            pt: {
                i: 'altercar'
            },
            es: {
                i: 'alterar'
            }
        }, {
            en: {
                i: 'to switch'
            },
            pt: {
                i: 'alternar'
            }
        }, {
            en: {
                i: 'to rent'
            },
            pt: {
                i: 'alugar'
            },
            es: {
                i: 'alquilar'
            }
        }, {
            en: {
                i: 'to bustle'
            },
            pt: {
                i: 'alvoroçar'
            }
        }, {
            en: {
                i: 'to dawn'
            },
            pt: {
                i: 'alvorotar'
            }
        }, {
            en: {
                i: 'to abate'
            },
            pt: {
                i: 'amainar'
            }
        }, {
            en: {
                i: 'to knock down'
            },
            pt: {
                i: 'abatocar',
                'like': 'ficar'
            }
        }, {
            en: {
                i: 'to dawn'
            },
            pt: {
                i: 'amanhecer'
            }
        }, {
            en: {
                i: 'to love'
            },
            pt: {
                i: 'amar'
            },
            es: {
                i: 'amar'
            }
        }, {
            en: {
                i: 'to love'
            },
            pt: {
                i: 'amarar'
            },
            es: {
                i: 'amar'
            }
        }, {
            en: {
                i: 'to tie'
            },
            pt: {
                i: 'amarrar'
            }
        }, {
            en: {
                i: 'to crumple'
            },
            pt: {
                i: 'amassar'
            }
        }, {
            en: {
                i: 'to threaten'
            },
            pt: {
                i: 'ameaçar'
            },
            es: {
                i: 'amenazar'
            }
        }, {
            en: {
                i: 'to soften'
            },
            pt: {
                i: 'amenizar'
            }
        }, {
            en: {
                i: 'to shape'
            },
            pt: {
                i: 'amoldar'
            }
        }, {
            en: {
                i: 'to enlarge'
            },
            pt: {
                i: 'ampliar'
            }
        }, {
            en: {
                i: 'to amplify'
            },
            pt: {
                i: 'amplificar'
            }
        }, {
            en: {
                i: 'to amputate'
            },
            pt: {
                i: 'amputar'
            }
        }, {
            en: {
                i: 'to analise'
            },
            pt: {
                i: 'analisar'
            }
        }, {
            en: {
                i: 'to walk',
                'like': 'to walk'
            },
            pt: {
                i: 'andar'
            },
            es: {
                i: 'andar'
            }
        }, {
            en: {
                i: 'to inundate'
            },
            pt: {
                i: 'anegar'
            }
        }, {
            en: {
                i: 'to ring'
            },
            pt: {
                i: 'anelar'
            }
        }, {
            en: {
                i: 'to numb'
            },
            pt: {
                i: 'anestesiar'
            }
        }, {
            en: {
                i: 'to distress'
            },
            pt: {
                i: 'angustiar'
            }
        }, {
            en: {
                i: 'to cheer up'
            },
            pt: {
                i: 'animar'
            },
            es: {
                i: 'alegrar'
            }
        }, {
            en: {
                i: 'to grow dark'
            },
            pt: {
                i: 'anoitecer'
            }
        }, {
            en: {
                i: 'to write down'
            },
            pt: {
                i: 'anotar'
            }
        }, {
            en: {
                i: 'to crave'
            },
            pt: {
                i: 'ansiar'
            }
        }, {
            en: {
                i: 'to anticipate'
            },
            pt: {
                i: 'antecipar'
            }
        }, {
            en: {
                i: 'to cancel'
            },
            pt: {
                i: 'anular'
            },
            es: {
                i: 'anular'
            }
        }, {
            en: {
                i: 'to announce'
            },
            pt: {
                i: 'anunciar'
            },
            es: {
                i: 'anunciar'
            }
        }, {
            en: {
                i: 'to delete'
            },
            pt: {
                i: 'apagar'
            }
        }, {
            en: {
                i: 'to fall in love'
            },
            pt: {
                i: 'apaixonar-se'
            },
            es: {
                i: 'enamorarse'
            }
        }, {
            en: {
                i: 'to catch'
            },
            pt: {
                i: 'apanhar'
            },
            es: {
                i: 'alcanzar'
            }
        }, {
            en: {
                i: 'to appear'
            },
            pt: {
                i: 'aparecer'
            }
        }, {
            en: {
                i: 'to separate'
            },
            pt: {
                i: 'apartar'
            },
            es: {
                i: 'apartar'
            }
        }, {
            en: {
                i: 'to feed'
            },
            pt: {
                i: 'apascentar'
            }
        }, {
            en: {
                i: 'to appease'
            },
            pt: {
                i: 'apaziguar'
            }
        }, {
            en: {
                i: 'to appeal'
            },
            pt: {
                i: 'apelar'
            }
        }, {
            en: {
                i: 'to realise'
            },
            pt: {
                i: 'aperceber'
            }
        }, {
            en: {
                i: 'to hold tight'
            },
            pt: {
                i: 'apertar'
            }
        }, {
            en: {
                i: 'to crave'
            },
            pt: {
                i: 'apetecer'
            }
        }, {
            en: {
                i: 'to pity yourself'
            },
            pt: {
                i: 'apiedar-se'
            }
        }, {
            en: {
                i: 'to applaud'
            },
            pt: {
                i: 'aplaudir'
            },
            es: {
                i: 'aplaudir'
            }
        }, {
            en: {
                i: 'to apply'
            },
            pt: {
                i: 'aplicar'
            },
            es: {
                i: 'aplicar'
            }
        }, {
            en: {
                i: 'to support'
            },
            pt: {
                i: 'apoiar'
            },
            es: {
                i: 'soportar'
            }
        }, {
            en: {
                i: 'to point'
            },
            pt: {
                i: 'apontar'
            }
        }, {
            en: {
                i: 'to bet'
            },
            pt: {
                i: 'apostar'
            }
        }, {
            en: {
                i: 'to appreciate'
            },
            pt: {
                i: 'apreciar'
            }
        }, {
            en: {
                i: 'to proclaim'
            },
            pt: {
                i: 'apregoar'
            }
        }, {
            en: {
                i: 'to learn'
            },
            pt: {
                i: 'aprender'
            },
            es: {
                i: 'aprender'
            }
        }, {
            en: {
                i: 'to present'
            },
            pt: {
                i: 'apresentar'
            }
        }, {
            en: {
                i: 'to rush'
            },
            pt: {
                i: 'apressar'
            }
        }, {
            en: {
                i: 'to imprison'
            },
            pt: {
                i: 'aprisionar'
            }
        }, {
            en: {
                i: 'to deepen'
            },
            pt: {
                i: 'aprofundar'
            }
        }, {
            en: {
                i: 'to approve'
            },
            pt: {
                i: 'aprovar'
            }
        }, {
            en: {
                i: 'to enjoy'
            },
            pt: {
                i: 'aproveitar'
            },
            es: {
                i: 'disfrutar'
            }
        }, {
            en: {
                i: 'to approach'
            },
            pt: {
                i: 'aproximar'
            }
        }, {
            en: {
                i: 'to investigate'
            },
            pt: {
                i: 'apurar'
            }
        }, {
            en: {
                i: 'to warm'
            },
            pt: {
                i: 'aquecer'
            }
        }, {
            en: {
                i: 'to burn'
            },
            pt: {
                i: 'arder'
            },
            es: {
                i: 'arder'
            }
        }, {
            en: {
                i: 'to long for'
            },
            pt: {
                i: 'arelar'
            }
        }, {
            en: {
                i: 'to argue'
            },
            pt: {
                i: 'arguir'
            }
        }, {
            en: {
                i: 'to argue'
            },
            pt: {
                i: 'argumentar'
            }
        }, {
            en: {
                i: 'to arm'
            },
            pt: {
                i: 'armar'
            }
        }, {
            en: {
                i: 'to store'
            },
            pt: {
                i: 'armazenar'
            }
        }, {
            en: {
                i: 'to file'
            },
            pt: {
                i: 'arquivar'
            },
            es: {
                i: 'archivar'
            }
        }, {
            en: {
                i: 'to rip out'
            },
            pt: {
                i: 'arrancar'
            }
        }, {
            en: {
                i: 'to scratch'
            },
            pt: {
                i: 'arranhar'
            }
        }, {
            en: {
                i: 'to arrange'
            },
            pt: {
                i: 'arranjar'
            }
        }, {
            en: {
                i: 'to drag'
            },
            pt: {
                i: 'arrastar'
            }
        }, {
            en: {
                i: 'to rush'
            },
            pt: {
                i: 'arremeter'
            }
        }, {
            en: {
                i: 'to repent'
            },
            pt: {
                i: 'arrepender-se'
            }
        }, {
            en: {
                i: 'to risk'
            },
            pt: {
                i: 'arriscar'
            },
            es: {
                i: 'arriesgar'
            }
        }, {
            en: {
                i: 'to ruin'
            },
            pt: {
                i: 'arruinar'
            },
            es: {
                i: 'arruinar'
            }
        }, {
            en: {
                i: 'to straighten'
            },
            pt: {
                i: 'arrumar'
            }
        }, {
            en: {
                i: 'to get dressed'
            },
            pt: {
                i: 'arrumar-se'
            }
        }, {
            en: {
                i: 'to articulate'
            },
            pt: {
                i: 'articular'
            }
        }, {
            en: {
                i: 'to climb'
            },
            pt: {
                i: 'ascender'
            }
        }, {
            en: {
                i: 'to choke'
            },
            pt: {
                i: 'asfixiar'
            }
        }, {
            en: {
                i: 'to sprinkle'
            },
            pt: {
                i: 'aspergir'
            }
        }, {
            en: {
                i: 'to breathe'
            },
            pt: {
                i: 'aspirar'
            },
            es: {
                i: 'respirar'
            }
        }, {
            en: {
                i: 'to assault'
            },
            pt: {
                i: 'assaltar'
            }
        }, {
            en: {
                i: 'to bake'
            },
            pt: {
                i: 'assar'
            }
        }, {
            en: {
                i: 'to murder'
            },
            pt: {
                i: 'assassinar'
            },
            es: {
                i: 'asesinar'
            }
        }, {
            en: {
                i: 'to secure'
            },
            pt: {
                i: 'assegurar'
            },
            es: {
                i: 'asegurar'
            }
        }, {
            en: {
                i: 'to resemble'
            },
            pt: {
                i: 'assemelhar'
            }
        }, {
            en: {
                i: 'to resemble'
            },
            pt: {
                i: 'assemelhar-se'
            }
        }, {
            en: {
                i: 'to settle'
            },
            pt: {
                i: 'assentar'
            }
        }, {
            en: {
                i: 'to nod'
            },
            pt: {
                i: 'assentir'
            }
        }, {
            en: {
                i: 'to assimilate'
            },
            pt: {
                i: 'assimilar'
            },
            es: {
                i: 'asimilar'
            }
        }, {
            en: {
                i: 'to point out'
            },
            pt: {
                i: 'assinalar'
            }
        }, {
            en: {
                i: 'to sign'
            },
            pt: {
                i: 'assinar'
            },
            es: {
                i: 'firmar'
            }
        }, {
            en: {
                i: 'to assist'
            },
            pt: {
                i: 'assistir'
            }
        }, {
            en: {
                i: 'to whistle'
            },
            pt: {
                i: 'assobiar'
            }
        }, {
            en: {
                i: 'to connect'
            },
            pt: {
                i: 'associar'
            },
            es: {
                i: 'conectar'
            }
        }, {
            en: {
                i: 'to loom'
            },
            pt: {
                i: 'assomar'
            }
        }, {
            en: {
                i: 'to haunt'
            },
            pt: {
                i: 'assombrar'
            }
        }, {
            en: {
                i: 'to take on'
            },
            pt: {
                i: 'assumir'
            }
        }, {
            en: {
                i: 'to scare'
            },
            pt: {
                i: 'assustar'
            }
        }, {
            en: {
                i: 'to frighten'
            },
            pt: {
                i: 'assustar-se'
            },
            es: {
                i: 'asustar'
            }
        }, {
            en: {
                i: 'to attack'
            },
            pt: {
                i: 'atacar'
            },
            es: {
                i: 'atacar'
            }
        }, {
            en: {
                i: 'to tie'
            },
            pt: {
                i: 'atar'
            }
        }, {
            en: {
                i: 'to answer'
            },
            pt: {
                i: 'atender'
            },
            es: {
                i: 'contestar'
            }
        }, {
            en: {
                i: 'to soften'
            },
            pt: {
                i: 'atenuar'
            }
        }, {
            en: {
                i: 'to land'
            },
            pt: {
                i: 'aterrar'
            },
            es: {
                i: 'aterrizar'
            }
        }, {
            en: {
                i: 'to terrorise'
            },
            pt: {
                i: 'aterrorizar'
            }
        }, {
            en: {
                i: 'to reach'
            },
            pt: {
                i: 'atingir'
            }
        }, {
            en: {
                i: 'to shoot'
            },
            pt: {
                i: 'atirar'
            },
            es: {
                i: 'disparar'
            }
        }, {
            en: {
                i: 'to activate'
            },
            pt: {
                i: 'ativar'
            }
        }, {
            en: {
                i: 'to stun'
            },
            pt: {
                i: 'atordoar'
            }
        }, {
            en: {
                i: 'to torment'
            },
            pt: {
                i: 'atormentar'
            }
        }, {
            en: {
                i: 'to attract'
            },
            pt: {
                i: 'atrair'
            }
        }, {
            en: {
                i: 'to pass through'
            },
            pt: {
                i: 'atravessar'
            }
        }, {
            en: {
                i: 'to assign'
            },
            pt: {
                i: 'atribuir'
            }
        }, {
            en: {
                i: 'to run over'
            },
            pt: {
                i: 'atropelar'
            }
        }, {
            en: {
                i: 'to update'
            },
            pt: {
                i: 'atualizar'
            }
        }, {
            en: {
                i: 'to act'
            },
            pt: {
                i: 'atuar'
            }
        }, {
            en: {
                i: 'to earn'
            },
            pt: {
                i: 'auferir'
            }
        }, {
            en: {
                i: 'to increase'
            },
            pt: {
                i: 'aumentar'
            },
            es: {
                i: 'aumentar'
            }
        }, {
            en: {
                i: 'to authenticate'
            },
            pt: {
                i: 'autenticar'
            }
        }, {
            en: {
                i: 'to automate'
            },
            pt: {
                i: 'automatizar'
            }
        }, {
            en: {
                i: 'to authorise'
            },
            pt: {
                i: 'autorizar'
            }
        }, {
            en: {
                i: 'to evaluate'
            },
            pt: {
                i: 'avaliar'
            },
            es: {
                i: 'evaluar'
            }
        }, {
            en: {
                i: 'to endorse'
            },
            pt: {
                i: 'avalizar'
            }
        }, {
            en: {
                i: 'to advance'
            },
            pt: {
                i: 'avançar'
            },
            es: {
                i: 'avanzar'
            }
        }, {
            en: {
                i: 'to break down'
            },
            pt: {
                i: 'avariar-se'
            },
            es: {
                i: 'changarse'
            }
        }, {
            en: {
                i: 'to venture'
            },
            pt: {
                i: 'aventurar'
            }
        }, {
            en: {
                i: 'to shame'
            },
            pt: {
                i: 'avergonhar'
            }
        }, {
            en: {
                i: 'to ascertain'
            },
            pt: {
                i: 'averiguar'
            }
        }, {
            en: {
                i: 'to warn'
            },
            pt: {
                i: 'avisar'
            },
            es: {
                i: 'avisar'
            }
        }, {
            en: {
                i: 'to enliven'
            },
            pt: {
                i: 'avivar'
            }
        }, {
            en: {
                i: 'to dance'
            },
            pt: {
                i: 'bailar'
            },
            es: {
                i: 'bailar'
            }
        }, {
            en: {
                i: 'to download'
            },
            pt: {
                i: 'baixar'
            }
        }, {
            en: {
                i: 'to swing'
            },
            pt: {
                i: 'balançar'
            }
        }, {
            en: {
                i: 'to balance'
            },
            pt: {
                i: 'balancear'
            },
            es: {
                i: 'balancear'
            }
        }, {
            en: {
                i: 'to stammer'
            },
            pt: {
                i: 'balbuciar'
            }
        }, {
            en: {
                i: 'to mark out'
            },
            pt: {
                i: 'balizar'
            }
        }, {
            en: {
                i: 'to bathe'
            },
            pt: {
                i: 'banhar'
            },
            es: {
                i: 'bañar'
            }
        }, {
            en: {
                i: 'to bathe'
            },
            pt: {
                i: 'banhar-se'
            },
            es: {
                i: 'bañar'
            }
        }, {
            en: {
                i: 'to shave'
            },
            pt: {
                i: 'barbear'
            }
        }, {
            en: {
                i: 'to spread'
            },
            pt: {
                i: 'barrar'
            }
        }, {
            en: {
                i: 'to base'
            },
            pt: {
                i: 'basear'
            }
        }, {
            en: {
                i: 'to suffice'
            },
            pt: {
                i: 'bastar'
            }
        }, {
            en: {
                i: 'to battle'
            },
            pt: {
                i: 'batalhar'
            }
        }, {
            en: {
                i: 'to hit'
            },
            pt: {
                i: 'bater'
            },
            es: {
                i: 'golpear'
            }
        }, {
            en: {
                i: 'to baptise'
            },
            pt: {
                i: 'batizar'
            }
        }, {
            en: {
                i: 'to drink'
            },
            pt: {
                i: 'beber'
            },
            es: {
                i: 'beber'
            }
        }, {
            en: {
                i: 'to kiss'
            },
            pt: {
                i: 'beijar'
            },
            es: {
                i: 'besar'
            }
        }, {
            en: {
                i: 'to smack'
            },
            pt: {
                i: 'beijocar'
            }
        }, {
            en: {
                i: 'to pinch'
            },
            pt: {
                i: 'beliscar'
            }
        }, {
            en: {
                i: 'to bless'
            },
            pt: {
                i: 'bendizer'
            }
        }, {
            en: {
                i: 'to benefit'
            },
            pt: {
                i: 'beneficiar'
            }
        }, {
            en: {
                i: 'to smear'
            },
            pt: {
                i: 'besuntar'
            }
        }, {
            en: {
                i: 'to swear'
            },
            pt: {
                i: 'blasfemar'
            },
            es: {
                i: 'jurar'
            }
        }, {
            en: {
                i: 'to shield'
            },
            pt: {
                i: 'blindar'
            }
        }, {
            en: {
                i: 'to block'
            },
            pt: {
                i: 'bloquear'
            },
            es: {
                i: 'bloquear'
            }
        }, {
            en: {
                i: 'to yawn'
            },
            pt: {
                i: 'bocejar'
            },
            es: {
                i: 'bostezar'
            }
        }, {
            en: {
                i: 'to float'
            },
            pt: {
                i: 'boiar'
            }
        }, {
            en: {
                i: 'to pump'
            },
            pt: {
                i: 'bombear'
            }
        }, {
            en: {
                i: 'to bubble'
            },
            pt: {
                i: 'borbulhar'
            }
        }, {
            en: {
                i: 'to embroider'
            },
            pt: {
                i: 'bordar'
            }
        }, {
            en: {
                i: 'to blur'
            },
            pt: {
                i: 'borrar'
            }
        }, {
            en: {
                i: 'to sketch'
            },
            pt: {
                i: 'bosquejar'
            }
        }, {
            en: {
                i: 'to throw'
            },
            pt: {
                i: 'botar'
            }
        }, {
            en: {
                i: 'to shout'
            },
            pt: {
                i: 'bradar'
            },
            es: {
                i: 'gritar'
            }
        }, {
            en: {
                i: 'to roar'
            },
            pt: {
                i: 'bramar'
            }
        }, {
            en: {
                i: 'to whiten'
            },
            pt: {
                i: 'branquear'
            }
        }, {
            en: {
                i: 'to break'
            },
            pt: {
                i: 'brecar'
            },
            es: {
                i: 'frenar'
            }
        }, {
            en: {
                i: 'to fight'
            },
            pt: {
                i: 'brigar'
            },
            es: {
                i: 'luchar'
            }
        }, {
            en: {
                i: 'to shine'
            },
            pt: {
                i: 'brilhar'
            }
        }, {
            en: {
                i: 'to play'
            },
            pt: {
                i: 'brincar'
            }
        }, {
            en: {
                i: 'to toast'
            },
            pt: {
                i: 'brindar'
            },
            es: {
                i: 'brindar'
            }
        }, {
            en: {
                i: 'to tan'
            },
            pt: {
                i: 'bronzear'
            }
        }, {
            en: {
                i: 'to sprout'
            },
            pt: {
                i: 'brotar'
            }
        }, {
            en: {
                i: 'to burnish'
            },
            pt: {
                i: 'brunir'
            }
        }, {
            en: {
                i: 'to flourish'
            },
            pt: {
                i: 'bulhar'
            }
        }, {
            en: {
                i: 'to search'
            },
            pt: {
                i: 'buscar'
            }
        }, {
            en: {
                i: 'to fit'
            },
            pt: {
                i: 'caber'
            },
            es: {
                i: 'caber'
            },
        }, {
            en: {
                i: 'to hunt'
            },
            pt: {
                i: 'caçar'
            }
        }, {
            en: {
                i: 'to lapse'
            },
            pt: {
                i: 'caducar'
            }
        }, {
            en: {
                i: 'to shit'
            },
            pt: {
                i: 'cagar'
            },
            es: {
                i: 'cagar'
            }
        }, {
            en: {
                i: 'to fall'
            },
            pt: {
                i: 'cair'
            },
            es: {
                i: 'caer',
                like: 'caer',
            },
        }, {
            en: {
                i: 'to shut up'
            },
            pt: {
                i: 'calar'
            }
        }, {
            en: {
                i: 'to shut up'
            },
            pt: {
                i: 'calar-se'
            }
        }, {
            en: {
                i: 'to trample'
            },
            pt: {
                i: 'calcar'
            }
        }, {
            en: {
                i: 'to calculate'
            },
            pt: {
                i: 'calcular'
            },
            es: {
                i: 'calcular'
            }
        }, {
            en: {
                i: 'to melt'
            },
            pt: {
                i: 'caldear'
            }
        }, {
            en: {
                i: 'to risk'
            },
            pt: {
                i: 'calhar'
            },
            es: {
                i: 'arriesgar'
            }
        }, {
            en: {
                i: 'to change'
            },
            pt: {
                i: 'cambiar'
            },
            es: {
                i: 'cambiar'
            }
        }, {
            en: {
                i: 'to walk'
            },
            pt: {
                i: 'caminhar'
            },
            es: {
                i: 'andar'
            }
        }, {
            en: {
                i: 'to mask'
            },
            pt: {
                i: 'camuflar'
            }
        }, {
            en: {
                i: 'to channel'
            },
            pt: {
                i: 'canalizar'
            }
        }, {
            en: {
                i: 'to cancel'
            },
            pt: {
                i: 'cancelar'
            },
            es: {
                i: 'anular'
            }
        }, {
            en: {
                i: 'to tire'
            },
            pt: {
                i: 'cansar'
            }
        }, {
            en: {
                i: 'to sing',
                'like': 'to speak'
            },
            pt: {
                i: 'cantar'
            },
            es: {
                i: 'cantar'
            }
        }, {
            en: {
                i: 'to hum'
            },
            pt: {
                i: 'cantarolar'
            }
        }, {
            en: {
                i: 'to capitulate'
            },
            pt: {
                i: 'capitular'
            }
        }, {
            en: {
                i: 'to capture'
            },
            pt: {
                i: 'captar'
            }
        }, {
            en: {
                i: 'to capture'
            },
            pt: {
                i: 'capturar'
            }
        }, {
            en: {
                i: 'to characterise'
            },
            pt: {
                i: 'caracterizar'
            }
        }, {
            en: {
                i: 'to tease'
            },
            pt: {
                i: 'cardar'
            }
        }, {
            en: {
                i: 'to lack'
            },
            pt: {
                i: 'carecer'
            }
        }, {
            en: {
                i: 'to moan'
            },
            pt: {
                i: 'carpir'
            }
        }, {
            en: {
                i: 'to load'
            },
            pt: {
                i: 'carregar'
            }
        }, {
            en: {
                i: 'to get married'
            },
            pt: {
                i: 'casar-se'
            }
        }, {
            en: {
                i: 'to punish'
            },
            pt: {
                i: 'castigar'
            }
        }, {
            en: {
                i: 'to castrate'
            },
            pt: {
                i: 'castrar'
            }
        }, {
            en: {
                i: 'to catalyse'
            },
            pt: {
                i: 'catalisar'
            }
        }, {
            en: {
                i: 'to catapult'
            },
            pt: {
                i: 'catapultar'
            }
        }, {
            en: {
                i: 'to categorise'
            },
            pt: {
                i: 'categorizar'
            }
        }, {
            en: {
                i: 'to captivate'
            },
            pt: {
                i: 'cativar'
            }
        }, {
            en: {
                i: 'to cause'
            },
            pt: {
                i: 'causar'
            }
        }, {
            en: {
                i: 'to dig'
            },
            pt: {
                i: 'cavar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'cear'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ceder'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'cegar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ceifar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'celebrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'censurar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'centelhar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'centralizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'centrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'cerrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'certificar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'cerzir'
            }
        }, {
            en: {
                i: 'to end'
            },
            pt: {
                i: 'cessar'
            },
            es: {
                i: 'finalizar'
            }
        }, {
            en: {
                i: 'to call'
            },
            pt: {
                i: 'chamar'
            },
            es: {
                i: 'llamar'
            }
        }, {
            en: {
                i: 'to be called'
            },
            pt: {
                i: 'chamar-se'
            },
            es: {
                i: 'llamarse'
            }
        }, {
            en: {
                i: 'to arrive'
            },
            pt: {
                i: 'chegar'
            },
            es: {
                i: 'llegar',
                like: 'llegar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'cheirar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'chocar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'choramingar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'chorar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'chover'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'chupar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'chuviscar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'cifrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'cingir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'cintilar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'circular'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'circuncidar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'circundar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'circunscrever'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'cismar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'citar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'civilizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'clamar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'clarificar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'classificar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'claudicar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'clicar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'coabitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'coagular'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'coalhar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'coar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'cobrar'
            }
        }, {
            en: {
                i: 'to cover'
            },
            pt: {
                i: 'cobrir'
            },
            es: {
                i: 'arropar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'coçar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'cochichar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'codificar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'coincidir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'colaborar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'colapsar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'colar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'colecionar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'colher'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'colocar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'colonizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'colorir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'coludir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'comandar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'combater'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'combinar'
            }
        }, {
            en: {
                i: 'to begin'
            },
            pt: {
                i: 'começar'
            },
            es: {
                i: 'empezar',
                like: 'empezar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'comemorar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'comentar'
            }
        }, {
            en: {
                i: 'to eat'
            },
            pt: {
                i: 'comer'
            },
            es: {
                i: 'comer',
                like: 'comer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'comercializar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'comerciar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'cometer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'comover'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'compadecer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'comparar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'comparecer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'compartilhar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'compensar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'competir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'compilar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'completar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'complicar'
            }
        }, {
            en: {
                i: 'to compose'
            },
            pt: {
                i: 'compor',
                'like': 'pôr'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'comportar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'comportar-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'comprar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'comprazer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'compreender'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'comprimir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'comprometer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'comprovar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'comunicar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'conceber'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'conceder'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'concentrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'concernir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'concertar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'conciliar'
            }
        }, {
            en: {
                i: 'to conclude'
            },
            pt: {
                i: 'concluir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'concordar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'concorrer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'concretizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'condenar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'condicionar'
            }
        }, {
            en: {
                i: 'to drive'
            },
            pt: {
                i: 'conduzir'
            },
            es: {
                i: 'conducir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'conectar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'confeccionar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'conferir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'confessar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'confiar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'configurar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'confinar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'confirmar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'confiscar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'confluir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'conformar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'confortar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'confrontar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'confundir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'confundir-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'congelar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'congregar'
            }
        }, {
            en: {
                i: 'to know'
            },
            pt: {
                i: 'conhecer'
            },
            es: {
                i: 'conocer',
                like: 'conocer'
            }
        }, {
            en: {
                i: 'to know yourself'
            },
            pt: {
                i: 'conhecer-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'conjecturar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'conjeturar'
            }
        }, {
            en: {
                i: 'to conjugate'
            },
            pt: {
                i: 'conjugar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'conquistar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'consagrar'
            }
        }, {
            en: {
                i: 'to get'
            },
            pt: {
                i: 'conseguir'
            },
            es: {
                i: 'obtener',
                like: 'tener'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'consentir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'conservar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'considerar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'consistir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'consolar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'consolidar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'constar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'constatar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'consternar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'constituir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'constranger'
            }
        }, {
            en: {
                i: 'to build'
            },
            pt: {
                i: 'construir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'consultar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'consumir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'contactar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'contagiar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'contaminar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'contar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'contemplar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'contender'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'conter'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'contestar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'continuar'
            }
        }, {
            en: {
                i: 'to contradict'
            },
            pt: {
                i: 'contradizer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'contrair'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'contrariar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'contrastar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'contratar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'contribuir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'controlar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'convencer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'convergir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'conversar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'converter'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'convidar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'convir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'conviver'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'convocar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'cooperar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'coordenar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'copiar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'copular'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'coroar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'correr'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'corresponder'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'corrigir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'corroborar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'corromper'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'cortar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'cortejar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'coser'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'costumar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'costurar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'cotar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'coxear'
            }
        }, {
            en: {
                i: 'to cook'
            },
            pt: {
                i: 'cozer'
            },
            es: {
                i: 'cocinar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'cozinhar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'cravar'
            }
        }, {
            en: {
                i: 'to believe'
            },
            pt: {
                i: 'crer',
                'like': 'crer'
            },
            es: {
                i: 'creer',
                like: 'creer',
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'crescer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'criar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'criticar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'crivar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'crucificar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'cruzar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'cuidar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'culminar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'culpar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'cultivar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'cumprimentar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'cumprir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'cumular'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'curar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'cursar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'curtir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'curvar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'custar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'custodiar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'danar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'dançar'
            }
        }, {
            en: {
                i: 'to give'
            },
            pt: {
                i: 'dar',
                'like': 'dar'
            },
            es: {
                i: 'dar',
                'like': 'dar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'debater'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'debilitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'debutar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'decapitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'decepcionar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'decidir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'declarar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'declinar'
            }
        }, {
            en: {
                i: 'to decompose'
            },
            pt: {
                i: 'decompor',
                'like': 'pôr'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'decorar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'decorrer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'dedicar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'dedicar-se'
            }
        }, {
            en: {
                i: 'to deduce'
            },
            pt: {
                i: 'deduzir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'defender'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'deferir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'definir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'degelar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'degolar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'degustar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'deitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'deitar-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'deixar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'delegar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'deliberar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'delinear'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'delinquir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'demitir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'demolir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'demonstrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'demorar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'denegar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'denegrir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'denunciar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'depender'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'deplorar'
            }
        }, {
            en: {
                i: 'to testify'
            },
            pt: {
                i: 'depor',
                'like': 'pôr'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'depositar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'depreciar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'deprimir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'depurar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'derivar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'derramar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'derrotar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'derrubar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'derruir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'desaconselhar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'desanimar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'desaparecer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'desbotar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'descalçar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'descansar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'descarregar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'descarrilar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'descartar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'descer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'descobrir'
            }
        }, {
            en: {
                i: 'to decompose'
            },
            pt: {
                i: 'descompor',
                'like': 'pôr'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'desconectar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'desconfiar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'descongelar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'descrever'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'desculpar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'desculpar-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'desdobrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'desejar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'desembocar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'desempenhar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'desenhar'
            }
        }, {
            en: {
                i: 'to do'
            },
            pt: {
                i: 'desfazer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'desfrutar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'designar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'desistir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'desligar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'deslizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'desmaiar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'desobedecer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'desolar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'despachar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'despedir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'despedir-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'desperdiçar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'despertar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'despertar-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'despir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'desprender'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'desprezar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'destacar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'destilar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'destinar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'destruir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'desviar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'detalhar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'detectar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'deter'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'deteriorar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'determinar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'detestar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'detonar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'devastar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'dever'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'devolver'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'devorar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'diagnosticar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'diferenciar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'diferir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'dificultar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'difundir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'digerir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'digitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'dignificar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'dilatar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'diluir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'diminuir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'dirigir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'discernir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'disciplinar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'discriminar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'discutir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'disfarçar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'disparar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'dispensar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'dispersar'
            }
        }, {
            en: {
                i: 'to dispose'
            },
            pt: {
                i: 'dispor',
                'like': 'pôr'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'dispor-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'disputar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'disseminar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'dissentir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'dissimular'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'dissolver'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'distanciar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'distinguir'
            }
        }, {
            en: {
                i: 'to distract'
            },
            pt: {
                i: 'distrair'
            }
        }, {
            en: {
                i: 'to get'
            },
            pt: {
                i: 'distrair-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'distribuir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ditar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'divergir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'divertir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'divertir-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'dividir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'divisar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'divorciar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'divorciar-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'divulgar'
            }
        }, {
            en: {
                i: 'to say'
            },
            pt: {
                i: 'dizer',
                'like': 'dizer'
            },
            es: {
                i: 'decir',
                like: 'decir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'doar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'dobrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'documentar'
            }
        }, {
            en: {
                i: 'to hurt'
            },
            pt: {
                i: 'doer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'domesticar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'dominar'
            }
        }, {
            en: {
                i: 'to sleep'
            },
            pt: {
                i: 'dormir',
                'like': 'dormir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'dramatizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'drenar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'duplicar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'durar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'duvidar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'edificar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'editar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'educar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'efetuar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ejacular'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'elaborar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'eleger'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'elevar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'eliminar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'elogiar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'eludir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'emagrecer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'emanar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'emancipar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'emascular'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'embarcar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'embeber'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'embelezar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'embrulhar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'embruxar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'emendar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'emergir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'emigrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'emitir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'emocionar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'emparelhar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'empatar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'empenhar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'empenhar-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'empreender'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'empregar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'emprestar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'empurrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'enaltecer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'encaminhar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'encantar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'encarar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'encarcerar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'encarregar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'encender'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'encetar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'encher'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'encolher'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'encomendar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'encontrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'encontrar-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'encorajar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'encostar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'encurtar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'endoidecer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'enfeitiçar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'enfermar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'enfiar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'enfocar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'enforcar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'enfrentar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'enganar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'enganchar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'engolir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'engordar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'engraxar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'enjoar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'enlaçar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'enlevar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'enredar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'enriquecer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'enrolar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ensaiar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ensinar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'entediar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'entediar-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'entender'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'enterrar'
            }
        }, {
            en: {
                i: 'to enter'
            },
            pt: {
                i: 'entrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'entregar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'entreter'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'entreter-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'entrever'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'entrevistar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'entristecer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'entupir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'entusiasmar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'entusiasmar-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'enumerar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'enunciar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'envelhecer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'envenenar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'envergonhar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'envergonhar-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'enviar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'envolver'
            }
        }, {
            en: {
                i: 'to rinse off'
            },
            pt: {
                i: 'enxaguar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'enxergar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'enxugar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'equiparar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'equivaler'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'equivocar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'equivocar-se'
            }
        }, {
            en: {
                i: 'to lift'
            },
            pt: {
                i: 'erguer'
            },
            es: {
                i: 'alzar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'erigir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'errar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'escalar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'escapar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'escavar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'esclarecer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'escolher'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'esconder'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'esconder-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'escorregar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'escorrer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'escovar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'escrever'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'escusar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'escusar-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'escutar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'esfoliar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'esfregar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'esfriar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'esfumar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'esgotar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'esmagar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'espalhar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'espantar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'espavorir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'especializar-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'especificar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'especular'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'esperar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'espevitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'espiar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'espionar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'espirrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'espreitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'espremer'
            }
        }, {
            en: {
                i: 'to forget'
            },
            pt: {
                i: 'esquecer'
            },
            es: {
                i: 'olvidar'
            }
        }, {
            en: {
                i: 'to forget'
            },
            pt: {
                i: 'esquecer-se'
            },
            es: {
                i: 'olvidar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'esquentar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'esquiar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'esquilar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'esquivar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'estabelecer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'estacionar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'estalar'
            }
        }, {
            en: {
                i: 'to be'
            },
            pt: {
                i: 'estar',
                'like': 'estar'
            },
            es: {
                i: 'estar',
                'like': 'estar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'estender'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'esterilizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'estigmatizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'estimar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'estimular'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'estipular'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'estirar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'estourar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'estragar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'estrangular'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'estranhar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'estrear'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'estrelar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'estremecer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'estressar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'estudar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'estufar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'esvaziar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'evacuar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'evadir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'evaporar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'evitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'evoluir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'evolver'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'exagerar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'exalar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'examinar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'exasperar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'exceder'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'exceler'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'exclamar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'excluir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'executar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'exercer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'exibir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'exigir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'eximir'
            }
        }, {
            en: {
                i: 'to exist'
            },
            pt: {
                i: 'existir'
            },
            es: {
                i: 'existir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'exonerar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'expandir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'expatriar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'expedir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'expelir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'experimentar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'expirar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'explicar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'explodir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'explorar'
            }
        }, {
            en: {
                i: 'to expose'
            },
            pt: {
                i: 'expor',
                'like': 'pôr'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'exportar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'expressar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'exprimir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'expulsar'
            }
        }, {
            en: {
                i: 'to strain'
            },
            pt: {
                i: 'extenuar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'exterminar'
            }
        }, {
            en: {
                i: 'to extinguish'
            },
            pt: {
                i: 'extinguir'
            }
        }, {
            en: {
                i: 'to extort'
            },
            pt: {
                i: 'extorquir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'extraditar'
            }
        }, {
            en: {
                i: 'to extract'
            },
            pt: {
                i: 'extrair'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fabricar'
            },
            es: {
                i: 'fabricar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'facilitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fagocitar'
            }
        }, {
            en: {
                i: 'to speak',
                'like': 'to speak'
            },
            pt: {
                i: 'falar',
                'like': 'falar'
            },
            es: {
                i: 'hablar',
                like: 'hablar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'falecer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'falhar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'falir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'falsear'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'falsificar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'faltar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fanfarronar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fantasiar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fartar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fascinar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fatigar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'faturar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'favorecer'
            }
        }, {
            en: {
                i: 'to do'
            },
            pt: {
                i: 'fazer',
                'like': 'fazer'
            },
            es: {
                i: 'hacer',
                like: 'hacer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fechar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'feder'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'felicitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ferir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fertilizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ferver'
            }
        }, {
            en: {
                i: 'to stay'
            },
            pt: {
                i: 'ficar'
            },
            es: {
                i: 'quedar',
                like: 'quedar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fichar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'figurar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'filmar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'filosofar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'filtrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'finalizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'financiar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fincar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fingir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'firmar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fixar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'flectir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'flertar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'flexibilizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'flexionar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'florescer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'florir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fluir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'flutuar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'focalizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'focar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'foder'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'folhear'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fomentar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'forçar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'formalizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'formar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'formular'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fornear'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fornecer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fornicar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fortalecer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fortificar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fotocopiar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fotografar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fracassar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fraternizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fraturar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'frear'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'frequentar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'frigir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fritar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'frustrar'
            }
        }, {
            en: {
                i: 'to run away'
            },
            pt: {
                i: 'fugir'
            },
            es: {
                i: 'huir'
            },
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fumar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fumigar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'funcionar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fundar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fundir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'furar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'fusionar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'gaguejar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'galopar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'galvanizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ganhar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'garantir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'gastar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'gelar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'gemer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'generalizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'gerar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'gerir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'gesticular'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'girar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'glorificar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'golpear'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'gostar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'governar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'gozar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'gracejar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'graduar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'granizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'gratificar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'gravar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'gritar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'grulhar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'grunhir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'guardar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'guiar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'guisar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'habitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'harmonizar'
            }
        }, {
            en: {
                i: 'to have'
            },
            pt: {
                i: 'haver',
                'like': 'haver'
            },
            es: {
                i: 'haber'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'herdar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'hesitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'hidratar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'hipnotizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'horrorizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'hospedar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'hospitalizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'humilhar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'idealizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'idear'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'identificar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ignorar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'igualar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'iludir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'iluminar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ilusionar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ilustrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'imaginar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'imaginar-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'imergir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'imigrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'imiscuir-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'imitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'impedir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'impelir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'implantar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'implementar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'implicar'
            }
        }, {
            en: {
                i: 'to import'
            },
            pt: {
                i: 'impor',
                'like': 'pôr'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'importar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'impressionar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'imprimir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'improvisar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'impugnar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'imunizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'inalar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'inaugurar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'incendiar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'inchar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'incidir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'incinerar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'inclinar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'incluir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'incoar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'incomodar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'incorporar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'incorrer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'incrementar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'incriminar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'incubar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'indagar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'indicar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'indignar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'individualizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'industrializar'
            }
        }, {
            en: {
                i: 'to indeuc'
            },
            pt: {
                i: 'induzir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'infectar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'inferir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'infetar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'infiltrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'inflamar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'inflar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'infligir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'influenciar'
            }
        }, {
            en: {
                i: 'to influence'
            },
            pt: {
                i: 'influir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'informar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'informar-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'infringir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'infundir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ingerir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ingressar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'inibir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'iniciar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'injetar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'inocular'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'inovar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'inquirir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'inscrever'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'inscrever-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'inserir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'insinuar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'insistir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'inspecionar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'inspirar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'instalar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'instigar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'instituir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'instruir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'insultar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'integrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'intentar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'intercambiar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'interceder'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'interceptar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'intercetar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'interessar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'interessar-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'interferir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'internar'
            }
        }, {
            en: {
                i: 'to interpose'
            },
            pt: {
                i: 'interpor',
                'like': 'pôr'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'interpretar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'interrogar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'interromper'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'intervir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'intimidar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'intoxicar'
            }
        }, {
            en: {
                i: 'to introduce'
            },
            pt: {
                i: 'introduzir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'intuir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'inundar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'invadir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'invalidar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'invejar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'inventar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'inverter'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'investigar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'investir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'invitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'invocar'
            }
        }, {
            en: {
                i: 'to go'
            },
            pt: {
                i: 'ir',
                like: 'ir'
            },
            es: {
                i: 'ir',
                like: 'ir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ir-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'irmanar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'irradiar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'irrigar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'irritar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'irromper'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'isolar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'jantar'
            }
        }, {
            en: {
                i: 'to lie'
            },
            pt: {
                i: 'jazer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'jogar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'julgar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'juntar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'jurar'
            }
        }, {
            en: {
                i: 'to juxtapose'
            },
            pt: {
                i: 'justapor',
                'like': 'pôr'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'justificar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'lactar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ladrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'lamber'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'lambiscar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'lamentar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'lamentar-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'lançar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'lanchar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'largar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'latir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'lavar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'legalizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'legar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'legislar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'legitimar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'lembrar'
            }
        }, {
            en: {
                i: 'to remember'
            },
            pt: {
                i: 'lembrar-se'
            }
        }, {
            en: {
                i: 'to read'
            },
            pt: {
                i: 'ler',
                'like': 'ler'
            },
            es: {
                i: 'leer',
                like: 'leer',
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'levantar'
            }
        }, {
            en: {
                i: 'to stand up'
            },
            pt: {
                i: 'levantar-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'levar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'liberar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'libertar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'licenciar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'lidar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'liderar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ligar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'limitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'limpar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'linchar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'liquefazer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'liquidar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'litigar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'livrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'localizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'lograr'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'louvar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'lubrificar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'lucrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'lutar'
            }
        }, {
            en: {
                i: 'to shine'
            },
            pt: {
                i: 'luzir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'machucar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'madrugar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'madurar'
            }
        }, {
            en: {
                i: 'to badmouth'
            },
            pt: {
                i: 'maldizer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'malquerer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'maltratar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'manchar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'mandar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'manejar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'manifestar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'manipular'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'manobrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'manter'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'manufacturar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'manufaturar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'maquiar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'maquiar-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'maravilhar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'marcar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'marchar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'marear'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'mastigar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'masturbar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'matar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'mediar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'medicar'
            }
        }, {
            en: {
                i: 'to measure'
            },
            pt: {
                i: 'medir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'meditar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'melhorar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'memorizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'mencionar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'menosprezar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'menstruar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'mentir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'merecer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'merendar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'mergulhar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'meter'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'mexer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'miar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'migrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'mijar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'mimar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'minguar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'mirar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'mistificar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'misturar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'mitigar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'mobiliar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'mobilizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'modelar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'moderar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'modernizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'modificar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'modular'
            }
        }, {
            en: {
                i: 'to grind'
            },
            pt: {
                i: 'moer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'molestar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'molhar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'montar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'morar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'morder'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'morrer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'mostrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'motivar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'mover'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'mudar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'multar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'multiplicar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'murmurar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'mutilar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'nadar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'narrar'
            }
        }, {
            en: {
                i: 'to be born'
            },
            pt: {
                i: 'nascer'
            },
            es: {
                i: 'nacer'
            },
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'naturalizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'naufragar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'navegar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'necessitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'negar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'negociar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'neutralizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'nevar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'neviscar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'nivelar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'nomear'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'notar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'notificar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'numerar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'nutrir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'obedecer'
            }
        }, {
            en: {
                i: 'to slope'
            },
            pt: {
                i: 'obliquar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'obrigar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'observar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'obstruir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'obter'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ocorrer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ocultar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ocupar'
            }
        }, {
            en: {
                i: 'to hate'
            },
            pt: {
                i: 'odiar'
            },
            es: {
                i: 'odiar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ofender'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'oferecer'
            }
        }, {
            en: {
                i: 'to look'
            },
            pt: {
                i: 'olhar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'olvidar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'omitir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'operar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'opinar'
            }
        }, {
            en: {
                i: 'to oppose'
            },
            pt: {
                i: 'opor',
                'like': 'pôr'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'optar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'orçar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ordenar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ordenhar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'organizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'orientar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'originar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ornar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'orquestrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'oscilar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ousar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'outorgar'
            }
        }, {
            en: {
                i: 'to hear'
            },
            pt: {
                i: 'ouvir',
                'like': 'ouvir'
            },
            es: {
                i: 'oír',
                like: 'oír'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ovular'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'oxidar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'oxigenar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'pactuar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'padecer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'pagar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'palpitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'palrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'paquerar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'parabenizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'parafrasear'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'paralisar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'parar'
            }
        }, {
            en: {
                i: 'to seem'
            },
            pt: {
                i: 'parecer'
            },
            es: {
                i: 'parecer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'parir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'parodiar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'participar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'partilhar'
            }
        }, {
            en: {
                i: 'to leave'
            },
            pt: {
                i: 'partir',
                'like': 'partir'
            },
            es: {
                i: 'dejar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'pasmar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'passar'
            }
        }, {
            en: {
                i: 'to walk'
            },
            pt: {
                i: 'passear'
            },
            es: {
                i: 'andar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'patinar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'pausar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'pedalar'
            }
        }, {
            en: {
                i: 'to ask'
            },
            pt: {
                i: 'pedir',
                'like': 'pedir'
            },
            es: {
                i: 'preguntar'
            }
        }, 
        {
            en: {
                i: 'to ask for'
            },
            es: {
                i: 'pedir',
                like: 'pedir',
            }
        },
        {
            en: {
                i: 'to '
            },
            pt: {
                i: 'pegar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'pender'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'pendurar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'peneirar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'penetrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'penhorar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'pensar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'pentear'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'pentear-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'perceber'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'percutir'
            }
        }, {
            en: {
                i: 'to lose'
            },
            pt: {
                i: 'perder'
            },
            es: {
                i: 'perder',
                like: 'perder'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'perdoar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'perfeccionar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'perfumar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'perfurar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'perguntar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'permanecer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'permitir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'perpetuar'
            }
        }, {
            en: {
                i: 'to stalk'
            },
            pt: {
                i: 'perseguir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'perseverar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'persistir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'personalizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'persuadir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'pertencer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'pesar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'pescar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'pesquisar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'petiscar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'picar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'pintar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'piorar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'pisar'
            }
        }, {
            en: {
                i: 'to soar'
            },
            pt: {
                i: 'planar'
            }
        }, {
            en: {
                i: 'to plan'
            },
            pt: {
                i: 'planear'
            },
            es: {
                i: 'planear'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'planificar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'plantar'
            }
        }, {
            en: {
                i: 'to be able to'
            },
            pt: {
                i: 'poder',
                'like': 'poder'
            },
            es: {
                i: 'poder',
                'like': 'poder'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'polarizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'polinizar'
            }
        }, {
            en: {
                i: 'to polish'
            },
            pt: {
                i: 'polir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'poluir'
            }
        }, {
            en: {
                i: 'to put'
            },
            pt: {
                i: 'pôr',
                'like': 'pôr'
            },
            es: {
                i: 'poner',
                like: 'poner'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'posicionar'
            }
        }, {
            en: {
                i: 'to postpone'
            },
            pt: {
                i: 'pospor',
                'like': 'pôr'
            },
            es: {
                i: 'aplazar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'possibilitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'possuir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'postular'
            }
        }, {
            en: {
                i: 'to enhance'
            },
            pt: {
                i: 'potenciar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'poupar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'pousar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'praticar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'preceder'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'precipitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'precisar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'predicar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'predominar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'preencher'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'preferir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'pregar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'prejudicar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'prejulgar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'premiar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'prender'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'preocupar-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'preparar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'preparar-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'prescrever'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'preservar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'presidir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'pressentir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'pressionar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'prestar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'presumir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'pretender'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'prevalecer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'prevenir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'prever'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'principiar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'privar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'proceder'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'processar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'proclamar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'procrastinar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'procurar'
            }
        }, {
            en: {
                i: 'to produce'
            },
            pt: {
                i: 'produzir'
            },
            es: {
                i: 'producir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'prognosticar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'programar'
            }
        }, {
            en: {
                i: 'to get along'
            },
            pt: {
                i: 'progredir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'proibir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'proliferar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'prolongar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'prometer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'promover'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'pronunciar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'propagar'
            }
        }, {
            en: {
                i: 'to propose'
            },
            pt: {
                i: 'propor',
                'like': 'pôr'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'proporcionar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'prosseguir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'protagonizar'
            }
        }, {
            en: {
                i: 'to protect'
            },
            pt: {
                i: 'proteger'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'protestar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'provar'
            }
        }, {
            en: {
                i: 'to provide'
            },
            pt: {
                i: 'prover'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'provir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'provocar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'publicar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'publicitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'puir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'pular'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'punçar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'punir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'purificar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'puxar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'qualificar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'quantificar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'quebrantar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'quebrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'queimar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'queixar-se'
            }
        }, {
            en: {
                i: 'to want'
            },
            pt: {
                i: 'querer',
                'like': 'querer'
            },
            es: {
                i: 'querer',
                'like': 'querer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'questionar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'radiar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'raiar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ralar'
            }
        }, {
            en: {
                i: 'to creak'
            },
            pt: {
                i: 'ranger'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'raptar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'rasgar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'raspar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'reabilitar'
            }
        }, {
            en: {
                i: 'to react'
            },
            pt: {
                i: 'reagir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'realizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'rebelar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'rebelar-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'rebentar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'rebobinar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'rebocar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'recapitular'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'recarregar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'recear'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'receber'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'reciclar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'reciprocar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'recitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'reclamar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'recolher'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'recomeçar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'recomendar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'recompensar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'reconciliar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'reconhecer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'reconquistar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'reconstruir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'recordar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'recorrer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'recrutar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'recuperar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'recusar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'redigir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'redistribuir'
            }
        }, {
            en: {
                i: 'to reduce'
            },
            pt: {
                i: 'reduzir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'refazer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'referir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'refletir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'reflexionar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'refogar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'reforçar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'reformar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'refugiar-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'refundir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'regalar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'regenerar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'reger'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'registar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'registrar-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'regressar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'regular'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'reinar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'reiniciar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'reintegrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'rejeitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'relacionar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'relatar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'relativizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'relaxar-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'relegar'
            }
        }, {
            en: {
                i: 'to shine'
            },
            pt: {
                i: 'reluzir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'remar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'remunerar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'renascer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'render'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'renovar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'renunciar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'reparar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'repatriar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'repelir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'repercutir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'repetir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'replicar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'representar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'reprimir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'reprochar'
            }
        }, {
            en: {
                i: 'to reproduce'
            },
            pt: {
                i: 'reproduzir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'requerer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'requisitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'reservar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'residir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'resistir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'resmungar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'resolver'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'respeitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'respirar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'responder'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ressaltar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'restabelecer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'restar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'restaurar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'restituir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'restringir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'resultar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'resumir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'reter'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'retificar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'retirar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'retocar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'retornar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'retroceder'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'reunir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'revalidar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'revelar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'rever'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'revisar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'revogar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'rezar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ridicularizar'
            }
        }, {
            en: {
                i: 'to laugh'
            },
            pt: {
                i: 'rir'
            },
            es: {
                i: 'reír',
                like: 'reír',
            },
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'riscar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'rivalizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'roçar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'rociar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'rodar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'rodear'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'rogar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'rolar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'romper'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'roncar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'rondar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'roubar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'rugir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ruminar'
            }
        }, {
            en: {
                i: 'to know'
            },
            pt: {
                i: 'saber',
                'like': 'saber'
            }, es: {
                i: 'saber',
                'like': 'saber'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'sabotar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'sacar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'saciar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'sacrificar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'sacudir'
            }
        }, {
            en: {
                i: 'to go out'
            },
            pt: {
                i: 'sair'
            },
            es: {
                i: 'salir',
                like: 'salir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'salgar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'salientar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'salpicar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'saltar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'salvaguardar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'salvar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'sangrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'saquear'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'satirizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'satisfazer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'saturar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'saudar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'secar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'secularizar'
            }
        }, {
            en: {
                i: 'to seduce'
            },
            pt: {
                i: 'seduzir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'segar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'segmentar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'segregar'
            }
        }, {
            en: {
                i: 'to follow'
            },
            pt: {
                i: 'seguir',
                'like': 'seguir'
            },
            es: {
                i: 'seguir',
                'like': 'seguir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'segurar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'selecionar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'semear'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'sentar-se'
            }
        }, {
            en: {
                i: 'to feel'
            },
            pt: {
                i: 'sentir'
            },
            es: {
                i: 'sentir',
                like: 'sentir'
            }
        }, {
            en: {
                i: 'to be affected'
            },
            pt: {
                i: 'sentir-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'separar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'separar-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'sepultar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'sequestrar'
            }
        }, {
            en: {
                i: 'to be',
                'like': 'to be'
            },
            pt: {
                i: 'ser',
                'like': 'ser'
            },
            es: {
                i: 'ser',
                'like': 'ser'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'serrar'
            }
        }, {
            en: {
                i: 'to serve'
            },
            pt: {
                i: 'servir'
            },
            es: {
                i: 'servir'
            },
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'significar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'simbolizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'simpatizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'simplificar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'simular'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'sincopar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'sincronizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'sindicar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'sintetizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'sintonizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'situar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'soar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'sobrar'
            }
        }, {
            en: {
                i: 'to stand out'
            },
            pt: {
                i: 'sobressair'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'sobreviver'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'soçobrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'socorrer'
            }
        }, {
            en: {
                i: 'to usually be'
            },
            pt: {
                i: 'soer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'sofrer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'soletrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'solicitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'soltar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'soluçar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'solucionar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'somar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'sonhar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'soprar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'sorrir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'sortear'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'sossegar'
            }
        }, {
            en: {
                i: 'to sweat'
            },
            pt: {
                i: 'suar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'suavizar'
            }
        }, {
            en: {
                i: 'to climb'
            },
            pt: {
                i: 'subir',
                'like': 'subir'
            },
            es: {
                i: 'subir',
                'like': 'subir'
            },
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'subjugar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'sublinhar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'submergir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'submeter'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'subministrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'subordinar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'subscrever'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'substanciar'
            }
        }, {
            en: {
                i: 'to substitute'
            },
            pt: {
                i: 'substituir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'suceder'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'sucumbir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'sufocar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'sugerir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'sujar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'sujeitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'sumir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'superar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'supervisar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'suplicar'
            }
        }, {
            en: {
                i: 'to suppose'
            },
            pt: {
                i: 'supor',
                'like': 'pôr'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'suportar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'suprimir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'suprir'
            }
        }, {
            en: {
                i: 'to arise'
            },
            pt: {
                i: 'surgir'
            },
            es: {
                i: 'surgir'
            },
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'surpreender'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'suscitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'suspeitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'suspender'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'suspirar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'sussurrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'sustentar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'suster'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'tamisar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'tanger'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'tardar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'tartamudear'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'tatuar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'taxar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'tecer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'teclar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'teimar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'telefonar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'telegrafar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'temer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'temperar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'tender'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'tentar'
            }
        }, {
            en: {
                i: 'to have',
            },
            pt: {
                i: 'ter',
                'like': 'ter'
            },
            es: {
                i: 'tener',
                'like': 'tener'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'terminar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'tesar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'testar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'tingir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'tinir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'tirar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'titular'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'tocar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'tolerar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'tomar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'tombar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'torcer'
            }
        }, {
            en: {
                i: 'to make'
            },
            pt: {
                i: 'tornar'
            }
        }, {
            en: {
                i: 'to become'
            },
            pt: {
                i: 'tornar-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'torrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'torturar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'tossir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'tostar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'trabalhar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'traçar'
            }
        }, {
            en: {
                i: 'to translate'
            },
            pt: {
                i: 'traduzir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'tragar'
            }
        }, {
            en: {
                i: 'to betray'
            },
            pt: {
                i: 'trair'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'tramar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'transcorrer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'transcrever'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'transferir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'transformar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'transigir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'transladar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'transmitir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'transpirar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'transplantar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'transportar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'tratar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'trautear'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'travar'
            }
        }, {
            en: {
                i: 'to bring'
            },
            pt: {
                i: 'trazer',
                'like': 'trazer'
            },
            es: {
                i: 'traer',
                'like': 'traer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'treinar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'tremer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'triangular'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'tricotar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'trinchar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'triturar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'triunfar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'troar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'trocar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'tropeçar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'uivar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ultrapassar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ungir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'unificar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'unir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'urdir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'urgir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'urinar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'usar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'utilizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'vacilar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'vacinar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'vagir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'valer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'validar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'valorar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'valorizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'vaporizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'variar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'varrer'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'vegetar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'velar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'vencer'
            }
        }, {
            en: {
                i: 'to sell'
            },
            pt: {
                i: 'vender',
                'like': 'vender'
            },
            es: {
                i: 'vender'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'venerar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ventar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'ventilar'
            }
        }, {
            en: {
                i: 'to see'
            },
            pt: {
                i: 'ver',
                'like': 'ver'
            },
            es: {
                i: 'ver',
                'like': 'ver'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'veranear'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'verificar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'verter'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'vestir'
            }
        }, {
            en: {
                i: 'to get dressed'
            },
            pt: {
                i: 'vestir-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'viajar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'vibrar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'vigiar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'vincular'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'vindicar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'violar'
            }
        }, {
            en: {
                i: 'to come'
            },
            pt: {
                i: 'vir',
                'like': 'vir'
            },
            es: {
                i: 'venir',
                'like': 'venir'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'virar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'virar-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'visar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'visitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'visualizar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'viver'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'voar'
            }
        }, {
            en: {
                i: 'to come back'
            },
            pt: {
                i: 'voltar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'voltear'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'volver'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'vomitar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'votar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'zangar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'zangar-se'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'zarpar'
            }
        }, {
            en: {
                i: 'to '
            },
            pt: {
                i: 'zombar'
            }
        },
        {
            en: {
                i: 'to supply'
            },
            es: {
                i: 'abastar'
            }
        }, 
        {
            en: {
                i: 'to get alarmed'
            },
            es: {
                i: 'alarmarse'
            }
        }, 
        {
            en: {
                i: 'to be glad'
            },
            es: {
                i: 'alegrarse'
            }
        }, 
        {
            en: {
                i: 'to move away'
            },
            es: {
                i: 'alejar'
            }
        }, 
        //{
        //     en: {
        //         i: 'to ease'
        //     },
        //     es: {
        //         i: 'aliviar'
        //     }
        // }, {
        //     en: {
        //         i: 'to lodge'
        //     },
        //     es: {
        //         i: 'alojar'
        //     }
        // }, {
        //     en: {
        //         i: 'to be lodged'
        //     },
        //     es: {
        //         i: 'alojarse'
        //     }
        // }, {
        //     en: {
        //         i: 'to light up'
        //     },
        //     es: {
        //         i: 'alumbrar'
        //     }
        // }, {
        //     en: {
        //         i: 'to lift'
        //     },
        //     es: {
        //         i: 'alzar'
        //     }
        // }, {
        //     en: {
        //         i: 'to love'
        //     },
        //     es: {
        //         i: 'amar'
        //     }
        // }, {
        //     en: {
        //         i: 'to aspire to'
        //     },
        //     es: {
        //         i: 'ambicionar'
        //     }
        // }, {
        //     en: {
        //         i: 'to threaten'
        //     },
        //     es: {
        //         i: 'amenazar'
        //     }
        // }, {
        //     en: {
        //         i: 'to analyse'
        //     },
        //     es: {
        //         i: 'analizar'
        //     }
        // }, {
        //     en: {
        //         i: 'to walk'
        //     },
        //     es: {
        //         i: 'andar'
        //     }
        // }, {
        //     en: {
        //         i: 'to cheer up'
        //     },
        //     es: {
        //         i: 'animar'
        //     }
        // }, {
        //     en: {
        //         i: 'to annotate'
        //     },
        //     es: {
        //         i: 'anotar'
        //     }
        // }, {
        //     en: {
        //         i: 'to cancel'
        //     },
        //     es: {
        //         i: 'anular'
        //     }
        // }, {
        //     en: {
        //         i: 'to announce'
        //     },
        //     es: {
        //         i: 'anunciar'
        //     }
        // }, {
        //     en: {
        //         i: 'to add'
        //     },
        //     es: {
        //         i: 'añadir'
        //     }
        // }, {
        //     en: {
        //         i: 'to turn off'
        //     },
        //     es: {
        //         i: 'apagar'
        //     }
        // }, {
        //     en: {
        //         i: 'to park'
        //     },
        //     es: {
        //         i: 'aparcar'
        //     }
        // }, {
        //     en: {
        //         i: 'to separate'
        //     },
        //     es: {
        //         i: 'apartar'
        //     }
        // }, {
        //     en: {
        //         i: 'to part'
        //     },
        //     es: {
        //         i: 'apartarse'
        //     }
        // }, {
        //     en: {
        //         i: 'to pile up'
        //     },
        //     es: {
        //         i: 'apilar'
        //     }
        // }, {
        //     en: {
        //         i: 'to flatten'
        //     },
        //     es: {
        //         i: 'aplastar'
        //     }
        // }, {
        //     en: {
        //         i: 'to applaud'
        //     },
        //     es: {
        //         i: 'aplaudir'
        //     }
        // }, {
        //     en: {
        //         i: 'to postpone'
        //     },
        //     es: {
        //         i: 'aplazar'
        //     }
        // }, {
        //     en: {
        //         i: 'to apply'
        //     },
        //     es: {
        //         i: 'aplicar'
        //     }
        // }, {
        //     en: {
        //         i: 'to make good use of'
        //     },
        //     es: {
        //         i: 'aprovechar'
        //     }
        // }, {
        //     en: {
        //         i: 'to use'
        //     },
        //     es: {
        //         i: 'aprovecharse'
        //     }
        // }, {
        //     en: {
        //         i: 'to take note'
        //     },
        //     es: {
        //         i: 'apuntar'
        //     }
        // }, {
        //     en: {
        //         i: 'to sign on'
        //     },
        //     es: {
        //         i: 'apuntarse'
        //     }
        // }, {
        //     en: {
        //         i: 'to stab'
        //     },
        //     es: {
        //         i: 'apuñalar'
        //     }
        // }, {
        //     en: {
        //         i: 'to file'
        //     },
        //     es: {
        //         i: 'archivar'
        //     }
        // }, {
        //     en: {
        //         i: 'to burn'
        //     },
        //     es: {
        //         i: 'arder'
        //     }
        // }, {
        //     en: {
        //         i: 'to fix up'
        //     },
        //     es: {
        //         i: 'arreglar'
        //     }
        // }, {
        //     en: {
        //         i: 'to arrest'
        //     },
        //     es: {
        //         i: 'arrestar'
        //     }
        // }, {
        //     en: {
        //         i: 'to risk'
        //     },
        //     es: {
        //         i: 'arriesgar'
        //     }
        // }, {
        //     en: {
        //         i: 'to throw'
        //     },
        //     es: {
        //         i: 'arrojar'
        //     }
        // }, {
        //     en: {
        //         i: 'to cover'
        //     },
        //     es: {
        //         i: 'arropar'
        //     }
        // }, {
        //     en: {
        //         i: 'to wrap o.s up'
        //     },
        //     es: {
        //         i: 'arroparse'
        //     }
        // }, {
        //     en: {
        //         i: 'to ruin'
        //     },
        //     es: {
        //         i: 'arruinar'
        //     }
        // }, {
        //     en: {
        //         i: 'to be ruined'
        //     },
        //     es: {
        //         i: 'arruinarse'
        //     }
        // }, {
        //     en: {
        //         i: 'to roast'
        //     },
        //     es: {
        //         i: 'asar'
        //     }
        // }, {
        //     en: {
        //         i: 'to clean up'
        //     },
        //     es: {
        //         i: 'asear'
        //     }
        // }, {
        //     en: {
        //         i: 'to tidy o.s up'
        //     },
        //     es: {
        //         i: 'asearse'
        //     }
        // }, {
        //     en: {
        //         i: 'to secure'
        //     },
        //     es: {
        //         i: 'asegurar'
        //     }
        // }, {
        //     en: {
        //         i: 'to be alike'
        //     },
        //     es: {
        //         i: 'asemejar'
        //     }
        // }, {
        //     en: {
        //         i: 'to be alike'
        //     },
        //     es: {
        //         i: 'asemejarse'
        //     }
        // }, {
        //     en: {
        //         i: 'to murder'
        //     },
        //     es: {
        //         i: 'asesinar'
        //     }
        // }, {
        //     en: {
        //         i: 'to advise'
        //     },
        //     es: {
        //         i: 'asesorar'
        //     }
        // }, {
        //     en: {
        //         i: 'to assimilate'
        //     },
        //     es: {
        //         i: 'asimilar'
        //     }
        // }, {
        //     en: {
        //         i: 'to attend'
        //     },
        //     es: {
        //         i: 'asistir'
        //     }
        // }, {
        //     en: {
        //         i: 'to associate'
        //     },
        //     es: {
        //         i: 'asociar'
        //     }
        // }, {
        //     en: {
        //         i: 'to frighten'
        //     },
        //     es: {
        //         i: 'asustar'
        //     }
        // }, {
        //     en: {
        //         i: 'to attack'
        //     },
        //     es: {
        //         i: 'atacar'
        //     }
        // }, {
        //     en: {
        //         i: 'to tie (up)'
        //     },
        //     es: {
        //         i: 'atar'
        //     }
        // }, {
        //     en: {
        //         i: 'to land'
        //     },
        //     es: {
        //         i: 'aterrizar'
        //     }
        // }, {
        //     en: {
        //         i: 'to terrify'
        //     },
        //     es: {
        //         i: 'aterrorizar'
        //     }
        // }, {
        //     en: {
        //         i: 'to trap'
        //     },
        //     es: {
        //         i: 'atrapar'
        //     }
        // }, {
        //     en: {
        //         i: 'to slow down'
        //     },
        //     es: {
        //         i: 'atrasar'
        //     }
        // }, {
        //     en: {
        //         i: 'to increase'
        //     },
        //     es: {
        //         i: 'aumentar'
        //     }
        // }, {
        //     en: {
        //         i: 'to advance'
        //     },
        //     es: {
        //         i: 'avanzar'
        //     }
        // }, {
        //     en: {
        //         i: 'to find out'
        //     },
        //     es: {
        //         i: 'averiguar'
        //     }
        // }, {
        //     en: {
        //         i: 'to warn'
        //     },
        //     es: {
        //         i: 'avisar'
        //     }
        // }, {
        //     en: {
        //         i: 'to help'
        //     },
        //     es: {
        //         i: 'ayudar'
        //     }
        // }, {
        //     en: {
        //         i: 'to dance'
        //     },
        //     es: {
        //         i: 'bailar'
        //     }
        // }, {
        //     en: {
        //         i: 'to lower'
        //     },
        //     es: {
        //         i: 'bajar'
        //     }
        // }, {
        //     en: {
        //         i: 'to balance'
        //     },
        //     es: {
        //         i: 'balancear'
        //     }
        // }, {
        //     en: {
        //         i: 'to bathe'
        //     },
        //     es: {
        //         i: 'bañar'
        //     }
        // }, {
        //     en: {
        //         i: 'to sweep'
        //     },
        //     es: {
        //         i: 'barrer'
        //     }
        // }, {
        //     en: {
        //         i: 'to drink'
        //     },
        //     es: {
        //         i: 'beber'
        //     }
        // }, {
        //     en: {
        //         i: 'to kiss'
        //     },
        //     es: {
        //         i: 'besar'
        //     }
        // }, {
        //     en: {
        //         i: 'to block'
        //     },
        //     es: {
        //         i: 'bloquear'
        //     }
        // }, {
        //     en: {
        //         i: 'to erase'
        //     },
        //     es: {
        //         i: 'borrar'
        //     }
        // }, {
        //     en: {
        //         i: 'to yawn'
        //     },
        //     es: {
        //         i: 'bostezar'
        //     }
        // }, {
        //     en: {
        //         i: 'to bounce'
        //     },
        //     es: {
        //         i: 'botar'
        //     }
        // }, {
        //     en: {
        //         i: 'to box'
        //     },
        //     es: {
        //         i: 'boxear'
        //     }
        // }, {
        //     en: {
        //         i: 'to toast'
        //     },
        //     es: {
        //         i: 'brindar'
        //     }
        // }, {
        //     en: {
        //         i: 'to joke'
        //     },
        //     es: {
        //         i: 'bromear'
        //     }
        // }, {
        //     en: {
        //         i: 'to dive'
        //     },
        //     es: {
        //         i: 'bucear'
        //     }
        // }, {
        //     en: {
        //         i: 'to look for'
        //     },
        //     es: {
        //         i: 'buscar'
        //     }
        // }, {
        //     en: {
        //         i: 'to shit'
        //     },
        //     es: {
        //         i: 'cagar'
        //     }
        // }, {
        //     en: {
        //         i: 'to calculate'
        //     },
        //     es: {
        //         i: 'calcular'
        //     }
        // }, {
        //     en: {
        //         i: 'to change'
        //     },
        //     es: {
        //         i: 'cambiar'
        //     }
        // }, {
        //     en: {
        //         i: 'to walk'
        //     },
        //     es: {
        //         i: 'caminar'
        //     }
        // }, {
        //     en: {
        //         i: 'to cancel'
        //     },
        //     es: {
        //         i: 'cancelar'
        //     }
        // }, {
        //     en: {
        //         i: 'to get tired'
        //     },
        //     es: {
        //         i: 'cansarse'
        //     }
        // }, {
        //     en: {
        //         i: 'to sing'
        //     },
        //     es: {
        //         i: 'cantar'
        //     }
        // }, {
        //     en: {
        //         i: 'to characterize'
        //     },
        //     es: {
        //         i: 'caracterizar'
        //     }
        // }, {
        //     en: {
        //         i: 'to marry'
        //     },
        //     es: {
        //         i: 'casar'
        //     }
        // }, {
        //     en: {
        //         i: 'to celebrate'
        //     },
        //     es: {
        //         i: 'celebrar'
        //     }
        // }, {
        //     en: {
        //         i: 'to have for supper'
        //     },
        //     es: {
        //         i: 'cenar'
        //     }
        // }, {
        //     en: {
        //         i: 'to certify'
        //     },
        //     es: {
        //         i: 'certificar'
        //     }
        // }, {
        //     en: {
        //         i: 'to break down'
        //     },
        //     es: {
        //         i: 'changarse'
        //     }
        // }, {
        //     en: {
        //         i: 'to blackmail'
        //     },
        //     es: {
        //         i: 'chantajear'
        //     }
        // }, {
        //     en: {
        //         i: 'to chat'
        //     },
        //     es: {
        //         i: 'charlar'
        //     }
        // }, {
        //     en: {
        //         i: 'to scream'
        //     },
        //     es: {
        //         i: 'chillar'
        //     }
        // }, {
        //     en: {
        //         i: 'to crash'
        //     },
        //     es: {
        //         i: 'chocar'
        //     }
        // }, {
        //     en: {
        //         i: 'to classify'
        //     },
        //     es: {
        //         i: 'clasificar'
        //     }
        // }, {
        //     en: {
        //         i: 'to charge'
        //     },
        //     es: {
        //         i: 'cobrar'
        //     }
        // }, {
        //     en: {
        //         i: 'to cook'
        //     },
        //     es: {
        //         i: 'cocinar'
        //     }
        // }, {
        //     en: {
        //         i: 'to coincide'
        //     },
        //     es: {
        //         i: 'coincidir'
        //     }
        // }, {
        //     en: {
        //         i: 'to collaborate'
        //     },
        //     es: {
        //         i: 'colaborar'
        //     }
        // }, {
        //     en: {
        //         i: 'to place'
        //     },
        //     es: {
        //         i: 'colocar'
        //     }
        // }, {
        //     en: {
        //         i: 'to combine'
        //     },
        //     es: {
        //         i: 'combinar'
        //     }
        // }, {
        //     en: {
        //         i: 'to comment'
        //     },
        //     es: {
        //         i: 'comentar'
        //     }
        // }, {
        //     en: {
        //         i: 'to commercialize'
        //     },
        //     es: {
        //         i: 'comercializar'
        //     }
        // }, {
        //     en: {
        //         i: 'to compare'
        //     },
        //     es: {
        //         i: 'comparar'
        //     }
        // }, {
        //     en: {
        //         i: 'to share'
        //     },
        //     es: {
        //         i: 'compartir'
        //     }
        // }, {
        //     en: {
        //         i: 'to complete'
        //     },
        //     es: {
        //         i: 'completar'
        //     }
        // }, {
        //     en: {
        //         i: 'to complicate'
        //     },
        //     es: {
        //         i: 'complicar'
        //     }
        // }, {
        //     en: {
        //         i: 'to behave'
        //     },
        //     es: {
        //         i: 'comportar'
        //     }
        // }, {
        //     en: {
        //         i: 'to buy'
        //     },
        //     es: {
        //         i: 'comprar'
        //     }
        // }, {
        //     en: {
        //         i: 'to understand'
        //     },
        //     es: {
        //         i: 'comprender'
        //     }
        // }, {
        //     en: {
        //         i: 'to communicate'
        //     },
        //     es: {
        //         i: 'comunicar'
        //     }
        // }, {
        //     en: {
        //         i: 'to concede'
        //     },
        //     es: {
        //         i: 'conceder'
        //     }
        // }, {
        //     en: {
        //         i: 'to concentrate'
        //     },
        //     es: {
        //         i: 'concentrar'
        //     }
        // }, {
        //     en: {
        //         i: 'to connect'
        //     },
        //     es: {
        //         i: 'conectar'
        //     }
        // }, {
        //     en: {
        //         i: 'to trust'
        //     },
        //     es: {
        //         i: 'confiar'
        //     }
        // }, {
        //     en: {
        //         i: 'to confirm'
        //     },
        //     es: {
        //         i: 'confirmar'
        //     }
        // }, {
        //     en: {
        //         i: 'to confuse'
        //     },
        //     es: {
        //         i: 'confundir'
        //     }
        // }, {
        //     en: {
        //         i: 'to convey'
        //     },
        //     es: {
        //         i: 'conllevar'
        //     }
        // }, {
        //     en: {
        //         i: 'to conserve'
        //     },
        //     es: {
        //         i: 'conservar'
        //     }
        // }, {
        //     en: {
        //         i: 'to consider'
        //     },
        //     es: {
        //         i: 'considerar'
        //     }
        // }, {
        //     en: {
        //         i: 'to consist of'
        //     },
        //     es: {
        //         i: 'consistir'
        //     }
        // }, {
        //     en: {
        //         i: 'to consolidate'
        //     },
        //     es: {
        //         i: 'consolidar'
        //     }
        // }, {
        //     en: {
        //         i: 'to consult'
        //     },
        //     es: {
        //         i: 'consultar'
        //     }
        // }, {
        //     en: {
        //         i: 'to consume'
        //     },
        //     es: {
        //         i: 'consumir'
        //     }
        // }, {
        //     en: {
        //         i: 'to enter in the accounts'
        //     },
        //     es: {
        //         i: 'contabilizar'
        //     }
        // }, {
        //     en: {
        //         i: 'to contact'
        //     },
        //     es: {
        //         i: 'contactar'
        //     }
        // }, {
        //     en: {
        //         i: 'to transmit'
        //     },
        //     es: {
        //         i: 'contagiar'
        //     }
        // }, {
        //     en: {
        //         i: 'to contaminate'
        //     },
        //     es: {
        //         i: 'contaminar'
        //     }
        // }, {
        //     en: {
        //         i: 'to contemplate'
        //     },
        //     es: {
        //         i: 'contemplar'
        //     }
        // }, {
        //     en: {
        //         i: 'to answer'
        //     },
        //     es: {
        //         i: 'contestar'
        //     }
        // }, {
        //     en: {
        //         i: 'to continue'
        //     },
        //     es: {
        //         i: 'continuar'
        //     }
        // }, {
        //     en: {
        //         i: 'to contrast'
        //     },
        //     es: {
        //         i: 'contrastar'
        //     }
        // }, {
        //     en: {
        //         i: 'to contract for'
        //     },
        //     es: {
        //         i: 'contratar'
        //     }
        // }, {
        //     en: {
        //         i: 'to control'
        //     },
        //     es: {
        //         i: 'controlar'
        //     }
        // }, {
        //     en: {
        //         i: 'to live together'
        //     },
        //     es: {
        //         i: 'convivir'
        //     }
        // }, {
        //     en: {
        //         i: 'to convoke'
        //     },
        //     es: {
        //         i: 'convocar'
        //     }
        // }, {
        //     en: {
        //         i: 'to cooperate'
        //     },
        //     es: {
        //         i: 'cooperar'
        //     }
        // }, {
        //     en: {
        //         i: 'to copy'
        //     },
        //     es: {
        //         i: 'copiar'
        //     }
        // }, {
        //     en: {
        //         i: 'to flirt'
        //     },
        //     es: {
        //         i: 'coquetear'
        //     }
        // }, {
        //     en: {
        //         i: 'to run'
        //     },
        //     es: {
        //         i: 'correr'
        //     }
        // }, {
        //     en: {
        //         i: 'to correspond'
        //     },
        //     es: {
        //         i: 'corresponder'
        //     }
        // }, {
        //     en: {
        //         i: 'to cut'
        //     },
        //     es: {
        //         i: 'cortar'
        //     }
        // }, {
        //     en: {
        //         i: 'to sew'
        //     },
        //     es: {
        //         i: 'coser'
        //     }
        // }, {
        //     en: {
        //         i: 'to create'
        //     },
        //     es: {
        //         i: 'crear'
        //     }
        // }, {
        //     en: {
        //         i: 'to believe'
        //     },
        //     es: {
        //         i: 'creer'
        //     }
        // }, {
        //     en: {
        //         i: 'to bring up'
        //     },
        //     es: {
        //         i: 'criar'
        //     }
        // }, {
        //     en: {
        //         i: 'to criticize'
        //     },
        //     es: {
        //         i: 'criticar'
        //     }
        // }, {
        //     en: {
        //         i: 'to cross'
        //     },
        //     es: {
        //         i: 'cruzar'
        //     }
        // }, {
        //     en: {
        //         i: 'to cover'
        //     },
        //     es: {
        //         i: 'cubrir'
        //     }
        // }, {
        //     en: {
        //         i: 'to question'
        //     },
        //     es: {
        //         i: 'cuestionar'
        //     }
        // }, {
        //     en: {
        //         i: 'to look after'
        //     },
        //     es: {
        //         i: 'cuidar'
        //     }
        // }, {
        //     en: {
        //         i: 'to blame'
        //     },
        //     es: {
        //         i: 'culpar'
        //     }
        // }, {
        //     en: {
        //         i: 'to cultivate'
        //     },
        //     es: {
        //         i: 'cultivar'
        //     }
        // }, {
        //     en: {
        //         i: 'to educate'
        //     },
        //     es: {
        //         i: 'culturizar'
        //     }
        // }, {
        //     en: {
        //         i: 'to fulfil'
        //     },
        //     es: {
        //         i: 'cumplir'
        //     }
        // }, {
        //     en: {
        //         i: 'to cure'
        //     },
        //     es: {
        //         i: 'curar'
        //     }
        // }, {
        //     en: {
        //         i: 'to glance at'
        //     },
        //     es: {
        //         i: 'curiosear'
        //     }
        // }, {
        //     en: {
        //         i: 'to damage'
        //     },
        //     es: {
        //         i: 'dañar'
        //     }
        // }, {
        //     en: {
        //         i: 'to owe'
        //     },
        //     es: {
        //         i: 'deber'
        //     }
        // }, {
        //     en: {
        //         i: 'to decide'
        //     },
        //     es: {
        //         i: 'decidir'
        //     }
        // }, {
        //     en: {
        //         i: 'to decide'
        //     },
        //     es: {
        //         i: 'dedicar'
        //     }
        // }, {
        //     en: {
        //         i: 'to deform'
        //     },
        //     es: {
        //         i: 'deformar'
        //     }
        // }
            , {
            en: {
                i: 'to leave'
            },
            es: {
                i: 'dejar'
            }
        }
        // }, {
        //     en: {
        //         i: 'to depend'
        //     },
        //     es: {
        //         i: 'depender'
        //     }
        // }, {
        //     en: {
        //         i: 'to depress'
        //     },
        //     es: {
        //         i: 'deprimir'
        //     }
        // }, {
        //     en: {
        //         i: 'to derive'
        //     },
        //     es: {
        //         i: 'derivar'
        //     }
        // }, {
        //     en: {
        //         i: 'to spill'
        //     },
        //     es: {
        //         i: 'derramar'
        //     }
        // }, {
        //     en: {
        //         i: 'to beat'
        //     },
        //     es: {
        //         i: 'derrotar'
        //     }
        // }, {
        //     en: {
        //         i: 'to challenge'
        //     },
        //     es: {
        //         i: 'desafiar'
        //     }
        // }, {
        //     en: {
        //         i: 'to develop'
        //     },
        //     es: {
        //         i: 'desarrollar'
        //     }
        // }, {
        //     en: {
        //         i: 'to have breakfast'
        //     },
        //     es: {
        //         i: 'desayunar'
        //     }
        // }, {
        //     en: {
        //         i: 'to rest'
        //     },
        //     es: {
        //         i: 'descansar'
        //     }
        // }, {
        //     en: {
        //         i: 'to unload'
        //     },
        //     es: {
        //         i: 'descargar'
        //     }
        // }, {
        //     en: {
        //         i: 'to decipher'
        //     },
        //     es: {
        //         i: 'descifrar'
        //     }
        // }, {
        //     en: {
        //         i: 'to describe'
        //     },
        //     es: {
        //         i: 'describir'
        //     }
        // }, {
        //     en: {
        //         i: 'to discover'
        //     },
        //     es: {
        //         i: 'descubrir'
        //     }
        // }, {
        //     en: {
        //         i: 'to neglect'
        //     },
        //     es: {
        //         i: 'descuidar'
        //     }
        // }, {
        //     en: {
        //         i: 'to desire'
        //     },
        //     es: {
        //         i: 'desear'
        //     }
        // }, {
        //     en: {
        //         i: 'to perform'
        //     },
        //     es: {
        //         i: 'desempeñar'
        //     }
        // }, {
        //     en: {
        //         i: 'to unscrew'
        //     },
        //     es: {
        //         i: 'desenroscar'
        //     }
        // }, {
        //     en: {
        //         i: 'to designate'
        //     },
        //     es: {
        //         i: 'designar'
        //     }
        // }, {
        //     en: {
        //         i: 'to desist'
        //     },
        //     es: {
        //         i: 'desistir'
        //     }
        // }, {
        //     en: {
        //         i: 'to undress'
        //     },
        //     es: {
        //         i: 'desnudar'
        //     }
        // }, {
        //     en: {
        //         i: 'to displace'
        //     },
        //     es: {
        //         i: 'desplazar'
        //     }
        // }, {
        //     en: {
        //         i: 'to despise'
        //     },
        //     es: {
        //         i: 'despreciar'
        //     }
        // }, {
        //     en: {
        //         i: 'to uncover'
        //     },
        //     es: {
        //         i: 'destapar'
        //     }
        // }, {
        //     en: {
        //         i: 'to smash'
        //     },
        //     es: {
        //         i: 'destrozar'
        //     }
        // }, {
        //     en: {
        //         i: 'to detest'
        //     },
        //     es: {
        //         i: 'detestar'
        //     }
        // }, {
        //     en: {
        //         i: 'to discuss'
        //     },
        //     es: {
        //         i: 'discutir'
        //     }
        // }, {
        //     en: {
        //         i: 'to enjoy'
        //     },
        //     es: {
        //         i: 'disfrutar'
        //     }
        // }, {
        //     en: {
        //         i: 'to annoy'
        //     },
        //     es: {
        //         i: 'disgustar'
        //     }
        // }, {
        //     en: {
        //         i: 'to shoot'
        //     },
        //     es: {
        //         i: 'disparar'
        //     }
        // }, {
        //     en: {
        //         i: 'to divide'
        //     },
        //     es: {
        //         i: 'dividir'
        //     }
        // }, {
        //     en: {
        //         i: 'to fold'
        //     },
        //     es: {
        //         i: 'doblar'
        //     }
        // }, {
        //     en: {
        //         i: 'to have a shower'
        //     },
        //     es: {
        //         i: 'ducharse'
        //     }
        // }, {
        //     en: {
        //         i: 'to doubt'
        //     },
        //     es: {
        //         i: 'dudar'
        //     }
        // }, {
        //     en: {
        //         i: 'to throw'
        //     },
        //     es: {
        //         i: 'echar'
        //     }
        // }, {
        //     en: {
        //         i: 'to educate'
        //     },
        //     es: {
        //         i: 'educar'
        //     }
        // }, {
        //     en: {
        //         i: 'to effect'
        //     },
        //     es: {
        //         i: 'efectuar'
        //     }
        // }, {
        //     en: {
        //         i: 'to execute'
        //     },
        //     es: {
        //         i: 'ejecutar'
        //     }
        // }, {
        //     en: {
        //         i: 'to elaborate'
        //     },
        //     es: {
        //         i: 'elaborar'
        //     }
        // }, {
        //     en: {
        //         i: 'to raise'
        //     },
        //     es: {
        //         i: 'elevar'
        //     }
        // }, {
        //     en: {
        //         i: 'to eliminate'
        //     },
        //     es: {
        //         i: 'eliminar'
        //     }
        // }, {
        //     en: {
        //         i: 'to praise'
        //     },
        //     es: {
        //         i: 'elogiar'
        //     }
        // }, {
        //     en: {
        //         i: 'to get drunk'
        //     },
        //     es: {
        //         i: 'emborracharse'
        //     }
        // }, {
        //     en: {
        //         i: 'to emit'
        //     },
        //     es: {
        //         i: 'emitir'
        //     }
        // }, {
        //     en: {
        //         i: 'to excite'
        //     },
        //     es: {
        //         i: 'emocionar'
        //     }
        // }, {
        //     en: {
        //         i: 'to employ'
        //     },
        //     es: {
        //         i: 'emplear'
        //     }
        // }, {
        //     en: {
        //         i: 'to undertake'
        //     },
        //     es: {
        //         i: 'emprender'
        //     }
        // }, {
        //     en: {
        //         i: 'to push'
        //     },
        //     es: {
        //         i: 'empujar'
        //     }
        // }, {
        //     en: {
        //         i: 'to fall in love'
        //     },
        //     es: {
        //         i: 'enamorarse'
        //     }
        // }, {
        //     en: {
        //         i: 'to place an order'
        //     },
        //     es: {
        //         i: 'encargar'
        //     }
        // }, {
        //     en: {
        //         i: 'to get angry'
        //     },
        //     es: {
        //         i: 'enfadarse'
        //     }
        // }, {
        //     en: {
        //         i: 'to get ill'
        //     },
        //     es: {
        //         i: 'enfermarse'
        //     }
        // }, {
        //     en: {
        //         i: 'to deceive'
        //     },
        //     es: {
        //         i: 'engañar'
        //     }
        // }, {
        //     en: {
        //         i: 'to soil'
        //     },
        //     es: {
        //         i: 'ensuciar'
        //     }
        // }, {
        //     en: {
        //         i: 'to get in'
        //     },
        //     es: {
        //         i: 'entrar'
        //     }
        // }, {
        //     en: {
        //         i: 'to send'
        //     },
        //     es: {
        //         i: 'enviar'
        //     }
        // }, {
        //     en: {
        //         i: 'to be wrong'
        //     },
        //     es: {
        //         i: 'equivocarse'
        //     }
        // }, {
        //     en: {
        //         i: 'to escape'
        //     },
        //     es: {
        //         i: 'escapar'
        //     }
        // }, {
        //     en: {
        //         i: 'to write'
        //     },
        //     es: {
        //         i: 'escribir'
        //     }
        // }, {
        //     en: {
        //         i: 'to listen to'
        //     },
        //     es: {
        //         i: 'escuchar'
        //     }
        // }, {
        //     en: {
        //         i: 'to hope for'
        //     },
        //     es: {
        //         i: 'esperar'
        //     }
        // }, {
        //     en: {
        //         i: 'to ski'
        //     },
        //     es: {
        //         i: 'esquiar'
        //     }
        // }, {
        //     en: {
        //         i: 'to sneeze'
        //     },
        //     es: {
        //         i: 'estornudar'
        //     }
        // }, {
        //     en: {
        //         i: 'to study'
        //     },
        //     es: {
        //         i: 'estudiar'
        //     }
        // }, {
        //     en: {
        //         i: 'to evaluate'
        //     },
        //     es: {
        //         i: 'evaluar'
        //     }
        // }, {
        //     en: {
        //         i: 'to avoid'
        //     },
        //     es: {
        //         i: 'evitar'
        //     }
        // }, {
        //     en: {
        //         i: 'to examine'
        //     },
        //     es: {
        //         i: 'examinar'
        //     }
        // }, {
        //     en: {
        //         i: 'to excite'
        //     },
        //     es: {
        //         i: 'excitar'
        //     }
        // }, {
        //     en: {
        //         i: 'to exist'
        //     },
        //     es: {
        //         i: 'existir'
        //     }
        // }, {
        //     en: {
        //         i: 'to explain'
        //     },
        //     es: {
        //         i: 'explicar'
        //     }
        // }, {
        //     en: {
        //         i: 'to express'
        //     },
        //     es: {
        //         i: 'expresar'
        //     }
        // }, {
        //     en: {
        //         i: 'to facilitate'
        //     },
        //     es: {
        //         i: 'facilitar'
        //     }
        // }, {
        //     en: {
        //         i: 'to fascinate'
        //     },
        //     es: {
        //         i: 'fascinar'
        //     }
        // }, {
        //     en: {
        //         i: 'to annoy'
        //     },
        //     es: {
        //         i: 'fastidiar'
        //     }
        // }, {
        //     en: {
        //         i: 'to congratulate'
        //     },
        //     es: {
        //         i: 'felicitar'
        //     }
        // }, {
        //     en: {
        //         i: 'to end'
        //     },
        //     es: {
        //         i: 'finalizar'
        //     }
        // }, {
        //     en: {
        //         i: 'to sign'
        //     },
        //     es: {
        //         i: 'firmar'
        //     }
        // }, {
        //     en: {
        //         i: 'to formalize'
        //     },
        //     es: {
        //         i: 'formalizar'
        //     }
        // }, {
        //     en: {
        //         i: 'to form'
        //     },
        //     es: {
        //         i: 'formar'
        //     }
        // }, {
        //     en: {
        //         i: 'to break'
        //     },
        //     es: {
        //         i: 'frenar'
        //     }
        // }, {
        //     en: {
        //         i: 'to smoke'
        //     },
        //     es: {
        //         i: 'fumar'
        //     }
        // }, {
        //     en: {
        //         i: 'to function'
        //     },
        //     es: {
        //         i: 'funcionar'
        //     }
        // }, {
        //     en: {
        //         i: 'to gain'
        //     },
        //     es: {
        //         i: 'ganar'
        //     }
        // }, {
        //     en: {
        //         i: 'to guarantee'
        //     },
        //     es: {
        //         i: 'garantizar'
        //     }
        // }, {
        //     en: {
        //         i: 'to spend'
        //     },
        //     es: {
        //         i: 'gastar'
        //     }
        // }, {
        //     en: {
        //         i: 'to generalize'
        //     },
        //     es: {
        //         i: 'generalizar'
        //     }
        // }, {
        //     en: {
        //         i: 'to generate'
        //     },
        //     es: {
        //         i: 'generar'
        //     }
        // }, {
        //     en: {
        //         i: 'to turn'
        //     },
        //     es: {
        //         i: 'girar'
        //     }
        // }, {
        //     en: {
        //         i: 'to hit'
        //     },
        //     es: {
        //         i: 'golpear'
        //     }
        // }, {
        //     en: {
        //         i: 'to shout'
        //     },
        //     es: {
        //         i: 'gritar'
        //     }
        // }, {
        //     en: {
        //         i: 'to keep'
        //     },
        //     es: {
        //         i: 'guardar'
        //     }
        // }, {
        //     en: {
        //         i: 'to guide'
        //     },
        //     es: {
        //         i: 'guiar'
        //     }
        // }, {
        //     en: {
        //         i: 'to like'
        //     },
        //     es: {
        //         i: 'gustar'
        //     }
        // }, {
        //     en: {
        //         i: 'to inhabit'
        //     },
        //     es: {
        //         i: 'habitar'
        //     }
        // }, {
        //     en: {
        //         i: 'to accustom'
        //     },
        //     es: {
        //         i: 'habituar'
        //     }
        // }, {
        //     en: {
        //         i: 'to get used to'
        //     },
        //     es: {
        //         i: 'habituarse'
        //     }
        // }, {
        //     en: {
        //         i: 'to humiliate'
        //     },
        //     es: {
        //         i: 'humillar'
        //     }
        // }, {
        //     en: {
        //         i: 'to idealize'
        //     },
        //     es: {
        //         i: 'idealizar'
        //     }
        // }, {
        //     en: {
        //         i: 'to think up'
        //     },
        //     es: {
        //         i: 'idear'
        //     }
        // }, {
        //     en: {
        //         i: 'to identify'
        //     },
        //     es: {
        //         i: 'identificar'
        //     }
        // }, {
        //     en: {
        //         i: 'to identify o.s. with'
        //     },
        //     es: {
        //         i: 'identificarse'
        //     }
        // }, {
        //     en: {
        //         i: 'to print'
        //     },
        //     es: {
        //         i: 'imprimir'
        //     }
        // }, {
        //     en: {
        //         i: 'to indicate'
        //     },
        //     es: {
        //         i: 'indicar'
        //     }
        // }, {
        //     en: {
        //         i: 'to inform'
        //     },
        //     es: {
        //         i: 'informar'
        //     }
        // }, {
        //     en: {
        //         i: 'to initiate'
        //     },
        //     es: {
        //         i: 'iniciar'
        //     }
        // }, {
        //     en: {
        //         i: 'to insist'
        //     },
        //     es: {
        //         i: 'insistir'
        //     }
        // }, {
        //     en: {
        //         i: 'to install'
        //     },
        //     es: {
        //         i: 'instalar'
        //     }
        // }, {
        //     en: {
        //         i: 'to insult'
        //     },
        //     es: {
        //         i: 'insultar'
        //     }
        // }, {
        //     en: {
        //         i: 'to try'
        //     },
        //     es: {
        //         i: 'intentar'
        //     }
        // }, {
        //     en: {
        //         i: 'to interest'
        //     },
        //     es: {
        //         i: 'interesar'
        //     }
        // }, {
        //     en: {
        //         i: 'to interrupt'
        //     },
        //     es: {
        //         i: 'interrumpir'
        //     }
        // }, {
        //     en: {
        //         i: 'to invent'
        //     },
        //     es: {
        //         i: 'inventar'
        //     }
        // }, {
        //     en: {
        //         i: 'to invite'
        //     },
        //     es: {
        //         i: 'invitar'
        //     }
        // }, {
        //     en: {
        //         i: 'to join'
        //     },
        //     es: {
        //         i: 'juntar'
        //     }
        // }, {
        //     en: {
        //         i: 'to swear'
        //     },
        //     es: {
        //         i: 'jurar'
        //     }
        // }, {
        //     en: {
        //         i: 'to justify'
        //     },
        //     es: {
        //         i: 'justificar'
        //     }
        // }, {
        //     en: {
        //         i: 'to measure in kilometres'
        //     },
        //     es: {
        //         i: 'kilometrar'
        //     }
        // }, {
        //     en: {
        //         i: 'to throw'
        //     },
        //     es: {
        //         i: 'lanzar'
        //     }
        // }, {
        //     en: {
        //         i: 'to wash'
        //     },
        //     es: {
        //         i: 'lavar'
        //     }
        // }, {
        //     en: {
        //         i: 'to wash'
        //     },
        //     es: {
        //         i: 'lavarse'
        //     }
        // }, {
        //     en: {
        //         i: 'to read'
        //     },
        //     es: {
        //         i: 'leer',
        //         like: 'leer'
        //     }
        // }, {
        //     en: {
        //         i: 'to raise'
        //     },
        //     es: {
        //         i: 'levantar'
        //     }
        // }, {
        //     en: {
        //         i: 'to get up'
        //     },
        //     es: {
        //         i: 'levantarse'
        //     }
        // }, {
        //     en: {
        //         i: 'to limit'
        //     },
        //     es: {
        //         i: 'limitar'
        //     }
        // }, {
        //     en: {
        //         i: 'to clean'
        //     },
        //     es: {
        //         i: 'limpiar'
        //     }
        // }, {
        //     en: {
        //         i: 'to call'
        //     },
        //     es: {
        //         i: 'llamar'
        //     }
        // }, {
        //     en: {
        //         i: 'to be called'
        //     },
        //     es: {
        //         i: 'llamarse'
        //     }
        // }, 
        // {
        //     en: {
        //         i: 'to fill'
        //     },
        //     es: {
        //         i: 'llenar'
        //     }
        // }, {
        //     en: {
        //         i: 'to carry'
        //     },
        //     es: {
        //         i: 'llevar'
        //     }
        // }, {
        //     en: {
        //         i: 'to cry'
        //     },
        //     es: {
        //         i: 'llorar'
        //     }
        // }, {
        //     en: {
        //         i: 'to fight'
        //     },
        //     es: {
        //         i: 'luchar'
        //     }
        // }, {
        //     en: {
        //         i: 'to dirty'
        //     },
        //     es: {
        //         i: 'manchar'
        //     }
        // }, {
        //     en: {
        //         i: 'to get dirty'
        //     },
        //     es: {
        //         i: 'mancharse'
        //     }
        // }, {
        //     en: {
        //         i: 'to order'
        //     },
        //     es: {
        //         i: 'mandar'
        //     }
        // }, {
        //     en: {
        //         i: 'to kill'
        //     },
        //     es: {
        //         i: 'matar'
        //     }
        // }, {
        //     en: {
        //         i: 'to improve'
        //     },
        //     es: {
        //         i: 'mejorar'
        //     }
        // }, {
        //     en: {
        //         i: 'to memorize'
        //     },
        //     es: {
        //         i: 'memorizar'
        //     }
        // }, {
        //     en: {
        //         i: 'to insert'
        //     },
        //     es: {
        //         i: 'meter'
        //     }
        // }, {
        //     en: {
        //         i: 'to look at'
        //     },
        //     es: {
        //         i: 'mirar'
        //     }
        // }, {
        //     en: {
        //         i: 'to modify'
        //     },
        //     es: {
        //         i: 'modificar'
        //     }
        // }, {
        //     en: {
        //         i: 'to wet'
        //     },
        //     es: {
        //         i: 'mojar'
        //     }
        // }, {
        //     en: {
        //         i: 'to annoy'
        //     },
        //     es: {
        //         i: 'molestar'
        //     }
        // }, {
        //     en: {
        //         i: 'to wet'
        //     },
        //     es: {
        //         i: 'nadar'
        //     }
        // }, {
        //     en: {
        //         i: 'to narrate'
        //     },
        //     es: {
        //         i: 'narrar'
        //     }
        // }, {
        //     en: {
        //         i: 'to need'
        //     },
        //     es: {
        //         i: 'necesitar'
        //     }
        // }, {
        //     en: {
        //         i: 'to negotiate'
        //     },
        //     es: {
        //         i: 'negociar'
        //     }
        // }, {
        //     en: {
        //         i: 'to name'
        //     },
        //     es: {
        //         i: 'nombrar'
        //     }
        // }, {
        //     en: {
        //         i: 'to number'
        //     },
        //     es: {
        //         i: 'numerar'
        //     }
        // }, {
        //     en: {
        //         i: 'to observe'
        //     },
        //     es: {
        //         i: 'observar'
        //     }
        // }, {
        //     en: {
        //         i: 'to hate'
        //     },
        //     es: {
        //         i: 'odiar'
        //     }
        // }, {
        //     en: {
        //         i: 'to offend'
        //     },
        //     es: {
        //         i: 'ofender'
        //     }
        // }, {
        //     en: {
        //         i: 'to forget'
        //     },
        //     es: {
        //         i: 'olvidar'
        //     }
        // }, {
        //     en: {
        //         i: 'to omit'
        //     },
        //     es: {
        //         i: 'omitir'
        //     }
        // }, {
        //     en: {
        //         i: 'to think'
        //     },
        //     es: {
        //         i: 'opinar'
        //     }
        // }, {
        //     en: {
        //         i: 'to organize'
        //     },
        //     es: {
        //         i: 'organizar'
        //     }
        // }, {
        //     en: {
        //         i: 'to orientate'
        //     },
        //     es: {
        //         i: 'orientar'
        //     }
        // }, {
        //     en: {
        //         i: 'to originate'
        //     },
        //     es: {
        //         i: 'originar'
        //     }
        // }, {
        //     en: {
        //         i: 'to pay'
        //     },
        //     es: {
        //         i: 'pagar'
        //     }
        // }, {
        //     en: {
        //         i: 'to stop'
        //     },
        //     es: {
        //         i: 'parar'
        //     }
        // }, {
        //     en: {
        //         i: 'to split up'
        //     },
        //     es: {
        //         i: 'partir'
        //     }
        // }, {
        //     en: {
        //         i: 'to pass'
        //     },
        //     es: {
        //         i: 'pasar'
        //     }
        // }, {
        //     en: {
        //         i: 'to walk'
        //     },
        //     es: {
        //         i: 'pasear'
        //     }
        // }, {
        //     en: {
        //         i: 'to pardon'
        //     },
        //     es: {
        //         i: 'perdonar'
        //     }
        // }, {
        //     en: {
        //         i: 'to permit'
        //     },
        //     es: {
        //         i: 'permitir'
        //     }
        // }, {
        //     en: {
        //         i: 'to iron'
        //     },
        //     es: {
        //         i: 'planchar'
        //     }
        // }, {
        //     en: {
        //         i: 'to plan'
        //     },
        //     es: {
        //         i: 'planear'
        //     }
        // }, {
        //     en: {
        //         i: 'to possess'
        //     },
        //     es: {
        //         i: 'poseer'
        //     }
        // }, {
        //     en: {
        //         i: 'to practise'
        //     },
        //     es: {
        //         i: 'practicar'
        //     }
        // }, {
        //     en: {
        //         i: 'to precede'
        //     },
        //     es: {
        //         i: 'preceder'
        //     }
        // }, {
        //     en: {
        //         i: 'to ask'
        //     },
        //     es: {
        //         i: 'preguntar'
        //     }
        // }, {
        //     en: {
        //         i: 'to prepare'
        //     },
        //     es: {
        //         i: 'preparar'
        //     }
        // }, {
        //     en: {
        //         i: 'to lend'
        //     },
        //     es: {
        //         i: 'prestar'
        //     }
        // }, {
        //     en: {
        //         i: 'to plan'
        //     },
        //     es: {
        //         i: 'programar'
        //     }
        // }, {
        //     en: {
        //         i: 'to progress'
        //     },
        //     es: {
        //         i: 'progresar'
        //     }
        // }, {
        //     en: {
        //         i: 'to prohibit'
        //     },
        //     es: {
        //         i: 'prohibir'
        //     }
        // }, {
        //     en: {
        //         i: 'to pronounce'
        //     },
        //     es: {
        //         i: 'pronunciar'
        //     }
        // }, {
        //     en: {
        //         i: 'to protest'
        //     },
        //     es: {
        //         i: 'protestar'
        //     }
        // }, {
        //     en: {
        //         i: 'to provoke'
        //     },
        //     es: {
        //         i: 'provocar'
        //     }
        // }, {
        //     en: {
        //         i: 'to press'
        //     },
        //     es: {
        //         i: 'pulsar'
        //     }
        // }, {
        //     en: {
        //         i: 'to keep'
        //     },
        //     es: {
        //         i: 'quedarse'
        //     }
        // }, {
        //     en: {
        //         i: 'to complain'
        //     },
        //     es: {
        //         i: 'quejarse'
        //     }
        // }, {
        //     en: {
        //         i: 'to burn'
        //     },
        //     es: {
        //         i: 'quemar'
        //     }
        // }, {
        //     en: {
        //         i: 'to take away'
        //     },
        //     es: {
        //         i: 'quitar'
        //     }
        // }, {
        //     en: {
        //         i: 'to remove o.s.'
        //     },
        //     es: {
        //         i: 'quitarse'
        //     }
        // }, {
        //     en: {
        //         i: 'to reason'
        //     },
        //     es: {
        //         i: 'razonar'
        //     }
        // }, {
        //     en: {
        //         i: 'to reject'
        //     },
        //     es: {
        //         i: 'rechazar'
        //     }
        // }, {
        //     en: {
        //         i: 'to receive'
        //     },
        //     es: {
        //         i: 'recibir'
        //     }
        // }, {
        //     en: {
        //         i: 'to recuperate'
        //     },
        //     es: {
        //         i: 'recuperarse'
        //     }
        // }, {
        //     en: {
        //         i: 'to return'
        //     },
        //     es: {
        //         i: 'regresar'
        //     }
        // }, {
        //     en: {
        //         i: 'to relate'
        //     },
        //     es: {
        //         i: 'relacionar'
        //     }
        // }, {
        //     en: {
        //         i: 'to be related'
        //     },
        //     es: {
        //         i: 'relacionarse'
        //     }
        // }, {
        //     en: {
        //         i: 'to relax'
        //     },
        //     es: {
        //         i: 'relajar'
        //     }
        // }, {
        //     en: {
        //         i: 'to relax'
        //     },
        //     es: {
        //         i: 'relajarse'
        //     }
        // }, {
        //     en: {
        //         i: 'to repair'
        //     },
        //     es: {
        //         i: 'reparar'
        //     }
        // }, {
        //     en: {
        //         i: 'to distribute'
        //     },
        //     es: {
        //         i: 'repartir'
        //     }
        // }, {
        //     en: {
        //         i: 'to revise'
        //     },
        //     es: {
        //         i: 'repasar'
        //     }
        // }, {
        //     en: {
        //         i: 'to represent'
        //     },
        //     es: {
        //         i: 'representar'
        //     }
        // }, {
        //     en: {
        //         i: 'to reserve'
        //     },
        //     es: {
        //         i: 'reservar'
        //     }
        // }, {
        //     en: {
        //         i: 'to catch a cold'
        //     },
        //     es: {
        //         i: 'resfriarse'
        //     }
        // }, {
        //     en: {
        //         i: 'to resist'
        //     },
        //     es: {
        //         i: 'resistir'
        //     }
        // }, {
        //     en: {
        //         i: 'to respect'
        //     },
        //     es: {
        //         i: 'respetar'
        //     }
        // }, {
        //     en: {
        //         i: 'to breathe'
        //     },
        //     es: {
        //         i: 'respirar'
        //     }
        // }, {
        //     en: {
        //         i: 'to answer'
        //     },
        //     es: {
        //         i: 'responder'
        //     }
        // }, {
        //     en: {
        //         i: 'to take away'
        //     },
        //     es: {
        //         i: 'restar'
        //     }
        // }, {
        //     en: {
        //         i: 'to turn out to be'
        //     },
        //     es: {
        //         i: 'resultar'
        //     }
        // }, {
        //     en: {
        //         i: 'to summarize'
        //     },
        //     es: {
        //         i: 'resumir'
        //     }
        // }, {
        //     en: {
        //         i: 'to delay'
        //     },
        //     es: {
        //         i: 'retrasar'
        //     }
        // }, {
        //     en: {
        //         i: 'to reunite'
        //     },
        //     es: {
        //         i: 'reunir'
        //     }
        // }, {
        //     en: {
        //         i: 'to revolutionize'
        //     },
        //     es: {
        //         i: 'revolucionar'
        //     }
        // }, {
        //     en: {
        //         i: 'to rob'
        //     },
        //     es: {
        //         i: 'robar'
        //     }
        // }, {
        //     en: {
        //         i: 'to break'
        //     },
        //     es: {
        //         i: 'romper'
        //     }
        // }, {
        //     en: {
        //         i: 'to take out'
        //     },
        //     es: {
        //         i: 'sacar'
        //     }
        // }, {
        //     en: {
        //         i: 'to jump'
        //     },
        //     es: {
        //         i: 'saltar'
        //     }
        // }, {
        //     en: {
        //         i: 'to greet'
        //     },
        //     es: {
        //         i: 'saludar'
        //     }
        // }, {
        //     en: {
        //         i: 'to pick'
        //     },
        //     es: {
        //         i: 'seleccionar'
        //     }
        // }, {
        //     en: {
        //         i: 'to separate'
        //     },
        //     es: {
        //         i: 'separar'
        //     }
        // }, {
        //     en: {
        //         i: 'to situate'
        //     },
        //     es: {
        //         i: 'situar'
        //     }
        // }, {
        //     en: {
        //         i: 'to solve'
        //     },
        //     es: {
        //         i: 'solucionar'
        //     }
        // }, {
        //     en: {
        //         i: 'to support'
        //     },
        //     es: {
        //         i: 'soportar'
        //     }
        // }, {
        //     en: {
        //         i: 'to surprise'
        //     },
        //     es: {
        //         i: 'sorprender'
        //     }
        // }, {
        //     en: {
        //         i: 'to raise'
        //     },
        //     es: {
        //         i: 'subir'
        //     }
        // }, {
        //     en: {
        //         i: 'to happen'
        //     },
        //     es: {
        //         i: 'suceder'
        //     }
        // }, {
        //     en: {
        //         i: 'to overcome'
        //     },
        //     es: {
        //         i: 'superar'
        //     }
        // }, {
        //     en: {
        //         i: 'to suspend'
        //     },
        //     es: {
        //         i: 'suspender'
        //     }
        // }, {
        //     en: {
        //         i: 'to cover'
        //     },
        //     es: {
        //         i: 'tapar'
        //     }
        // }, {
        //     en: {
        //         i: 'to fear'
        //     },
        //     es: {
        //         i: 'temer'
        //     }
        // }, {
        //     en: {
        //         i: 'to end'
        //     },
        //     es: {
        //         i: 'terminar'
        //     }
        // }, {
        //     en: {
        //         i: 'to throw'
        //     },
        //     es: {
        //         i: 'tirar'
        //     }
        // }, {
        //     en: {
        //         i: 'to touch'
        //     },
        //     es: {
        //         i: 'tocar'
        //     }
        // }, {
        //     en: {
        //         i: 'to touch each other'
        //     },
        //     es: {
        //         i: 'tocarse'
        //     }
        // }, {
        //     en: {
        //         i: 'to tolerate'
        //     },
        //     es: {
        //         i: 'tolerar'
        //     }
        // }, {
        //     en: {
        //         i: 'to take'
        //     },
        //     es: {
        //         i: 'tomar'
        //     }
        // }, {
        //     en: {
        //         i: 'to work'
        //     },
        //     es: {
        //         i: 'trabajar'
        //     }
        // }, {
        //     en: {
        //         i: 'to swallow'
        //     },
        //     es: {
        //         i: 'tragar'
        //     }
        // }, {
        //     en: {
        //         i: 'to transform'
        //     },
        //     es: {
        //         i: 'transformar'
        //     }
        // }, {
        //     en: {
        //         i: 'to transmit'
        //     },
        //     es: {
        //         i: 'transmitir'
        //     }
        // }, {
        //     en: {
        //         i: 'to transport'
        //     },
        //     es: {
        //         i: 'transportar'
        //     }
        // }, {
        //     en: {
        //         i: 'to move'
        //     },
        //     es: {
        //         i: 'trasladar'
        //     }
        // }, {
        //     en: {
        //         i: 'to treat'
        //     },
        //     es: {
        //         i: 'tratar'
        //     }
        // }, {
        //     en: {
        //         i: 'to join'
        //     },
        //     es: {
        //         i: 'unir'
        //     }
        // }, {
        //     en: {
        //         i: 'to use'
        //     },
        //     es: {
        //         i: 'usar'
        //     }
        // }, {
        //     en: {
        //         i: 'to use'
        //     },
        //     es: {
        //         i: 'utilizar'
        //     }
        // }, {
        //     en: {
        //         i: 'to empty'
        //     },
        //     es: {
        //         i: 'vaciar'
        //     }
        // }, {
        //     en: {
        //         i: 'to value'
        //     },
        //     es: {
        //         i: 'valorar'
        //     }
        // }, {
        //     en: {
        //         i: 'to vary'
        //     },
        //     es: {
        //         i: 'variar'
        //     }
        // }, {
        //     en: {
        //         i: 'to sell'
        //     },
        //     es: {
        //         i: 'vender'
        //     }
        // }, {
        //     en: {
        //         i: 'to see'
        //     },
        //     es: {
        //         i: 'ver'
        //     }
        // }, {
        //     en: {
        //         i: 'to travel'
        //     },
        //     es: {
        //         i: 'viajar'
        //     }
        // }, {
        //     en: {
        //         i: 'to watch'
        //     },
        //     es: {
        //         i: 'vigilar'
        //     }
        // }, {
        //     en: {
        //         i: 'to visit'
        //     },
        //     es: {
        //         i: 'visitar'
        //     }
        // }, {
        //     en: {
        //         i: 'to live'
        //     },
        //     es: {
        //         i: 'vivir',
        //         like: 'vivir'
        //     }
        // }, {
        //     en: {
        //         i: 'to vomit'
        //     },
        //     es: {
        //         i: 'vomitar'
        //     }
        // }, {
        //     en: {
        //         i: 'to vote'
        //     },
        //     es: {
        //         i: 'votar'
        //     }
        // }, {
        //     en: {
        //         i: 'to photocopy'
        //     },
        //     es: {
        //         i: 'xerocopiar'
        //     }
        // }
    ];
     const filteredVerbs = inf
             ? verbs.filter(verb => verb[language] && verb[language].i === inf)
             : verbs.filter(verb => verb[language]);
     return new Promise(resolve => resolve(filteredVerbs));
 };