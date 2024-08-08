import React from "react";

function Footer({ name, age }) {
  console.log(name, age);
  return (
    <>
      <h4>This is footer</h4>
      <p>
        {name} {age}
      </p>
    </>
  );
}

export default Footer;
