import { Input } from "antd";
import React from "react";
import { v4 as uuidV4 } from "uuid";
import { ReactComponent as AddIcon} from "../media/icons/addIcon.svg"
import IconButton from "@mui/material/IconButton";



const {TextArea} = Input
const TextImput = ({ input, setInput, todos, setTodos, setStatus, setCount,count }) => {
  const onInputChange = (event) => {
  
    setInput(event.target.value);
    setCount(event.target.showCount);
  
  };
  const AddTodo = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      { id: uuidV4(), text: input, completed: false, important: false },
    ]);
    setInput("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <>
    <div className="form-container">
      <TextArea
        showCount
        onPressEnter={AddTodo}
        minLength={2}
        maxLength={100}
        style={{ height: 120, marginBottom: 24 }}
        placeholder="Do Me Next"
        type="text"
        className="todo-input"
        value={input}
        onChange={onInputChange}/>
     <IconButton
      size="small"
        className="add btn"
        aria-label="add"
        type="submit"onClick={AddTodo}
      >
        <AddIcon className="icon" size="small"/>
      </IconButton></div>

      <div className="filter-container">
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
          <option value="important">Important</option>
        </select>
      </div></div></>
    
  );
};

export default TextImput;
