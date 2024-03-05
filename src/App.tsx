import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [totalCount, setTotalCount] = useState(0)

  const handleCount = (e) => {
    setCount(Number(e.target.value))
  }

  const handleCalculator = (e) => {
    e.preventDefault()

    console.log(typeof count, typeof totalCount)
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
        <button value="+" onClick={handleCalculator}>
          +
        </button>
        <button value="-" onClick={handleCalculator}>
          -
        </button>
        <button value="*" onClick={handleCalculator}>
          *
        </button>
        <button value="/" onClick={handleCalculator}>
          /
        </button>
        <button value="%" onClick={handleCalculator}>
          %
        </button>
      </form>
      <span> count:{totalCount}</span>
    </>
  )
}

export default App
