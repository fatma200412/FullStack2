import React from "react";

function TodoItem({ elem }) {
  console.log("todo=>", elem);
  return (
    <>
      <li>{elem}</li>
    </>
  );
}

export default TodoItem;
