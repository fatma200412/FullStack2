import React, { useState } from "react";
import Navbar from "./Navbar";

function Header() {
  const [name, setName] = useState("asdf");
  console.log("header render olundu");

  return (
    <div>
      <h3>Header</h3>
      <button
        onClick={() => {
          setName("fatma");
          console.log(name);
        }}
      >
        change name
      </button>{" "}
      <br />
      -----------------------
      <Navbar />
    </div>
  );
}

export default Header;
