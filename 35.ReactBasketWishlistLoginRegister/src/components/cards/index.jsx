import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { getUser, putUser } from "../../middleware/users";

function Cards({ products, basketFav, setBasketFav }) {
  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {products?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {products?.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={(e) => {
              console.log(e.currentTarget);
              setBasketFav({
                basket: [...basketFav?.basket, products],
                favorites: [...basketFav?.favorites],
              });

              getUser(14).then((res) => {
                let obj = res;
                console.log(res);

                obj.basket = basketFav.basket;

                console.log(obj);
                putUser(14, obj);
              });
            }}
          >
            Add to Basket
          </Button>
          <IconButton
            aria-label="delete"
            onClick={(e) => {
              console.log(e.currentTarget);
              if (
                basketFav?.favorites?.find((elem) => elem.id == products.id)
              ) {
                console.log("mehsul var");

                let arr = [...basketFav.favorites];
                //     console.log(arr);

                arr = basketFav.favorites?.filter(
                  (elem) => elem.id != products.id
                );
                setBasketFav({
                  basket: [...basketFav?.basket],
                  favorites: [...arr],
                });
              } else {
                setBasketFav({
                  basket: [...basketFav?.basket],
                  favorites: [...basketFav?.favorites, products],
                });
              }
            }}
          >
            <>
              {basketFav?.favorites?.find((elem) => elem.id == products.id) ? (
                <FavoriteIcon color="error" />
              ) : (
                <FavoriteBorderIcon color="error" />
              )}
            </>
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Cards;
