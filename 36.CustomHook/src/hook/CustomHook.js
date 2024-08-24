import { useState } from "react";

export default function UseCounter(startCount) {
  let [counter, setCounter] = useState(startCount);

  function increment() {
    return setCounter(++counter);
  }

  function desrement() {
    return setCounter(--counter);
  }

  return {
    counter,
    increment,
    desrement,
  };
}
