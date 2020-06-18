// import React from "react";

// const Todo = (props) => {
//   const toggleItem = (id) => {
//     props.dispatch({ type: "TOGGLE_TODO", id });
//   };

//   return (
//     <div className="todoList">
//       {props.state.map((todo) => {
//           console.log(todo);
//         return (
//           <div
//             className={`todo${todo.completed ? " completed" : ""}`}
//             onClick={() => toggleItem(todo.id)}
//             style={{
//               textDecoration: todo.completed ? "line-through" : "",
//             }}
//             key={todo.id}
//           >
//             <p>{todo.item}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Todo;

import React from 'react';
import "./Todo.css";

const Todo = props => {
  return (
    <div key={props.id} onClick={() => props.toggleTask(props.id)} style={{
            textDecoration: props.id.completed ? "line-through" : "",
          }}>

      <h3 id="todoItem">
        {props.name ? <i className="far fa-check-circle"></i> : <i className="far fa-check-circle" 
            ></i>}
        {props.name}
      </h3>
      {/* <p>{props.status ? "Completed" : "Incomplete"}</p> */}

    </div>


  )

}

export default Todo;