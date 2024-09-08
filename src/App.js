import './App.css';
import AddTodo from './myComponents/addTodo.js';
import Footer from './myComponents/footer.js';
import Header from './myComponents/header.js';
import Todos from './myComponents/todos.js';
import React, { useState, useEffect } from 'react';

function App() {
  let initTodo;
  if (!localStorage.getItem("todos")) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos")); // Corrected parsing logic
  }

  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    // Deleting this way will work
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    // localStorage is updated in useEffect, no need to set it here
  }

  const addTodo = (title, subject) => {
    console.log("I am adding Todo", title, subject);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      subject: subject
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
