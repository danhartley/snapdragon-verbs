export const DrillList = props => {
    const questions = props.values.map(question =>
        <div><label>{question.label}-{question.value.to}</label><input id={question.value.to} /></div>
    );
    console.log({questions})
    return (
      <section>
          <div>Questions</div>
          <div>{questions}</div>
      </section>
    );
  };