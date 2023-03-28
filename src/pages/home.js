/** @format */

import { useState } from "react";

import "./style2.css";
import Left from "./left";
import Right from "./right";

const Home = () => {
  const [carouselType, setCarouselType] = useState(0);

  return (
    <div class='flex con'>
      <Left />
      <Right />
    </div>
  );
};

export default Home;
