import './index.css'

const QuestionNumberItem = ({ number, isAnswered, isActive, onClick }) => {
  return (
    <button
      data-testid="questionItem"
      className={`question-number-item ${isActive ? 'active' : ''} ${isAnswered ? 'answered' : ''}`}
      onClick={onClick}
    >
      {number}
    </button>
  )
}

export default QuestionNumberItem
