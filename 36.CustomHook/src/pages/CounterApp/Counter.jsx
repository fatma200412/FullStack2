import React from "react";
import UseCounter from "../../hook/CustomHook";
import useBattery from "../../hook/useBattery";

function Counter() {
  // const [state, setstate] = useState();
  //   console.log(UseCounter());

  let { counter, increment, desrement } = UseCounter(10);

  let { level, charging } = useBattery();

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={increment}>Increment</button>
      <h5>{counter}</h5>
      <button onClick={desrement}>Decrement</button>
      <br /> <br />
      <hr />
      <h1>Battert % - {level}</h1>
      <h1>{charging ? "sarj olunur" : "sarj olunmur"}</h1>
    </div>
  );
}

export default Counter;
