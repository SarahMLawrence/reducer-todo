import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from '.../components/TodoForm.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <TodoForm />
      </header>
    </div>
  );
}

export default App;


//=======================================================================================================//
//  NOTES:                                                                                               //
//  Predictability: do away with side-effects                                                            //
//  MUTATION TRACKING: Provide the ability to see all changes to our app over time                       //
//  REDUX & IMMUTABILITY: Large apps                                                                     //
//=======================================================================================================//
