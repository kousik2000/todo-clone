import './index.css'

import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import RemainderItems from '../RemainderItems'

class Remainder extends Component {
  state = {
    remainderList: [],
    userRemainderText: '',
    remainderDate: '',
    remainderTime: '',
    intervalId: null,
    currentTime: '',
  }

  componentDidMount() {
    this.getMyReminderData()
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  getMyReminderData = () => {
    const stringifiedReminderList = localStorage.getItem('myReminderData')
    const parsedReminderList = JSON.parse(stringifiedReminderList)
    if (parsedReminderList === null) {
      this.setState({remainderList: []})
    } else {
      this.setState({remainderList: parsedReminderList})
    }
  }

  addListToLocalStorage = () => {
    const {remainderList} = this.state
    localStorage.setItem('myReminderData', JSON.stringify(remainderList))
  }

  onAddRemainder = event => {
    this.setState({userRemainderText: event.target.value})
  }

  onAddDate = event => {
    this.setState({remainderDate: event.target.value})
  }

  onAddTime = event => {
    this.setState({remainderTime: event.target.value})
  }

  addNewRemainder = event => {
    event.preventDefault()
    const {userRemainderText, remainderDate, remainderTime} = this.state

    const newRemainder = {
      id: uuidv4(),
      userRemainderText,
      remainderDate,
      remainderTime,
    }
    this.setState(prevState => ({
      remainderList: [...prevState.remainderList, newRemainder],
      userRemainderText: '',
      remainderDate: '',
      remainderTime: '',
    }))
  }

  isDeleteButtonClicked = id => {
    const {remainderList} = this.state
    const filteredData = remainderList.filter(eachData => eachData.id !== id)

    this.setState({remainderList: filteredData})
  }

  onSetReminderClick = id => {}

  render() {
    const {
      remainderList,
      userRemainderText,
      remainderDate,
      remainderTime,
    } = this.state
    const remainderCount = remainderList.length
    return (
      <div className="bg-container">
        <h1 className="main-head">Remainder</h1>
        <button className="button1" onClick={this.addListToLocalStorage}>
          Save {remainderCount} Reminders
        </button>

        <div className="remainder-card-container">
          <div className="remainder-input-container">
            <h1 className="sub-text">New Remainder</h1>
            <form onSubmit={this.addNewRemainder}>
              <label htmlFor="text" className="remainder-input-label">
                Add Task
              </label>
              <br />

              <input
                type="text"
                className="remainder-input"
                id="text"
                placeholder="Add Task"
                onChange={this.onAddRemainder}
                value={userRemainderText}
              />
              <br />

              <label htmlFor="date" className="remainder-input-label">
                Add Date
              </label>
              <br />
              <input
                type="date"
                className="remainder-input"
                id="date"
                placeholder="Add Date"
                onChange={this.onAddDate}
                value={remainderDate}
              />
              <br />
              <label htmlFor="time" className="remainder-input-label">
                Add Time
              </label>
              <br />
              <input
                type="time"
                className="remainder-input"
                id="time"
                placeholder="Add Time"
                onChange={this.onAddTime}
                value={remainderTime}
              />
              <br />
              <div className="button-remainder-container">
                <button type="submit" className="button">
                  Confirm
                </button>
              </div>
            </form>
          </div>

          <div className="remainder-list-container">
            <ul>
              {remainderList.map(eachRemainder => (
                <RemainderItems
                  remainderDetails={eachRemainder}
                  key={eachRemainder.id}
                  onSetReminderClick={this.onSetReminderClick}
                  isDeleteButtonClicked={this.isDeleteButtonClicked}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Remainder
