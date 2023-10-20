import React, { useContext } from "react";
import Store from "../store/Store";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

const Hollywood = () => {
  const [HollywoodData] = useContext(Store);

  const cate = "Hollywood";

  const filtered = HollywoodData.filter((item) => item.category === cate);

  return (
    <>
      <div className="bollywoodContainer">
        <div className="left">
          <h2 className="bollywoodHeading">Hollywood</h2>
          {filtered.map((item, index) => (
            <Link to={`/info/${item.id}`} key={index}>
              <div className="cardContainer">
                <div className="cardImageContainer">
                  <img className="cardImage" src={item.image} alt="Error" />
                </div>
                <div className="cardContent">
                  <h2>{item.name}</h2>
                  <p className="leftContent">{item.text.slice(0, 95)}...</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="right">
          <h2 className="topPostHeading">Top Post</h2>
          {filtered
            .filter((item) => item.id === 26)
            .map((item, index) => (
              <Link className="rightLink" to={`/info/${item.id}`} key={index}>
                <div className="rightCardOne">
                  <img
                    src={item.image}
                    className="rightCardOneImg"
                    alt="err_"
                  />
                  <div className="rightFlex">
                    <div className="rightOne">
                      <h2 className="rightCardOneHeading">{item.name}</h2>
                      <p className="rightContent">
                        {item.text.slice(0, 366)}...
                      </p>
                    </div>
                    <p className="rightCardNumber">1</p>
                  </div>
                </div>
              </Link>
            ))}

          {filtered
            .filter((item) => item.id >= 27 && item.id <= 30)
            .map((item, index) => (
              <Link className="rightLink" to={`/info/${item.id}`} key={index}>
                <div className="rightCardTwo">
                  <img src={item.image} alt="" className="rightcardTwiImg" />
                  <h4 className="rightCardTwoName">
                    {item.text.slice(0, 115)}...
                  </h4>
                  <p className="rightCardTwoNumber">{index + 2}</p>
                </div>
              </Link>
            ))}

          <div className="advertisement">Advertisement</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hollywood;
