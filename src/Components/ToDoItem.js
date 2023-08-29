import React from "react";
import ActionButtons from "./ActionButtons";


const ToDoItem = ({ text, todo, setTodos, todos, count }) => {
  const typing = {
    animation: `typing 3.5s steps(${count}, end)`,
  };
  return (
    <div
      className={`paper list  ${
        (todo.important ? "important" : "pink", todo.completed ? "completed" : "pink")
      }`}
    >
      <div className="top-tape"></div>
      <li
        className={`todos-list-item ${todo.completed ? "completed" : ""} ${
          todo.important ? "important" : ""
        }`}
      >
        <p> {text}</p>

        <ActionButtons todo={todo} todos={todos} setTodos={setTodos} />
      </li>
    </div>
  );
};
export default ToDoItem;
