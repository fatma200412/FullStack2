// eslint-disable-next-line no-unused-vars
import React from "react";
import "./button.css";

function Button() {
  function salamlama() {
    console.log("salam");
  }

  return (
    <>
      <button className="btn" onClick={salamlama}>
        salam
      </button>
    </>
  );
}

export default Button;
