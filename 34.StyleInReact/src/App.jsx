import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./pages/styleInReact/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buttonx from "./pages/styleInReact/Buttonx";
import Child from "./pages/styleInReact/Child";
import AntComp from "./pages/styleInReact/AntComp";
import Footer from "./pages/styleInReact/Footer";
import Home from "./pages/Wishlist/Home";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ChakraProvider>
        <Home />
      </ChakraProvider>

      {/* <Header /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Buttonx />} />
            <Route path="blogs" element={<Child />} />
            <Route path="contact" element={<AntComp />} />
            <Route path="*" element={<Footer />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
