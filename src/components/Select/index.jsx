import './index.css'

const Select = ({ options, selectedValue, onSelect }) => {
  return (
    <div className="select-container">
      <select
        className="select-dropdown"
        value={selectedValue}
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
