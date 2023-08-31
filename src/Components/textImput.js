import { Input } from "antd";
import React from "react";
import { v4 as uuidV4 } from "uuid";
import { ReactComponent as AddIcon } from "../media/icons/addIcon.svg";
import IconButton from "@mui/material/IconButton";

const TextImput = ({
  input,
  setInput,
  todos,
  setTodos,
  setStatus,
  setCount,
  count,
}) => {
  const onInputChange = (event) => {
    setInput(event.target.value);
    setCount(event.target.value.length);
  };

  const AddTodo = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        id: uuidV4(),
        text: input,
        completed: false,
        important: false,
        count: { count },
      },
    ]);

    setInput("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  const { TextArea } = Input;

  return (
    <>
      <div className="form-container paper blue">
        <div className="title-tape" />
        <h1>New Todo</h1>
        <TextArea
          showCount
          onPressEnter={AddTodo}
          minLength={2}
          maxLength={100}
          style={{ height: 120 }}
          placeholder="Do Me Next"
          type="text"
          className="todo-input"
          value={input}
          onChange={onInputChange}
        />
        <IconButton aria-label="add" type="submit" onClick={AddTodo}>
          <AddIcon className="icon" style={{ height: 100, width: 100 }} />
        </IconButton>
      </div>

      <div className="filter-container">
        <div className="select">
          <select name="todos" className="filter-todo" onChange={statusHandler}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
            <option value="important">Important</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default TextImput;
