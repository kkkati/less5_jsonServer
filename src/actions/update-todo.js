export const updateTodo =
  (idUpdateTodo, isNewTodo, setIdUpdateTodo, setIsNewTodo) => (dispatch) =>
    fetch(`http://localhost:3005/todos/${idUpdateTodo}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        completed: "Выполнено: ",
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        console.log("Задача обновлена:", response);
      })
      .finally(() => {
        console.log("Добавлена задача:");
        setIsNewTodo(!isNewTodo);
        setIdUpdateTodo("Введите id задачи");
      });
