export const SimpleList = props => {
    const list = props.values.map(value =>
      <li>{value}</li>
    );
    console.log({list})
    return (
      <ul>{list}</ul>
    );
  }