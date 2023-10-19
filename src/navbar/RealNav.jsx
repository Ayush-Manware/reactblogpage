import React from "react";
import { Link } from "react-router-dom";

const RealNav = (props) => {

  return (
    <>
      <div className="resNavbar">
        <div className="home">
          <Link to={"/"} onClick={()=> props.open(false)}>Home</Link>
        </div>
        <div className="bollywood">
          <Link to={"/bollywood"} onClick={()=> props.open(false)}>Bollywood</Link>
        </div>
        <div className="technology">
          <Link to={"/technology"} onClick={()=> props.open(false)}>Technology</Link>
        </div>
        <div className="hollywood">
          <Link to={"/hollywood"} onClick={()=> props.open(false)}>Hollywood</Link>
        </div>
        <div className="fitness">
          <Link to={"/fitness"} onClick={()=> props.open(false)}>Fitness</Link>
        </div>
        <div className="food">
          <Link to={"/food"} onClick={()=> props.open(false)}>Food</Link>
        </div>
      </div>
    </>
  );
};

export default RealNav;
