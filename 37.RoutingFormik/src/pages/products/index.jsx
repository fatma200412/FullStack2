import axios from "axios";
import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

function Products() {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios("https://northwind.vercel.app/api/products/").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <div>
        <button
          onClick={() => {
            navigate(1);
          }}
        >
          next
        </button>
        <ul>
          {data &&
            data.map((elem, i) => {
              return (
                <li key={i}>
                  {elem.name}{" "}
                  <button>
                    <Link to={"/product/" + elem.id}>Detail</Link>
                  </button>{" "}
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}

export default Products;
