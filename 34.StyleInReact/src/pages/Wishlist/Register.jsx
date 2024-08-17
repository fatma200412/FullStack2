import React from "react";

function Register({ setIsLogin }) {
  return (
    <div>
      <h1>Register</h1>
      <button
        onClick={() => {
          setIsLogin(true);
        }}
      >
        Save
      </button>
    </div>
  );
}

export default Register;
