import React, { memo } from "react";

function AddTodo({ setTodo, addTodo, getSearch }) {
  console.log("add todo render olunur");
  return (
    <>
      <input type="text" placeholder="search" onChange={getSearch} />
      <h3>Add To do</h3>
      <input type="text" onChange={setTodo} />
      <button onClick={addTodo}>Add</button>
    </>
  );
}

export default memo(AddTodo);
