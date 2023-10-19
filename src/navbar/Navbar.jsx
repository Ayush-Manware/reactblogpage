import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import Bollywood from "../components/Bollywood";
import Technology from "../components/Technology";
import Hollywood from "../components/Hollywood";
import Fitness from "../components/Fitness";
import Food from "../components/Food";
import { StoredData } from "../store/Store";
import Dynamic from "./Dynamic";

const Navbar = () => {
  return (
    <>
        <div className="navbar">
          <div className="home">
            <Link to={"/"}>Home</Link>
          </div>
          <div className="bollywood">
            <Link to={"/bollywood"}>Bollywood</Link>
          </div>
          <div className="technology">
            <Link to={"/technology"}>Technology</Link>
          </div>
          <div className="hollywood">
            <Link to={"/hollywood"}>Hollywood</Link>
          </div>
          <div className="fitness">
            <Link to={"/fitness"}>Fitness</Link>
          </div>
          <div className="food">
            <Link to={"/food"}>Food</Link>
          </div>
        </div>
        <StoredData>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/bollywood"} element={<Bollywood />} />
            <Route path={"/technology"} element={<Technology />} />
            <Route path={"/hollywood"} element={<Hollywood />} />
            <Route path={"/fitness"} element={<Fitness />} />
            <Route path={"/food"} element={<Food />} />
            <Route path="/info/:id" element={<Dynamic />} />
          </Routes>
        </StoredData>
    </>
  );
};

export default Navbar;
