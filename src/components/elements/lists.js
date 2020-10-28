import { Pronoun_PT } from '../../logic/enums.js';

export const ConjugationList = ({ items }) => {
    const list = items.map((item, i) => <li><span class="margin-right">{Pronoun_PT[i]}</span><span>{item}</span></li> );
        return (
        <>
            <ul>{list}</ul>
        </>
        );
};
  
export const EditableList = ({ items, header, editedHandler }) => {
    
    if(items.length === 0) return (<></>);

    const localClickHandler = e => {
        
        const name = 'disabled-item';
        const btn = e.target;
        const disabled = Array.from(btn.classList).find(className => className === name);
        const isVerbDisabled = disabled === undefined;
        const verb = btn.innerText;

        isVerbDisabled ? btn.classList.add(name) : btn.classList.remove(name);

        editedHandler(verb, isVerbDisabled);                
    };

    const list = items.map(item => <li key={item.name}><button aria-label={item.name} class="button-edit-action" onClick={localClickHandler}>{item.name}</button></li>);
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

export const RadioButtonList = ({ pronouns = [], direction = 'vertical', header, handleRadioButtonSelection, selectedPronoun }) => {
    return (
            <form>
                <fieldset class={ direction === 'vertical' ? 'flex-column' : 'flex'}>
                    <legend>{header}</legend>
                    <ul>
                    { pronouns.map((pronoun, i) => 
                        <li class="flex rb-list">
                            <input onClick={handleRadioButtonSelection} type="radio" id={pronoun} name="pronoun-input" value={pronoun} checked={pronoun === selectedPronoun} />
                            <label class="margin-right" for={pronoun}>{pronoun}</label>
                        </li>
                    )}
                    </ul>
                </fieldset>
            </form>
    );
};