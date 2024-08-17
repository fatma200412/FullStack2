import React, { useState } from "react";
import "./Header.css";
import Child from "./Child";
import Buttonx from "./Buttonx";
import Footer from "./Footer";
import AntComp from "./AntComp";
import { Outlet, Link } from "react-router-dom";

function Header() {
  const check = true;

  const [state, setstate] = useState(true);

  return (
    <>
      <h1>Header</h1>
      {/* 
      <button
        style={
          state ? { backgroundColor: "red" } : { backgroundColor: "yellow" }
        }
        onClick={() => {
          setstate((state) => !state);
        }}
      >
        Add
      </button>

      <button className={state ? "btn" : null} onClick={() => setstate(!state)}>
        Delete
      </button>

      <Child />
      <Buttonx />
      <Footer /> */}
      {/* <AntComp /> */}
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Child</Link>
            </li>
            <li>
              <Link to="/contact">And Companent</Link>
            </li>
          </ul>
        </nav>

        <Outlet />
      </>
    </>
  );
}

export default Header;
