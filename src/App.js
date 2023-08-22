import "./App.css";
import React, { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/header";
import TextImput from "./Components/textImput";
import ToDoList from "./Components/todoList";

const App = () => {
  //STATES
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //USE EFFECT
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
    filterHandler();
  }, [todos, status]);

  // FUNCTIONS

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "incomplete":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      case "important":
        setFilteredTodos(todos.filter((todo) => todo.important === true));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  // LOCAL STORAGE
  const saveLocalTodos = () => {
    if (todos.length > 0) { 
    localStorage.setItem("todos", JSON.stringify(todos));
  };}
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  //RENDER APP
  return (
    <div className="App">
      <Header />
      <div id="Layout">
        <Sidebar />
        <TextImput
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          setStatus={setStatus}
        />
        <ToDoList
          filteredTodos={filteredTodos}
          todos={todos}
          setTodos={setTodos}
          status={status}
        />
      </div>
    </div>
  );
};

export default App;
