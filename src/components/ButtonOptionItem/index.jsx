import './index.css'

const ButtonOptionItem = ({ option, isSelected, onSelect }) => {
  return (
    <button
      className={`button-option ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(option.id)}
    >
      {option.text}
    </button>
  )
}

export default ButtonOptionItem
