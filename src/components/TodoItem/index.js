/* eslint-disable react/button-has-type */
import './index.css'
import '@fortawesome/fontawesome-free/css/all.css'

const TodoItem = props => {
  const {todoDetails, onClickDeleteButton} = props
  const {id, addTask, date} = todoDetails

  const onDelete = () => {
    onClickDeleteButton(id)
  }

  return (
    <li className="todo-item-container">
      <input
        type="checkbox"
        id="checkbox"
        className="checkbox-input"
        onChange={event => {
          const checkboxLabel = event.target.nextElementSibling
          checkboxLabel.classList.toggle('checked')
        }}
      />
      <div className="label-container">
        <label htmlFor="checkbox" className="checkbox-label">
          {addTask}
        </label>
        <div className="date-delete-container">
          <p className="task">{date}</p>
          <button className="delete-button" onClick={onDelete}>
            <i className="fa-solid fa-trash-can delete-icon" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default TodoItem
