import React from 'react'

const TodosItem = ({todo, onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.subject}</p>
      <button className="btn btn-sm btn-danger" onClick={() =>{ onDelete(todo) }}>Delete</button>
    </div>
  )
}

export default TodosItem