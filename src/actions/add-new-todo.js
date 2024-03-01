export const addNewTodo =
  (newTodo, isNewTodo, setNewTodo, setIsNewTodo) => (dispatch) =>
    fetch("http://localhost:3005/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        title: newTodo,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        console.log("Добавлена задача:", response);
      })
      .finally(() => {
        setIsNewTodo(!isNewTodo);
        setNewTodo("Новая задача");
      });
