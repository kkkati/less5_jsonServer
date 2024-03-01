export const initialTodosState = [];

export const todosReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case "GET_TODOS": {
      return [...action.payload];
    }
    default:
      return state;
  }
};
