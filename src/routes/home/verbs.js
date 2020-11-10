import { h } from 'preact';
import Footer from '../../components/footer/footer';
import { useState, useEffect, useRef } from 'preact/hooks';
import { Language, DrillState, Choice, Pronoun_PT, Tense, Pronoun_ES, Pronoun_EN } from '../../logic/enums';
import { Lesson } from '../../logic/lesson';
import { Conjugations } from '../../components/elements/conjugations';
import { Picker } from '../../components/picker/picker';
import { api } from '../../api/api';
import { ActionList, EditableList, RadioButtonList } from '../../components/elements/lists';
import { Drill } from '../../components/elements/drill';
import { utils } from '../../utils/utils';

export const Verbs = ({ verbs, tenses, choice, language, drill, setDrill, drillActionState, setDrillActionState }) => {

    const defaults = utils.getLessonDefaults({lesson: new Lesson(), choice, language });

    const [inputVerbGroups, setInputVerbGroups] = useState(() => defaults.verbGroups);
    const [inputTenses, setInputTenses] = useState(() => tenses);
    const [selectedPronoun, setSelectedPronoun] = useState(defaults.selectedPronoun);
    const [selectedVerbGroup, setSelectedVerbGroup] = useState(null);
    const [fixedDrills, setFixedDrills] = useState(() => api.getSetDrills(language));
    const [showConjugation, setShowConjugation] = useState(() => false);
    const [selectedTense, setSelectedTense] = useState(Tense.present);
    const [lesson, setLesson] = useState(defaults.lesson);
    const [selectedVerbs, setSelectedVerbs] = useState(lesson.verbs.map(v => { return { name: v, disabled: false } }));
    const [excludeSecondPersonPlural, setExcludeSecondPersonPlural] = useState(true);

    const handleVerbPicked = verb => {
        setDrillActionState(DrillState.intermediate);
        setSelectedVerbs([ ...selectedVerbs.filter(v => v !== verb.name), { name: verb, disabled: false } ]);
    };

    const handleTensePicked = tense => {
        setDrillActionState(DrillState.intermediate);
        setLesson({ ...lesson, tense, tenses });
        setSelectedTense(tense);        
    };

    const handleVerbGroupSelected = group => {        
        let { groupVerbs, tense } = api.getVerbGroups(group, language, verbs);
        handleTensePicked(tense);
        setSelectedVerbGroup(group);
        setSelectedVerbs(groupVerbs);
    };

    const getTranslation = async (verb, language) => {
        const translations = await api.getVerb({ inf: verb, language });
        return translations[lesson.language.from].i;
    };

    const handleSetDrill = async drill => {      
        if(drill) {              
            drill.translation = await getTranslation(drill.verb, language);
            drill.conjugations = await api.getConjugations({inf:drill.verb, language});
            setDrill(drill);
        }
    };

    const getPronounToTest = (selectedPronoun, language, excludeSecondPersonPlural) => {
        let pronounToTest;
        switch(language) {
            case Language.pt:
                if(excludeSecondPersonPlural) delete Pronoun_PT[4];
                pronounToTest = selectedPronoun === 'random pronoun' ? utils.shuffleArray(Object.keys(Pronoun_PT).map(key => Pronoun_PT[key]))[0] : selectedPronoun;
                break;
            case Language.es:
                if(excludeSecondPersonPlural) delete Pronoun_ES[4];
                pronounToTest = selectedPronoun === 'random pronoun' ? utils.shuffleArray(Object.keys(Pronoun_ES).map(key => Pronoun_ES[key]))[0] : selectedPronoun;
                break;
        }
        return pronounToTest;        
    };

    const handleStartDrill = async e => {       
        lesson.removeVerbs();
        utils.shuffleArray(selectedVerbs).filter(verb => !verb.disabled).forEach(verb => lesson.addVerb(verb.name));
        const drills = await lesson.createDrills(api, lesson.tense);
        switch(choice) {
            case Choice.drills:     
                drills.forEach(drill => { 

                    if(excludeSecondPersonPlural) {
                        drill.questions = drill.questions.filter((q,i) => i !== 4);
                    }

                })
                break;
            case Choice.random:    
                drills.forEach(drill => { 

                    if(excludeSecondPersonPlural) {
                        drill.questions = drill.questions.filter((q,i) => i !== 4);
                    }

                    const pronounToTest = getPronounToTest(selectedPronoun, language, excludeSecondPersonPlural);
                    drill.questions.forEach(question => {                    
                        const matchingPronoun = pronounToTest.split(',').find(pronoun => pronoun === question.pronoun);
                        question.disabled = !matchingPronoun;
                        question.class = !matchingPronoun
                            ? 'half-hidden is-correct'
                            : '';
                })
            });
            break;
        }
        setLesson({ ...lesson, drills });
        setDrillActionState(DrillState.checkAnswers);
        let drill = lesson.getNextDrill();
        handleSetDrill(drill);
    };

    const handleSelectSetDrill = e => {
        setDrillActionState(DrillState.intermediate);
        const set = e.target;
        const id = parseInt(set.dataset.id);
        const verbs = fixedDrills.find(set => set.id === id).verbs;
        setSelectedVerbs(verbs);
        setLesson({ ...lesson, verbs, verb: null, drills: []});
    };

    const handleVerbEdited = (verb, isDisabled) => {
        let verbs = selectedVerbs.map(v => {
            if(v.name === verb) v.disabled = isDisabled;
            return v;
        });
        setSelectedVerbs(verbs);
    };

    const startDrillRef = useRef();

    useEffect(() => {
        if(startDrillRef.current && !startDrillRef.current.disabled) {
            startDrillRef.current.focus();
        }
    }, [selectedVerbs]);

    const sideBarCSS = drillActionState === DrillState.checkAnswers ? 'sidebar disabled' : 'sidebar';
    const showButton = selectedVerbs.length > 0 || choice === Choice.random;
    const isButtonDisabled = selectedVerbs.filter(v => !v.disabled).length === 0;

    return (
        <div>
        <section class="header-block">
            <h1>{ defaults.title }</h1>
        </section>
        <div class="home">          
          <div class="columns">
          <div class={sideBarCSS}>
                <div> 
                {
                        <Picker key={selectedTense} initialSelectedItem={selectedTense} itemToString={item => item ? item : ''} items={inputTenses} onChange={handleTensePicked} label={'Tenses'}></Picker>
                    }
                    {
                        choice === Choice.drills
                            ? <Picker key={verbs} itemToString={item => item ? item : ''} items={verbs} onChange={handleVerbPicked} label={'Verbs'}></Picker>
                            : <Picker key={verbs} itemToString={item => item ? item : ''} items={inputVerbGroups} onChange={handleVerbGroupSelected} label={'Verb groups'}></Picker>
                    }
                    {
                        choice === Choice.drills
                            ? <ActionList header={'Fixed drills'} listItemClickHandler={handleSelectSetDrill} items={fixedDrills} />
                            : <RadioButtonList selectedPronoun={selectedPronoun} handleRadioButtonSelection={e => { setSelectedPronoun(e.target.id); }} header={'Select inflection'} pronouns={utils.getLongPronouns(language)} excludeSecondPersonPlural={excludeSecondPersonPlural} />                     
                    }
                    {
                        choice === Choice.drills
                            ? <EditableList header={'Selected verbs'} items={selectedVerbs} editedHandler={handleVerbEdited} />
                            : selectedVerbs.length > 0
                                ? <div>{`${selectedVerbs.length} verbs`}</div>
                                : null      
                    }
                    {                                       
                        showButton
                            ? <button class="btn" ref={startDrillRef} disabled={isButtonDisabled} onClick={handleStartDrill}>Start drill</button>
                            : ''
                    }                    
                        <section class="filter flex">
                            <input id="chkBox" class="margin-right" type="checkbox" checked={excludeSecondPersonPlural} onClick={e => {
                                setExcludeSecondPersonPlural(e.target.checked)
                            }} />
                            <label for="chkBox">exclude {language === Language.pt ? Pronoun_PT[4] : Pronoun_ES[4]}</label>
                        </section>                    
                </div>
            </div>
            <div class="main">
                <div class="block">
                    { drillActionState !== DrillState.hideDrills ? (
                            <Drill lesson={lesson} drill={drill} onChangeDrill={drill => handleSetDrill(drill)} drillActionState={drillActionState} onChangeDrillActionState={state => setDrillActionState(state)} onClickVerbConjugationLink={state => setShowConjugation(state)} choice={choice} startDrillRef={startDrillRef} excludeSecondPersonPlural={excludeSecondPersonPlural} />                          
                        ): <div class="block"></div>
                    }
                </div>
            </div>
          </div>
          { showConjugation ? <div class="conjugations-container"><Conjugations key={drill} drill={drill} language={language} /></div> : '' }
          <Footer />
        </div>
        </div>
    )
};