import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Picker } from '../../components/picker/picker';
import { api } from '../../logic/api';
import { Lesson } from '../../logic/lesson';
import { SimpleList, ActionList } from '../../components/elements/simple-list';
import { Drill } from '../../components/elements/drill';

let lesson = new Lesson();

const Home = ({ verbs, tenses }) => {

    const [inputVerbs, setInputVerbs] = useState([]);
    const [inputTenses, setInputTenses] = useState([]);
    const [selectedVerbs, setSelectedVerbs] = useState([]);
    const [selectedVerb, setSelectedVerb] = useState({});
    const [selectedTenses, setSelectedTenses] = useState([]);
    const [hasDrills, setHasDrills] = useState(false);
    const [setDrills, setSetDrills] = useState(() => [
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
            // verbs: [ 'lembrar-se', 'levantar-se', 'sentar-se', 'vestir-se' ]
            // verbs: [ 'lembrar-se', 'levantar-se', 'sentar-se', 'sentir-se', 'servir-se', 'vestir-se' ]
        },
    ]);

    console.log(`%c ${hasDrills}`, 'color: red');

    setInputVerbs(verbs);
    setInputTenses(tenses);

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
            selectedVerbs.forEach(verb => lesson.addVerb(verb));
            await lesson.createDrills(api);
            setHasDrills(true);
        }
    };

    const handleSelectSetDrill = e => {
        const set = e.target;
        const id = parseInt(set.dataset.id);
        const verbs = setDrills.find(set => set.id === id).verbs;
        setSelectedVerbs(verbs);
        // setSetDrills([]);
        setHasDrills(false);
    };

    useEffect(() => {
        if(!hasDrills) lesson.drills = [];
    }, [hasDrills])

    return (
        <div class="home">          
          <section class="banner-block">
            <h1>Verb drills</h1>
          </section>
          <div class="columns">
          <div class="sidebar">
                <div> 
                    <ActionList header={'Fixed drills'} callback={handleSelectSetDrill} items={setDrills} />
                    <Picker itemToString={item => item ? item : ''} items={inputTenses} onChange={handleTensePicked} label={'Tenses'}></Picker>
                    <Picker itemToString={item => item ? item : ''} items={inputVerbs} onChange={handleVerbPicked} label={'Verbs'}></Picker>
                    <SimpleList header={'Tenses'} msg="" items={selectedTenses} />
                    <SimpleList header={'Custom drill'} msg="" items={selectedVerbs} />
                    {
                        selectedVerbs.length > 0 
                            ? <button onClick={handleStartDrill}>Start drill</button>
                            : ''
                    }
                </div>
            </div>
            <div class="main">
            {/* <div class="block">
                <h3>Selectors for custom drills</h3>
            </div> */}
                <div class="block">
                    { hasDrills ? (
                        <Drill lesson={lesson} />                    
                    ): <></>}
                </div>
            </div>
            {/* <div class="sidebar2">
                <div class="block flex-column">
                    <h3>Verb conjugation</h3>
                    <div>
                        <input disabled />
                    </div>
                </div>
            </div> */}
          </div>
        </div>
    )
};

export default Home;
