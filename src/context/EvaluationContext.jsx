import { createContext, useState, useCallback } from 'react'

const EvaluationContext = createContext()

export const EvaluationProvider = ({ children }) => {
  const [assessmentData, setAssessmentData] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [score, setScore] = useState(0)
  const [timeTaken, setTimeTaken] = useState(0)

  const updateAnswer = useCallback((questionId, answerId) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerId,
    }))
  }, [])

  const resetAssessment = useCallback(() => {
    setCurrentQuestionIndex(0)
    setAnswers({})
    setScore(0)
    setTimeTaken(0)
  }, [])

  const value = {
    assessmentData,
    setAssessmentData,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    answers,
    updateAnswer,
    score,
    setScore,
    timeTaken,
    setTimeTaken,
    resetAssessment,
  }

  return <EvaluationContext.Provider value={value}>{children}</EvaluationContext.Provider>
}

export default EvaluationProvider
