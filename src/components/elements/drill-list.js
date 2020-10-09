import { useEffect, useState, useRef } from 'preact/hooks';
import { QandA } from '../../logic/qanda';

export const DrillList = props => {
    if(!props.drill.questions) {
        return (<div></div>);
    }

    const [qandas, setQandas] = useState([]);

    props.onComplete(qandas)

    const inputRef = useRef();

    useEffect(() => {
        // inputRef.current.focus();
    });
    const handleOnBlur = e => {
        const qanda = new QandA(e.target.id, e.target.value);
        setQandas([ { q: qanda.q, a: qanda.a }, ...qandas ]);        
        
    };
    const questions = props.drill.questions.map((question, index) =>
        index === 0
            ? <div><label>{question.label}-{question.value.to}</label><input id={question.value.to} onBlur={handleOnBlur} ref={inputRef} /></div>
            : <div><label>{question.label}-{question.value.to}</label><input id={question.value.to} onBlur={handleOnBlur} /></div>
        );
    return (
      <section class="drills">
          <h2>{props.drill.verb}</h2>
          <div class="questions">{questions}</div>
      </section>
    );
  };