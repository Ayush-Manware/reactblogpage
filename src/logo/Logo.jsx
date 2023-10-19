import React, { useState } from "react";
import logoImage from "./two.png";
import menu from "./menu_5259008.png";
import RealNav from "../navbar/RealNav";

const Logo = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="logoContainer">
      <img className="logoImage" src={logoImage} alt="Logo" />
      <img className="menuIcon" onClick={handleMenu} src={menu} alt="Err" />
      {open ? <RealNav open ={setOpen} function={handleMenu} /> : null}
    </div>
  );
};

export default Logo;
