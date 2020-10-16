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
        },
    ]);
    const [vowels, setVowels] = useState(() => [
        'à', 'á', 'â', 'ã', 'é', 'ê', 'í', 'ô', 'ó', 'õ', 'ú', 'ç'
    ]);

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
        setHasDrills(false);
    };

    const handleSelectVowel = e => {
        let vowel = e.target.dataset.id;
        if (active instanceof HTMLInputElement) {
            active.value = active.value + vowel; 
            active.focus();
        }
    };

    useEffect(() => {
        if(!hasDrills) lesson.drills = [];
    }, [hasDrills]);

    let active;

    useEffect(() => {
        active = document.activeElement;
    });

    return (
        <div class="home">          
          <section class="banner-block">
            <h1>Verb drills</h1>
          </section>
          <div class="columns">
          <div class="sidebar">
                <div> 
                    <ActionList header={'Fixed drills'} listItemClickHandler={handleSelectSetDrill} items={setDrills} />
                    <Picker itemToString={item => item ? item : ''} items={inputTenses} onChange={handleTensePicked} label={'Tenses'}></Picker>
                    <Picker itemToString={item => item ? item : ''} items={inputVerbs} onChange={handleVerbPicked} label={'Verbs'}></Picker>
                    <SimpleList header={'Selected tenses'} msg="" items={selectedTenses} />
                    <SimpleList header={'Selected verbs'} msg="" items={selectedVerbs} />
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
                          <ActionList header={'Accented vowels'} underlined={false} listItemClickHandler={handleSelectVowel} items={vowels} direction="horizontal" />
                        </>): <div class="block"></div>
                    }
                </div>
            </div>
          </div>
        </div>
    )
};

export default Home;
