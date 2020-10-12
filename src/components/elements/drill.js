import { DrillState } from '../../logic/enums';
import { useEffect, useState, useRef } from 'preact/hooks';
import { QandA } from '../../logic/qanda';

export const Drill = ({ lesson }) => {
    
    // console.log('%c render Drill', 'color: green');

    const [qandas, setQandas] = useState([]);
    const [hasFocus, setHasFocus] = useState(() => true);
    const [isCorrect, setIsCorrect] = useState(() => false);
    const [drill, setDrill] = useState(() => lesson.getNextDrill());
    const [drillActionState, setDrillActionState] = useState(() => DrillState.checkAnswers);

    const handleDrillActionState = e => {
        
        const button = e.target;

        switch(button.dataset.state) {
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
                let form = document.getElementById('drills-form');
                    form.reset();
                    form.elements[0].focus();
                break;
        } 
    };

    console.log(`%c ${drillActionState}`, 'color:black');

    const inputRef = useRef();

    useEffect(() => {
        if(hasFocus) {
            inputRef.current.focus();
            setHasFocus(false);
        }
    }, []);

    const handleOnBlur = e => {
        const input = e.target;
        const qanda = new QandA(input.id, input.value, input.dataset.key);
        const _qandas = qandas.filter(q => q.key !== qanda.key); // remove qanda if already exists for this key        
        setQandas([ { question: {value: { to: qanda.question }}, answer: { value: qanda.answer }, key: qanda.key}, ..._qandas ]);
        
    };
    
    if(drill) {
        const questions = drill.questions.map((question, index) =>
            index === 0
                ? <div class={isCorrect ? 'is-correct' : ''}><label>{question.label}-{question.value.to}</label><input id={question.value.to} data-key={index} onBlur={handleOnBlur} ref={inputRef} /></div>
                : <div><label>{question.label}-{question.value.to}</label><input id={question.value.to} data-key={index} onBlur={handleOnBlur} /></div>
            );
        return (
        <section class="drills">
            <h2>
                <span>{drill.verb}</span>
            </h2>
            <form id="drills-form">
            <div class="questions">{questions}</div>
            </form>
            <button data-state={drillActionState} onClick={handleDrillActionState}>{drillActionState}</button>
        </section>
        );
    }
  };