import { DrillState } from '../../logic/enums';
import { SimpleList, ActionList } from '../../components/elements/simple-list';
import { useEffect, useState, useRef } from 'preact/hooks';
import { QandA } from '../../logic/qanda';
import { api } from '../../logic/api';

export const Drill = ({ lesson }) => {

    const [qandas, setQandas] = useState([]);
    const [hasFocus, setHasFocus] = useState(() => true);
    const [drill, setDrill] = useState(() => lesson.getNextDrill());
    const [drillActionState, setDrillActionState] = useState(() => DrillState.checkAnswers);
    const [translation, setTranslation] = useState('');
    const [vowels, setVowels] = useState(() => [
        'à', 'á', 'â', 'ã', 'é', 'ê', 'í', 'ô', 'ó', 'õ', 'ú', 'ç'
    ]); 
    const [currentInput, setCurrentInput] = useState(null);

    console.log('lesson drill: ', drill);

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
                setDrill(lesson.getNextDrill());                
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
        setCurrentInput(input);
        const qanda = new QandA(input.id, input.value, input.dataset.key);
        const _qandas = qandas.filter(q => q.key !== qanda.key); // remove qanda if already exists for this key        
        setQandas([ { question: {value: { to: qanda.question }}, answer: { value: qanda.answer }, key: qanda.key}, ..._qandas ]);
        let handler = e => {
            let inputs = input.form.elements;
            let nextIndex;

            Array.from(inputs).forEach((el, index) => {
                if(el === input) nextIndex = index + 1;
            });

            let nextInput = inputs[nextIndex];

            if (nextInput) {
                nextInput.focus();
            }
            input.removeEventListener('focusout', handler);
        };
        input.addEventListener('focusout', handler);        
    };

    const handleOnFocus = e => {
        const input = e.target;
        setCurrentInput(input);
    };

    const handleSelectVowel = e => {
        let vowel = e.target.dataset.id;
        currentInput.value = currentInput.value + vowel;
        currentInput.focus();
    };

    if(drill) {
        const questions = drill.questions.map((question, index) =>
            index === 0
                ? <div class={question.class}><div><label class="responsive-align" htmlFor={question.value.to}><span>{question.label}</span></label></div><div><input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellCheck="false" id={question.value.to} data-key={question.pronoun} onChange={handleOnChange} onFocus={handleOnFocus} ref={inputRef} /></div><div><span class='answer'>{question.value.to}</span></div></div>
                : <div class={question.class}><div><label class="responsive-align" htmlFor={question.value.to}><span>{question.label}</span></label></div><div><input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellCheck="false" id={question.value.to} data-key={question.pronoun} onChange={handleOnChange} onFocus={handleOnFocus} /></div><div><span class='answer'>{question.value.to}</span></div></div>
            );
        return (
            <>
            <section class="drills responsive-align">
                <div class="text-align">
                    <h2>
                        <span>{drill.verb}</span><span class="translation">{translation}</span>
                    </h2>
                </div>
                <form id="drills-form" data-state={drillActionState} onSubmit={handleDrillActionState}>
                    <div class="questions">{questions}</div>
                    <div class="action-button">
                        <button disabled={qandas.length < 6}>{drillActionState}</button>
                    </div>
                </form>
                {currentInput !== null ? <ActionList colCount={6} listItemClickHandler={handleSelectVowel} items={vowels} /> : <></>}
            </section>
            </>
        );
    }
  };