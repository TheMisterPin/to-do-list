import React from "react";

const ToDoList = ({ todos, setTodos }) => {
  return (
    <div>
      Doing
      {todos.map((todos) => (
        <li className="todos-list" key={todos.id}>
          <input
            type="text"
            value={todos.title}
            className="list"
            onChange={(event) => event.preventDefault()}
          />
         
        </li>
      ))}
    </div>
  );
};

export default ToDoList;
