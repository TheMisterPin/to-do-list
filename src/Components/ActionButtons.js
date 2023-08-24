import React from "react";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import { ReactComponent as DeleteIcon  } from "../media/icons/deleteIcon.svg";
import{ ReactComponent as ImportantIcon }  from "../media/icons/importantIcon.svg";
import { ReactComponent as CheckboxIcon } from "../media/icons/CheckBoxIcon.svg";

function ActionButtons({ todo, setTodos, todos }) {
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
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <ButtonGroup
      className="btn-Group"
      variant="contained"
      color="primary"
      aria-label="contained primary button group"
    >
      <IconButton
      size="small"
        className="delete btn"
        aria-label="delete"
        onClick={() => handleDelete(todo.id)}
      >
    <DeleteIcon className="icon" size="small"/>
      </IconButton>
      <IconButton
      size="small"
        className="important btn"
        aria-label="important"
        onClick={() => handleImportant(todo.id)}
      >
        <ImportantIcon className="icon" size="small"/>
      </IconButton>
      <IconButton
      size="small"
        className="done btn"
        aria-label="done"
        onClick={() => handleComplete(todo.id)}
      >
<CheckboxIcon className="icon" size="small"/>
      </IconButton>
    </ButtonGroup>
  );
}

export default ActionButtons;
