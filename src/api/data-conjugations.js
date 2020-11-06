import { Language } from "../logic/enums";
import { esConjugations, esPartials } from './es/es-conjugations';

const conjugations = { 
    pt: [        
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
                'serão'
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
            'present subjunctive': [
                'seja',
                'sejas',
                'seja',
                'sejamos',
                'sejais',
                'sejam',
            ],
            'imperfect subjunctive': [
                'fosse',
                'fosses',
                'fosse',
                'fôssemos',
                'fôsseis',
                'fossem',
            ],
            'future subjunctive': [
                'for',
                'fores',
                'for',
                'formos',
                'fordes',
                'forem',
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
                'falarão'
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
            ],
            'present subjunctive': [
                'fale',
                'fales',
                'fale',
                'falemos',
                'faleis',
                'falem',
            ],
            'imperfect subjunctive': [
                'falasse',
                'falasses',
                'falasse',
                'falássemos',
                'falásseis',
                'falassem',
            ],
            'future subjunctive': [
                'falar',
                'falares',
                'falar',
                'falarmos',
                'falardes',
                'falarem',
            ],
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
                'tivestes',
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
                'terão'
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
            ],
            'present subjunctive': [
                'tenha',
                'tenhas',
                'tenha',
                'tenhamos',
                'tenhais',
                'tenham',
            ],
            'imperfect subjunctive': [
                'tivesse',
                'tivesses',
                'tivesse',
                'tivéssemos',
                'tivésseis',
                'tivessem',
            ],
            'future subjunctive': [
                'tiver',
                'tiveres',
                'tiver',
                'tivermos',
                'tiverdes',
                'tiverem',
            ],
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
                'venderão'
            ],
            conditional: [
                'venderia',
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
            ],
            'present subjunctive': [
                'venda',
                'vendas',
                'venda',
                'vendamos',
                'vendais',
                'vendam',
            ],
            'imperfect subjunctive': [
                'vendesse',
                'vendesses',
                'vendesse',
                'vendêssemos',
                'vendêsseis',
                'vendessem',
            ],
            'future subjunctive': [
                'vender',
                'venderes',
                'vender',
                'vendermos',
                'venderdes',
                'venderem',
            ],
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
            ],
            'present subjunctive': [
                'parta',
                'partas',
                'parta',
                'partamos',
                'partais',
                'partam',
            ],
            'imperfect subjunctive': [
                'partisse',
                'partisses',
                'partisse',
                'partíssemos',
                'partísseis',
                'partissem',
            ],
            'future subjunctive': [
                'partir',
                'partires',
                'partir',
                'partirmos',
                'partirdes',
                'partirem',
            ],
        },
        {
            i: 'estar',
            present: [
                'estou',
                'estás',
                'está',
                'estamos',
                'estais',
                'estão'
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
                'estarão'
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
                'estivera',
                'estiveras',
                'estivera',
                'estivéramos',
                'estivéreis',
                'estiveram'
            ],
            'present subjunctive': [
                'esteja',
                'estejas',
                'esteja',
                'estejamos',
                'estejais',
                'estejam',
            ],
            'imperfect subjunctive': [
                'estivesse',
                'estivesses',
                'estivesse',
                'estivéssemos',
                'estivésseis',
                'estivessem',
            ],
            'future subjunctive': [
                'estiver',
                'estiveres',
                'estiver',
                'estivermos',
                'estiverdes',
                'estiverem',
            ],
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
            'fizestes',
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
            'farão'
        ],
        conditional: [
            'faria',
            'farias',
            'faria',
            'faríamos',
            'faríeis',
            'fariam'
        ],
        pluperfect: [
            'fizera',
            'fizeras',
            'fizera',
            'fizéramos',
            'fizéreis',
            'fizeram'
        ],
        'present subjunctive': [
            'faça',
            'faças',
            'faça',
            'façamos',
            'façais',
            'façam',
        ],
        'imperfect subjunctive': [
            'fizesse',
            'fizesses',
            'fizesse',
            'fizéssemos',
            'fizésseis',
            'fizessem',
        ],
        'future subjunctive': [
            'fizer',
            'fizeres',
            'fizer',
            'fizermos',
            'fizerdes',
            'fizerem',
        ],
        },
        {
            i: 'ir',
            present: [
                'vou',
                'vais',
                'vai',
                'vamos',
                'ides',
                'vão'
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
                'irão'
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
            ],

            'present subjunctive': [
                'vá',
                'vás',
                'vá',
                'vamos',
                'vades',
                'vão'
            ],
            'imperfect subjunctive': [
                'fosse',
                'fosses',
                'fosse',
                'fôssemos',
                'fôsseis',
                'fossem'
            ],
            'future subjunctive': [
                'for',
                'fores',
                'for',                        
                'formos',                        
                'fordes',                        
                'forem',                        
            ],
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
                'vínhais',
                'vinham'
            ],
            future: [
                'virei',
                'virás',
                'virá',
                'viremos',
                'vireis',
                'virão'
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
            ],

            'present subjunctive': [
                'venha',
                'venhas',
                'venha',
                'venhamos',
                'venhais',
                'venham',
            ],
            'imperfect subjunctive': [
                'viesse',
                'viesses',
                'viesse',
                'viéssemos',
                'viésseis',
                'viessem',
            ],
            'future subjunctive': [
                'vier',
                'vieres',
                'vier',
                'viermos',
                'vierdes',
                'vierem',
            ],
        },
        {
            i: 'ver',
            present: [
                'vejo',
                'vês',
                'vê',
                'vemos',
                'vedes',
                'veem'
            ],
            preterite: [
                'vi',
                'viste',
                'viu',
                'vimos',
                'vistes',
                'viram'
            ],                    
            imperfect: [
                'via',
                'vias',
                'via',
                'víamos',
                'víeis',
                'viam',
            ],
            future: [
                'verei',
                'verás',
                'verá',
                'veremos',
                'vereis',
                'verão',
            ],
            conditional: [
                'veria',
                'verias',
                'veria',
                'veríamos',
                'veríeis',
                'veriam',
            ],
            pluperfect: [
                'vira',
                'viras',
                'vira',
                'víramos',
                'víreis',
                'viram',
            ],
            'present subjunctive': [
                'veja',
                'vejas',
                'veja',
                'vejamos',
                'vejais',
                'vejam',
            ],
            'imperfect subjunctive': [
                'visse',
                'visses',
                'visse',
                'víssemos',
                'vísseis',
                'vissem',
            ],
            'future subjunctive': [
                'vir',
                'vires',
                'vir',
                'virmos',
                'virdes',
                'virem',
            ],
        },
        {
            i: 'querer',
            present: [
                'quero',
                'queres',
                'quer',
                'queremos',
                'quereis',
                'querem',
            ],
            preterite: [
                'quis',
                'quiseste',
                'quis',
                'quisemos',
                'quisestes',
                'quiseram',
            ],                    
            imperfect: [
                'queria',
                'querias',
                'queria',
                'queríamos',
                'queríeis',
                'queriam',
            ],
            future: [
                'quererei',
                'quererás',
                'quererá',
                'quereremos',
                'querereis',
                'quererão'
            ],
            conditional: [
                'quereria',
                'quererias',
                'quereria',
                'quereríamos',
                'quereríeis',
                'quereriam',
            ],
            pluperfect: [
                'quisera',
                'quiseras',
                'quisera',
                'quiséramos',
                'quiséreis',
                'quiseram',
            ],

            'present subjunctive': [
                'queira',
                'queiras',
                'queira',
                'queiramos',
                'queirais',
                'queiram',
            ],
            'imperfect subjunctive': [
                'quisesse',
                'quisesses',
                'quisesse',
                'quiséssemos',
                'quisésseis',
                'quisessem',
            ],
            'future subjunctive': [
                'quiser',
                'quiseres',
                'quiser',
                'quisermos',
                'quiserdes',
                'quiserem',
            ],
        },
        {
            i: 'dar',
            present: [
                'dou',
                'dás',
                'dá',
                'damos',
                'dais',
                'dão'
            ],
            preterite: [
                'dei',
                'deste',
                'deu',
                'demos',
                'destes',
                'deram',
            ],                    
            imperfect: [
                'dava',
                'davas',
                'dava',
                'dávamos',
                'dáveis',
                'davam',
            ],
            future: [
                'darei',
                'darás',
                'dará',
                'daremos',
                'dareis',
                'darão'
            ],
            conditional: [
                'daria',
                'darias',
                'daria',
                'daríamos',
                'daríes',
                'dariam',
            ],
            pluperfect: [
                'dera',
                'deras',
                'dera',
                'déramos',
                'déreis',
                'deram',
            ],
            'present subjunctive': [
                'dê',
                'dês',
                'dê',
                'demos',
                'deis',
                'deem'
            ],
            'imperfect subjunctive': [
                'desse',
                'desses',
                'desse',
                'déssemos',
                'désseis',
                'dessem',
            ],
            'future subjunctive': [
                'der',
                'deres',
                'der',
                'dermos',
                'derdes',
                'derem'
            ]
        },
        {
            i: 'dizer',
            present: [
                'digo',
                'dizes',
                'diz',
                'dizemos',
                'dizeis',
                'dizem',
            ],
            preterite: [
                'disse',
                'disseste',
                'disse',
                'dissemos',
                'dissestes',
                'disseram',
            ],                    
            imperfect: [
                'dizia',
                'dizias',
                'dizia',
                'dizíamos',
                'dizíeis',
                'diziam'
            ],
            future: [
                'direi',
                'dirás',
                'dirá',
                'diremos',
                'direis',
                'dirão'
            ],
            conditional: [
                'diria',
                'dirias',
                'diria',
                'diríamos',
                'diríeis',
                'diriam',
            ],
            pluperfect: [
                'dissera',
                'disseras',
                'dissera',
                'disséramos',
                'disséreis',
                'disseram'
            ],
            'present subjunctive': [
                'diga',
                'digas',
                'diga',
                'digamos',
                'digais',
                'digam',
            ],
            'imperfect subjunctive': [
                'dissesse',
                'dissesses',
                'dissesse',
                'disséssemos',
                'dissésseis',
                'dissessem',
            ],
            'future subjunctive': [
                'disser',
                'disseres',
                'disser',
                'dissermos',
                'disserdes',
                'disserem',
            ],
        },
        {
            i: 'haver',
            present: [
                'hei',
                'hás',
                'há',
                'havemos',
                'haveis',
                'hão'
            ],
            preterite: [
                'houve',
                'houveste',
                'houve',
                'houvemos',
                'houvestes',
                'houveram',
            ],                    
            imperfect: [
                'havia',
                'havias',
                'havia',
                'havíamos',
                'havíeis',
                'haviam',
            ],
            future: [
                'haverei',
                'haverás',
                'haverá',
                'haveremos',
                'havereis',
                'haverão'
            ],
            conditional: [
                'haveria',
                'haverias',
                'haveria',
                'haveríamos',
                'haveríeis',
                'haveriam'
            ],
            pluperfect: [
                'houvera',
                'houveras',
                'houvera',
                'houvéramos',
                'houvéreis',
                'houveram',
            ],
            'present subjunctive': [
                'haja',
                'hajas',
                'haja',
                'hajamos',
                'hajais',
                'hajam',
            ],
            'imperfect subjunctive': [
                'houvesse',
                'houvesses',
                'houvesse',
                'houvéssemos',
                'houvésseis',
                'houvessem'
            ],
            'future subjunctive': [
                'houver',
                'houveres',
                'houver',
                'houvermos',
                'houverdes',
                'houverem'
            ],
        },
        {
            i: 'poder',
            present: [
                'posso',
                'podes',
                'pode',
                'podemos',
                'podeis',
                'podem',
            ],
            preterite: [
                'pude',
                'pudeste',
                'pôde',
                'pudemos',
                'pudestes',
                'puderam'
            ],                    
            imperfect: [
                'podia',
                'podias',
                'podia',
                'podíamos',
                'podíeis',
                'podiam',
            ],
            future: [
                'poderei',
                'poderás',
                'poderá',
                'poderemos',
                'podereis',
                'poderão'
            ],
            conditional: [
                'poderia',
                'poderias',
                'poderia',
                'poderíamos',
                'poderíeis',
                'poderiam',
            ],
            pluperfect: [
                'pudera',
                'puderas',
                'pudera',
                'pudéramos',
                'pudéreis',
                'puderam',
            ],
            'present subjunctive': [
                'possa',
                'possas',
                'possa',
                'possamos',
                'possais',
                'possam',
            ],
            'imperfect subjunctive': [
                'pudesse',
                'pudesses',
                'pudesse',
                'pudéssemos',
                'pudésseis',
                'pudessem',
            ],
            'future subjunctive': [
                'puder',
                'puderes',
                'puder',
                'pudermos',
                'puderdes',
                'puderem',
            ],
        },
        {
            i: 'saber',
            present: [
                'sei',
                'sabes',
                'sabe',
                'sabemos',
                'sabeis',
                'sabem',
            ],
            preterite: [
                'soube',
                'soubeste',
                'soube',
                'soubemos',
                'soubestes',
                'souberam'
            ],                    
            imperfect: [
                'sabia',
                'sabias',
                'sabia',
                'sabíamos',
                'sabíaeis',
                'sabiam',
            ],
            future: [
                'saberei',
                'saberás',
                'saberá',
                'saberemos',
                'sabereis',
                'saberão'
            ],
            conditional: [
                'saberia',
                'saberias',
                'saberia',
                'saberíamos',
                'saberíeis',
                'saberiam'
            ],
            pluperfect: [
                'soubera',
                'souberas',
                'soubera',
                'soubéramos',
                'soubéreis',
                'souberam'
            ],
            'present subjunctive': [
                'saiba',
                'saibas',
                'saiba',
                'saibamos',
                'saibais',
                'saibam',
            ],
            'imperfect subjunctive': [
                'soubesse',
                'soubesses',
                'soubesse',
                'soubéssemos',
                'soubésseis',
                'soubessem'
            ],
            'future subjunctive': [
                'souber',
                'souberes',
                'souber',
                'soubermos',
                'souberdes',
                'souberem',
            ],
        },
        {
            i: 'pôr',
            present: [
                'ponho',
                'pões',
                'põe',
                'pomos',
                'pondes',
                'põem'
            ],
            preterite: [
                'pus',
                'puseste',
                'pôs',
                'pusemos',
                'pusestes',
                'puseram'
            ],                    
            imperfect: [
                'punha',
                'punhas',
                'punha',
                'púnhamos',
                'púnheis',
                'punham'
            ],
            future: [
                'porei',
                'porás',
                'porá',
                'poremos',
                'poreis',
                'porão'
            ],
            conditional: [
                'poria',
                'porias',
                'poria',
                'poríamos',
                'poríeis',
                'poriam'
            ],
            pluperfect: [
                'pusera',
                'puseras',
                'pusera',
                'puséramos',
                'puséreis',
                'puseram'
            ],
            'present subjunctive': [
                'ponha',
                'ponhas',
                'ponha',
                'ponhamos',
                'ponhais',
                'ponham',
            ],
            'imperfect subjunctive': [
                'pusesse',
                'pusesses',
                'pusesse',
                'puséssemos',
                'pusésseis',
                'pusessem'
            ],
            'future subjunctive': [
                'puser',
                'puseres',
                'puser',
                'pusermos',
                'puserdes',
                'puserem'
            ],
        },
        {
            i: 'trazer',
            present: [
                'trago',
                'trazes',
                'traz',
                'trazemos',
                'trazeis',
                'trazem',
            ],
            preterite: [
                'trouxe',
                'trouxeste',
                'trouxe',
                'trouxemos',
                'trouxestes',
                'trouxeram',
            ],                    
            imperfect: [
                'trazia',
                'trazias',
                'trazia',
                'trazíamos',
                'trazíeis',
                'traziam'
            ],
            future: [
                'trarei',
                'trarás',
                'trará',
                'traremos',
                'trareis',
                'trarão'
            ],
            conditional: [
                'traria',
                'trarias',
                'traria',
                'traríamos',
                'traríeis',
                'trariam'
            ],
            pluperfect: [
                'trouxera',
                'trouxeras',
                'trouxera',
                'trouxéramos',
                'trouxéreis',
                'trouxeram',
            ],
            'present subjunctive': [
                'traga',
                'tragas',
                'traga',
                'tragamos',
                'tragais',
                'tragam',
            ],
            'imperfect subjunctive': [
                'trouxesse',
                'trouxesses',
                'trouxesse',
                'trouxéssemos',
                'trouxésseis',
                'trouxessem',
            ],
            'future subjunctive': [
                'trouxer',
                'trouxeres',
                'trouxer',
                'trouxermos',
                'trouxerdes',
                'trouxerem',
            ],
        },
        {
            i: 'dormir',
            present: [
                'durmo',
                'dormes',
                'dorme',
                'dormimos',
                'dormis',
                'dormem',
            ],
            preterite: [
                'dormi',
                'dormiste',
                'dormiu',
                'dormimos',
                'dormistes',
                'dormiram',
            ],                    
            imperfect: [
                'dormia',
                'dormias',
                'dormia',
                'dormíamos',
                'dormíeis',
                'dormiam',
            ],
            future: [
                'dormirei',
                'dormirás',
                'dormirá',
                'dormiremos',
                'dormireis',
                'dormirão'
            ],
            conditional: [
                'dormiria',
                'dormirias',
                'dormiria',
                'dormiríamos',
                'dormiríeis',
                'dormiriam',
            ],
            pluperfect: [
                'dormira',
                'dormiras',
                'dormira',
                'dormíramos',
                'dormíreis',
                'dormiram',
            ],
            'present subjunctive': [
                'durma',
                'durmas',
                'durma',
                'durmamos',
                'durmais',
                'durmam',
            ],
            'imperfect subjunctive': [
                'dormisse',
                'dormisses',
                'dormisse',
                'dormíssemos',
                'dormísseis',
                'dormissem',
            ],
            'future subjunctive': [
                'dormir',
                'dormires',
                'dormir',
                'dormirmos',
                'dormirdes',
                'dormirem',
            ],
        },
        {
            i: 'ler',
            present: [
                'leio',
                'lês',
                'lê',
                'lemos',
                'ledes',
                'leem',
            ],
            preterite: [
                'li',
                'leste',
                'leu',
                'lemos',
                'lestes',
                'leram',
            ],                    
            imperfect: [
                'lia',
                'lias',
                'lia',
                'líamos',
                'líeis',
                'liam',
            ],
            future: [
                'lerei',
                'lerás',
                'lerá',
                'leremos',
                'lereis',
                'lerão',
            ],
            conditional: [
                'leria',
                'lerias',
                'leria',
                'leríamos',
                'leríeis',
                'leriam'
            ],
            pluperfect: [
                'lera',
                'leras',
                'lera',
                'lêramos',
                'lêreis',
                'leram'
            ],
            'present subjunctive': [
                'leia',
                'leias',
                'leia',
                'leiamos',
                'leiais',
                'leiam',
            ],
            'imperfect subjunctive': [
                'lesse',
                'lesses',
                'lesse',
                'lêssemos',
                'lêsseis',
                'lessem',
            ],
            'future subjunctive': [
                'ler',
                'leres',
                'ler',
                'lermos',
                'lerdes',
                'lerem',
            ],
        },
        {
            i: 'crer',
            present: [
                'creio',
                'crês',
                'crê',
                'cremos',
                'credes',
                'crêem',
            ],
            preterite: [
                'cri',
                'creste',
                'creu',
                'cremos',
                'crestes',
                'creram',
            ],                    
            imperfect: [
                'cria',
                'crias',
                'cria',
                'críamos',
                'críeis',
                'criam',
            ],
            future: [
                'crerei',
                'crerás',
                'crerá',
                'creremos',
                'crereis',
                'crerão'
            ],
            conditional: [
                'creria',
                'crerias',
                'creria',
                'creríamos',
                'creríeis',
                'creriam',
            ],
            pluperfect: [
                'crera',
                'creras',
                'crera',
                'crêramos',
                'crêreis',
                'creram',
            ],
            'present subjunctive': [
                'creia',
                'creias',
                'creia',
                'creiamos',
                'creiais',
                'creiam',
            ],
            'imperfect subjunctive': [
                'cresse',
                'cresses',
                'cresse',
                'crêssemos',
                'crêsseis',
                'cressem',
            ],
            'future subjunctive': [
                'crer',
                'creres',
                'crer',
                'crermos',
                'crerdes',
                'crerem',
            ],
        },
        {
            i: 'ouvir',
            present: [
                'ouço',
                'ouves',
                'ouve',
                'ouvimos',
                'ouvis',
                'ouvem',
            ],
            preterite: [
                'ouvi',
                'ouviste',
                'ouviu',
                'ouvimos',
                'ouvistes',
                'ouviram',
            ],                    
            imperfect: [
                'ouvia',
                'ouvias',
                'ouvia',
                'ouvíamos',
                'ouvíeis',
                'ouviam',
            ],
            future: [
                'ouvirei',
                'ouvirás',
                'ouvirá',
                'ouviremos',
                'ouvireis',
                'ouvirão',
            ],
            conditional: [
                'ouviria',
                'ouvirias',
                'ouviria',
                'ouviríamos',
                'ouviríeis',
                'ouviriam',
            ],
            pluperfect: [
                'ouvira',
                'ouviras',
                'ouvira',
                'ouvíramos',
                'ouvíreis',
                'ouviram',
            ],
            'present subjunctive': [
                'ouça',
                'ouças',
                'ouça',
                'ouçamos',
                'ouçais',
                'ouçam',
            ],
            'imperfect subjunctive': [
                'ouvisse',
                'ouvisses',
                'ouvisse',
                'ouvíssemos',
                'ouvísseis',
                'ouvissem',
            ],
            'future subjunctive': [
                'ouvir',
                'ouvires',
                'ouvir',
                'ouvirmos',
                'ouvirdes',
                'ouvirem',
            ],
        },
        {
            i: 'pedir',
            present: [
                'peço',
                'pedes',
                'pede',
                'pedimos',
                'pedis',
                'pedem',
            ],
            preterite: [
                'pedi',
                'pediste',
                'pediu',
                'pedimos',
                'pedistes',
                'pediram',
            ],                    
            imperfect: [
                'pedia',
                'pedias',
                'pedia',
                'pedíamos',
                'pedíeis',
                'pediam',
            ],
            future: [
                'pedirei',
                'pedirás',
                'pedirá',
                'pediremos',
                'pedireis',
                'pedirão',
            ],
            conditional: [
                'pediria',
                'pedirias',
                'pediria',
                'pediríamos',
                'pediríeis',
                'pediriam',
            ],
            pluperfect: [
                'pedira',
                'pediras',
                'pedira',
                'pedíramos',
                'pedíreis',
                'pediram',
            ],
            'present subjunctive': [
                'peça',
                'peças',
                'peça',
                'peçamos',
                'peçais',
                'peçam',
            ],
            'imperfect subjunctive': [
                'pedisse',
                'pedisses',
                'pedisse',
                'pedíssemos',
                'pedísseis',
                'pedissem',
            ],
            'future subjunctive': [
                'pedir',
                'pedires',
                'pedir',
                'pedirmos',
                'pedirdes',
                'pedirem',
            ],
        },
        {

            i: 'subir',
            present: [
                'subo',
                'sobes',
                'sobe',
                'subimos',
                'subis',
                'subem',
            ],
            preterite: [
                'subi',
                'subiste',
                'subiu',
                'subimos',
                'subistes',
                'subiram',
            ],                    
            imperfect: [
                'subia',
                'subias',
                'subia',
                'subíamos',
                'subíeis',
                'subiam',
            ],
            future: [
                'subirei',
                'subirás',
                'subirá',
                'subiremos',
                'subireis',
                'subirão'
            ],
            conditional: [
                'subiria',
                'subirias',
                'subiria',
                'subiríamos',
                'subiríeis',
                'subiriam',
            ],
            pluperfect: [
                'subira',
                'subiras',
                'subira',
                'subíramos',
                'subíreis',
                'subiram',
            ],
            'present subjunctive': [
                'suba',
                'subas',
                'suba',
                'subamos',
                'subais',
                'subam',
            ],
            'imperfect subjunctive': [
                'subisse',
                'subisses',
                'subisse',
                'subíssemos',
                'subísseis',
                'subissem',
            ],
            'future subjunctive': [
                'subir',
                'subires',
                'subir',
                'subirmos',
                'subirdes',
                'subirem',
            ]
        },
        {
            i: 'seguir',
            present: [
                'sigo',
                'segues',
                'segue',
                'seguimos',
                'seguis',
                'seguem',
            ],
            preterite: [
                'segui',
                'seguiste',
                'seguiu',
                'seguimos',
                'seguistes',
                'seguiram',
            ],                    
            imperfect: [
                'seguia',
                'seguias',
                'seguia',
                'seguíamos',
                'seguíeis',
                'seguiam',
            ],
            future: [
                'seguirei',
                'seguirás',
                'seguirás',
                'seguiremos',
                'seguireis',
                'seguirão',
            ],
            conditional: [
                'seguiria',
                'seguirias',
                'seguiria',
                'seguiríamos',
                'seguiríeis',
                'seguiriam',
            ],
            pluperfect: [
                'seguira',
                'seguiras',
                'seguira',
                'seguíramos',
                'seguíreis',
                'seguiram',
            ],
            'present subjunctive': [
                'siga',
                'sigas',
                'siga',
                'sigamos',
                'sigais',
                'sigam',
            ],
            'imperfect subjunctive': [
                'seguisse',
                'seguisses',
                'seguisse',
                'seguíssemos',
                'seguísseis',
                'seguissem',
            ],
            'future subjunctive': [
                'seguir',
                'seguires',
                'seguir',
                'seguirmos',
                'seguirdes',
                'seguirem',
            ],
        },
        {
            i: 'progredir',
            present: [
                'progredo',
                'progredes',
                'progrede',
                'progredimos',
                'progredis',
                'progredem',
            ],
            preterite: [
                'progredi',
                'progrediste',
                'progrediu',
                'progredimos',
                'progredistes',
                'progrediram',
            ],                    
            imperfect: [
                'progredia',
                'progredias',
                'progredia',
                'progredíamos',
                'progredíeis',
                'progrediam',
            ],
            future: [
                'progredirei',
                'progredirás',
                'progredirá',
                'progrediremos',
                'progredireis',
                'progredirão',
            ],
            conditional: [
                'progrediria',
                'progredirias',
                'progrediria',
                'progrediríamos',
                'progrediríeis',
                'progrediriam',
            ],
            pluperfect: [
                'progredira',
                'progrediras',
                'progredira',
                'progredíramos',
                'progredíreis',
                'progrediram',
            ],
            'present subjunctive': [
                'progreda',
                'progredas',
                'progreda',
                'progredamos',
                'progredais',
                'progredam',
            ],
            'imperfect subjunctive': [
                'progredisse',
                'progredisses',
                'progredisse',
                'progredíssemos',
                'progredísseis',
                'progredissem',
            ],
            'future subjunctive': [
                'progredir',
                'progredires',
                'progredir',
                'progredirmos',
                'progredirdes',
                'progredirem',
            ],
        }
    ],
    es: [
        ...esConjugations,
        {
            i: 'hablar',
            present: [
                'hablo',
                'hablas',
                'habla',
                'hablamos',
                'habláis',
                'hablan'
            ],                  
            imperfect: [
                'hablaba',
                'hablabas',
                'hablaba',
                'hablábamos',
                'hablabais',
                'hablaban',
            ],
            preterite: [
                'hablé',
                'hablaste',
                'habló',
                'hablamos',
                'hablasteis',
                'hablaron',
            ],
            future: [
                'hablaré',
                'hablarás',
                'hablará',
                'hablaremos',
                'hablaréis',
                'hablarán',
            ],
            conditional: [
                'hablaría',
                'hablarías',
                'hablaría',
                'hablaríamos',
                'hablaríais',
                'hablarían',
            ],
            'past perfect': ['he hablado','has hablado','ha hablado','hemos hablado','habéis hablado','han hablado'],
            pluperfect: [
                'había hablado',
                'habías hablado',
                'había hablado',
                'habíamos hablado',
                'habíais hablado',
                'habían hablado',
            ],
            'future perfect': [
                'habré hablado',
                'habrás hablado',
                'habrá hablado',
                'habremos hablado',
                'habréis hablado',
                'habrán hablado',
            ],
            'past anterior': [
                'hube hablado',
                'hubiste hablado',
                'hubo hablado',
                'hubimos hablado',
                'hubisteis hablado',
                'hubieron hablado',
            ],
            'present subjunctive': [
                'hable',
                'hables',
                'hable',
                'hablemos',
                'habléis',
                'hablen',
            ],
            'imperfect subjunctive': [
                'hablara',
                'hablaras',
                'hablara',
                'habláramos',
                'hablarais',
                'hablaran',
            ],
            'future subjunctive': [
                'hablare',
                'hablares',
                'hablare',
                'habláremos',
                'hablareis',
                'hablaren',
            ],
            'perfect subjunctive': [
                'haya hablado',
                'hayas hablado',
                'haya hablado',
                'hayamos hablado',
                'hayáis hablado',
                'hayan hablado',
            ],
            'pluperfect subjunctive': [
                'hubiera hablado',
                'hubieras hablado',
                'hubiera hablado',
                'hubiéramos hablado',
                'hubierais hablado',
                'hubieran hablado',
            ],
            // 'future perfect subjunctive': [
            //     'hubiere hablado',
            //     'hubieres hablado',
            //     'hubiere hablado',
            //     'hubiéremos hablado',
            //     'hubiereis hablado',
            //     'hubieren hablado',
            // ],
            gerund: 'hablando',
            participle: 'hablado'
        },
        {
            i: 'comer',
            present: [
                'como',
                'comes',
                'come',
                'comemos',
                'coméis',
                'comen'
            ],
            preterite: [
                'comí',
                'comiste',
                'comió',
                'comimos',
                'comisteis',
                'comieron'
            ],            
            imperfect: [
                'comía',
                'comías',
                'comía',
                'comíamos',
                'comíais',
                'comían',
            ],
            future: [
                'comeré',
                'comerás',
                'comerá',
                'comeremos',
                'comeréis',
                'comerán',
            ],
            conditional: [
                'comería',
                'comerías',
                'comería',
                'comeríamos',
                'comeríais',
                'comerían',
            ],
            'past perfect': [
                'he comido',
                'has comido',
                'ha comido',
                'hemos comido',
                'habéis comido',
                'han comido',
            ],
            pluperfect: [
                'había comido',
                'habías comido',
                'había comido',
                'habíamos comido',
                'habíais comido',
                'habían comido',
            ],
            'future perfect': [
                'habré comido',
                'habrás comido',
                'habrá comido',
                'habremos comido',
                'habréis comido',
                'habrán comido',
            ],
            'past anterior': [
                'hube comido',
                'hubiste comido',
                'hubo comido',
                'hubimos comido',
                'hubisteis comido',
                'hubieron comido',
            ],
            'present subjunctive': [
                'coma',
                'comas',
                'coma',
                'comamos',
                'comáis',
                'coman',
            ],
            'imperfect subjunctive': [
                'comiera',
                'comieras',
                'comiera',
                'comiéramos',
                'comierais',
                'comieran',
            ],
            'future subjunctive': [
                'comiere',
                'comieres',
                'comiere',
                'comiéremos',
                'comiereis',
                'comieren',
            ],
            'perfect subjunctive': [
                'haya comido',
                'hayas comido',
                'haya comido',
                'hayamos comido',
                'hayáis comido',
                'hayan comido',
            ],
            'pluperfect subjunctive': [
                'hubiera comido',
                'hubieras comido',
                'hubiera comido',
                'hubiéramos comido',
                'hubierais comido',
                'hubieran comido',
            ],
            // 'future perfect subjunctive': [
            //     'hubiere comido',
            //     'hubieres comido',
            //     'hubiere comido',
            //     'hubiéremos comido',
            //     'hubiereis comido',
            //     'hubieren comido',
            // ],
            gerund: 'comiendo',
            participle: 'comido'
        },
        {
            i: 'vivir',
            present: [
                'vivo',
                'vives',
                'vive',
                'vivimos',
                'vivís',
                'viven'
            ],
            preterite: [
                'viví',
                'viviste',
                'vivío',
                'vivimos',
                'vivisteis',
                'vivieron',
            ],            
            imperfect: [
                'vivía',
                'vivías',
                'vivía',
                'vivíamos',
                'vivíais',
                'vivían',
            ],
            future: [
                'viviré',
                'vivirás',
                'vivirá',
                'viviremos',
                'viviréis',
                'vivirán',
            ],
            conditional: [
                'viviría',
                'vivirías',
                'viviría',
                'viviríamos',
                'viviríais',
                'vivirían',
            ],
            'past perfect':[
                'he vivido',
                'has vivido',
                'ha vivido',
                'hemos vivido',
                'habéis vivido',
                'has vivido',
            ],
            pluperfect: [
                'había vivido',
                'habías vivido',
                'había vivido',
                'habíamos vivido',
                'habíais vivido',
                'habían vivido',
            ],
            'future perfect': [
                'habré vivido',
                'habrás vivido',
                'habrá vivido',
                'habremos vivido',
                'habréis vivido',
                'habrán vivido',
            ],
            'past anterior': [
                'hube vivido',
                'hubiste vivido',
                'hubo vivido',
                'hubimos vivido',
                'hubisteis vivido',
                'hubieron vivido',
            ],
            'present subjunctive': [
                'viva',
                'vivas',
                'viva',
                'vivamos',
                'viváis',
                'vivan',
            ],
            'imperfect subjunctive': [
                'viviera',
                'vivieras',
                'viviera',
                'viviéramos',
                'vivierais',
                'vivieran',
            ],
            'future subjunctive': [
                'viviere',
                'vivieres',
                'viviere',
                'viviéremos',
                'viviereis',
                'vivieren',
            ],
            'perfect subjunctive': [
                'haya vivido',
                'hayas vivido',
                'haya vivido',
                'hayamos vivido',
                'hayáis vivido',
                'hayan vivido',
            ],
            'pluperfect subjunctive': [
                'hubiera vivido',
                'hubieras vivido',
                'hubiera vivido',
                'hubiéramos vivido',
                'hubierais vivido',
                'hubieran vivido',
            ],
            // 'future perfect subjunctive': [
            //     'hubiere vivido',
            //     'hubieres vivido',
            //     'hubiere vivido',
            //     'hubiéremos vivido',
            //     'hubiereis vivido',
            //     'hubieren vivido',
            // ],
            gerund: 'viviendo',
            participle: 'vivido'
        },
    ]
};

 const partials = {
    pt: [
        {
            i: 'sentir',
            present: ['sinto','','','','',''],
            'present subjunctive': [
                'sinta',
                'sintas',
                'sinta',
                'sintamos',
                'sintais',
                'sintam',
            ]
        },
        {
            i: 'servir',
            present: ['sirvo','','','','',''],
            'present subjunctive': [
                'sirva',
                'sirvas',
                'sirva',
                'sirvamos',
                'sirvais',
                'sirvam',
            ]
        },
        {
            i: 'esquecer',
            present: ['esqueço','','','','',''],
            'present subjunctive': [
                'esqueça',
                'esqueças',
                'esqueça',
                'esqueçamos',
                'esqueçais',
                'esqueçam',
            ]
        },
        {
            i: 'distrair',
            present: [
                'distraio',
                'distrais',
                'distrai',
                'distraímos',
                'distraís',
                'distraem'
            ],
            imperfect: [
                'distraía',
                'distraías',
                'distraía', 
                'distraíamos',
                'distraíeis',
                'distraíam'
            ],
            preterite: [
                'distraí',
                'distraíste',
                'distraiu',
                'distraímos',
                'distraístes',
                'distraíram'
            ],
            pluperfect: [
                'distraíra',
                'distraíras',
                'distraíra',
                'distraíramos',
                'distraíreis',
                'distraíram'
            ],
            'present subjunctive': [
                'distraia',
                'distraias',
                'distraia',
                'distraiamos',
                'distraiais',
                'distraiam',
            ],
            'imperfect subjunctive': [
                'distraísse',
                'distraísses',
                'distraísse',
                'distraíssemos',
                'distraísseis',
                'distraíssem',
            ],
            'future subjunctive': [
                'distrair',
                'distraíres',
                'distrair',
                'distrairmos',
                'distrairdes',
                'distraírem'
            ]
        },
        {
            i: 'acudir',
            present: [
                'acudo',
                'acodes',
                'acode',
                'acudimos',
                'acudis',
                'acodem',
            ]
        },
        {
            i: 'aderir',
            present: [
                'adiro', '', '', '', '', ''
            ],
            'present subjunctive': [
                'adira',
                'adiras',
                'adira',
                'adiramos',
                'adirais',
                'adiram',
            ]
        },
        {
            i: 'agredir',
            present: [
                'agrido',
                'agrides',
                'agride',
                'agredimos',
                'agredis',
                'agridem',
            ],
            'present subjunctive': [
                'agrida',
                'agridas',
                'agrida',
                'agridamos',
                'agridais',
                'agridam',
            ]
        },
        {
            i: 'caber',
            present: ['caibo','','','','',''],
            preterite: [
                'coube',
                'coubeste',
                'coube',
                'coubemos',
                'coubestes',
                'couberam',
            ],
            pluperfect: [
                'coubera',
                'couberas',
                'coubera',
                'coubéramos',
                'coubéreis',
                'couberam',
            ],
            'present subjunctive': [
                'caiba',
                'caibas',
                'caiba',
                'caibamos',
                'caibais',
                'caibam',
            ],
            'imperfect subjunctive': [
                'coubesse',
                'coubesses',
                'coubesse',
                'coubéssemos',
                'coubésseis',
                'coubessem',
            ],
            'future subjunctive': [
                'couber',
                'couberes',
                'couber',
                'coubermos',
                'couberdes',
                'couberem',
            ],
        },
        {
            i: 'caçar',
            preterite: ['cacei', '', '', '', '', ''],
            'present subjunctive': [
                'cace',
                'caces',
                'cace',
                'cacemos',
                'caceis',
                'cacem',
            ]
        },
        {
            i: 'chegar',
            preterite: ['cheguei', '', '', '', '', ''],
            'present subjunctive': [
                'chegue',
                'chegues',
                'chegue',
                'cheguemos',
                'chegueis',
                'cheguem',
            ]
        },
        {
            i: 'cobrir',
            present: ['cubro', '', '', '', '', ''],
            'present subjunctive': [
                'cubra',
                'cubras',
                'cubra',
                'cubramos',
                'cubrais',
                'cubram',
            ]
        },
        {
            i: 'construir',
            present: [
                'construo',
                'constróis',
                'constrói',
                'construímos',
                'construís',
                'constroem'
            ],
            imperfect: [
                'construía',
                'construías',
                'construía',
                'construíamos',
                'construíeis',
                'construíam'
            ],
            preterite: [
                'construí',
                'construíste',
                'construiu',
                'construímos',
                'construístes',
                'construíram'
            ],
            'present subjunctive': [
                'construíra',
                'construíras',
                'construíra',
                'construíramos',
                'construíreis',
                'construíram',
            ],
            'imperfect subjunctive': [
                'construísse',
                'construísses',
                'construísse',
                'construíssemos',
                'construísseis',
                'construíssem',
            ],
            'future subjunctive': [
                'construir',
                'construíres',
                'construir',
                'construirmos',
                'construirdes',
                'construírem'
            ]
        },
        {
            i: 'distinguir',
            present: ['distingo', '', '', '', '', ''],
            'present subjunctive': [
                'distinga',
                'distingas',
                'distinga',
                'distingamos',
                'distingais',
                'distingam',
            ]
        },
        {
            i: 'erguer',
            present: ['ergo', '', '', '', '', ''],
            'present subjunctive': [
                'erga',
                'ergas',
                'erga',
                'ergamos',
                'ergais',
                'ergam',
            ]
        },
        {
            i: 'ficar',
            preterite: ['fiquei', '', '', '', '', ''],
            'present subjunctive': [
                'fique',
                'fiques',
                'fique',
                'fiquemos',
                'fiqueis',
                'fiquem',
            ]
        },
        {
            i: 'fingir',
            present: ['finjo', '', '', '', '', ''],
            'present subjunctive': [
                'finja',
                'finjas',
                'finja',
                'finjamos',
                'finjais',
                'finjam',
            ]
        },
        {
            i: 'frigir',
            present: ['frijo', '', '', '', '', ''],
            'present subjunctive': [
                'frija',
                'frijas',
                'frija',
                'frijamos',
                'frijais',
                'frijam',
            ]
        },
        {
            i: 'fugir',
            present: ['fujo', 'foges', 'foge', '', '', '', 'fogem'],
            'present subjunctive': [
                'fuja',
                'fujas',
                'fuja',
                'fujamos',
                'fujais',
                'fujam',
            ]
        },
        {
            i: 'incendiar',
            present: ['incendeio', 'incendeias', 'incendeia', '', '', '', 'incendeiam'],
            'present subjunctive': [
                'incendeie',
                'incendeies',
                'incendeie',
                'incendeiemos',
                'incendeieis',
                'incendeiem',
            ]
        },
        {
            i: 'influir',
            present: [
                'influo',
                'influis',
                'influi',
                'influímos',
                'influís',
                'influem'
            ],
            imperfect: [
                'influía',
                'influías',
                'influía',
                'influíamos',
                'influíaeis',
                'influíam'
            ],
            preterite: [
                'influí',
                'influíste',
                'influiu',
                'influímos',
                'influístes',
                'influíram'
            ],
            pluperfect: [
                'influíra',
                'influíras',
                'influíra',
                'influíramos',
                'influíreis',
                'influíram',
            ],
            'imperfect subjunctive': [
                'influísse',
                'influísses',
                'influísse',
                'influíssemos',
                'influísseis',
                'influíssem',
            ],
            'future subjunctive': [
                'influir',
                'influíres',
                'influir',
                'influirmos',
                'influirdes',
                'influírem'
            ]
        },
        {
            i: 'moer',
            present: [
                'moo',
                'móis',
                'mói',
                '',
                '',
                ''
            ],
            imperfect: [
                'moía',
                'moías',
                'moía',
                'moíamos',
                'moíeis',
                'moíam'
            ],
            preterite: [ 'moí', '', '', '', '', '' ]
        },
        {
            i: 'passear',
            present: ['passeio', 'passeias', 'passeia', '', '', '', 'passeiam'],
            'present subjunctive': [
                'passeie',
                'passeies',
                'passeie',
                'passeemos',
                'passeeis',
                'passeiem',
            ]
        },
        {
            i: 'perder',
            present: ['perco', '', '', '', '', ''],
            'present subjunctive': [
                'perca',
                'percas',
                'perca',
                'percamos',
                'percais',
                'percam',
            ]
        },
        {
            i: 'precaver',
            present: ['', '', '', '', 'precaveis', '' ],
        },
        {
            i: 'proteger',
            present: ['protejo', '', '', '', '', ''],
            'present subjunctive': [
                'proteja',
                'protejas',
                'proteja',
                'protejamos',
                'protejais',
                'protejam',
            ]
        },  
        {
            i: 'prover',
            present: ['provejo', 'provês', 'provê', 'provemos', 'provedes', 'proveem'],
            'present subjunctive': [
                'proveja',
                'provejas',
                'proveja',
                'provejamos',
                'provejais',
                'provejam',
            ]
        },
        {
            i: 'reaver',
            preterite: ['reouve', 'reouveste', 'reouve', 'reouvemos', 'reouvestes', 'reouveram'],
            imperfect: [
                'reouvera',
                'reouveras',
                'reouvera',
                'reouvéramos',
                'reouvéreis',
                'reouveram',
            ],
            'imperfect subjunctive': [
                'reouvesse',
                'reouvesses',
                'reouvesse',
                'reouvéssemos',
                'reouvésseis',
                'reouvessem',
            ]
        },
        {
            i: 'requerer',
            present: ['requeiro', '', 'requer', '', '', ''],
            'present subjunctive': [
                'requeira',
                'requeiras',
                'requeira',
                'requeiramos',
                'requeirais',
                'requeiram',
            ]
        },
        {
            i: 'rir',
            present: ['rio', 'ris', 'ri', 'rimos', 'rides', 'riem'],
            'present subjunctive': [
                'ria',
                'rias',
                'ria',
                'riamos',
                'riais',
                'riam',
            ]
        },
        {
            i: 'sair',
            present: ['saio', 'sais', 'sai', 'saímos', 'saís', 'saem'],
            imperfect: [
                'saía',
                'saías',
                'saía',
                'saíamos',
                'saíeis',
                'saíam',
            ],
            preterite: [
                'saí',
                'saíste',
                'saiu',
                'saímos',
                'saístes',
                'saíram'
            ],
            pluperfect: [
                'saíra',
                'saíras',
                'saíra',
                'saíramos',
                'saíreis',
                'saíram',
            ],
            'present subjunctive': [
                'saia',
                'saias',
                'saia',
                'saiamos',
                'saiais',
                'saiam',
            ],
            'imperfect subjunctive': [
                'saísse',
                'saísses',
                'saísse',
                'saíssemos',
                'saísseis',
                'saíssem',
            ],
            'present subjunctive': [
                'sair',
                'saíres',
                'sair',
                'sairmos',
                'sairdes',
                'saírem',
            ],
        },
        {
            i: 'saudar',
            present: ['saúdo', 'saúdas', 'saúda', 'saudamos', 'saudais', 'saúdam'],
            'present subjunctive': [
                'saúde',
                'saúdes',
                'saúde',
                'saudemos',
                'saudeis',
                'saúdem',
            ]
        },
        {
            i: 'seduzir',
            present: ['', '', 'seduz', '', '', ''],
        },
        {
            i: 'valer',
            present: ['valho', '', '', '', '', ''],
            'present subjunctive': [
                'valha',
                'valhas',
                'valha',
                'valhamos',
                'valhais',
                'valham',
            ]
        },
        {
            i: 'vencer',
            present: ['venço', '', '', '', '', ''],
            'present subjunctive': [
                'vença',
                'venças',
                'vença',
                'vençamos',
                'vençais',
                'vençam',
            ]
        },
        {
            i: 'polir',
            present: [
                'pulo', 'pules', 'pule', 'polimos', 'polis', 'pulem'
            ],
            'present subjunctive': [
                'pula',
                'pulas',
                'pula',
                'pulamos',
                'pulais',
                'pulam',
            ]
        },
        {
            i: 'odiar',
            present: [
                'odeio', 'odeias', 'odeia', 'odiamos', 'odiais', 'odeiam'
            ],
            'present subjunctive': [
                'odeie',
                'odeies',
                'odeie',
                'odeiemos',
                'odeieis',
                'odeiem',
            ]
        },
        {
            i: 'parecer',
            present: [
                'pareço', '', '', '', '', ''
            ],
            'present subjunctive': [
                'pareça',
                'pareças',
                'pareça',
                'pareçamos',
                'pareçais',
                'pareçam',
            ]
        },
        {
            i: 'conseguir',
            present: [
                'consigo', '', '', '', '', ''
            ],
            'present subjunctive': [
                'consiga',
                'consigas',
                'consiga',
                'consigamos',
                'consigais',
                'consigam',
            ]
        },
        {
            i: 'conhecer',
            present: [
                'conheço', '', '', '', '', ''
            ],
            'present subjunctive': [
                'conheça',
                'conheças',
                'conheça',
                'conheçamos',
                'conheçais',
                'conheçam',
            ]
        },
        {
            i: 'cair',
            present: [
                'caio', 'cais', 'cai', 'caímos', 'caís', 'caem'
            ],
            imperfect: [
                'caía',
                'caías',
                'caía',
                'caíamos',
                'caíais',
                'caíam',
            ],
            preterite: [
                'caí',
                'caíste',
                'caiu',
                'caímos',
                'caístes',
                'caíram'
            ],
            pluperfect: [
                'caíra',
                'caíras',
                'caíra',
                'caíramos',
                'caíreis',
                'caíram',
            ],
            'present subjunctive': [
                'caia',
                'caias',
                'caia',
                'caiamos',
                'caiais',
                'caiam',
            ],
            'imperfect subjunctive': [
                'caísse',
                'caísses',
                'caísse',
                'caíssemos',
                'caísseis',
                'caíssem',
            ],
            'future subjunctive': [
                'cair',
                'caíres',
                'cair',
                'cairmos',
                'cairdes',
                'caírem',
            ],
        },
        {
            i: 'surgir',
            present: [
                'surjo', '', '', '', '', ''
            ],
            'present subjunctive': [
                'surja',
                'surjas',
                'surja',
                'surjamos',
                'surjais',
                'surjam',
            ]
        },
        {
            i: 'nascer',
            present: [
                'nasço', '', '', '', '', ''
            ],
            'present subjunctive': [
                'nasça',
                'nasças',
                'nasça',
                'nasçamos',
                'nasçais',
                'nasçam',
            ]
        },
        {
            i: 'produz',
            present: [
                '', '', 'produz', '', '', ''
            ]
        },
        {
            i: 'medir',
            present: [
                'meço', '', '', '', '', ''
            ],
            'present subjunctive': [
                'meça',
                'meças',
                'meça',
                'meçamos',
                'meçais',
                'meçam',
            ]
        },
        {
            i: 'jazer',
            present: ['','','jaz','','','',]
        },
        {
            i: 'cozer',
            present: ['','','coz','','','',]
        },
        {
            i: 'averiguar',
            preterite: [
                'averigüei', '', '', '', '', ''
            ],
            'present subjunctive': [
                'averigúe',
                'averigúes',
                'averigúe',
                'averiguemos',
                'averigueis',
                'averigúem',
            ]
        },
        {
            i: 'extorquir',
            preterite: [
                'exturco', '', '', '', '', ''
            ],
            'present subjunctive': [
                'exturca',
                'exturcas',
                'exturca',
                'exturcamos',
                'exturcais',
                'exturcam',
            ]
        },
        {
            i: 'extenuar',
            present: ['','extenúas','extenúa','','','extenúam',]
        },
        {
            i: 'arguir',
            present: ['','argúis','argúi','','','argúem']
        },
        {
            i: 'erguer',
            present: ['ergo','','','','','']
        },
    ],
    es: [
        ...esPartials
    ]
};

export const getVerbConjugations = (language = Language.pt) => {
    return new Promise(resolve => resolve({conjugations: conjugations[language], partials: partials[language] }));
};