import React, { useState } from "react";

function Mode() {
  const [mode, setMode] = useState(false);

  function changeMode(e) {
    setMode(!mode);
    //     console.log(mode);
    if (!mode) {
      e.target.classList.replace("light", "dark");
      document.body.style.backgroundColor = "black";
    } else {
      e.target.classList.replace("dark", "light");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <div>
      <h2> {mode ? "Light" : "Dark"} Mode</h2>
      <button className="light" onClick={(e) => changeMode(e)}>
        change mode
      </button>
    </div>
  );
}

export default Mode;
