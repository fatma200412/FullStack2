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
import axios from "axios";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

function Tablex({ data, setData, name, setName, price, setPrice }) {
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
    </div>
  );
}

export default Tablex;
