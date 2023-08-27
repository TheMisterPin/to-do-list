import "./App.css";
import React, { useEffect, useState } from "react";
import TextImput from "./Components/textImput";
import ToDoList from "./Components/todoList";
import corkboard from "./media/Backgrounds/corkboard.jpeg";
import { Layout } from "antd";
const App = () => {
  //STATES
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [count, setCount] = useState("");

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

  // LAYOUT
  const { Header, Content, Footer, Sider } = Layout;

  // LOCAL STORAGE
  const saveLocalTodos = () => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };
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
      <Layout
        style={{ backgroundImage: `url(${corkboard})` }}
        className="layout"
      ><Header className="Header"></Header>
        
        <Content className ="main" >
          {" "}
          <Layout style={{background:"transparent"}}>
            <Sider style={{background:"transparent"}} className="input-container">
              <TextImput
                input={input}
                setInput={setInput}
                todos={todos}
                setTodos={setTodos}
                setStatus={setStatus}
                setCount={setCount}
              />
            </Sider>

            <Content className="list-display" >
              <ToDoList
                count={count}
                filteredTodos={filteredTodos}
                todos={todos}
                setTodos={setTodos}
                status={status}
              />
            </Content>
          </Layout>
        </Content>
        <Footer className="footer"> </Footer>
      </Layout>
    </div>
  );
};

export default App;
