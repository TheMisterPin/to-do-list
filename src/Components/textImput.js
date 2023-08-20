import React from "react";
import { v4 as uuidV4 } from "uuid";

const TextImput = ({ input, setInput, todos, setTodos }) => {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const onAddTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: uuidV4(), title: input, completed: false }]);
    setInput("");
  };
  return (
    <form onSubmit={onAddTodo}>
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
    </form>
  );
};

export default TextImput;
