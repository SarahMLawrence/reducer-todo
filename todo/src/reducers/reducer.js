// EXPORT TWO THINGS: initialState , todoReducer

//=======================//
//  set up initialState  //
//=======================//
export const initialState = {
  item: "Learn to play guitar",
  completed: false,
  id: Date.now
};

//======================================================================//
//  REDUCER: takes an action and current state, returns the new state   //
//======================================================================//

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return state;

    default:
      return state;
  }
};
