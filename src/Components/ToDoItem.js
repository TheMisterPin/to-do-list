import React from "react";
import ActionButtons from "./ActionButtons";

const ToDoItem = ({ text, todo, setTodos, todos }) => {
  return (
    <div className={`todo ${todo.important ? "important" : ""}`}>
      <div className="paper pink">
        <div className="tape-section"/>
        <p
          className={`todos-list-item ${todo.completed ? "completed" : ""} ${
            todo.important ? "important" : ""
          }`}
        >
          {text}
        </p>
        <ActionButtons
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
    </div>
  );
};
export default ToDoItem;
