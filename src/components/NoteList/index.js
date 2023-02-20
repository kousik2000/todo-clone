import './index.css'

const NoteList = props => {
  const {noteDetail, onClickDelete} = props
  const {id, title} = noteDetail

  const onDeleteButton = () => {
    onClickDelete(id)
  }

  return (
    <li>
      <div className="note-list-item">
        <h1 className="note-title">{title}</h1>
        <button className="button-icons" onClick={onDeleteButton}>
          <i className="fa-solid fa-trash-can fa-lg" />
        </button>
      </div>
    </li>
  )
}

export default NoteList
