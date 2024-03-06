import { useState } from 'react'
import Button from '../Button/Button'

function Form() {
  const [count, setCount] = useState(0)
  const [totalCount, setTotalCount] = useState(0)

  const handleCount = (e: any) => {
    setCount(Number(e.target.value))
  }

  const handleCalculator = (e: any) => {
    e.preventDefault()

    switch (e.target.value) {
      case '+':
        setTotalCount(totalCount + count)
        break
      case '-':
        setTotalCount(totalCount - count)
        break
      case '*':
        setTotalCount(totalCount * count)
        break
      case '/':
        setTotalCount(totalCount / count)
        break
      case '%':
        setTotalCount(totalCount % count)
        break
    }
  }

  return (
    <>
      <form>
        <input type="number" onChange={handleCount} />
        <Button value="+" handleCalculator={handleCalculator} />
        <Button value="-" handleCalculator={handleCalculator} />
        <Button value="*" handleCalculator={handleCalculator} />
        <Button value="/" handleCalculator={handleCalculator} />
        <Button value="%" handleCalculator={handleCalculator} />
      </form>
      <span>{totalCount}</span>
    </>
  )
}

export default Form
