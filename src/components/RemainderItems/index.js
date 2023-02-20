import './index.css'

const RemainderItems = props => {
  const {remainderDetails, onSetReminderClick, isDeleteButtonClicked} = props
  const {id, userRemainderText, remainderDate, remainderTime} = remainderDetails

  const onSetReminderButtonClick = () => {
    onSetReminderClick(id)
  }

  const onDeleteButton = () => {
    isDeleteButtonClicked(id)
  }

  return (
    <li className="remainder-list">
      <div className="remainder-item-container">
        <div className="remainder-text-container">
          <p className="remainder-text">{userRemainderText}</p>
          <p className="remainder-text">{remainderDate}</p>
          <p className="remainder-text">{remainderTime}</p>
        </div>
        <div className="remainder-button-container">
          <button onClick={onSetReminderButtonClick} className="button-icons">
            <i className="fa-solid fa-bell fa-lg" />
          </button>
          <button className="button-icons" onClick={onDeleteButton}>
            <i className="fa-solid fa-trash-can fa-lg" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default RemainderItems
