import React, { useState } from 'react'
import './Stopwatch.css' // We'll create this CSS file for custom styles

const Stopwatch = () => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [intervalId, setIntervalId] = useState(null)

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true)
      const id = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
      setIntervalId(id)
    }
  }

  const pauseTimer = () => {
    if (isRunning) {
      clearInterval(intervalId)
      setIsRunning(false)
    }
  }

  const resetTimer = () => {
    clearInterval(intervalId)
    setTime(0)
    setIsRunning(false)
  }

  const formatTime = () => {
    const hours = Math.floor(time / 3600000)
    const minutes = Math.floor((time % 3600000) / 60000)
    const seconds = Math.floor((time % 60000) / 1000)

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="stopwatch-container">
      <div className="stopwatch-card">
        <h1 className="stopwatch-title">STOPWATCH</h1>
        <div className="stopwatch-display">
          {formatTime()}
        </div>
        <div className="stopwatch-controls">
          <button className="stopwatch-button start" onClick={startTimer} disabled={isRunning}>
            Start
          </button>
          <button className="stopwatch-button pause" onClick={pauseTimer} disabled={!isRunning}>
            Pause
          </button>
          <button className="stopwatch-button reset" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default Stopwatch