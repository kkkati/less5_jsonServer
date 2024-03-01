export const findTodoAction =
  (findTodo, setFindTodo, setIdFoundTodo) => (dispatch) =>
    fetch("http://localhost:3005/todos")
      .then((loadedData) => loadedData.json())
      .then((loadedTodos) => {
        loadedTodos.forEach((element) => {
          if (element.title.toLowerCase().includes(findTodo)) {
            setIdFoundTodo(element.id);
            return element.id;
          }
        });
      })
      .finally(() => {
        setFindTodo("Введите фрагмент задачи");
      });
