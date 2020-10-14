import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Picker } from '../../components/picker/picker';
import { api } from '../../logic/api';
import { Lesson } from '../../logic/lesson';
import { SimpleList, RemoveableList } from '../../components/elements/simple-list';
import { Drill } from '../../components/elements/drill';

let lesson = new Lesson();

const Home = ({ verbs, tenses }) => {

    console.log('%c render Home', 'color: red');
    
    const [inputVerbs, setInputVerbs] = useState([]);
    const [inputTenses, setInputTenses] = useState([]);
    const [selectedVerbs, setSelectedVerbs] = useState([]);
    const [selectedVerb, setSelectedVerb] = useState({});
    const [selectedTenses, setSelectedTenses] = useState([]);
    const [hasDrills, setHasDrills] = useState(false);

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

    return (
        <div class="home">
            <section class="banner-block">
                <h2>Verb drills</h2>
            </section>
            <div class="main">
                <Picker itemToString={item => item ? item : ''} items={inputTenses} onChange={handleTensePicked} label={'Tenses'}></Picker>
                <Picker itemToString={item => item ? item : ''} items={inputVerbs} onChange={handleVerbPicked} label={'Verbs'}></Picker>
                <div class="flex-column">
                    <div>
                        <SimpleList msg="" items={selectedTenses} />         
                        <SimpleList msg="" items={selectedVerbs} />
                    </div>
                    {
                        selectedVerbs.length > 0 
                            ? <button onClick={handleStartDrill}>Start drill</button>
                            : ''
                    }
                </div>
            </div>
            <div class="sidebar">                
                <div class="section-block">                    
                    { hasDrills ? (
                        <Drill lesson={lesson} />                    
                    ): <></>}
                </div>
            </div>
        </div>
    )
};

export default Home;
