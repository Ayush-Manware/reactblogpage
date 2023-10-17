import React, { useState } from "react";
import logoImage from "./two.png";
import menu from "./menu_5259008.png";

const Logo = () => {
  const [open, setOpen] = useState(false);

  // handleMenu = () => {
  //   setOpen(!open);
  // };

  return (
    <div className="logoContainer">
      <img className="logoImage" src={logoImage} alt="Logo" />
      <img className="menuIcon" src={menu} alt="Err" />
    </div>
  );
};

export default Logo;
