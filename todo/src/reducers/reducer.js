// EXPORT TWO THINGS: initialState , todoReducer

//=======================//
//  set up initialState  //
//=======================//
export const initialState = {
  todoList: [
    {
      todo: '',
      completed: false, 
      id: Date.now
    }
  ]
};

//======================================================================//
//  REDUCER: takes an action and current state, returns the new state   //
//======================================================================//

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state, 
        action.payload
      ]

    case "COMPLETED_TODO":
      return state.map((item) => {
        return item.id === action.payload ?
        {...item, completed: !item.completed} : 
        item
      })

    default:
      return state;
  }
};
