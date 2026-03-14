import { useState, useEffect, useRef } from 'react'

function Stopwatch() {
  const [running, setRunning] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const [laps, setLaps] = useState([])
  const startRef = useRef(null)     // timestamp when last started
  const baseRef = useRef(0)         // elapsed ms accumulated before the current run
  const frameRef = useRef(null)

  useEffect(() => {
    if (running) {
      startRef.current = Date.now()
      const tick = () => {
        setElapsed(baseRef.current + (Date.now() - startRef.current))
        frameRef.current = requestAnimationFrame(tick)
      }
      frameRef.current = requestAnimationFrame(tick)
    } else {
      cancelAnimationFrame(frameRef.current)
      baseRef.current = elapsed
    }
    return () => cancelAnimationFrame(frameRef.current)
  // elapsed is intentionally excluded: we read it via baseRef on pause
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running])

  const reset = () => {
    setRunning(false)
    setElapsed(0)
    setLaps([])
    baseRef.current = 0
  }

  const lap = () => setLaps(prev => [...prev, elapsed])

  const fmt = (ms) => {
    const m = String(Math.floor(ms / 60000)).padStart(2, '0')
    const s = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0')
    const cs = String(Math.floor((ms % 1000) / 10)).padStart(2, '0')
    return `${m}:${s}.${cs}`
  }

  return (
    <div className="card">
      <h2>Stopwatch</h2>
      <p>Practice: <code>useEffect</code>, <code>useRef</code>, <code>requestAnimationFrame</code></p>
      <p className="stopwatch-display">{fmt(elapsed)}</p>
      <div className="button-row">
        <button onClick={() => setRunning(r => !r)}>
          {running ? 'Pause' : 'Start'}
        </button>
        <button onClick={lap} disabled={!running} className="secondary">Lap</button>
        <button onClick={reset} className="secondary">Reset</button>
      </div>
      {laps.length > 0 && (
        <ol className="lap-list">
          {laps.map((l, i) => (
            <li key={i}>Lap {i + 1}: {fmt(l)}</li>
          ))}
        </ol>
      )}
    </div>
  )
}

export default Stopwatch
