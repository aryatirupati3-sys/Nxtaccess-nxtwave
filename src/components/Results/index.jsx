import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'
import EvaluationContext from '../../context/EvaluationContext'
import './index.css'

const Results = ({ onLogout }) => {
  const navigate = useNavigate()
  const context = useContext(EvaluationContext)

  const score = context?.score || 0
  const timeTaken = context?.timeTaken || 0
  const totalQuestions = context?.assessmentData?.questions?.length || 0
  const isTimeUp = context?.assessmentData?.isTimeUp || false

  const minutes = Math.floor(timeTaken / 60)
  const seconds = timeTaken % 60

  const handleReattempt = () => {
    context?.resetAssessment()
    navigate('/assessment')
  }

  return (
    <div className="results-container">
      <Header onLogout={onLogout} />
      <div className="results-content">
        <div className="results-card">
          {isTimeUp ? (
            <>
              <img
                src="/timeup.svg"
                alt="time up"
                className="results-image"
              />
              <h1 className="results-title">Time Up!</h1>
            </>
          ) : (
            <>
              <img
                src="/submit.svg"
                alt="submit"
                className="results-image"
              />
              <h1 className="results-title">Assessment Complete</h1>
            </>
          )}

          <div className="results-stats">
            <div className="stat-box">
              <span className="stat-label">Score</span>
              <span className="stat-value">
                {score} / {totalQuestions}
              </span>
            </div>
            <div className="stat-box">
              <span className="stat-label">Time Taken</span>
              <span className="stat-value">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </span>
            </div>
          </div>

          <div className="result-percentage">
            <span className="percentage-value">
              {totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0}%
            </span>
          </div>

          <button className="reattempt-button" onClick={handleReattempt}>
            Reattempt
          </button>
        </div>
      </div>
    </div>
  )
}

export default Results
