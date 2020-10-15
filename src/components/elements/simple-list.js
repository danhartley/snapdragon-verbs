export const SimpleList = ({ items, msg }) => {
    const list = items.length > 0 
        ? items.map(item =><li>{item}</li>)
        : <li class="hint">{msg}</li>;
    return (
      <ul>{list}</ul>
    );
  }

  export const ActionList = ({ items, callback }) => {
    const handleClick = e => {
        const btn = e.target;
        callback(btn);
    };
    const list = items.map(item =><li><button onClick={callback} class="button-link" data-id={item.id}><span data-id={item.id}>{item.name}</span></button></li>);
    return (
      <ul>{list}</ul>
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