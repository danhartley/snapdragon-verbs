import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import style from './home.scss';
import { Picker } from '../../components/picker/picker';
import { api } from '../../logic/api';
import { Lesson } from '../../logic/lesson';
import { SimpleList } from '../../components/elements/list';

const lesson = new Lesson();

const Home = () => {
    
    const [inputItems, setInputItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState({});

    if( Object.keys(selectedItem).length !== 0) {
        lesson.addVerb(selectedItem.value);
        lesson.createQuestions(api);
        // console.clear();
        console.log(lesson);
        const items = inputItems.filter(item => item.value !== selectedItem.value );
        // setInputItems(items);
    }
    
    useEffect(async()=>{
        let verbs = await api.getVerbs();
        verbs = verbs.map(verb => {
            return {
                value: verb.pt.inf
            }
        });
        setInputItems(verbs);
      }, []);
      return (
        <div class={style.home}>
            <div>
                <Picker defaultIsOpen items={inputItems} onChange={setSelectedItem} label={'Pick a verb'}></Picker>
            </div>
            <div>
                <SimpleList values={lesson.verbs.up} />                
            </div>
        </div>
      )
    };

export default Home;
