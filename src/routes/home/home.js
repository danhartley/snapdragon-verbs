import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Picker } from '../../components/picker/picker';
import { api } from '../../logic/api';
import { Lesson } from '../../logic/lesson';
import { SimpleList } from '../../components/elements/simple-list';
import { Drill } from '../../components/elements/drill';

let lesson = new Lesson();

const Home = () => {
    
    const [inputItems, setInputItems] = useState([]);
    const [selectedVerbs, setSelectedVerbs] = useState([]);
    const [selectedItem, setSelectedItem] = useState({});
    const [drill, setDrill] = useState(null);
    const [qandas, setQandas] = useState([]);
    const [reRender, setReRender] = useState(new Date().toLocaleDateString());

    const handleItemPicked = verb => {
        setSelectedItem(verb);
        setSelectedVerbs([ ...selectedVerbs, verb ]);
    };

    const handleStartLesson = async e => {

        if(selectedVerbs.length > 0) {

            selectedVerbs.forEach(verb => lesson.addVerb(verb));

            await lesson.createDrills(api);
            const drill = lesson.getNextDrill();
            console.log('drill', drill);
            setDrill(drill);
        }

        setReRender(new Date().toLocaleDateString());
    };

    const handleMarkLesson = () => {
        if(qandas && qandas.length > 0) {
            lesson.markLesson(qandas);
            lesson.getNextDrill();
            setDrill(lesson.drill);
            let form = document.getElementById('drills-form');
                form.reset();
                form.elements[0].focus();
        }    
    };

    const onDrillRenderHandler = qandas => {
        setQandas(qandas);
    };

    useEffect( async () => {
        let verbs = await api.getVerbs();
            verbs = verbs.map(verb => {
                return verb.pt.inf;
            });
            setInputItems(verbs);
        }, []);
      return (
        <div class="home">
            <div class="main">
                <Picker itemToString={item => item ? item : ''} items={inputItems} onChange={handleItemPicked} label={'Pick verbs to add to your lesson'}></Picker>                                
                <>
                    <Drill drill={drill} onDrillRender={onDrillRenderHandler} />
                    <button onClick={handleMarkLesson}>Mark lesson</button>
                </>
            </div>
            <div class="sidebar">
                <div><h2>Selected verbs</h2></div>
                <SimpleList items={selectedVerbs} />
                <button onClick={handleStartLesson}>Start lesson</button>
            </div>
        </div>
      )
    };

export default Home;
