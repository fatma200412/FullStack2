import React, { useCallback, useMemo, useReducer, useState } from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

function reducer(state, action) {
  switch (action.type) {
    case "setTodo":
      return {
        ...state,
        todo: action.todo,
      };
      break;

    case "addTodo":
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
      break;
    case "getSearch":
      return {
        ...state,
        search: action.search,
      };
      break;

    default:
      break;
  }
}

function TodoApp() {
  console.log("todo app render olunur");
  let [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    todo: "",
    todos: [],
    search: "",
  });

  const setTodo = useCallback((e) => {
    dispatch({
      todo: e.target.value,
      type: "setTodo",
    });
  }, []);

  const addTodo = useCallback(() => {
    dispatch({
      todo: state.todo,
      type: "addTodo",
    });
  }, [state.todo]);

  const getSearch = useCallback((e) => {
    dispatch({
      search: e.target.value,
      type: "getSearch",
    });
  }, []);

  let dataFiltered = useMemo(
    () =>  state.todos.filter((elem) => elem.includes(state.search)),
    [state.todos, state.search]
  );

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(++count);
        }}
      >
        Inc
      </button>
      <h1>Todo App</h1>
      <AddTodo setTodo={setTodo} addTodo={addTodo} getSearch={getSearch} />
      <hr />
      <Todos setTodo={setTodo} todos={dataFiltered} />
    </>
  );
}

export default TodoApp;
