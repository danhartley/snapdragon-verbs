import { DrillState, Choice } from '../../logic/enums';
import { ActionList } from './lists';
import { useEffect, useState, useRef } from 'preact/hooks';
import { QandA } from '../../logic/qanda';

export const Drill = ({ lesson, drillActionState, onChangeDrillActionState, drill, onChangeDrill, onClickVerbConjugationLink, choice, startDrillRef }) => {

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
                const answeredDrillCorrectly = scores.length === scores.filter(score => score.isCorrect).length;

                let _drill = { verb: drill.verb, completed: true, questions: [], isCorrect: answeredDrillCorrectly };

                lesson.drills.find(d => d.verb === drill.verb).isCorrect = answeredDrillCorrectly;

                drill.questions.forEach(q => {
                    scores.forEach(score => {
                        if(score.key === q.pronoun) {
                            q.class = score.isCorrect ? `${q.class} is-correct` : 'is-incorrect';
                            _drill.questions.push(q);
                        }
                    });
                    if(choice === Choice.random && q.pronoun !== scores[0].key) {
                        q.class = 'half-hidden is-correct';
                        q.disabled = true;
                        _drill.questions.push(q);
                    }
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
            case DrillState.drillsComplete:
                startDrillRef.current.click();
                break;
        } 
    };

    const formRef = useRef();

    useEffect(() => {
        if(formRef.current  && drillActionState ===  DrillState.checkAnswers) {
            let firstPerson = formRef.current.elements[0];
            firstPerson.disabled
                ? Array.from(formRef.current.elements).find(element => !element.disabled).focus()
                : firstPerson.focus();
        }
    }, [drill]);

    const handleOnChange = e => {
        const input = e.target;
        if(input.value.length === 0) return;        
        const qanda = new QandA(input.id, input.value, input.dataset.key);
        const _qandas = qandas.filter(q => q.key !== qanda.key); // remove qanda if already exists for this key        
        setQandas([ { question: {value: { to: qanda.question }}, answer: { value: qanda.answer }, key: qanda.key}, ..._qandas ]);
    };

    const handleOnFocus = e => {
        const input = e.target;
        setCurrentInput(input);
    };

    const handleAccentedCharacter = e => {
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

            setEventCode(e.code);
                if(form) {
                    switch(e.code) {                
                        case 'Enter':         
                                const isConsecutiveEntryKey = e.code === eventCode; // accented character may be last in word e.g. é
                                const inputValue = e.target.value;
                                const accentedVowel = vowels.find(v => v === inputValue.slice(inputValue.length - 1));
                                if(accentedVowel && !isConsecutiveEntryKey) {
                                    return;
                                } else {
                                    const elements = Array.from(form.elements).filter(element => !element.disabled);
                                    const index = elements.indexOf(e.target);
                                    if (index < elements.length -1) {
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
            <div key={`${question.label}_${question.value.to}`} class={question.class} >
                <div class="flex">
                    <div><label htmlFor={question.value.to}><span>{question.label}</span></label></div>
                    <div>
                        <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellCheck="false" id={question.value.to} data-key={question.pronoun} onChange={handleOnChange} onFocus={handleOnFocus} disabled={question.disabled} >
                            { question.disabled ? question.value.to : '' }
                        </input>
                    </div>
                </div>
                <div><span class='answer'>{question.value.to}</span></div>
            </div>
        );

        const drillStillRunning = qandas.length < 6;
        const randomTestStillRunning = (drill.questions.filter(q => q.disabled).length === 5 && qandas.length === 0);
        const disableSubmitButton = choice === Choice.drills
                                        ? drillStillRunning
                                        : randomTestStillRunning
        
        return (
            <>
            <section class="drills">
                <div class="text-align flex">
                    <h2>
                        <span><a href="#footer" onClick={onClickVerbConjugationLink} id={drill.verb}>{drill.verb}</a></span><span class="translation">{drill.translation}</span>
                    </h2>
                    <div class="progress">
                        <span>{lesson.drills.filter(drill => drill.completed).length + 1}</span>
                        <span>of</span>
                        <span>{lesson.drills.length}</span>
                        <span>{lesson.drills.filter(drill => drill.isCorrect).length}</span>
                    </div>
                </div>
                <form ref={formRef} id="drills-form" data-state={drillActionState} onSubmit={handleDrillActionState}>
                    <section class="questions">{questions}</section>
                    <div class="action-button">
                        { drillActionState ===  DrillState.drillsComplete 
                            ? <button class="btn" disabled={false}>{drillActionState}</button>
                            : <button class="btn" disabled={disableSubmitButton}>{drillActionState}</button>
                        }
                    </div>
                </form>
                {currentInput !== null ? <ActionList colCount={6} listItemClickHandler={handleAccentedCharacter} items={vowels} /> : <></>}
                <button class={`keyboard-help ${isKeyboardHelpClosed ? "closed" : ""} `} onClick={handleToggleVisibility}>
                    <div>
                        <h4>Keyboard shortcuts</h4>
                        <svg viewBox="0 0 20 20" preserveAspectRatio="none" width="16" fill="transparent" stroke="rgb(0,0,0)" stroke-width="1.1px"><path d="M1,6 L10,15 L19,6"></path></svg>
                    </div>    
                    <ul>
                        <li>To move to the next person, use the TAB or ENTER keys.</li>
                        <li>To return to the previous person, use the SHIFT + TAB keys in combination.</li>
                        <li>To check your answers, use the ENTER key.</li>
                    </ul>
                </button>
            </section>
            </>
        );
    }
  };