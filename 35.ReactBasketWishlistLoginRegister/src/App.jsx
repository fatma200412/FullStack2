import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts";
import Home from "./page/home";
import Basket from "./page/basket";
import Favorites from "./page/favorites";
import Login from "./page/login";
import Register from "./page/register";

function App() {
  const [basket, setBasket] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  localStorage.setItem("isLogin", JSON.stringify(isLogin));
  // setIsLogin(true);

  const [basketFav, setBasketFav] = useState({
    basket: [],
    favorites: [],
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Home
                  basketFav={basketFav}
                  setBasketFav={setBasketFav}
                  isLogin={isLogin}
                  setIsLogin={setIsLogin}
                />
              }
            />
            <Route
              path="basket"
              element={
                <Basket basketFav={basketFav} setBasketFav={setBasketFav} />
              }
            />
            <Route
              path="favorites"
              element={
                <Favorites basketFav={basketFav} setBasketFav={setBasketFav} />
              }
            />
            <Route
              path="login"
              element={
                <Login
                  basketFav={basketFav}
                  setBasketFav={setBasketFav}
                  isLogin={isLogin}
                  setIsLogin={setIsLogin}
                />
              }
            />
            <Route
              path="register"
              element={
                <Register basketFav={basketFav} setBasketFav={setBasketFav} />
              }
            />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
