import React, { useEffect, useState } from "react";
import Header from "./Header";

function Mount() {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     console.log("Mount render olunur");
  //   });
  return (
    <>
      <h1>Mount</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <h5>{count}</h5>
      ..........................
      {count < 5 ? <Header /> : null}
    </>
  );
}

export default Mount;
