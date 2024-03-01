export const deleteTodo =
  (idDeleteTodo, isNewTodo, setIdDeleteTodo, setIsNewTodo) => (dispatch) =>
    fetch(`http://localhost:3005/todos/${idDeleteTodo}`, {
      method: "DELETE",
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        console.log("Задача удалена:", response);
      })
      .finally(() => {
        setIsNewTodo(!isNewTodo);
        setIdDeleteTodo("Введите id задачи");
      });
