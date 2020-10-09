import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import style from './home.scss';
import { Picker } from '../../components/picker/picker';
import { api } from '../../logic/api';
import { Lesson } from '../../logic/lesson';
import { SimpleList } from '../../components/elements/simple-list';
import { DrillList } from '../../components/elements/drill-list';

const lesson = new Lesson();

const Home = () => {
    
    const [inputItems, setInputItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState({});
    const [startLesson, setStartLesson] = useState(false);

    if( Object.keys(selectedItem).length !== 0) {
        lesson.addVerb(selectedItem);              
        const items = inputItems.filter(item => item !== selectedItem );        
    }

    const handleStartLesson = async e => {
        await lesson.createDrills(api);
        setStartLesson(true);
    };

    const handleMarkLesson = async () => {
        lesson.markLesson(answers);
    };

    const onCompleteHandler = qandas => {
        console.log('qandas!!!', qandas);
    };

    useEffect(async()=>{
        let verbs = await api.getVerbs();
            verbs = verbs.map(verb => {
                return verb.pt.inf;
            });
            setInputItems(verbs);
        }, []);
      return (
        <div class={style.home}>
            <div class="main">
                <Picker itemToString={item => item ? item : ''} items={inputItems} onChange={setSelectedItem} label={'Pick verbs to add to your lesson'}></Picker>                
                {!startLesson ? null : (
                    <DrillList drill={lesson.getNextDrill()} onComplete={onCompleteHandler} />
                )}
                {!startLesson ? null : (
                    <button onClick={handleMarkLesson}>Mark lesson</button>
                )}
            </div>
            <div class="sidebar">
                <div><h2>Selected verbs</h2></div>
                <SimpleList values={lesson.verbs} />
                <button onClick={handleStartLesson}>Start lesson</button>
            </div>
        </div>
      )
    };

export default Home;
