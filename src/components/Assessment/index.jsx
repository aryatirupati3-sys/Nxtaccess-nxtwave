import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'
import Question from '../Question'
import QuestionPalette from '../QuestionPalette'
import AssessmentConfiguration from '../AssessmentConfiguration'
import EvaluationContext from '../../context/EvaluationContext'
import './index.css'

const Assessment = ({ onLogout }) => {
  const navigate = useNavigate()
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [startTime] = useState(Date.now())

  const context = useContext(EvaluationContext)

  useEffect(() => {
    fetchQuestions()
  }, [])

  const fetchQuestions = async () => {
    try {
      setLoading(true)
      const token = localStorage.getItem('jwt_token')
      const response = await fetch('/api/assess/questions', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await response.json()
      if (response.ok) {
        setQuestions(data.questions)
        setError(null)
      } else {
        setError(data.error_msg || 'Failed to fetch questions')
      }
    } catch (err) {
      setError('Failed to fetch questions')
    } finally {
      setLoading(false)
    }
  }

  const handleSelectOption = (optionId) => {
    const question = questions[currentIndex]
    const wasAnswered = !!answers[question.id]
    
    setAnswers((prev) => ({
      ...prev,
      [question.id]: optionId,
    }))

    // Update context
    if (context && context.updateAnswer) {
      context.updateAnswer(question.id, optionId)
    }
  }

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handleQuestionSelect = (index) => {
    setCurrentIndex(index)
  }

  const handleSubmit = () => {
    const timeTaken = Math.floor((Date.now() - startTime) / 1000)
    
    // Calculate score
    let score = 0
    questions.forEach((question) => {
      if (answers[question.id]) {
        const selectedOption = question.options.find(
          (opt) => opt.id === answers[question.id]
        )
        if (selectedOption && selectedOption.is_correct) {
          score += 1
        }
      }
    })

    if (context) {
      context.setScore(score)
      context.setTimeTaken(timeTaken)
      context.setAssessmentData({
        questions,
        answers,
      })
    }

    navigate('/results')
  }

  const handleTimeUp = () => {
    handleSubmit()
  }

  if (loading) {
    return (
      <div className="assessment-container">
        <Header onLogout={onLogout} />
        <div className="loader-container" data-testid="loader">
          <div className="loader" />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="assessment-container">
        <Header onLogout={onLogout} />
        <div className="failure-view">
          <img
            src="/failure.svg"
            alt="failure view"
            className="failure-image"
          />
          <h2 className="failure-message">Failed to load questions</h2>
          <p className="failure-description">{error}</p>
          <button className="retry-button" onClick={fetchQuestions}>
            Retry
          </button>
        </div>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div className="assessment-container">
        <Header onLogout={onLogout} />
        <div className="no-questions">
          <p>No questions available</p>
        </div>
      </div>
    )
  }

  const currentQuestion = questions[currentIndex]
  const isLastQuestion = currentIndex === questions.length - 1

  return (
    <div className="assessment-container">
      <Header onLogout={onLogout} />
      <div className="assessment-content">
        <div className="assessment-left">
          <Question
            question={currentQuestion}
            selectedAnswer={answers[currentQuestion.id]}
            onSelectOption={handleSelectOption}
          />
          {!isLastQuestion && (
            <button className="next-question-button" onClick={handleNextQuestion}>
              Next Question
            </button>
          )}
        </div>
        <div className="assessment-right">
          <QuestionPalette
            questions={questions}
            currentQuestionIndex={currentIndex}
            answers={answers}
            onQuestionSelect={handleQuestionSelect}
          />
          <AssessmentConfiguration
            onTimeUp={handleTimeUp}
            onSubmit={handleSubmit}
            isLastQuestion={isLastQuestion}
          />
        </div>
      </div>
    </div>
  )
}

export default Assessment
