import Timer from '../Timer'
import './index.css'

const AssessmentConfiguration = ({ onTimeUp, onSubmit, isLastQuestion }) => {
  return (
    <div className="assessment-config-container">
      <Timer initialSeconds={10 * 60} onTimeUp={onTimeUp} />
      <button
        className="submit-button"
        onClick={onSubmit}
      >
        {isLastQuestion ? 'Submit Assessment' : 'Next Question'}
      </button>
    </div>
  )
}

export default AssessmentConfiguration
