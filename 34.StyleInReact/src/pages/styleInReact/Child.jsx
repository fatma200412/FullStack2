import React from "react";
import style from "./Child.module.css";

function Child() {
  console.log(style);
  return (
    <div>
      <h3>Child</h3>
      <button className={style.btn}>Child-1</button>
    </div>
  );
}

export default Child;
