import React, {useReducer} from 'react';
import { initialState, todoReducer } from './reducers/reducer';
import { TodoForm }from './components/TodoForm';
import { TodoList }  from './components/TodoList';

function App(){
  const [ state, dispatch ] = useReducer(todoReducer, initialState);
  const addTodo = (input) => {
    const newTodo = {
      todo: input, 
      completed: false, 
      id: 1
    }
    dispatch({type: "ADD_TODO, payload: newTodo"})
  }

  const handleComplete = (id) => {
    dispatch({type: "COMPLETED_TODO", payload: id})
  }

  return (
    <div>
      <TodoList state={state} handleComplete={handleComplete}/>
      <TodoForm addTodo={addTodo} />
      
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
