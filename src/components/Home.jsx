import React, { useContext } from "react";
import Footer from "../footer/Footer";
import Crousel from "./Crousel";
import Store from "../store/Store";
import rocket from "./rocket-launch-67643_1280.jpg";
import sports from "./women-655353_1280.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const [data] = useContext(Store);
  const bolly = data.filter((item) => item.category === "Bollywood");
  const tech = data.filter((item) => item.category === "Technology");
  const holly = data.filter((item) => item.category === "Hollywood");
  const fit = data.filter((item) => item.category === "Fitness");
  const food = data.filter((item) => item.category === "Food");

  return (
    <>
      <div className="homeContainer">
        <div className="homeTop">
          <div className="crousel">
            <Crousel />
          </div>
          <div className="topRight">
            <img src={rocket} alt="err-/" className="img" />
            <img src={sports} alt="err-/" className="img" />
          </div>
        </div>
        {/* <h2 className="techLatestHeading">See latest on Technology</h2> */}
        <div className="homeTechDiv">
          {tech
            .filter((item) => item.id >= 18 && item.id <= 20)
            .map((item, index) => {
              return (
                <Link to={`/info/${item.id}`} key={index}>
                  <div className="homeTechCard">
                    <img
                      src={item.image}
                      alt="err-/"
                      className="hometechCardImg"
                    />

                    <h2 className="homeTechCardHeading">{item.name}</h2>
                    <p className="homeTexhcardPara">
                      {item.text.slice(0, 187)}...
                    </p>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
