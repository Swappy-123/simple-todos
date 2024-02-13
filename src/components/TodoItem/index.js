// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {title, id} = todoDetails
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="con">
      <div>
        <p className="para">{title}</p>
      </div>
      <div>
        <button type="button" className="btn" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
