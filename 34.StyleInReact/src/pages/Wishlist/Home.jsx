import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Products from "./Products";

function Home() {
  const [isLogin, setIsLogin] = useState(true);

  const [products, setProducts] = useState(false);

  return (
    <>
      {isLogin ? (
        <>
          {" "}
          {products ? (
            ""
          ) : (
            <Login setIsLogin={setIsLogin} setProducts={setProducts} />
          )}{" "}
        </>
      ) : (
        <Register setIsLogin={setIsLogin} />
      )}
      {products ? <Products setProducts={setProducts} /> : null}
    </>
  );
}

export default Home;
