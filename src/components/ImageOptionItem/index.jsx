import './index.css'

const ImageOptionItem = ({ option, isSelected, onSelect }) => {
  return (
    <button
      className={`image-option ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(option.id)}
    >
      <img src={option.image_url} alt={option.text} />
    </button>
  )
}

export default ImageOptionItem
