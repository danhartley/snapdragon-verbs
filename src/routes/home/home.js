import { h } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import { DrillState } from '../../logic/enums';
import { Picker } from '../../components/picker/picker';
import { api } from '../../logic/api';
import { Lesson } from '../../logic/lesson';
import { SimpleList, ActionList, EditableList } from '../../components/elements/lists';
import { Drill } from '../../components/elements/drill';

const Home = ({ verbs, tenses }) => {

    const [lesson, setLesson] = useState(() => new Lesson());
    const [drill, setDrill] = useState(null);
    const [inputVerbs, setInputVerbs] = useState(() => verbs);
    const [inputTenses, setInputTenses] = useState(() => tenses);
    const [selectedVerbs, setSelectedVerbs] = useState(lesson.verbs.map(v => { return { name: v, disabled: false } }));
    // const [selectedVerb, setSelectedVerb] = useState({});
    // const [selectedTenses, setSelectedTenses] = useState(() => [tenses[0]]);
    const [fixedDrills, setFixedDrills] = useState(() => [
        {
            id: 1,
            name: 'Common irregular verbs',
            verbs: [ { name:'ser' }, { name:'estar' }, { name:'ter' }, { name:'fazer', }, { name:'ir' }, { name:'vir' } ]
        },
        {
            id: 2,
            name: 'Regular -ar, -er and -ir verbs',
            verbs: [ { name:'falar' }, { name:'partir' }, { name:'vender' } ]
        },
        {
            id: 3,
            name: 'Common reflexive verbs',
            verbs: [ { name:'lembrar-se' }, { name:'levantar-se' }, { name:'vestir-se' }]
        },
        {
            id: 4,
            name: 'Clear all verbs',
            verbs: []
        },
    ]);
    const [drillActionState, setDrillActionState] = useState(() => DrillState.hideDrills);

    const handleVerbPicked = verb => {
        setDrillActionState(true);   
        // setSelectedVerb({ name: verb, disabled: false });
        setSelectedVerbs([ ...selectedVerbs.filter(v => v !== verb.name), { name: verb, disabled: false } ]);
    };

    const handleTensePicked = tense => {
        setDrillActionState(true);
        // setSelectedTenses([ tense ]);
        setLesson({ ...lesson, tense, tenses });
    }

    const handleStartDrill = async e => {        
        if(selectedVerbs.length > 0) {
            lesson.removeVerbs();
            shuffleArray(selectedVerbs).filter(verb => !verb.disabled).forEach(verb => lesson.addVerb(verb.name));
            const drills = await lesson.createDrills(api, lesson.tense);
            setLesson({ ...lesson, drills });
            setDrillActionState(DrillState.checkAnswers);
            setDrill(lesson.getNextDrill());
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
        }
    }, [selectedVerbs]);

    const sideBarCSS = drillActionState === DrillState.checkAnswers ? 'sidebar disabled' : 'sidebar';

    return (
        <div class="home">          
          <section class="banner-block">
            <h1>Portuguese verb drills</h1>
          </section>
          <div class="columns">
          <div class={sideBarCSS}>
                <div> 
                    <ActionList header={'Fixed drills'} listItemClickHandler={handleSelectSetDrill} items={fixedDrills} />
                    <Picker initialSelectedItem='present' itemToString={item => item ? item : ''} items={inputTenses} onChange={handleTensePicked} label={'Tenses'}></Picker>
                    <Picker itemToString={item => item ? item : ''} items={inputVerbs} onChange={handleVerbPicked} label={'Verbs'}></Picker>
                    <EditableList header={'Selected verbs'} items={selectedVerbs} editedHandler={handleVerbEdited} />
                    {
                        selectedVerbs.length > 0
                            ? selectedVerbs.filter(v => !v.disabled).length > 0
                                ? <button ref={startDrillRef} onClick={handleStartDrill}>Start drill</button>
                                : <button ref={startDrillRef} disabled onClick={handleStartDrill}>Start drill</button>
                            : ''
                    }
                </div>
            </div>
            <div class="main">
                <div class="block">
                    { drillActionState !== DrillState.hideDrills ? (
                        <><Drill lesson={lesson} drill={drill} onChangeDrill={drill => setDrill(drill)} drillActionState={drillActionState} onChangeDrillActionState={state => setDrillActionState(state)} />                          
                        </>): <div class="block"></div>
                    }
                </div>
            </div>
          </div>
        </div>
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
