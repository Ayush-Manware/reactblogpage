import React, { useContext } from "react";
import Footer from "../footer/Footer";
import Crousel from "./crouselOne/Crousel";
import CrouselTwo from "./Crousel2";
import Store from "../store/Store";
import rocket from "./crouselOne/rocket-launch-67643_1280.jpg";
import sports from "./crouselOne/women-655353_1280.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const [data] = useContext(Store);
  const tech = data.filter((item) => item.category === "Technology");
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
            <div className="imgOneDiv">
              <img src={rocket} alt="err-/" className="img" />
            </div>
            <div className="imgOneDiv">
              <img src={sports} alt="err-/" className="img" />
            </div>
          </div>
        </div>
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
                      {item.text.slice(0, 217)}...
                    </p>
                  </div>
                </Link>
              );
            })}
        </div>{" "}
        <div className="homeThirdDiv">
          <div className="HomeLeft">
            {fit
              .filter((item) => item.id > 35 && item.id < 40)
              .map((item, index) => (
                <Link to={`/info/${item.id}`} key={index}>
                  <div className="homeCardContainer">
                    <div className="homeCardImageContainer">
                      <img
                        className="homeCardImage"
                        src={item.image}
                        alt="Error"
                      />
                    </div>
                    <div className="cardContent">
                      <h2>{item.name}</h2>
                      <p className="homeLeftContent">
                        {item.text.slice(0, 165)}...
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          <div className="homeRight">
            <div className="homeAdvertisement">advertisement</div>
          </div>
        </div>
        <div className="homeDivFour">
          <CrouselTwo />
          <div className="homeDivFourRight">
            {food
              .filter((item) => (item.id >= 42) & (item.id <= 43))
              .map((item, index) => {
                return (
                  <Link to={`/info/${item.id}`} key={index}>
                    <div className="homeCardContainer">
                      <div className="homeCardImageContainer">
                        <img
                          className="homeCardImage"
                          src={item.image}
                          alt="Error"
                        />
                      </div>
                      <div className="cardContent">
                        <h2>{item.name}</h2>
                        <p className="homeLeftContent">
                          {item.text.slice(0, 165)}...
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
