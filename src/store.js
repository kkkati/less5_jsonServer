import { createStore, applyMiddleware, compose, combineReducers } from "redux";
// import { appReducer } from "./reducer";
import { thunk } from "redux-thunk";
import { todosReducer, isLoadingReducer } from "./reducers/index";

const reducer = combineReducers({
  todosState: todosReducer,
  isLoadingState: isLoadingReducer,
});

// export const initialState = {
//   todos: [],
//   isLoading: false,
//   // isNewTodo: false,
//   // isSort: false,
// };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  // initialState,
  composeEnhancers(applyMiddleware(thunk))
);
