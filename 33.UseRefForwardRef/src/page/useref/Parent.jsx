import React, { forwardRef, useRef } from "react";

const Parent = forwardRef(function Parent(props, refs) {
  console.log(refs);
  console.log(name);

  return (
    <>
      <h1>Parent</h1>
      <input type="text" ref={refs} />
    </>
  );
});

export default Parent;
