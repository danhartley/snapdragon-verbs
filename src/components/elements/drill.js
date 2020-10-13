import { DrillState } from '../../logic/enums';
import { useEffect, useState, useRef } from 'preact/hooks';
import { QandA } from '../../logic/qanda';
import { api } from '../../logic/api';

export const Drill = ({ lesson }) => {

    const [qandas, setQandas] = useState([]);
    const [hasFocus, setHasFocus] = useState(() => true);
    const [isCorrect, setIsCorrect] = useState(() => false);
    const [drill, setDrill] = useState(() => lesson.getNextDrill());
    const [drillActionState, setDrillActionState] = useState(() => DrillState.checkAnswers);
    const [translation, setTranslation] = useState('');

    const handleDrillActionState = e => {
        
        e.preventDefault();

        const form = e.target;

        switch(form.dataset.state) {
            case DrillState.checkAnswers:
                lesson.markLesson(qandas);
                lesson.getNextDrill();
                if(lesson.drills.filter(d => !d.completed).length === 0) {
                    setDrillActionState(DrillState.drillsComplete);
                } else {                          
                    setDrillActionState(DrillState.nextDrill);
                }
                break;
            case DrillState.nextDrill:
                setDrillActionState(DrillState.checkAnswers);
                setDrill(lesson.drill);                
                form.reset();
                form.elements[0].focus();
                break;
        } 
    };

    const inputRef = useRef();

    useEffect(() => {
        if(hasFocus) {
            inputRef.current.focus();
            setHasFocus(false);
        }
    }, []);
    
    
    const getTranslation = async () => {
        let translation;
            translation = await api.getVerb(drill.verb);
        return translation[lesson.language.from].inf;
    };

    useEffect( async () => {
        let translation = await getTranslation();
        setTranslation(translation);
    }, [drill]);

    const handleOnBlur = e => {
        const input = e.target;
        const qanda = new QandA(input.id, input.value, input.dataset.key);
        const _qandas = qandas.filter(q => q.key !== qanda.key); // remove qanda if already exists for this key        
        setQandas([ { question: {value: { to: qanda.question }}, answer: { value: qanda.answer }, key: qanda.key}, ..._qandas ]);
        
    };
    
    if(drill) {
        const questions = drill.questions.map((question, index) =>
            index === 0
                ? <div class={isCorrect ? 'is-correct' : ''}><label htmlFor={question.value.to}>{question.label}-{question.value.to}</label><input id={question.value.to} data-key={index} onBlur={handleOnBlur} ref={inputRef} /></div>
                : <div><label htmlFor={question.value.to}>{question.label}-{question.value.to}</label><input id={question.value.to} data-key={index} onBlur={handleOnBlur} /></div>
            );
        return (
        <section class="drills">
            <h2>
                <span>{drill.verb}</span><span class="translation">{translation}</span>
            </h2>
            <form id="drills-form" data-state={drillActionState} onSubmit={handleDrillActionState}>
                <div class="questions">{questions}</div>
                <button>{drillActionState}</button>
            </form>
        </section>
        );
    }
  };

  // check value for qandas: if < 6, disabe the check answers button