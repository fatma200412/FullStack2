import React from "react";

function Wishlist() {
  let wishlistArr = JSON.parse(localStorage.getItem("wishlist"));
  return (
    <div>
      <h1>Wishlist</h1>
      <ul>
        {wishlistArr &&
          wishlistArr.map((elem, i) => {
            return <li key={i}>{elem.name}</li>;
          })}
      </ul>
    </div>
  );
}

export default Wishlist;
