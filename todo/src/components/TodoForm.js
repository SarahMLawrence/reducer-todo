import React, { useReducer, useState } from "react";

import { initialState, itemReducer } from "../reducers/index";
import Todo from "../components/Todo";

const TodoForm = () => {
  const [state, dispatch] = useReducer(itemReducer, initialState);
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch({ type: "TOGGLE_TODO", payload: todo });
  };
  return (
    <div className="todo-form">
      <form>
        <input
          name="todo"
          type="text"
          value={todo}
          onChange={handleChange}
        ></input>
        <button className="addBTN" onClick={handleSubmit}>
          ADD NEW ITEM TO LIST
        </button>
        <button className="clearBTN" onClick={handleRemove}>
          Delete
        </button>
      </form>
      <Todo id={state.id} todo={todo} dispatch={dispatch} state={state} />
    </div>
  );
};

export default TodoForm;
