import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

function ListItem({todo}) {

   const {deleteTodo , editTodo} = useContext(GlobalContext)

  return (
    <li className="list-group-item rounded-0 bg-secondary text-light">
      {todo.text}
    <button className="btn btn-danger rounded-0 btn-sm float-end" onClick={()=>deleteTodo(todo.id)}>Delete</button>
    <button className="btn btn-warning me-2 rounded-0 btn-sm float-end" onClick={()=>editTodo(todo)}>Edit</button>

  </li>
  )
}

export default ListItem
