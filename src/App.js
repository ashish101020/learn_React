import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddTodo from './myComponents/AddTodo.js';
import Footer from './myComponents/Footer.js';
import Header from './myComponents/header.js';
import Todos from './myComponents/Todos.js';
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
    <router>
      <Header title="To Do List" searchBar={true} />
      <Switch>
          <Route path="/"  render={()=>{
            return (<>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
            </>)
          }}>
          </Route>
          <Route path="/about" render={()=>{
            return (
              <>

              </>
            )
          }}>
          </Route>
        </Switch>
      <Footer />
    </router>
    </>
  );
}

export default App;
