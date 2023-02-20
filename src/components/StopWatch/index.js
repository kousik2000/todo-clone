import './index.css'

import {Component} from 'react'

class StopWatch extends Component {
  state = {isTimeRunning: false, timeElapsedInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  startTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimeRunning: true})
  }

  pauseTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  resetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderHours = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 3600)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderDays = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 86400)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const time = `${this.renderDays()}:${this.renderHours()}:${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="bg-container">
        <h1 className="main-head">Stop Watch</h1>
        <div className="card-container">
          <div className="display-container">
            <h1 className="timer">{time}</h1>
          </div>
          <div className="button-container">
            <button className="button" onClick={this.startTimer}>
              Start
            </button>
            <button className="button" onClick={this.pauseTimer}>
              Pause
            </button>
            <button className="button" onClick={this.resetTimer}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
