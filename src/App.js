import './App.css';
import Footer from './myComponents/footer.js';
import Header from './myComponents/header.js';
import Todo from './myComponents/todo.js';
import Todos from './myComponents/todos.js';



function App() {
  return (
    <>
      <Header title = "My_todo_list" searchBar={false}/>
      <Todos/>
      <Footer/>
    </>
  );
}

export default App;
