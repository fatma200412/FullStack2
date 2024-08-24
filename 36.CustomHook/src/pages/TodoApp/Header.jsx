import React from "react";

function Header({ setValueState, valueState, todosArr, setTodosArr }) {
  console.log(todosArr);
  return (
    <div>
      <input
        type="text"
        value={valueState}
        onChange={(e) => {
          setValueState(e.target.value);
        }}
      />
      <button
        onClick={() => {
          //     todosArr.push(valueState);
          setTodosArr([...todosArr, valueState]);
          setValueState("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default Header;
