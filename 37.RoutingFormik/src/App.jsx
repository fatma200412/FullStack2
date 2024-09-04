import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import NoPage from "./pages/nopage";
import Navbar from "./components/Navbar";
import Detail from "./pages/detail";
import AddProduct from "./pages/addProduct/indexCustom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routes } from "./routers/router";
import { UserAuth } from "./context/UserAuth";

const router = createBrowserRouter(routes);

function App() {
  let name = "fatma";
  let surname = "guliyeva";
  const [isLoginUser, setLoginUser] = useState(false);

  const data = [name, surname, isLoginUser, setLoginUser];

  return (
    <>
      <UserAuth.Provider value={data}>
        <RouterProvider router={router} />
      </UserAuth.Provider>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home />} />

          <Route path="product">
            <Route index element={<Products />} />
            <Route path=":id" element={<Detail />} />
            <Route path="add" element={<AddProduct />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
