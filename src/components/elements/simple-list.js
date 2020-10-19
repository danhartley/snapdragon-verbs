export const SimpleList = ({ items, msg, header }) => {
    const showList = items.length > 0;
    const list = showList 
        ? items.map(item =><li>{item}</li>)
        : <li class="hint">{msg}</li>;
    if(showList) {    
        return (
        <>
            <div class="block"><h3>{header}</h3></div>
            <ul>{list}</ul>
        </>
        );
    } else return (<></>);
  }
  
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

    const list = items.map(item =><li key={item.name}><button class="button-edit-action" onClick={localClickHandler}>{item.name}</button></li>);
    return (
    <>
        <div class="block"><h3>{header}</h3></div>
        <ul>{list}</ul>
    </>
    );
  }

  export const ActionList = ({ items, listItemClickHandler, header, direction = 'vertical', underlined = true, colCount = 0 }) => {
    let list;
    if(colCount) {
        list = items.map(item =><li><button onClick={listItemClickHandler} class="button-link-action" data-id={item.id || item}><span data-id={item.id || item}>{item.name || item}</span></button></li>);
        return (
            <ul style={`column-count: ${colCount}; margin-top: .5rem; text-align: left;`}>{list}</ul>
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
  }

  export const RemoveableList = ({ items, msg }) => {
    const list = items.length > 0 
        ? items.map(item => <li class='flex'><input type='checkbox' checked /><span>{item}</span></li>)
        : <li class="hint">{msg}</li>;
    return (
      <ul>{list}</ul>
    );
  }