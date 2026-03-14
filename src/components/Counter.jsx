import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <h2>Counter</h2>
      <p>Practice: <code>useState</code> hook</p>
      <p className="count-display">{count}</p>
      <div className="button-row">
        <button onClick={() => setCount(c => c - 1)}>−</button>
        <button onClick={() => setCount(0)} className="secondary">Reset</button>
        <button onClick={() => setCount(c => c + 1)}>+</button>
      </div>
    </div>
  )
}

export default Counter
