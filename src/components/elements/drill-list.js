export const DrillList = props => {
    const questions = props.values.map(question =>
        <div><label>{question.label}</label><input /></div>        
    );
    console.log({questions})
    return (
      <section>
          <div>Questions</div>
          <div>{questions}</div>
      </section>
    );
  };