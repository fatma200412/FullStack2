import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/slices/productsSlices";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import { Col, Row } from "antd";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Card } from "antd";
const { Meta } = Card;
function Products() {
  const name = useSelector((state) => state.product.name);
  const products = useSelector((state) => state.product.products);
  //   const products = useSelector((state) => state.product);
  // console.log(products.products)
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);

  const dispatch = useDispatch();
  console.log(products);

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // useEffect(() => {
  //   dispatch(getAllProducts());
  // }, [dispatch]);

  return (
    <>
      <h2>Products</h2>
      <button
        onClick={() => {
          dispatch(getAllProducts());
        }}
      >
        Get All Data
      </button>
      <br />
      {loading && (
        <>
          {/* <h1>yuklenir</h1> */}
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
          <Row>
            {arr.map((elem, i) => {
              return (
                <Col span={6} key={i}>
                  <div>
                    <Skeleton width="200px" height="300px" />
                    <Skeleton width="200px" />
                    <Skeleton width="200px" />
                  </div>
                </Col>
              );
            })}
          </Row>
        </>
      )}
      {error && "error"}
      <ul>
        <Row>
          {products &&
            products.map((elem, i) => {
              return (
                <Col span={6} key={i}>
                  <Card
                    hoverable
                    style={{
                      width: 240,
                    }}
                    cover={
                      <img
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      />
                    }
                  >
                    <Meta title={elem.name} description={elem.unitPrice} />
                  </Card>
                </Col>
              );
            })}
        </Row>
      </ul>
    </>
  );
}

export default Products;
