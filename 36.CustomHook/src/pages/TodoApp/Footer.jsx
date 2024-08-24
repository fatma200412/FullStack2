import React from "react";

function Footer({ todosArr }) {
  return (
    <div>
      <ul>
        {todosArr &&
          todosArr.map((elem, i) => {
            return <li key={i}>{elem}</li>;
          })}
      </ul>
    </div>
  );
}

export default Footer;
