import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodos, selectIsLoading } from "./selectors";
import styles from "./app.module.css";
import {
  getTodos,
  addNewTodo,
  updateTodo,
  deleteTodo,
  findTodoAction,
} from "./actions";

const App = () => {
  const todos = useSelector(selectTodos);
  const isLoading = useSelector(selectIsLoading);

  const [isSort, setIsSort] = useState(false);
  const [isNewTodo, setIsNewTodo] = useState(false);
  const [newTodo, setNewTodo] = useState("Новая задача");
  const [findTodo, setFindTodo] = useState("Введите фрагмент задачи");
  const [idUpdateTodo, setIdUpdateTodo] = useState("Введите id задачи");
  const [idDeleteTodo, setIdDeleteTodo] = useState("Введите id задачи");
  const [idFoundTodo, setIdFoundTodo] = useState("");

  const todosSort = isSort
    ? todos.sort((a, b) => {
        return a.title > b.title ? 1 : -1;
      })
    : todos;

  const dispatch = useDispatch();
  console.log(todos);

  //получаем задачи
  useEffect(() => {
    dispatch(getTodos());
  }, [isNewTodo, dispatch]);

  //добавляем новую задачу
  const onSubmitAddTodo = (event) => {
    event.preventDefault();
    dispatch(addNewTodo(newTodo, isNewTodo, setNewTodo, setIsNewTodo));
  };

  //обновляем задачу
  const onSubmitUpdateTodo = (event) => {
    event.preventDefault();
    dispatch(
      updateTodo(idUpdateTodo, isNewTodo, setIdUpdateTodo, setIsNewTodo)
    );
  };

  //удаляем задачу
  const onSubmitDeleteTodo = (event) => {
    event.preventDefault();
    dispatch(
      deleteTodo(idDeleteTodo, isNewTodo, setIdDeleteTodo, setIsNewTodo)
    );
  };

  //сортируем задачи
  const onClickSortTodos = () => {
    dispatch(setIsSort(!isSort));
  };

  //поиск по фразе
  const onSubmitFindTodo = (event) => {
    dispatch(findTodoAction(findTodo, setFindTodo, setIdFoundTodo));
  };

  //обработчики
  const onChangeNewTodo = ({ target }) => {
    setNewTodo(target.value);
  };

  const onChangeIdUpdateTodo = ({ target }) => {
    setIdUpdateTodo(target.value);
  };

  const onChangeIdDeleteTodo = ({ target }) => {
    setIdDeleteTodo(target.value);
  };

  const onChangeFindTodo = ({ target }) => {
    setFindTodo(target.value);
  };

  return (
    <div className={styles.app}>
      <div className={styles.tools}>
        <form onSubmit={onSubmitAddTodo}>
          <input
            className={styles.input}
            type="text"
            name="newTodo"
            value={newTodo}
            onChange={onChangeNewTodo}
          ></input>
          <button className={styles.button} type="submit">
            Добавить задачу
          </button>
        </form>
        <form onSubmit={onSubmitUpdateTodo}>
          <input
            className={styles.input}
            type="text"
            name="idUpdateTodo"
            value={idUpdateTodo}
            onChange={onChangeIdUpdateTodo}
          ></input>
          <button className={styles.button} type="submit">
            Задача выполнена
          </button>
        </form>
        <form onSubmit={onSubmitDeleteTodo}>
          <input
            className={styles.input}
            type="text"
            name="idDeleteTodo"
            value={idDeleteTodo}
            onChange={onChangeIdDeleteTodo}
          ></input>
          <button className={styles.button} type="submit">
            Удалить задачу
          </button>
        </form>
        <form onSubmit={onSubmitFindTodo}>
          <input
            className={styles.input}
            type="text"
            name="findTodo"
            value={findTodo}
            onChange={onChangeFindTodo}
          ></input>
          <input
            className={styles.input}
            type="text"
            name="foundTodo"
            value={"Id задачи:" + idFoundTodo}
          ></input>
          <button className={styles.button} type="submit">
            Найти задачу
          </button>
        </form>
        <button className={styles.button} onClick={onClickSortTodos}>
          Сортировать
        </button>
      </div>

      <div className={styles.todosContainer}>
        {isLoading ? (
          <div className={styles.loader}></div>
        ) : (
          todosSort.map(({ id, title, completed }) => (
            <li className={styles.todos} key={id}>
              {completed}
              {title}. Id:
              {id}
            </li>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
