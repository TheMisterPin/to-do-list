import React from "react";
import { v4 as uuidV4 } from "uuid";

const TextImput = ({ input, setInput, todos, setTodos}) => {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const AddTodo = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      { id: uuidV4(), text: input, completed: false, important: false },
    ]);
    setInput("");
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

    </form>
  );
};

export default TextImput;
