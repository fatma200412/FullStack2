import React from "react";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div>
      <Helmet>
        <link
          rel="icon"
          href="https://static.vecteezy.com/system/resources/thumbnails/025/181/412/small_2x/picture-a-captivating-scene-of-a-tranquil-lake-at-sunset-ai-generative-photo.jpg"
        />
        <title>Home</title>
      </Helmet>

      <h2>Home</h2>
    </div>
  );
}

export default Home;
