import { useEffect, useState } from "react";
import React from "react";
import ResponsiveAppBar from "../../layout/header";
import { getAllProducts } from "../../middleware/products";
import { v4 as uuidv4 } from "uuid";
import Cards from "../../components/cards";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function Home({ basketFav, setBasketFav, isLogin, setIsLogin }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <div>
      <ResponsiveAppBar isLogin={isLogin} setIsLogin={setIsLogin} />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {products &&
            products.map((prod) => {
              return (
                <Cards
                  key={uuidv4()}
                  products={prod}
                  basketFav={basketFav}
                  setBasketFav={setBasketFav}
                />
              );
            })}
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
