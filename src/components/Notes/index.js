import './index.css'

import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import NoteList from '../NoteList'

class Notes extends Component {
  state = {notesData: [], title: '', notes: ''}

  addNewNotes = event => {
    event.preventDefault()
    const {title, notes} = this.state

    const newNotes = {
      id: uuidv4(),
      title,
      notes,
    }
    this.setState(prevState => ({
      notesData: [...prevState.notesData, newNotes],
      title: '',
      notes: '',
    }))
  }

  onTitleChange = event => {
    this.setState({title: event.target.value})
  }

  onTextChange = event => {
    this.setState({notes: event.target.value})
  }

  onClearNote = event => {
    event.preventDefault()
    this.setState({title: '', notes: ''})
  }

  onClickDelete = id => {
    const {notesData} = this.state
    console.log(notesData)
    const filteredData = notesData.filter(eachNote => eachNote.id !== id)
    console.log(filteredData)

    this.setState({notesData: filteredData})
  }

  render() {
    const {notesData, title} = this.state
    const notesCount = notesData.length
    return (
      <div className="bg-container">
        <div className="mixed-container">
          <h1 className="main-head">Notes</h1>
          <div className="notes-container">
            <form className="note-input-container" onSubmit={this.addNewNotes}>
              <h1 className="sub-text1">New Notes</h1>
              <label htmlFor="noteTitle" className="remainder-input-label">
                Title
              </label>
              <input
                className="notes-title-input"
                type="text"
                id="noteTitle"
                placeholder="Title"
                onChange={this.onTitleChange}
                value={title}
              />
              <textarea
                cols="50"
                id="text-area"
                className="text-area-input"
                placeholder="Write your Notes Here"
                onChange={this.onTextChange}
                value={this.state.notes}
              />
              <div className="notes-button-container">
                <button
                  type="button"
                  className="button1 clear-button"
                  onClick={this.onClearNote}
                >
                  Clear
                </button>
                <button className="button1" type="submit">
                  Add Notes
                </button>
              </div>
            </form>
            <div className="notes-list-container">
              <div className="heading-save-container">
                <h1 className="sub-text1">Your Saved Notes:</h1>
                <button className="button1" onClick={this.saveNotes}>
                  Save your {notesCount} Notes
                </button>
              </div>
              <hr />
              <ul>
                {notesData.map(eachNote => (
                  <NoteList
                    noteDetail={eachNote}
                    onClickDelete={this.onClickDelete}
                    key={eachNote.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Notes
