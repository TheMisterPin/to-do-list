import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faCheckCircle,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const ToDoItem = ({ text, todo, todos, setTodos }) => {
  const prioritizeImportant = (todos) => {
    return todos
      .slice()
      .sort((a, b) => (b.important ? 1 : 0) - (a.important ? 1 : 0));
  };

  const handleImportant = (id) => {
    const updatedTodos = todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          important: !item.important,
        };
      }
      return item;
    });

    const sortedTodos = prioritizeImportant(updatedTodos);

    setTodos(sortedTodos);
  };
  const handleComplete = (id) => {
    setTodos(
      todos.map((item => {
        if (item.id === id) {
          return {
            ...item, completed: !item.completed,
           
          };
        }
        return item;
      })),
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="todo">
      <li
        className={`todos-list-item ${todo.completed ? "completed" : ''} ${
          todo.important ? "important" : ''
        }`}
      >
        {text}
      </li>
      <div className="list-btn-container">
        <button className="done-btn" onClick={() => handleComplete(todo.id)}>
          <FontAwesomeIcon icon={faCheckCircle} />
        </button>

        <button className="delete-btn" onClick={() => handleDelete(todo.id)}>
          <FontAwesomeIcon
            icon={faTrashCan}
            shake={isHovered ? true : false}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </button>

        <button
          className="important-btn"
          onClick={() => handleImportant(todo.id)}
        >
          <FontAwesomeIcon icon={faBookmark} />
        </button>
      </div>
    </div>
  );
};
export default ToDoItem;
