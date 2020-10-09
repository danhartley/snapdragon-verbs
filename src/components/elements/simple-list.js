export const SimpleList = props => {
    const list = props.values.map(value =>
      <li>{value}</li>
    );
    return (
      <ul>{list}</ul>
    );
  }