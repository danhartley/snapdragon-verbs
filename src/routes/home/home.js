import { h } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import { Picker } from '../../components/picker/picker';
import { api } from '../../logic/api';
import { Lesson } from '../../logic/lesson';
import { SimpleList, ActionList, EditableList } from '../../components/elements/simple-list';
import { Drill } from '../../components/elements/drill';

const Home = ({ verbs, tenses }) => {

    const [lesson, setLesson] = useState(() => new Lesson());
    const [hasLessonStarted, setHasLessonStarted] = useState(false);
    const [inputVerbs, setInputVerbs] = useState(() => verbs);
    const [inputTenses, setInputTenses] = useState(() => tenses);
    const [selectedVerbs, setSelectedVerbs] = useState(lesson.verbs.map(v => { return { name: v, disabled: false } }));
    const [selectedVerb, setSelectedVerb] = useState({});
    const [selectedTenses, setSelectedTenses] = useState(() => [tenses[0]]);
    const [hasDrills, setHasDrills] = useState(false);
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
    ]);

    if(lesson.drills.length > 0) {
        setHasDrills(true);
    }

    const handleVerbPicked = verb => {        
        if(hasDrills) {            
            setSelectedVerbs([verb]);
            setLesson({ ...lesson, verbs: [verb.name], verb: null, drills: []});
            setHasDrills(false);
        } else {
            setSelectedVerb({ name: verb, disabled: false });
            setSelectedVerbs([ ...selectedVerbs.filter(v => v !== verb.name), { name: verb, disabled: false } ]);
        }
    };

    const handleTensePicked = tense => {
        if(hasDrills) {
            setLesson({ ...lesson, verbs: [], verb: null, drills: []});
            setHasDrills(false);
            setSelectedVerbs([]);
        }
        setSelectedTenses([ tense ]);
        setLesson({ ...lesson, tense, tenses });
    }

    const handleStartDrill = async e => {
        if(selectedVerbs.length > 0 && lesson.drills.length === 0) {
            lesson.removeVerbs();
            selectedVerbs.filter(verb => !verb.disabled).forEach(verb => lesson.addVerb(verb.name));
            const drills = await lesson.createDrills(api, lesson.tense);
            setLesson({ ...lesson, drills });
            setHasLessonStarted(true);     
        }
    };

    const handleSelectSetDrill = e => {
        const set = e.target;
        const id = parseInt(set.dataset.id);
        const verbs = fixedDrills.find(set => set.id === id).verbs;
        setSelectedVerbs(verbs);
        setHasDrills(false);
        setLesson({ ...lesson, verbs, verb: null, drills: []});
    };

    const handleVerbEdited = (verb, isDisabled) => {
        let verbs = selectedVerbs.map(v => {
            if(v.name === verb) v.disabled = isDisabled;
            return v;
        });
        setSelectedVerbs(verbs);
    };

    useEffect(() => {
        if(!hasDrills) setLesson({ ...lesson, drills: []});
    }, [hasDrills]);

    const sideBarCSS = hasLessonStarted ? 'sidebar disabled' : 'sidebar';

    return (
        <div class="home">          
          <section class="banner-block">
            <h1>Portuguese verb drills</h1>
          </section>
          <div class="columns">
          <div class={sideBarCSS}>
                <div> 
                    <ActionList header={'Fixed drills'} listItemClickHandler={handleSelectSetDrill} items={fixedDrills} />
                    <Picker itemToString={item => item ? item : ''} items={inputTenses} onChange={handleTensePicked} label={'Tenses'}></Picker>
                    <Picker itemToString={item => item ? item : ''} items={inputVerbs} onChange={handleVerbPicked} label={'Verbs'}></Picker>
                    <SimpleList header={'Selected tenses'} msg="" items={selectedTenses} />
                    <EditableList header={'Selected verbs'} items={selectedVerbs} editedHandler={handleVerbEdited} />
                    {
                        selectedVerbs.length > 0 
                            ? <button onClick={handleStartDrill}>Start drill</button>
                            : ''
                    }
                </div>
            </div>
            <div class="main">
                <div class="block">
                    { hasDrills ? (
                        <><Drill lesson={lesson} />                          
                        </>): <div class="block"></div>
                    }
                </div>
            </div>
          </div>
        </div>
    )
};

export default Home;
