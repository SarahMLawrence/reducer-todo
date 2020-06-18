import React from "react";

const Todo = (props) => {
  const toggleItem = (id) => {
    props.dispatch({ type: "TOGGLE_TODO", id });
  };

  return (
    <div className="todoList">
      {props.state.map((todo) => {
          console.log(todo);
        return (
          <div
            className={`todo${todo.completed ? " completed" : ""}`}
            onClick={() => toggleItem(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "",
            }}
            key={todo.id}
          >
            <p>{todo.item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
