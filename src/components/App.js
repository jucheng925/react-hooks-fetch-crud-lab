import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";


function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((data)=>setQuestions(data))
  }, [])

  function handleNewQuestion(newQuestion) {
    setQuestions([...questions, newQuestion])
  }

  function removeQuestion(deletedQuestion) {
    const updatedQuestions= questions.filter((question) => question.id !== deletedQuestion.id)
    setQuestions(updatedQuestions)
  }

  function modifyQuestion(modQuestion) {
    const modifyQuestions = questions.map((question) => {
      if (question.id === modQuestion.id) {
        return modQuestion;
      } else {
        return question;
      }
    });
    setQuestions(modifyQuestions)
  }


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddNewQuestion={handleNewQuestion}/> : <QuestionList questions={questions} removeQuestion={removeQuestion} modifyQuestion={modifyQuestion}/>}
    </main>
  );
}

export default App;
