import ButtonOptionItem from '../ButtonOptionItem'
import ImageOptionItem from '../ImageOptionItem'
import Select from '../Select'
import './index.css'

const Question = ({ question, selectedAnswer, onSelectOption }) => {
  const renderOptions = () => {
    switch (question.options_type) {
      case 'DEFAULT':
        return (
          <div className="options-container">
            {question.options.map((option) => (
              <ButtonOptionItem
                key={option.id}
                option={option}
                isSelected={selectedAnswer === option.id}
                onSelect={onSelectOption}
              />
            ))}
          </div>
        )
      case 'IMAGE':
        return (
          <div className="image-options-container">
            {question.options.map((option) => (
              <ImageOptionItem
                key={option.id}
                option={option}
                isSelected={selectedAnswer === option.id}
                onSelect={onSelectOption}
              />
            ))}
          </div>
        )
      case 'SINGLE_SELECT':
        return (
          <Select
            options={question.options}
            selectedValue={selectedAnswer}
            onSelect={onSelectOption}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="question-container">
      <h2 className="question-text">{question.question_text}</h2>
      {renderOptions()}
    </div>
  )
}

export default Question
