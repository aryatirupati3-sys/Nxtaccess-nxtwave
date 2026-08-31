import QuestionNumberItem from '../QuestionNumberItem'
import './index.css'

const QuestionPalette = ({ questions, currentQuestionIndex, answers, onQuestionSelect }) => {
  return (
    <div className="question-palette-container">
      <h3 className="palette-title">Questions</h3>
      <div className="question-numbers-container">
        {questions.map((question, index) => (
          <QuestionNumberItem
            key={question.id}
            number={index + 1}
            isAnswered={!!answers[question.id]}
            isActive={currentQuestionIndex === index}
            onClick={() => onQuestionSelect(index)}
          />
        ))}
      </div>
      <div className="questions-stats">
        <div className="stat-item">
          <span className="stat-label">Answered:</span>
          <span className="stat-value">{Object.keys(answers).length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Unanswered:</span>
          <span className="stat-value">{questions.length - Object.keys(answers).length}</span>
        </div>
      </div>
    </div>
  )
}

export default QuestionPalette
