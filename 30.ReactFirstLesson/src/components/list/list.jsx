// eslint-disable-next-line no-unused-vars
import React from "react";
import "./list.scss";

function List() {
  let students = ["Cavid", "Elmira", "Elton", "Gulay", "Qezenfer"];

  return (
    <div className="listDiv">
      <h1>Students List</h1>
      <ul>
        {students.map((elem, i) => {
          return <li key={i}>{elem}</li>;
        })}
      </ul>
    </div>
  );
}

export default List;
