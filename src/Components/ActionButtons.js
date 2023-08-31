import React from "react";
import { ReactComponent as DeleteIcon } from "../media/icons/deleteIcon.svg";
import { ReactComponent as ImportantIcon } from "../media/icons/importantIcon.svg";
import { ReactComponent as CheckboxIcon } from "../media/icons/CheckBoxIcon.svg";

function ActionButtons({ todo, setTodos, todos }) {
  const prioritizeImportant = (todos) => {
    return todos
      .slice()
      .sort((a, b) => (b.important ? 1 : 0) - (a.important ? 1 : 0));
  };
  const moveCompleted = (todos) => {
    return todos
      .slice()
   
      .sort((a, b) => (a.completed ? 1 : 0) - (b.completed ? 1 : 0));
  
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
      const updatedTodos = todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    const sortedTodos = moveCompleted(updatedTodos);

    setTodos(sortedTodos);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="btn-group">
      <DeleteIcon
      style={{ height: 55, width: 55 }}
        className="delete btn"
        aria-label="delete"
        onClick={() => handleDelete(todo.id)}
      />
      <ImportantIcon
      style={{ height: 55, width: 55 }}
        className="important btn"
        aria-label="important"
        onClick={() => handleImportant(todo.id)}
      />

   
        <CheckboxIcon style={{ height: 55, width: 55 }}
        className="done btn"
        aria-label="done"
        onClick={() => handleComplete(todo.id)}/>
    </div>
  );
}

export default ActionButtons;
