import { DrillState } from '../../logic/enums';
import { useEffect, useState, useRef } from 'preact/hooks';
import { QandA } from '../../logic/qanda';

export const Drill = props => {
    
    if(!props.drill) {
        return (<div></div>);
    }
    
    console.log('%c render Drill', 'color: green');

    const [qandas, setQandas] = useState([]);
    const [hasFocus, setHasFocus] = useState(() => true);
    const [isCorrect, setIsCorrect] = useState(() => false);

    props.onDrillRender(qandas);

    const inputRef = useRef();

    useEffect(() => {
        if(hasFocus) {
            inputRef.current.focus();
            setHasFocus(false);
        }
    }, []);

    const handleOnBlur = e => {
        const qanda = new QandA(e.target.id, e.target.value);
        setQandas([ { question: {value: { to: qanda.question }}, answer: { value: qanda.answer }}, ...qandas ]);        
        
    };
    
    const questions = props.drill.questions.map((question, index) =>
        index === 0
            ? <div class={isCorrect ? 'is-correct' : ''}><label>{question.label}-{question.value.to}</label><input id={question.value.to} onBlur={handleOnBlur} ref={inputRef} /></div>
            : <div><label>{question.label}-{question.value.to}</label><input id={question.value.to} onBlur={handleOnBlur} /></div>
        );
    return (
      <section class="drills">
          <h2>
              <span>{props.drill.verb}</span>
          </h2>
          <form id="drills-form">
            <div class="questions">{questions}</div>
          </form>
      </section>
    );
  };