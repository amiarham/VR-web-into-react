/** @format */

import React from "react";
import "./style2.css";
import logo from "../images/Logo.png";

const Left = () => {
  return (
    <div class='left-c'>
      <div class='content'>
        <img class={logo} src='/logo.png' alt='' width={56} height={67} />
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            fontFamily: "poppins",
          }}>
          {" "}
          Essential Banking for Anyone Anywhere
        </h1>
        <p style={{ fontSize: "20px", fontFamily: "poppins" }}>
          Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
          plant cold-pressed tacos poke beard tote bag. Heirloom echo park
          mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon
          try-hard chambray.
        </p>
      </div>
      <div class='flex'>
        <div>
          <button class='buttonl'>Launch App</button>
        </div>
        <div>
          <button class='buttonr'>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Left;
