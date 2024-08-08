import React, { useState } from "react";

function Navbar() {
  const [name, setName] = useState("");
  console.log("navbar render olundu");

  return (
    <div>
      <h2>Navbar</h2>
      <button
        onClick={() => {
          setName("fatma");
        }}
      >
        Change name
      </button>
    </div>
  );
}

export default Navbar;
