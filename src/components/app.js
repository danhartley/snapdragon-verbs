import { h } from 'preact';
import { api } from '../logic/api';
import { useState, useEffect } from 'preact/hooks';
import { Router } from 'preact-router';

import Header from './header/header';

import { useLocalStorageState } from '../utils/custom-hooks';

import Home from '../routes/home/home';

const App = () => {

    const GLOBAL_LANGUAGE = 'pt';

    let savedVerbs;
    
    const getVerbs = async () => {
        savedVerbs = await api.getVerbs();
        savedVerbs = savedVerbs.map(verb => {
            return verb[GLOBAL_LANGUAGE].inf;
        });
        setVerbs(savedVerbs);
    };
    
    const [verbs, setVerbs] = useLocalStorageState('verbs', []);

    useEffect( async () => {
        if(verbs.length === 0) { getVerbs() };
    }, [verbs]);

    return (
        <div id="app">
            <Header />
            <Router>
                <Home verbs={verbs} path="/" />
            </Router>
        </div>
    )
}

export default App;
