import { useState } from 'react'
import he from "he"

function App() {
  const [quizStarted, setQuizStarted] = useState(false)
  const [questions, setQuestions] = useState([])
  const [score, setScore] = useState(null)

  function fetchQuestions() {
    fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
      .then(response => response.json())
      .then(data => {
        const formatted = data.results.map(q => {
          const answers = [...q.incorrect_answers, q.correct_answer]
            .sort(() => Math.random() - 0.5)
          return { ...q, answers, selected: null }
        })
        setQuestions(formatted)
      })
      .catch(error => console.error('Error fetching quiz data:', error))
  }

  function startQuiz() {
    setQuizStarted(true)
    setScore(null)
    fetchQuestions()
  }

  function goToMenu() {
    setQuizStarted(false)
    setQuestions([])
    setScore(null)
  }

  function selectAnswer(questionIndex, answer) {
    if (score !== null) return
    setQuestions(prev =>
      prev.map((q, i) =>
        i === questionIndex ? { ...q, selected: answer } : q
      )
    )
  }

  function checkAnswers() {
    let correct = 0
    questions.forEach(q => {
      if (q.selected === q.correct_answer) correct++
    })
    setScore(correct)
  }

  const showResults = score !== null

  const questionsElements = questions.map((q, index) => (
    <div key={index} className="question-block">
      <p>{he.decode(q.question)}</p>
      <div className="answers">
        {q.answers.map((answer, i) => {
          let className = "answer"
          if (showResults) {
            if (answer === q.correct_answer) {
              className += " correct"
            } else if (answer === q.selected) {
              className += " incorrect"
            }
          } else if (q.selected === answer) {
            className += " selected"
          }
          return (
            <button
              key={i}
              className={className}
              onClick={() => selectAnswer(index, answer)}
            >
              {he.decode(answer)}
            </button>
          )
        })}
      </div>
      <hr />
    </div>
  ))

  return (
    <main>
      {quizStarted ? (
        <div key={questions.map(q => q.question).join("")} className="quiz-container">
          {questionsElements}
          {!showResults ? (
            <button className="check" onClick={checkAnswers}>
              Check answers
            </button>
          ) : (
            <div className="results">
              <p>You scored {score}/{questions.length} correct answers</p>
              <div className="buttons">
                <button className="play-again" onClick={startQuiz}>
                  Play again
                </button>
                <button className="menu" onClick={goToMenu}>
                  Main Menu
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          <h1>Quizzical</h1>
          <p>Test your knowledge with random trivia questions.</p>
          <button className="start" onClick={startQuiz}>Start quiz</button>
        </>
      )}
    </main>
  )
}

export default App
