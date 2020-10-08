export const SimpleList = props => {
    console.log('values:', props.values);
    const list = props.values.map(value =>
      <li>{value}</li>
    );
    return (
      <ul>{list}</ul>
    );
  }