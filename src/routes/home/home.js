import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import style from './style.css';
import { Picker } from '../../components/picker/picker';
import { api } from '../../logic/api';

const Home = () => {
    
    const [inputItems, setInputItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState({});
    
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
            <Picker items={inputItems} onChange={setSelectedItem} label={'Pick a verb'}></Picker>
        </div>
      )
    };

export default Home;
