import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./pages/CounterApp/Counter";
import Todo from "./pages/TodoApp/Todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Counter /> */}
      <Todo />
    </>
  );
}

export default App;
