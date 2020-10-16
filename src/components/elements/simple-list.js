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

  export const ActionList = ({ items, listItemClickHandler, header, direction = 'vertical', underlined = true }) => {
    let showUnderlining = underlined ? '' : ' no-underlining';
    let marginItem = direction === 'horizontal' ? 'margin-right' : '';
        marginItem += showUnderlining;
    let marginList = direction === 'horizontal' ? 'flex responsive-align margin-top' : '';
    let list = items.map(item =><li class={marginItem}><button onClick={listItemClickHandler} class="button-link" data-id={item.id || item}><span data-id={item.id || item}>{item.name || item}</span></button></li>);
    return (
      <>  
        {/* <div class="block"><h3>{header}</h3></div> */}
        <ul class={marginList}>{list}</ul>
      </>
    );
  }

  export const RemoveableList = ({ items, msg }) => {
    const list = items.length > 0 
        ? items.map(item => <li class='flex'><input type='checkbox' checked /><span>{item}</span></li>)
        : <li class="hint">{msg}</li>;
    return (
      <ul>{list}</ul>
    );
  }