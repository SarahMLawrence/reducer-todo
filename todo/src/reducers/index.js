//*************************************//
//      STEP 1: initial State          //
//*************************************//

export const initialState = [
  
    {
      item: "Learn about the reducer pattern",
      completed: false,
      id: Date.now(),
      todoArray: [],
    },
  ];

//*************************************//
//      STEP 2: reducer                //
//*************************************//

export const itemReducer = (state, action) => {
  // switch (action.type) {
  //   case "ADD_TODO":
  //     return {
  //       tasks: [...state.tasks, { itemList: action.itemList, completed: false }]
  //     };
  //   case "TOGGLE_TODO":
  //     return {
  //       tasks: state.tasks.map((item, id) =>
  //         id === action.id ? { ...item, completed: !id.completed } : item
  //       )
  //     };

  //   //   case "CLEAR_TODO":
  //   // return todoList.filer((itemTodo) => itemTodo.completed);

  //   default:
  //     return state;
  // }

  switch (action.type) {
    case "ADD_TODO":
      const newTodoItem = {
        item: action.payload,
        completed: false,
        id: Date.now(),
      };
      return [...state, newTodoItem]

    case "TOGGLE_COMPLETED":
      return state.map(e =>
        e.id === action.id ? { ...e, completed: !e.completed } : e
      );



    case "TOGGLE_TODO":
      return state.filter(e => !e.completed);

    default:
      return state;
  }
}
