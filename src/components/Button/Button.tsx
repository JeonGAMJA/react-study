function Button({ value, handleCalculator }) {
  return (
    <button value={value} onClick={handleCalculator}>
      {value}
    </button>
  )
}

export default Button
