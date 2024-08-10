import React, { useEffect, useState } from "react";

function Header() {
  const [headercount, setheaderCount] = useState(0);

  useEffect(() => {
    console.log("Header componenti yarandi");

    return () => {
      console.log("Header comp9onenti silindi");
    };
  }, []);

  useEffect(() => {
    console.log("Header render olunur");
  });

  useEffect(() => {
    //     console.log("Header render olunur");
    console.log("Header componenti state esasen render olunur");
  }, [headercount]);

  return (
    <>
      <h4>Header</h4>
      <button
        onClick={() => {
          setheaderCount(headercount + 1);
        }}
      >
        Increase
      </button>
      <h5>{headercount}</h5>
    </>
  );
}

export default Header;
