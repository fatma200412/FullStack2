import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  getValue,
  decrementByAmount,
  reset,
} from "./redux/slices/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);

  const inpValue = useSelector((state) => state.counter.inputValue);

  const dispatch = useDispatch();

  // const [inpValue, setInpValue] = useState("");
  console.log(inpValue);

  return (
    <>
      <h1>Redux</h1>
      <div>
        <button
          onClick={() => {
            dispatch(incrementByAmount());
          }}
        >
          Inc amount
        </button>
        <input
          type="text"
          placeholder="ededi daxil edin"
          onChange={(e) => {
            // setInpValue(e.target.value);

            dispatch(getValue(e.target.value));
          }}
        />
        <button
          onClick={() => {
            dispatch(decrementByAmount());
          }}
        >
          Dec amount
        </button>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <br />
          <button
            onClick={() => {
              dispatch(reset());
            }}
          >
            reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
