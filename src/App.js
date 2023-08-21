import "./App.css";
import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/header";
import TextImput from "./Components/textImput";
import ToDoList from "./Components/todoList";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all')
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
     
        />
        <ToDoList todos={todos} setTodos={setTodos}/>
      </div>
    </div>
  );
};

export default App;
