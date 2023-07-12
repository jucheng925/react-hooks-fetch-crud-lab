import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, removeQuestion, modifyQuestion}) {

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map(question => <QuestionItem key={question.id} question={question} onDelete={removeQuestion} onUpdate={modifyQuestion}></QuestionItem>)}
      </ul>
    </section>
  );
}

export default QuestionList;
