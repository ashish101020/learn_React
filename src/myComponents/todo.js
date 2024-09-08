import React from 'react'

export default function TodosItem({todo, key, onDelete}){
  return (
    <div>
      <h2>{key}</h2>
      <h4>{todo.title}</h4>
      <p>{todo.subject}</p>
      <button className="btn btn-sm btn-danger" onClick={() =>{ onDelete(todo) }}>Delete</button>
    </div>
  )
}
