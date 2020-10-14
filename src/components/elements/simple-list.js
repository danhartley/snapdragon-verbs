export const SimpleList = ({ items, msg }) => {
    const list = items.length > 0 
        ? items.map(item =><li>{item}</li>)
        : <li class="hint">{msg}</li>;
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