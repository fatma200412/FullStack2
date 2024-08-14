import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Button, ButtonGroup } from "@chakra-ui/react";

import { Input } from "@chakra-ui/react";
import PostForm from "./PostForm";
import Tablex from "./Table";
import Buttonx from "./Buttonx";

function Mount() {
  const [toog, setToog] = useState(false);

  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    axios("https://northwind.vercel.app/api/products/").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <Header />
      <Buttonx toog={toog} setToog={setToog} />
      {toog ? (
        <PostForm
          data={data}
          setData={setData}
          name={name}
          setName={setName}
          price={price}
          setPrice={setPrice}
        />
      ) : null}

      <Tablex
        data={data}
        setData={setData}
        name={name}
        setName={setName}
        price={price}
        setPrice={setPrice}
      />
    </>
  );
}

export default Mount;
