import React  from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, setTodos, filteredTodos}) => {
  return (

      <ul className="todo-list" >
        {filteredTodos.map((todo) => (
          <ToDoItem
            todo={todo}
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            text={todo.text}
            
          />
        ))}
      </ul>

  );
};

export default ToDoList;
