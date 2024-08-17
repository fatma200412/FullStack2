import React from "react";

function Login({ setIsLogin, setProducts }) {
  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={() => {
          setProducts(true);
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          setIsLogin(false);
        }}
      >
        Register
      </button>
    </div>
  );
}

export default Login;
