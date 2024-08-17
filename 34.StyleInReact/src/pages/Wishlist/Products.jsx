import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import axios from "axios";
import { StarIcon } from "@chakra-ui/icons";
import Wishlist from "./Wishlist";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";

function Products({ setProducts }) {
  const [data, setData] = useState([]);

  const [move, setMove] = useState(true);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    axios("https://northwind.vercel.app/api/products/").then((res) => [
      setData(res.data),
      setSearchData(res.data),
    ]);
  }, []);

  console.log(searchData);
  let wishlistArr = [];

  return (
    <>
      <h1>Products</h1>
      <button
        onClick={() => {
          setProducts(false);
        }}
      >
        Exit
      </button>

      <Wishlist />

      <InputGroup>
        <InputLeftAddon>+234</InputLeftAddon>
        <Input
          type="text"
          placeholder="phone number"
          //     value={searchData}
          onChange={(e) => {
            let arr = data;
            arr = searchData.filter((elem) =>
              elem.name.toLowerCase().includes(e.target.value.toLowerCase())
            );
            console.log(arr);

            setData(arr);
          }}
        />
      </InputGroup>

      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Btn</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.map((elem, i) => {
                return (
                  <Tr key={i}>
                    <Td>{elem.id}</Td>
                    <Td>{elem.name}</Td>
                    <Td>
                      <button
                        data-id={elem.id}
                        onClick={(e) => {
                          wishlistArr = [
                            ...JSON.parse(localStorage.getItem("wishlist")),
                          ];

                          console.log(e.target.getAttribute("data-id"));

                          let element = "";

                          element = data.find(
                            (elem) =>
                              elem.id == e.target.getAttribute("data-id")
                          );
                          console.log(element);

                          wishlistArr.push(element);

                          localStorage.setItem(
                            "wishlist",
                            JSON.stringify(wishlistArr)
                          );

                          setMove(!move);
                        }}
                      >
                        asd <StarIcon color="red.500" />
                      </button>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Products;
