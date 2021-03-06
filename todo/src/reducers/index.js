//*************************************//
//      STEP 1: initial State          //
//*************************************//

export const initialState = {
  tasks: [
    {
      id: 1,
      item: "Learn about the reducer pattern",
      completed: false,
    },
    {
      id: 2,
      item: "Learn redux",
      completed: false,
    },
  ],
};

//*************************************//
//      STEP 2: reducer                //
//*************************************//

export const itemReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        id: Date.now(),
        item: action.payload,
        completed: false,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTodo],
      };

    case "TOGGLE_COMPLETED":
      const updateTodo = state.tasks.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
      return {
        ...state,
        tasks: updateTodo,
      }

      case "FILTER_TODO":
        const incompleteTodo = state.tasks.filter(todo => {
          if(todo.completed === false){
            return {...todo}
            
          }
        })
        return {
          ...state, 
          tasks: incompleteTodo
        }

    default:
      return state;
  }
};
