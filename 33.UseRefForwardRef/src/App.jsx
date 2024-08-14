import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Parent from "./page/useref/Parent";

function App() {
  const input = useRef();

  const h1 = useRef();

  const refs = useRef(null);

  return (
    <>
      <input type="text" ref={input} />
      <button
        onClick={(e) => {
          // console.log(input.current.value);
          console.log(refs.current.focus());
          // console.log((h1.current.innerHTML = "salam"));
        }}
      >
        Click Me
      </button>
      <h1 ref={h1}></h1>
      <div>------------------------</div>
      <Parent ref={refs} name="fatma" />
    </>
  );
}

export default App;
