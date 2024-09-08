import React from 'react';
import TodosItem from './Todo';

export default function Todos(props){
  return (
    <div className='container'>
      <h3 className='my-3'>Todo List</h3>
      {props.todos.length===0 ? "No todos to display" :
      props.todos.map((todo)=>{
        return <TodosItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
      })
      }
    </div>
  );
};
