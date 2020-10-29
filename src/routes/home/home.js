import { h } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import { Language, DrillState, Choice, Pronoun_PT, Pronoun_EN, VerbGroup } from '../../logic/enums';
import { Conjugations } from '../../components/elements/conjugations';
import { Picker } from '../../components/picker/picker';
import { api } from '../../logic/api';
import { ActionList, EditableList, RadioButtonList } from '../../components/elements/lists';
import { Drill } from '../../components/elements/drill';
import Footer from '../../components/footer/footer';

const Home = ({ verbs, tenses, choice, language, drill, setDrill, drillActionState, setDrillActionState, lesson, setLesson, selectedVerbs, setSelectedVerbs }) => {

    const [inputVerbs, setInputVerbs] = useState(() => verbs);
    const [inputVerbGroups, setInputVerbGroups] = useState(() => [VerbGroup.all_verbs, VerbGroup.irregular_verbs, VerbGroup.common_regular_verbs]);
    const [inputTenses, setInputTenses] = useState(() => tenses);
    const [selectedPronoun, setSelectedPronoun] = useState(language === Language.PT ? Pronoun_PT[0] : Pronoun_EN[0]);
    const [selectedVerbGroup, setSelectedVerbGroup] = useState(VerbGroup.irregular_verbs);
    const [fixedDrills, setFixedDrills] = useState(() => api.getSetDrills());
    const [showConjugation, setShowConjugation] = useState(() => false);

    const handleVerbPicked = verb => {
        setDrillActionState(DrillState.intermediate);
        setSelectedVerbs([ ...selectedVerbs.filter(v => v !== verb.name), { name: verb, disabled: false } ]);
    };

    const handleTensePicked = tense => {
        setDrillActionState(DrillState.intermediate);
        setLesson({ ...lesson, tense, tenses });
    };

    const handleVerbGroupSelected = group => {        
        let verbs = [];
        switch(group) {
            case VerbGroup.all_verbs:
                api.getSetDrills().forEach(group => {
                    verbs = [ ...verbs, ...group.verbs.map(verb => verb) ];
                });
                break;
            case VerbGroup.irregular_verbs:
                api.getSetDrills().filter(drill => drill.id < 4).forEach(group => {
                    verbs = [ ...verbs, ...group.verbs ];
                });
                break;
            case VerbGroup.common_regular_verbs:
                verbs = api.getSetDrills().find(drill => drill.id === 6).verbs;
                break;
        }
        setSelectedVerbGroup(group);
        setSelectedVerbs(verbs);
    };

    const handleSetDrill = async drill => {        
        let translation = await api.getVerb(drill.verb);
        drill.translation = translation[lesson.language.from].i;
        drill.conjugations = await api.getConjugations({inf:drill.verb});
        setDrill(drill);
    };

    const handleStartDrill = async e => {       
        lesson.removeVerbs();
            shuffleArray(selectedVerbs).filter(verb => !verb.disabled).forEach(verb => lesson.addVerb(verb.name));
            const drills = await lesson.createDrills(api, lesson.tense);
        switch(choice) {
        case Choice.drills:     
            break;
        case Choice.random:                
                drills.forEach(drill => { 
                    const pronounToTest = selectedPronoun === 'random pronoun' ? shuffleArray(Object.keys(Pronoun_PT).map(key => Pronoun_PT[key]))[0] : selectedPronoun;
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
        if(startDrillRef.current) {
            startDrillRef.current.focus();
            startDrillRef.current.scrollTo(0,0);
        }
    }, [selectedVerbs]);

    const sideBarCSS = drillActionState === DrillState.checkAnswers ? 'sidebar disabled' : 'sidebar';

    return (
        <>
        <section class="header-block">
            <h1>{ choice === Choice.drills ? 'Portuguese verb drills' : 'Portuguese random verbs' }</h1>
        </section>
        <div class="home">          
          <div class="columns">
          <div class={sideBarCSS}>
                <div> 
                    {
                        choice === Choice.drills
                            ? <ActionList header={'Fixed drills'} listItemClickHandler={handleSelectSetDrill} items={fixedDrills} />
                            : <RadioButtonList selectedPronoun={selectedPronoun} handleRadioButtonSelection={e => { setSelectedPronoun(e.target.id); }} header={'Select inflection'} pronouns={[ 'eu', 'tu', 'ela, ele, você', 'nós', 'vós', 'elas, eles, vocês', 'random pronoun', ]} />                     
                    }
                    <Picker initialSelectedItem='present' itemToString={item => item ? item : ''} items={inputTenses} onChange={handleTensePicked} label={'Tenses'}></Picker>
                    {
                        choice === Choice.drills
                            ? <Picker itemToString={item => item ? item : ''} items={inputVerbs} onChange={handleVerbPicked} label={'Verbs'}></Picker>
                            : <Picker initialSelectedItem='irregular verbs' itemToString={item => item ? item : ''} items={inputVerbGroups} onChange={handleVerbGroupSelected} label={'Verb groups'}></Picker>
                    }
                    {
                        choice === Choice.drills
                            ? <EditableList header={'Selected verbs'} items={selectedVerbs} editedHandler={handleVerbEdited} />
                            : selectedVerbs.length > 0
                                ? <div>{`${selectedVerbs.length} verbs`}</div>
                                : <></>         
                    }
                    {
                        selectedVerbs.length > 0 || choice === Choice.random
                            ? selectedVerbs.filter(v => !v.disabled).length > 0
                                ? <button class="btn" ref={startDrillRef} onClick={handleStartDrill}>Start drill</button>
                                : <button class="btn" ref={startDrillRef} disabled onClick={handleStartDrill}>Start drill</button>
                            : ''
                    }
                </div>
            </div>
            <div class="main">
                <div class="block">
                    { drillActionState !== DrillState.hideDrills ? (
                        <><Drill lesson={lesson} drill={drill} onChangeDrill={drill => handleSetDrill(drill)} drillActionState={drillActionState} onChangeDrillActionState={state => setDrillActionState(state)} onClickVerbConjugationLink={state => setShowConjugation(state)} choice={choice} />                          
                        </>): <div class="block"></div>
                    }
                </div>
            </div>
          </div>
          { showConjugation ? <Conjugations drill={drill} /> : '' }
          <Footer />
        </div>
        </>
    )
};


const shuffleArray = array => {

    if(!array || array.length === 0) return;

    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return [ ...array ];
  };

export default Home;
