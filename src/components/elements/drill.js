import { DrillState } from '../../logic/enums';
import { useEffect, useState, useRef } from 'preact/hooks';
import { QandA } from '../../logic/qanda';
import { api } from '../../logic/api';

export const Drill = ({ lesson }) => {

    const [qandas, setQandas] = useState([]);
    const [hasFocus, setHasFocus] = useState(() => true);
    const [drill, setDrill] = useState(() => lesson.getNextDrill());
    const [drillActionState, setDrillActionState] = useState(() => DrillState.checkAnswers);
    const [translation, setTranslation] = useState('');    

    const handleDrillActionState = e => {
        
        e.preventDefault();

        const form = e.target;

        switch(form.dataset.state) {
            case DrillState.checkAnswers:

                const scores = lesson.markLesson(qandas);

                let _drill = { verb: drill.verb, completed: true, questions: [] };

                drill.questions.forEach(q => {
                    scores.forEach(score => {
                        if(score.key === q.pronoun) {
                            q.class = score.isCorrect ? 'is-correct' : 'is-incorrect';
                            _drill.questions.push(q);
                        }
                    });
                });

                setDrill(_drill);

                if(lesson.drills.filter(d => !d.completed).length === 1) { // why 1, not 0, because we haven't called getNextDrill…
                    setDrillActionState(DrillState.drillsComplete);
                } else {                          
                    setDrillActionState(DrillState.nextDrill);
                }
                break;
            case DrillState.nextDrill:
                setDrillActionState(DrillState.checkAnswers);
                lesson.getNextDrill();
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
    
    useEffect( async () => {
        if(drill) {
            let translation = await api.getVerb(drill.verb);
            translation = translation[lesson.language.from].i;
            setTranslation(translation);
        }
    }, [drill]);

    const handleOnChange = e => {
        const input = e.target;
        if(input.value.length === 0) return;
        const qanda = new QandA(input.id, input.value, input.dataset.key);
        const _qandas = qandas.filter(q => q.key !== qanda.key); // remove qanda if already exists for this key        
        setQandas([ { question: {value: { to: qanda.question }}, answer: { value: qanda.answer }, key: qanda.key}, ..._qandas ]);
        console.log(qandas)
    };

    if(drill) {
        const questions = drill.questions.map((question, index) =>
            index === 0
                ? <div class={question.class}><label class="responsive-align" htmlFor={question.value.to}><span>{question.label}</span><span class='answer'>{question.value.to}</span></label><input autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" id={question.value.to} data-key={question.pronoun} onChange={handleOnChange} ref={inputRef} /></div>
                : <div class={question.class}><label class="responsive-align" htmlFor={question.value.to}><span>{question.label}</span><span class='answer'>{question.value.to}</span></label><input autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" id={question.value.to} data-key={question.pronoun} onChange={handleOnChange} /></div>
            );
        return (
            <section class="drills responsive-align">
                <h2>
                    <span>{drill.verb}</span><span class="translation">{translation}</span>
                </h2>
                <form id="drills-form" data-state={drillActionState} onSubmit={handleDrillActionState}>
                    <div class="questions">{questions}</div>
                    <button disabled={qandas.length < 6}>{drillActionState}</button>
                </form>
            </section>
        );
    }
  };