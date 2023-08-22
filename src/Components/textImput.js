import React from "react";
import { v4 as uuidV4 } from "uuid";

const TextImput = ({ input, setInput, todos, setTodos, setStatus}) => {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const AddTodo = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      { id: uuidV4(), text: input, completed: false, important: false,},
    ]);
    setInput("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
    console.log(e.target.value);
  };
  return (
    <form onSubmit={AddTodo}>
      <input
        type="text"
        placeholder="Do me Next"
        className="todo-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="add-button" type="submit">
        To List!
      </button>
      <div className="select">
      <select name="todos" className="filter-todo" onChange={statusHandler}>
  <option value="all">All</option>
  <option value="completed">Completed</option>
  <option value="incomplete">Incomplete</option>
  <option value="important">Important</option>

</select>
      </div>
    </form>
  );
};

export default TextImput;
