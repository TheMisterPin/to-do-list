import React from "react";
import ActionButtons from "./ActionButtons";
import { Col } from "antd";

const ToDoItem = ({ text, todo, setTodos, todos }) => {
  return (
    <div className={`todo ${todo.important ? "important" : ""}`}>
      <div className="paper pink">
      <div className="top-tape"></div>
      <li className={`todos-list-item ${todo.completed ? "completed" : ""} ${
            todo.important ? "important" : ""
          }`}>
        <p>
          {text}
        </p>
        <ActionButtons
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
        </li>
      </div>
      </div>

  );
};
export default ToDoItem;
