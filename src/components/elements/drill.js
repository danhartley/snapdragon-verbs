import { useEffect, useState, useRef } from 'preact/hooks';
import { QandA } from '../../logic/qanda';

export const Drill = props => {

    if(!props.drill) {
        return (<div></div>);
    }

    const [qandas, setQandas] = useState([]);

    props.onDrillRender(qandas)

    const inputRef = useRef();

    useEffect(() => {
        if(qandas.length === 0) {
            inputRef.current.focus();
        }
    });

    const handleOnBlur = e => {
        const qanda = new QandA(e.target.id, e.target.value);
        setQandas([ { question: {value: { to: qanda.question }}, answer: { value: qanda.answer }}, ...qandas ]);        
        
    };
    
    const questions = props.drill.questions.map((question, index) =>
        index === 0
            ? <div><label>{question.label}-{question.value.to}</label><input id={question.value.to} onBlur={handleOnBlur} ref={inputRef} /></div>
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