import React from "react";
import ResponsiveAppBar from "../../layout/header";
import Cards from "../../components/cards";
import { v4 as uuidv4 } from "uuid";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

function Basket({ basketFav, setBasketFav }) {
  const navigate = useNavigate();

  return (
    <div>
      <ResponsiveAppBar />
      <button
        onClick={() => {
          console.log("fghj");
          let check = JSON.parse(localStorage.getItem("isLogin"));
          console.log(check);

          if (check) {
            console.log("odenis olundu");
          } else {
            navigate("/login");
          }
        }}
      >
        CheckOut
      </button>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {basketFav &&
            basketFav?.basket?.map((prod) => {
              return <Cards key={uuidv4()} products={prod} />;
            })}
        </Grid>
      </Container>
    </div>
  );
}

export default Basket;
