export const initialIsLoadingState = false;

export const isLoadingReducer = (state = initialIsLoadingState, action) => {
  switch (action.type) {
    case "SET_IS_LOADING": {
      return action.payload;
    }
    default:
      return state;
  }
};
