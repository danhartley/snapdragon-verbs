import { h } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import { Picker } from '../../components/picker/picker';
import { api } from '../../logic/api';
import { Lesson } from '../../logic/lesson';
import { SimpleList, ActionList } from '../../components/elements/simple-list';
import { Drill } from '../../components/elements/drill';

const Home = ({ verbs, tenses }) => {

    const [lesson, setLesson] = useState(() => new Lesson());
    const [inputVerbs, setInputVerbs] = useState(() => verbs);
    const [inputTenses, setInputTenses] = useState(() => tenses);
    const [selectedVerbs, setSelectedVerbs] = useState(lesson.verbs);
    const [selectedVerb, setSelectedVerb] = useState({});
    const [selectedTenses, setSelectedTenses] = useState(() => [tenses[0]]);
    const [hasDrills, setHasDrills] = useState(false);
    const [fixedDrills, setFixedDrills] = useState(() => [
        {
            id: 1,
            name: 'Common irregular verbs',
            verbs: [ 'ser', 'estar', 'ter', 'fazer', 'ir', 'vir' ]
        },
        {
            id: 2,
            name: 'Regular -ar, -er and -ir verbs',
            verbs: [ 'falar', 'partir', 'vender' ]
        },
        {
            id: 3,
            name: 'Common reflexive verbs',
            verbs: [ 'lembrar-se', 'levantar-se', 'vestir-se']
        },
    ]);

    if(lesson.drills.length > 0) {
        setHasDrills(true);
    }

    const handleVerbPicked = verb => {
        setSelectedVerb(verb);
        setSelectedVerbs([ ...selectedVerbs.filter(v => v !== verb), verb ]);
    };

    const handleTensePicked = tense => {
        setSelectedTenses([ tense ]);
        // setSelectedTenses([ ...selectedTenses.filter(v => v !== tense), tense ]);
    }

    const handleStartDrill = async e => {
        if(selectedVerbs.length > 0 && lesson.drills.length === 0) {
            lesson.removeVerbs();
            selectedVerbs.forEach(verb => lesson.addVerb(verb));
            const drills = await lesson.createDrills(api);
            setLesson({ ...lesson, drills });       
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

    useEffect(() => {
        if(!hasDrills) setLesson({ ...lesson, drills: []});
    }, [hasDrills]);

    let active;

    useEffect(() => {
        active = document.activeElement;
    });

    const startDrillRef = useRef();

    useEffect(() => {                
        startDrillRef.current.click();     
    }, []);

    return (
        <div class="home">          
          <section class="banner-block">
            <h1>Portuguese verb drills</h1>
          </section>
          <div class="columns">
          <div class="sidebar">
                <div> 
                    <ActionList header={'Fixed drills'} listItemClickHandler={handleSelectSetDrill} items={fixedDrills} />
                    <Picker itemToString={item => item ? item : ''} items={inputTenses} onChange={handleTensePicked} label={'Tenses'}></Picker>
                    <Picker itemToString={item => item ? item : ''} items={inputVerbs} onChange={handleVerbPicked} label={'Verbs'}></Picker>
                    <SimpleList header={'Selected tenses'} msg="" items={selectedTenses} />
                    <SimpleList header={'Selected verbs'} msg="" items={selectedVerbs} />
                    {
                        selectedVerbs.length > 0 
                            ? <button ref={startDrillRef} onClick={handleStartDrill}>Start drill</button>
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
