import React, { useReducer, useState } from "react";
import reducer from "./reducers";
import Header from "./Header";
import Footer from "./Footer";

function Todo() {
  const [state, dispatch] = useReducer(reducer, {
    value: "",
    todos: [],
  });

  //   state vasitesile

  const [valueState, setValueState] = useState("");
  const [todosArr, setTodosArr] = useState([]);

  return (
    <>
      <h1>To do App reducer</h1>
      <input
        type="text"
        value={state.value}
        onChange={(e) => {
          dispatch({
            value: e.target.value,
            type: "setValue",
          });
        }}
      />
      <button
        onClick={() => {
          dispatch({
            value: state.value,
            type: "addTodo",
          });
        }}
      >
        Add
      </button>
      <div>
        <ul>
          {state.todos &&
            state.todos.map((elem, i) => {
              return <li key={i}>{elem}</li>;
            })}
        </ul>
      </div>

      <h1>State Todo</h1>

      <Header setValueState={setValueState} valueState={valueState} todosArr={todosArr} setTodosArr={setTodosArr}/>
      <Footer valueState={valueState} todosArr={todosArr} />
    </>
  );
}

export default Todo;
