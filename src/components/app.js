import { h } from 'preact';
import { api } from '../logic/api';
import { useState, useEffect } from 'preact/hooks';
import { Router } from 'preact-router';

import Header from './header/header';
import Footer from './footer/footer';

import { useLocalStorageState } from '../utils/custom-hooks';

import Home from '../routes/home/home';

const App = () => {

    const GLOBAL_LANGUAGE = 'pt';

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

    useEffect( async () => {
        
        const timeDiff = Math.abs(Date.now() - new Date(lastVisit));
        const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); 
    
        if(verbs.length === 0 || daysDiff > 1) { 
            console.log('update database');
            getVerbs();
            setLastVisit(Date.now());
        };
    }, [verbs]);

    if(verbs.length > 0) {
        return (
            <div id="app">
                <Header />
                <Home verbs={verbs} tenses={tenses} />
                {/* <Footer /> */}
            </div>
        )
    }
}

export default App;
