import React from "react";
import ResponsiveAppBar from "../../layout/header";
import Cards from "../../components/cards";
import { v4 as uuidv4 } from "uuid";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function Favorites({ basketFav, setBasketFav }) {
  console.log(basketFav);
  return (
    <div>
      <ResponsiveAppBar />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {basketFav &&
            basketFav?.favorites?.map((prod) => {
              return <Cards key={uuidv4()} products={prod} />;
            })}
        </Grid>
      </Container>
    </div>
  );
}

export default Favorites;
