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

    const getQuestions = () => {
        lesson.createQuestions(api);
        setStartLesson(true);
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
            <div>
                <Picker itemToString={item => item ? item : ''} items={inputItems} onChange={setSelectedItem} label={'Pick a verb'}></Picker>
            </div>
            <div>
                <SimpleList values={lesson.verbs.up} />                
            </div>
            <div>
                <button onClick={getQuestions}>Start lesson</button>
                {!startLesson ? null : (
                    <DrillList values={lesson.questions} />
                )}
            </div>
        </div>
      )
    };

export default Home;
