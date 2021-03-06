import { h } from 'preact';
import { Language, Pronoun_PT, Pronoun_ES } from '../../logic/enums.js';
import style from './list.scss';

export const ConjugationList = ({ items, language, excludeSecondPersonPlural }) => {
    if(items) {
    const list = items.map((item, i) => {
        if(i === 4 && excludeSecondPersonPlural) return;
        return <li class={item.isIrregular ? 'irregular' : 'regular'}><span class="margin-right">{language === Language.pt ? Pronoun_PT[i] : Pronoun_ES[i] }</span><span>{item.form}</span></li>
    });
        return (
            <ul>{list}</ul>
        );
    } else {
        return <></>
    }
};
  
export const EditableList = ({ items, header, editedHandler }) => {
    
    if(items.length === 0) return null;

    const localClickHandler = e => {
        
        const name = 'disabled-item';
        const btn = e.target;
        const disabled = Array.from(btn.classList).find(className => className === name);
        const isVerbDisabled = disabled === undefined;
        const verb = btn.innerText;

        isVerbDisabled ? btn.classList.add(name) : btn.classList.remove(name);

        editedHandler(verb, isVerbDisabled);                
    };

    const list = items.map(item => <li key={item.name}><button aria-label={item.name} class={`button-edit-action${item.isCorrect ? ' is-correct' : item.isInCorrect ? ' is-incorrect' : ''}`} onClick={localClickHandler}>{item.name}</button></li>);
    return ( <ul style='column-count: 3'>{list}</ul> );
};

export const ActionList = ({ items, listItemClickHandler, header, direction = 'vertical', underlined = true, colCount = 0 }) => {
    let list;
    if(colCount) {
        list = items.map(item =><li><button aria-label={item.name} onClick={listItemClickHandler} class="button-link-action" data-id={item.id || item}><span data-id={item.id || item}>{item.name || item}</span></button></li>);
        return (
            <ul class='icons' style={`column-count: ${colCount}`}>{list}</ul>
        )
    } else {
        let showUnderlining = underlined ? '' : ' no-underlining';
        let marginItem = direction === 'horizontal' ? 'double-margin-right' : '';
            marginItem += showUnderlining;
        let marginList = direction === 'horizontal' ? 'flex margin-top' : '';
        list = items.map(item =><li class={marginItem}><button onClick={listItemClickHandler} class="button-link-action" data-id={item.id || item}><span data-id={item.id || item}>{item.name || item}</span></button></li>);
        return (
            <ul class={marginList}>{list}</ul>
        );
    }
};

export const RemoveableList = ({ items, msg }) => {
    const list = items.length > 0 
        ? items.map(item => <li class='flex'><input type='checkbox' checked /><span>{item}</span></li>)
        : <li class="hint">{msg}</li>;
    return (
      <ul>{list}</ul>
    );
};

export const RadioButtonList = ({ pronouns = [], direction = 'vertical', header, handleRadioButtonSelection, selectedPronoun, excludeSecondPersonPlural }) => {
    const getClasses = index => {
        let classes = 'flex rb-list';
        if(index === 5 && excludeSecondPersonPlural) classes += ' disabled';
        return classes;
    };
    return (
            <form>
                <fieldset class={ direction === 'vertical' ? 'flex-column' : 'flex'}>
                    <ul>
                    { pronouns.map((pronoun, i) =>
                        i === 0 ? null :
                        <li class={getClasses(i)}>
                            <input onClick={handleRadioButtonSelection} type="radio" id={pronoun} name="pronoun-input" value={pronoun} checked={pronoun === selectedPronoun} />
                            <label class="margin-right" for={pronoun}>{pronoun}</label>
                        </li>
                    )}
                    </ul>
                    <ul>
                        <li class="flex rb-list">
                        <input onClick={handleRadioButtonSelection} type="radio" id={pronouns[0]} name="pronoun-input" value={pronouns[0]} checked={pronouns[0] === selectedPronoun} />
                            <label class="margin-right" for={pronouns[0]}>{pronouns[0]}</label>
                        </li>
                    </ul>

                </fieldset>
            </form>
    );
};

export const NavGroup = ({ items, item, navItemClickHandler, minWidth = '9rem', isWideScreen = true, onReload }) => {
    let list = items.map(i => { 
            return <li style={`min-width: ${minWidth}`} class={item !== i ? style.navBlockInactive : style.navBlockActive}><button onClick={navItemClickHandler} id={i} class="button-link-action">{i}</button></li>
        }
    );
    if(!isWideScreen) {
        const reload = <li class={style.navBlockInactive} style="min-width: 4rem;"><button id="reload" class="button-link-action reload" onClick={onReload}></button></li>;
        list.splice(1, 0, reload);
    }
    return (
        <section><ul class={style.navList}>{list}</ul></section>
    )
};