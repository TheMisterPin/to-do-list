import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map(todo => (
          <ToDoItem  todo={todo} setTodos={setTodos} todos={todos} key ={todo.id} text={todo.text} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
