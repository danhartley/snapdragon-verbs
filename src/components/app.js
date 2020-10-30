import { h } from 'preact';
import { api } from '../logic/api';
import { Language, DrillState } from '../logic/enums';
import { useState, useEffect } from 'preact/hooks';

import Header from './header/header';
import { Choice } from '../logic/enums.js';

import { useLocalStorageState } from '../utils/custom-hooks';

import Verbs from '../routes/home/verbs';

const App = () => {

    const GLOBAL_LANGUAGE = Language.PT;

    let savedVerbs;
    
    const getVerbs = async () => {
        savedVerbs = await api.getVerbs();
        savedVerbs = savedVerbs.map(verb => {
            return verb[GLOBAL_LANGUAGE].i;
        });
        setVerbs(savedVerbs);
    };

    const defaultDate = Date.parse(new Date(2020,0,1));

    const [lastVisit, setLastVisit] = useLocalStorageState('last_visit', defaultDate);
    const [verbs, setVerbs] = useLocalStorageState('verbs', []);
    const [tenses, setTenses] = useState(() => api.getTenses().map(tense => tense['en']));
    const [choice, setChoice] = useState(Choice.drills);
    const [drill, setDrill] = useState(null);
    const [drillActionState, setDrillActionState] = useState(() => DrillState.hideDrills);
    // const [lesson, setLesson] = useState(new Lesson());
    // const [selectedVerbs, setSelectedVerbs] = useState(lesson.verbs.map(v => { return { name: v, disabled: false } }));

    useEffect( async () => {
        
        const timeDiff = Math.abs(Date.now() - new Date(lastVisit));
        const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); 
    
        if(verbs.length === 0 || daysDiff > 1) { 
            getVerbs();
            setLastVisit(Date.now());
        };
    }, [verbs]);

    const handleSetChoice = id => {
        setChoice(id);
        setDrill(null);
        setDrillActionState(DrillState.intermediate);
    };

    if(verbs.length > 0) {
        return (
            <div id="app">
                <Header choice={choice} onClickChangeChoice={state => handleSetChoice(state.target.id)} />
                <Verbs verbs={verbs} tenses={tenses} choice={choice} 
                    language={GLOBAL_LANGUAGE} drill={drill} setDrill={setDrill} 
                    drillActionState={drillActionState} setDrillActionState={setDrillActionState} 
                />
            </div>
        )
    }
}

export default App;
