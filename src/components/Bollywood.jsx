import React, { useContext } from "react";
import Store  from "../store/Store";

const Bollywood = () => {
  const [bollywoodData] = useContext(Store);
  console.log(bollywoodData)
  return(
  <> <h1>Bollywood</h1></>
  );
};

 
export default Bollywood;
