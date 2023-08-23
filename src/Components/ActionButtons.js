import React from "react";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import StarIcon from "@mui/icons-material/Star";
import DoneIcon from "@mui/icons-material/Done";

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
        className="delete btn"
        aria-label="delete"
        onClick={() => handleDelete(todo.id)}
      >
        <DeleteIcon fontSize="medium" />
      </IconButton>
      <IconButton
        className="important btn"
        aria-label="important"
        onClick={() => handleImportant(todo.id)}
      >
        <StarIcon fontSize="medium" />
      </IconButton>
      <IconButton
        className="done btn"
        aria-label="done"
        onClick={() => handleComplete(todo.id)}
      >
        <DoneIcon fontSize="medium" />
      </IconButton>
    </ButtonGroup>
  );
}

export default ActionButtons;
