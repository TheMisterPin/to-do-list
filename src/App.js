//External Import
import "./App.css";
import React, { useEffect, useState } from "react";
import { Layout } from "antd";
// Component Import
import TextImput from "./Components/textImput";
import ToDoList from "./Components/todoList";
import PageHeader from "./Components/PageHeader";
import ListHeader from "./Components/ListHeader";
// Media Import
import corkboard from "./media/Backgrounds/corkboard.jpeg";

const App = () => {
  //STATES
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [count, setCount] = useState("");
  const [color, setColor] = useState("");
  const [listTitle, setListTitle] = useState("");
  const [list, setList] = useState([]);

  //USE EFFECT
  useEffect(() => {
    getLocalTodos();
    getLocalList();
  }, []);

  useEffect(() => {
    saveLocalList();
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
  const saveLocalList = () => {
    if (list.length > 0) {
      localStorage.setItem("list", JSON.stringify(list));
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

  const getLocalList= () => {
    if (localStorage.getItem("list") === null) {
    localStorage.setItem("list", JSON.stringify([])); }
    else {
      let localList = JSON.parse(localStorage.getItem("list"));
  setList(localList)};}

  //RENDER APP
  return (
    <div className="App" style={{ backgroundImage: `url(${corkboard})` }}>
      <Layout className="layout" style={{ background: "transparent" }}>
        <Header className="header">
          {" "}
          <PageHeader className="ListHeader" />{" "}
        </Header>
        <Content style={{ display: "flex" }}>
          {" "}
          <Layout className="main" style={{ background: "transparent" }}>
            <Sider
              width={"20%"}
              breakpoint="lg"
              collapsedWidth="0"
              onBreakpoint={(broken) => {
                console.log(broken);
              }}
              onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
              }}
              style={{ background: "transparent" }}
              className="input-container"
            >
              <TextImput
                input={input}
                setInput={setInput}
                todos={todos}
                setTodos={setTodos}
                setStatus={setStatus}
                setCount={setCount}
                color={color}
                setColor={setColor}
              />
            </Sider>

            <Content className="list-display">
              <ListHeader
                setFilteredTodos={setFilteredTodos}
                setTodos={setTodos}
                todos={todos}
                list={list}
                setList={setList}
                listTitle={listTitle}
                setListTitle={setListTitle}
              />
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
      </Layout>
    </div>
  );
};

export default App;
