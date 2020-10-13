import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Picker } from '../../components/picker/picker';
import { api } from '../../logic/api';
import { Lesson } from '../../logic/lesson';
import { SimpleList } from '../../components/elements/simple-list';
import { Drill } from '../../components/elements/drill';

let lesson = new Lesson();

const Home = ({ verbs }) => {

    console.log('%c render Home', 'color: red');
    
    const [inputItems, setInputItems] = useState([]);
    const [selectedVerbs, setSelectedVerbs] = useState([]);
    const [selectedItem, setSelectedItem] = useState({});
    const [hasDrills, setHasDrills] = useState(false);

    setInputItems(verbs);
    // setInputItems(verbs.map(verb => verb[lesson.language.to].inf));

    const handleItemPicked = verb => {
        setSelectedItem(verb);
        setSelectedVerbs([ ...selectedVerbs.filter(v => v !== verb), verb ]);
    };

    const handleStartDrill = async e => {
        if(selectedVerbs.length > 0 && lesson.drills.length === 0) {
            selectedVerbs.forEach(verb => lesson.addVerb(verb));
            await lesson.createDrills(api);
            setHasDrills(true);
        }
    };

    return (
        <div class="home">
            <div class="main">
                <Picker itemToString={item => item ? item : ''} items={inputItems} onChange={handleItemPicked} label={'Pick verbs to add to drill'}></Picker>                                
                { hasDrills ? (
                    <Drill lesson={lesson} />                    
                ): <></>}
            </div>
            <div class="sidebar">
                <div><h2>Selected verbs</h2></div>
                <SimpleList items={selectedVerbs} />
                <button onClick={handleStartDrill}>Start drill</button>
            </div>
        </div>
    )
};

export default Home;
