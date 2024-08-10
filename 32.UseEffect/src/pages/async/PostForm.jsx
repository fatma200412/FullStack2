import React from "react";
import { Button, ButtonGroup, Input } from "@chakra-ui/react";
import axios from "axios";

function PostForm({ data, setData, name, setName, price, setPrice }) {
  return (
    <div>
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
          value={name}
          onChange={(e) => {
            console.log(e.target.value);
            setName(e.target.value);
          }}
        />
        <label htmlFor="">price</label>
        <Input
          placeholder="Basic usage"
          value={price}
          onChange={(e) => {
            console.log(e.target.value);
            setPrice(e.target.value);
          }}
        />
        <Button
          colorScheme="green"
          type="submit"
          onClick={() => {
            let obj = {
              name: name,
              unitPrice: price,
            };

            axios
              .post("https://northwind.vercel.app/api/products/", obj)
              .then((res) => {
                setData([...data, res.data]);
              });
            setName("");
            setPrice(0);
          }}
        >
          Post
        </Button>
      </form>
    </div>
  );
}

export default PostForm;
