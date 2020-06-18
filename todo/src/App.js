import React, { useReducer, useState } from "react";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div>
      <TodoForm />
    </div>
  )

}
export default App;
//=======================================================================================================//
//  NOTES:                                                                                               //
//  Predictability: do away with side-effects                                                            //
//  MUTATION TRACKING: Provide the ability to see all changes to our app over time                       //
//  REDUX & IMMUTABILITY: Large apps                                                                     //
//=======================================================================================================//
