import { h } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import { DrillState, Choice } from '../../logic/enums';
import { Conjugations } from '../../components/elements/conjugations';
import { Picker } from '../../components/picker/picker';
import { api } from '../../logic/api';
import { Lesson } from '../../logic/lesson';
import { ActionList, EditableList, RadioButtonList } from '../../components/elements/lists';
import { Drill } from '../../components/elements/drill';
import Footer from '../../components/footer/footer';

const Home = ({ verbs, tenses, choice }) => {

    const [lesson, setLesson] = useState(() => new Lesson());
    const [drill, setDrill] = useState(null);
    const [inputVerbs, setInputVerbs] = useState(() => verbs);
    const [inputTenses, setInputTenses] = useState(() => tenses);
    const [selectedVerbs, setSelectedVerbs] = useState(lesson.verbs.map(v => { return { name: v, disabled: false } }));
    const [fixedDrills, setFixedDrills] = useState(() => api.getSetDrills());
    const [drillActionState, setDrillActionState] = useState(() => DrillState.hideDrills);
    const [showConjugation, setShowConjugation] = useState(() => false);

    const handleVerbPicked = verb => {
        setDrillActionState(true);
        setSelectedVerbs([ ...selectedVerbs.filter(v => v !== verb.name), { name: verb, disabled: false } ]);
    };

    const handleTensePicked = tense => {
        setDrillActionState(true);
        setLesson({ ...lesson, tense, tenses });
    }

    const handleSetDrill = async drill => {        
        let translation = await api.getVerb(drill.verb);
        drill.translation = translation[lesson.language.from].i;
        drill.conjugations = await api.getConjugations({inf:drill.verb});
        setDrill(drill);
    };

    const handleStartDrill = async e => {        
        if(selectedVerbs.length > 0) {
            lesson.removeVerbs();
            shuffleArray(selectedVerbs).filter(verb => !verb.disabled).forEach(verb => lesson.addVerb(verb.name));
            const drills = await lesson.createDrills(api, lesson.tense);
            setLesson({ ...lesson, drills });
            setDrillActionState(DrillState.checkAnswers);
            let drill = lesson.getNextDrill();
            handleSetDrill(drill);
        }        
    };

    const handleSelectSetDrill = e => {
        setDrillActionState(true);
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
        <section class="banner-block">
            <h1>{ choice === Choice.drills ? 'Portuguese verb drills' : 'Portuguese random verbs' }</h1>
        </section>
        <div class="home">          
          <div class="columns">
          <div class={sideBarCSS}>
                <div> 
                    {
                        choice === Choice.drills
                            ? <ActionList header={'Fixed drills'} listItemClickHandler={handleSelectSetDrill} items={fixedDrills} />
                            : <RadioButtonList pronouns={[ 'eu', 'tu', 'ela', 'nós', 'vós', 'elas', 'dummy' ]} />

                    }
                    <Picker itemToString={item => item ? item : ''} items={inputVerbs} onChange={handleVerbPicked} label={'Verbs'}></Picker>
                    {
                        choice === Choice.drills
                            ? <Picker initialSelectedItem='present' itemToString={item => item ? item : ''} items={inputTenses} onChange={handleTensePicked} label={'Tenses'}></Picker>
                            : <></>
                    }
                    <EditableList header={'Selected verbs'} items={selectedVerbs} editedHandler={handleVerbEdited} />
                    {
                        selectedVerbs.length > 0
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
                        <><Drill lesson={lesson} drill={drill} onChangeDrill={drill => handleSetDrill(drill)} drillActionState={drillActionState} onChangeDrillActionState={state => setDrillActionState(state)} onClickVerbConjugationLink={state => setShowConjugation(state)} />                          
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
