import React, { memo } from "react";
import TodoItem from "./TodoItem";

function Todos({ todos }) {
  console.log("todos render olunur");
  return (
    <>
      <h3>Todos</h3>
      <ul>
        {todos &&
          todos.map((elem, i) => {
            return <TodoItem key={i} elem={elem} />;
          })}
      </ul>
    </>
  );
}

export default memo(Todos);
