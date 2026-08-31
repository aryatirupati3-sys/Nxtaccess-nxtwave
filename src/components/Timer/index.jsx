import { useState, useEffect } from 'react'
import './index.css'

const Timer = ({ initialSeconds, onTimeUp }) => {
  const [seconds, setSeconds] = useState(initialSeconds)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          onTimeUp()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [onTimeUp])

  const minutes = Math.floor(seconds / 60)
  const secs = seconds % 60

  return (
    <div className="timer-container">
      <div className={`timer ${seconds < 60 ? 'timer-warning' : ''}`}>
        <span className="timer-text">
          {String(minutes).padStart(2, '0')}:{String(secs).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}

export default Timer
