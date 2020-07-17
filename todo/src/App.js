import React, { useReducer, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { itemReducer, initialState } from "./reducers/index";
import './App.css';

function App() {
  const [state, dispatch] = useReducer(itemReducer, initialState);
  console.log('initialState', state);

  const addTask = newTask => {
    dispatch({
      type: 'ADD_TODO',
      payload: newTask
    });
  }

  const toggleTask = id => {
    dispatch({
      type: 'TOGGLE_COMPLETED',
      payload: id
    });
  }

  const filterTasks = () => {
    dispatch({
      type: 'FILTER_TODO'
    })
  }
  return (
    <div className="App">
      <header>
        <h1>Sarah's Todo List </h1>
      </header>
      <TodoForm 
      addTask={addTask}
      filterTasks={filterTasks}
      />
      <TodoList
      tasks = {state.tasks}
      toggleTask={toggleTask}/>
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
