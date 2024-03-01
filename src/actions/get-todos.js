export const getTodos = () => (dispatch) =>
  fetch("http://localhost:3005/todos")
    .then((loadedData) => loadedData.json())
    .then((loadedTodos) => {
      dispatch({ type: "GET_TODOS", payload: loadedTodos });
    })
    .finally(() =>
      // setIsLoading(false)
      dispatch({ type: "SET_IS_LOADING", payload: false })
    );
