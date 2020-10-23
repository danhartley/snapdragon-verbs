import { DrillState } from '../../logic/enums';
import { ActionList } from './lists';
import { useEffect, useState, useRef } from 'preact/hooks';
import { QandA } from '../../logic/qanda';

export const Drill = ({ lesson, drillActionState, onChangeDrillActionState, drill, onChangeDrill, onClickVerbConjugationLink }) => {

    const [qandas, setQandas] = useState([]);
    const [vowels, setVowels] = useState(() => [
        'à', 'á', 'â', 'ã', 'é', 'ê', 'í', 'ô', 'ó', 'õ', 'ú', 'ç'
    ]); 
    const [currentInput, setCurrentInput] = useState(null);
    const [eventCode, setEventCode] = useState(() => null);
    const [isKeyboardHelpClosed, setIsKeyboardHelpClosed] = useState(true);

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

                onChangeDrill(_drill);

                if(lesson.drills.filter(d => !d.completed).length === 1) { // why 1, not 0, because we haven't called getNextDrill…
                    onChangeDrillActionState(DrillState.drillsComplete);
                } else {                          
                    onChangeDrillActionState(DrillState.nextDrill);
                }
                break;
            case DrillState.nextDrill:
                setQandas([]);
                onChangeDrillActionState(DrillState.checkAnswers);
                onChangeDrill(lesson.getNextDrill());
                form.reset();
                form.elements[0].focus();
                break;
        } 
    };

    const inputRef = useRef();

    useEffect(() => {
        if(inputRef.current && drillActionState ===  DrillState.checkAnswers) {
            inputRef.current.focus();
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

    const handleToggleVisibility = e => {
        setIsKeyboardHelpClosed(!isKeyboardHelpClosed);
    }

    useEffect(() => {

        window.addEventListener("keydown", e => {
            if (e.defaultPrevented) {
              return;
            }

            const form = document.activeElement.form;

            if(form) {

                setEventCode(e.code);

                switch(e.code) {                
                    case 'Enter':         
                            const isConsecutiveEntryKey = e.code === eventCode; // accented character may be last in word e.g. é
                            console.log();
                            const inputValue = e.target.value;
                            const accentedVowel = vowels.find(v => v === inputValue.slice(inputValue.length - 1));
                            if(accentedVowel && !isConsecutiveEntryKey) {
                                return;
                            } else {
                                const index = Array.from(form.elements).indexOf(e.target);
                                if (index < form.elements.length -1) { // ignore final element, the submit button
                                    form.elements[index + 1].focus();
                                }
                            }
                            break;
                        }                        
                    }
            }
        , { once: true });
    });

    if(drill) {
        const questions = drill.questions.map((question, index) =>
            <div key={`${question.label}_${question.value.to}`} class={question.class}>
                <div class="flex">
                    <div><label htmlFor={question.value.to}><span>{question.label}</span></label></div>
                    <div><input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellCheck="false" id={question.value.to} data-key={question.pronoun} onChange={handleOnChange} onFocus={handleOnFocus} ref={index === 0 ? inputRef : null} /></div>
                </div>
                <div><span class='answer'>{question.value.to}</span></div>
            </div>
        );
        return (
            <>
            <section class="drills">
                <div class="text-align">
                    <h2>
                        <span><a href="#conjugations" onClick={onClickVerbConjugationLink} id={drill.verb}>{drill.verb}</a></span><span class="translation">{drill.translation}</span>
                    </h2>
                </div>
                <form id="drills-form" data-state={drillActionState} onSubmit={handleDrillActionState}>
                    <section class="questions">{questions}</section>
                    <div class="action-button">
                        { drillActionState ===  DrillState.drillsComplete 
                            ? <button class="btn" disabled={true}>{drillActionState}</button>
                            : <button class="btn" disabled={qandas.length < 6}>{drillActionState}</button>
                        }
                    </div>
                </form>
                {currentInput !== null ? <ActionList colCount={6} listItemClickHandler={handleSelectVowel} items={vowels} /> : <></>}
                <button class={`keyboard-help ${isKeyboardHelpClosed ? "closed" : ""} `} onClick={handleToggleVisibility}>
                    <div>
                        <h4>Keyboard shortcuts</h4>
                        <svg viewBox="0 0 20 20" preserveAspectRatio="none" width="16" fill="transparent" stroke="rgb(0,0,0)" stroke-width="1.1px"><path d="M1,6 L10,15 L19,6"></path></svg>
                    </div>    
                    <ul>
                        <li>To move to the next person, use the TAB or ENTER keys.</li>
                        <li>To return to the previous person, use the TAB + SHIFT keys in combination.</li>
                        <li>To check your answers, use the ENTER key.</li>
                    </ul>
                </button>
            </section>
            </>
        );
    }
  };