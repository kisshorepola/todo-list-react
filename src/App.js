import React, { useState, useEffect } from 'react';

import './App.css';
// importing form
import Form from './components/form';
// importing todolint 
import TodoList from './components/todoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setstatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);
  //only once
  useEffect(()=>{
    getLocalTodos();
  },[]);
 //filterHandler,saveLocalTodos runs every time when status ans todos changes
  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  },[status,todos]);

  const filterHandler = () => {
    switch(status) {
      case "completed":
        setfilteredTodos(todos.filter(todo => todo.completed === true));
      break;
      case "uncompleted":
        setfilteredTodos(todos.filter(todo => todo.completed === false));
      break;
      default:
        setfilteredTodos(todos);
    }
  }
//save local todos 
  const saveLocalTodos = () => {
      localStorage.setItem("todos", todos ? JSON.stringify(todos): JSON.stringify([]));
  }
// get local todos  
const getLocalTodos = () => {
    let localTodos = localStorage.getItem("todos")
    localTodos && setTodos(JSON.parse(localTodos))
}
  return (
    <div className="App">
      <header>
        <h1>Kishore To List</h1>
      </header>
      <Form 
        todos= {todos} 
        setTodos = {setTodos} 
        setInputText={setInputText} 
        inputText = {inputText}
        setstatus = {setstatus} />
      <TodoList todos= {todos} setTodos = {setTodos} filteredTodos= {filteredTodos}/>
    </div>
  );
}

export default App;
