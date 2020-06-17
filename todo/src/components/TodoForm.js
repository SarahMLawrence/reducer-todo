import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers";

const TodoForm = () => {
  return (
    <div className="todo-form">
      <div className="header">
        <h2>SARAH'S TODO LIST</h2>
        <input className="todo-input" type="text" name="newTodoItem" />
        <button>Add To Todo</button>
      </div>
    </div>
  );
};
export default TodoForm;
