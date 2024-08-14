import React from "react";
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
import { Button, ButtonGroup, Input } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Tablex({ data, setData, name, setName, price, setPrice }) {
  const [elem, setElem] = useState({});
  const [elemName, setElemName] = useState("");
  const [elemPrice, setElemPrice] = useState(0);

  return (
    <div>
      <TableContainer>
        <Table variant="striped" colorScheme="blue">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>unitPrice</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((elem) => {
              return (
                <Tr key={uuidv4()}>
                  <Td>{elem.id}</Td>
                  <Td>{elem.name}</Td>
                  <Td>{elem.unitPrice}</Td>
                  <Td>
                    <Button
                      colorScheme="yellow"
                      data-id={elem.id}
                      onClick={(e) => {
                        console.log(e.target.getAttribute("data-id"));
                        console.log(
                          data.find(
                            (elem) =>
                              elem.id == e.target.getAttribute("data-id")
                          )
                        );

                        setElem(
                          data.find(
                            (elem) =>
                              elem.id == e.target.getAttribute("data-id")
                          )
                        );

                        setElemName(
                          data.find(
                            (elem) =>
                              elem.id == e.target.getAttribute("data-id")
                          ).name
                        );
                        setElemPrice(
                          data.find(
                            (elem) =>
                              elem.id == e.target.getAttribute("data-id")
                          ).unitPrice
                        );
                      }}
                    >
                      Edit
                    </Button>
                  </Td>
                  <Td>
                    <Button
                      colorScheme="red"
                      data-id={elem.id}
                      onClick={(e) => {
                        // console.log(e.target.getAttribute("data-id"));
                        let arr = [...data];
                        arr = arr.filter(
                          (elem) => elem.id != e.target.getAttribute("data-id")
                        );
                        setData(arr);

                        axios.delete(
                          "https://northwind.vercel.app/api/products/" +
                            e.target.getAttribute("data-id")
                        );
                      }}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>

      <h1>Edit section</h1>

      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          // console.log("fgh");
        }}
      >
        <label htmlFor="">Name</label>
        <Input
          placeholder="Basic usage"
          value={elemName}
          onChange={(e) => {
            setElemName(e.target.value);
          }}
        />
        <label htmlFor="">price</label>
        <Input
          placeholder="Basic usage"
          value={elemPrice}
          onChange={(e) => {
            setElemPrice(e.target.value);
          }}
        />
        <Button
          colorScheme="green"
          type="submit"
          onClick={() => {
            let obj = {
              name: elemName,
              unitPrice: elemPrice,
            };

            axios
              .patch(
                "https://northwind.vercel.app/api/products/" + elem.id,
                obj
              )
              .then((res) => {
                let arr = [...data];

                let index;
                let findElem = arr.find((elem) => elem.id == res.data.id);

                console.log(data);
                data.forEach((elem, i) => {
                  if (elem.id == findElem.id) {
                    console.log("elementin id-si", i);

                    index = i;
                  }
                });

                // console.log(data[index]);

                data[index] = res.data;

                setData([...data]);
              });
          }}
        >
          Edit
        </Button>
      </form>
    </div>
  );
}

export default Tablex;
