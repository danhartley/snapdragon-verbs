import { h } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import { Language, DrillState, Choice, Pronoun_PT, Pronoun_EN, VerbGroup, Tense } from '../../logic/enums';
import { Lesson } from '../../logic/lesson';
import { Conjugations } from '../../components/elements/conjugations';
import { Picker } from '../../components/picker/picker';
import { api } from '../../api/api';
import { ActionList, EditableList, RadioButtonList } from '../../components/elements/lists';
import { Drill } from '../../components/elements/drill';
import Footer from '../../components/footer/footer';

const Verbs = ({ verbs, tenses, choice, language, drill, setDrill, drillActionState, setDrillActionState }) => {

    const [inputVerbs, setInputVerbs] = useState(() => verbs);
    const [inputVerbGroups, setInputVerbGroups] = useState(() => Object.keys(VerbGroup).map(key => VerbGroup[key]));
    const [inputTenses, setInputTenses] = useState(() => tenses);
    const [selectedPronoun, setSelectedPronoun] = useState('random pronoun');
    const [selectedVerbGroup, setSelectedVerbGroup] = useState(VerbGroup.irregular_verbs);
    const [fixedDrills, setFixedDrills] = useState(() => api.getSetDrills(language));
    const [showConjugation, setShowConjugation] = useState(() => false);
    const [selectedTense, setSelectedTense] = useState(Tense.present);
    const [lesson, setLesson] = useState(new Lesson());
    const [selectedVerbs, setSelectedVerbs] = useState(lesson.verbs.map(v => { return { name: v, disabled: false } }));

    const handleVerbPicked = verb => {
        setDrillActionState(DrillState.intermediate);
        setSelectedVerbs([ ...selectedVerbs.filter(v => v !== verb.name), { name: verb, disabled: false } ]);
    };

    const handleTensePicked = tense => {
        setDrillActionState(DrillState.intermediate);
        setLesson({ ...lesson, tense, tenses });
        setSelectedTense(tense);
    };

    const handleVerbGroupSelected = group => {        
        let _verbs = [];
        switch(group) {
            case VerbGroup.all_verbs:
                shuffleArray(verbs).forEach((v,i) => {
                    if(i < 100) {
                        _verbs.push({ name: v });
                    }
                });
                break;
            case VerbGroup.irregular_verbs:
                api.getSetDrills().filter(drill => drill.id < 4).forEach(group => {
                    _verbs = [ ..._verbs, ...group.verbs ];
                });
                break;
            case VerbGroup.common_regular_verbs:
                _verbs = api.getSetDrills().find(drill => drill.id === 6).verbs;
                break;
            case VerbGroup.imperfect_irregular_verbs:
                _verbs = [
                    { name: 'vir' },
                    { name: 'ter' },
                    { name: 'ser' },
                    { name: 'pôr' },
                ];
                handleTensePicked(Tense.imperfect);
                break;
            case VerbGroup.preterite_irregular_verbs:
                _verbs = [
                    { name: 'ser' },
                    { name: 'estar' },
                    { name: 'ter' },
                    { name: 'ir' },
                    { name: 'vir' },
                    { name: 'poder' },
                    { name: 'fazer' },
                    { name: 'saber' },
                ];
                handleTensePicked(Tense.preterite);
                break;
            case VerbGroup.future_irregular_verbs:
                _verbs = [
                    { name: 'trazer' },
                    { name: 'dizer' },
                    { name: 'fazer' },
                ];
                handleTensePicked(Tense.future);
                break;
            case VerbGroup.conditional:
                _verbs = [
                    { name: 'trazer' },
                    { name: 'dizer' },
                    { name: 'fazer' },
                ];
                handleTensePicked(Tense.future);
                break;
            case VerbGroup.conditional_irregular_verbs:
                _verbs = [
                    { name: 'trazer' },
                    { name: 'dizer' },
                    { name: 'fazer' },
                ];
                handleTensePicked(Tense.conditional);
                break;
            case VerbGroup.subjunctive_irregular_verbs:
                _verbs = [
                    { name: 'trazer' },
                    { name: 'dizer' },
                    { name: 'fazer' },
                    { name: 'ser' },
                    { name: 'estar' },
                    { name: 'haver' },
                    { name: 'saber' },
                    { name: 'querer' },
                    { name: 'ter' },
                    { name: 'pôr' },
                    { name: 'ver' },
                    { name: 'poder' },
                    { name: 'ler' },
                    { name: 'vir' },
                    { name: 'ouvir' },
                    { name: 'perder' },
                    { name: 'dar' },
                    { name: 'ir' },
                ];
                handleTensePicked(Tense.present_subjunctive);
                break;
        }
        setSelectedVerbGroup(group);
        setSelectedVerbs(_verbs);
    };

    const handleSetDrill = async drill => {      
        if(drill) {  
            let translation = await api.getVerb(drill.verb);
            drill.translation = translation[lesson.language.from].i;
            drill.conjugations = await api.getConjugations({inf:drill.verb});
            setDrill(drill);
        }
    };

    const handleStartDrill = async e => {       
        lesson.removeVerbs();
            shuffleArray(selectedVerbs).filter(verb => !verb.disabled).forEach(verb => lesson.addVerb(verb.name));
            const drills = await lesson.createDrills(api, lesson.tense);
        switch(choice) {
        case Choice.drills:     
            break;
        case Choice.random:                
                drills.forEach(drill => { 
                    const pronounToTest = selectedPronoun === 'random pronoun' ? shuffleArray(Object.keys(Pronoun_PT).map(key => Pronoun_PT[key]))[0] : selectedPronoun;
                    drill.questions.forEach(question => {                    
                        const matchingPronoun = pronounToTest.split(',').find(pronoun => pronoun === question.pronoun);
                        question.disabled = !matchingPronoun;
                        question.class = !matchingPronoun
                            ? 'half-hidden is-correct'
                            : '';
                })
            });
            break;
        }
        setLesson({ ...lesson, drills });
        setDrillActionState(DrillState.checkAnswers);
        let drill = lesson.getNextDrill();
        handleSetDrill(drill);
    };

    const handleSelectSetDrill = e => {
        setDrillActionState(DrillState.intermediate);
        const set = e.target;
        const id = parseInt(set.dataset.id);
        const verbs = fixedDrills.find(set => set.id === id).verbs;
        setSelectedVerbs(verbs);
        setLesson({ ...lesson, verbs, verb: null, drills: []});
    };

    const handleVerbEdited = (verb, isDisabled) => {
        let verbs = selectedVerbs.map(v => {
            if(v.name === verb) v.disabled = isDisabled;
            return v;
        });
        setSelectedVerbs(verbs);
    };

    const startDrillRef = useRef();

    useEffect(() => {
        if(startDrillRef.current) {
            startDrillRef.current.focus();
            startDrillRef.current.scrollTo(0,0);
        }
    }, [selectedVerbs]);

    const sideBarCSS = drillActionState === DrillState.checkAnswers ? 'sidebar disabled' : 'sidebar';

    return (
        <>
        <section class="header-block">
            <h1>{ choice === Choice.drills ? 'Portuguese verb drills' : 'Portuguese random verbs' }</h1>
        </section>
        <div class="home">          
          <div class="columns">
          <div class={sideBarCSS}>
                <div> 
                    {
                        choice === Choice.drills
                            ? <ActionList header={'Fixed drills'} listItemClickHandler={handleSelectSetDrill} items={fixedDrills} />
                            : <RadioButtonList selectedPronoun={selectedPronoun} handleRadioButtonSelection={e => { setSelectedPronoun(e.target.id); }} header={'Select inflection'} pronouns={[ 'eu', 'tu', 'ela, ele, você', 'nós', 'vós', 'elas, eles, vocês', 'random pronoun', ]} />                     
                    }
                    {
                        <Picker key={selectedTense} initialSelectedItem={selectedTense} itemToString={item => item ? item : ''} items={inputTenses} onChange={handleTensePicked} label={'Tenses'}></Picker>
                    }
                    {
                        choice === Choice.drills
                            ? <Picker itemToString={item => item ? item : ''} items={inputVerbs} onChange={handleVerbPicked} label={'Verbs'}></Picker>
                            : <Picker itemToString={item => item ? item : ''} items={inputVerbGroups} onChange={handleVerbGroupSelected} label={'Verb groups'}></Picker>
                    }
                    {
                        choice === Choice.drills
                            ? <EditableList header={'Selected verbs'} items={selectedVerbs} editedHandler={handleVerbEdited} />
                            : selectedVerbs.length > 0
                                ? <div>{`${selectedVerbs.length} verbs`}</div>
                                : <></>         
                    }
                    {
                        selectedVerbs.length > 0 || choice === Choice.random
                            ? selectedVerbs.filter(v => !v.disabled).length > 0
                                ? <button class="btn" ref={startDrillRef} onClick={handleStartDrill}>Start drill</button>
                                : <button class="btn" ref={startDrillRef} disabled onClick={handleStartDrill}>Start drill</button>
                            : ''
                    }
                </div>
            </div>
            <div class="main">
                <div class="block">
                    { drillActionState !== DrillState.hideDrills ? (
                        <><Drill lesson={lesson} drill={drill} onChangeDrill={drill => handleSetDrill(drill)} drillActionState={drillActionState} onChangeDrillActionState={state => setDrillActionState(state)} onClickVerbConjugationLink={state => setShowConjugation(state)} choice={choice} startDrillRef={startDrillRef} />                          
                        </>): <div class="block"></div>
                    }
                </div>
            </div>
          </div>
          { showConjugation ? <div class="conjugations-container"><Conjugations key={drill} drill={drill} /></div> : '' }
          <Footer />
        </div>
        </>
    )
};


const shuffleArray = array => {

    if(!array || array.length === 0) return;

    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return [ ...array ];
  };

export default Verbs;
