export const SimpleList = props => {
    const list = props.items.map(item =>
      <li>{item}</li>
    );
    return (
      <ul>{list}</ul>
    );
  }