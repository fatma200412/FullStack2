import React from "react";
import Navbar from "../../../layout/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../../layout/Footer";

function UserRoot() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default UserRoot;
