import { h } from 'preact';
import { api } from './api/api';
import { Language, DrillState, Language_NAV, Choice } from './logic/enums';
import { useState, useEffect, useRef } from 'preact/hooks';

import Header from './components/header/header';

import { useLocalStorageState } from './utils/custom-hooks';

import { Verbs } from './routes/home/verbs';

const App = () => {

    const getVerbs = async language => {
        let verbs = await api.getVerbs();
        verbs = verbs.map(verb => {
            return verb[language] ? verb[language].i : undefined;
        }).filter(v => v).sort();        
        setVerbs(verbs);
    };

    const defaultDate = Date.parse(new Date(2020,0,1));

    const [language, setLanguage] = useLocalStorageState({ key: 'user_language', defaultValue: Language.pt });
    const [lastVisit, setLastVisit] = useLocalStorageState({ key: 'last_visit', defaultValue: defaultDate });
    const [verbs, setVerbs] = useLocalStorageState({ key: 'verbs', defaultValue: [] });
    const [tenses, setTenses] = useState(() => api.getTenses(language));
    const [choice, setChoice] = useLocalStorageState({ key: 'user_choice', defaultValue: Choice.drills });
    const [drill, setDrill] = useState(null);
    const [drillActionState, setDrillActionState] = useState(() => DrillState.hideDrills);

    useEffect( async () => {
        
        const timeDiff = Math.abs(Date.now() - new Date(lastVisit));
        const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); 
    
        getVerbs(language);

        if(verbs.length === 0 || daysDiff > 1) { 
            setLastVisit(Date.now());
        };
    }, [language]);

    const handleSetChoice = id => {        
        setChoice(id);
        setDrill(null);
        setDrillActionState(DrillState.intermediate);
    };

    const handleSetLanguage = id => {
        setLanguage(id);
        setDrill(null);
        setDrillActionState(DrillState.intermediate);
        getVerbs(id);
        setTenses(api.getTenses(id));
    };

    const appRef = useRef();

    const handleOnReload = () => {
        location.reload();
    };

    useEffect(() => {
        if(appRef.current) {
            console.log('scroll to app');
            appRef.current.scrollIntoView(true);
        }
    }, []);

    if(verbs.length > 0) {
        return (
            <div id="app" ref={appRef}>
                <Header language={language} choice={choice} onClickChangeChoice={state => handleSetChoice(state.target.id)} language={language} onClickChangeLanguage={state => handleSetLanguage(state.target.id)} onReload={handleOnReload} />
                <Verbs key={`${language}_${choice}`} verbs={verbs} tenses={tenses} choice={choice} 
                    language={language} drill={drill} setDrill={setDrill} 
                    drillActionState={drillActionState} setDrillActionState={setDrillActionState} 
                />
            </div>
        )
    }
}

export default App;
