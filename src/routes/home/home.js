import { h } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import { DrillState } from '../../logic/enums';
import { Picker } from '../../components/picker/picker';
import { api } from '../../logic/api';
import { Lesson } from '../../logic/lesson';
import { ActionList, EditableList } from '../../components/elements/lists';
import { Drill } from '../../components/elements/drill';
import Footer from '../../components/footer/footer';

const Home = ({ verbs, tenses }) => {

    const [lesson, setLesson] = useState(() => new Lesson());
    const [drill, setDrill] = useState(null);
    const [inputVerbs, setInputVerbs] = useState(() => verbs);
    const [inputTenses, setInputTenses] = useState(() => tenses);
    const [selectedVerbs, setSelectedVerbs] = useState(lesson.verbs.map(v => { return { name: v, disabled: false } }));
    const [fixedDrills, setFixedDrills] = useState(() => [
        {
            id: 1,
            name: 'Common irregular verbs',
            verbs: [ { name:'ser' }, { name:'estar' }, { name:'ter' }, { name:'fazer', }, { name:'ir' }, { name:'vir' }, { name: 'ver' }, { name: 'querer' }, { name: 'dar' }, { name: 'dizer' }, {  name: 'haver' }, { name: 'poder' } ]
        },
        {
            id: 2,
            name: 'More irregular verbs',
            verbs: [ { name:'saber' }, { name:'pôr' }, { name:'trazer' }, { name:'dormir', }, { name:'ler' }, { name:'crer' }, { name: 'ouvir' }, { name: 'pedir' } ]
        },
        {
            id: 3,
            name: 'Regular -ar, -er and -ir verbs',
            verbs: [ { name:'falar' }, { name:'partir' }, { name:'vender' } ]
        },
        {
            id: 4,
            name: 'Common reflexive verbs',
            verbs: [ { name:'lembrar-se' }, { name:'levantar-se' }, { name:'vestir-se' }]
        },
        {
            id: 5,
            name: 'Clear all verbs',
            verbs: []
        },
    ]);
    const [drillActionState, setDrillActionState] = useState(() => DrillState.hideDrills);

    const handleVerbPicked = verb => {
        setDrillActionState(true);
        setSelectedVerbs([ ...selectedVerbs.filter(v => v !== verb.name), { name: verb, disabled: false } ]);
    };

    const handleTensePicked = tense => {
        setDrillActionState(true);
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
            startDrillRef.current.scrollTo(0,0);
        }
    }, [selectedVerbs]);

    const sideBarCSS = drillActionState === DrillState.checkAnswers ? 'sidebar disabled' : 'sidebar';

    return (
        <>
        <section class="banner-block">
            <h1>Portuguese verb drills</h1>
        </section>
        <div class="home">          
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
                                ? <button class="btn" ref={startDrillRef} onClick={handleStartDrill}>Start drill</button>
                                : <button class="btn" ref={startDrillRef} disabled onClick={handleStartDrill}>Start drill</button>
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
