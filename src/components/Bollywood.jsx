import React, { useContext } from "react";
import Store from "../store/Store";

const Bollywood = () => {
  const [bollywoodData] = useContext(Store);
  console.log(bollywoodData);

  const cate = "Bollywood";

  const filtered = bollywoodData.filter((item) => item.category === cate);

  return (
    <>
      <div className="bollywoodContainer">
        <div className="left">
          <h2 className="bollywoodHeading">Bollywood</h2>
            {filtered.map((item, index) => (
              <>
                <div className="cardContainer">
                  <div className="cardImage">
                    <img src={item.image} alt="Error" />
                  </div>
                  <div className="cardContent">
                    <h2>{item.name}</h2>
                    <p>{item.text.slice(0, 150)}...</p>
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className="right">
            <h2>Right</h2>
          </div>
        </div>
    </>
  );
};

export default Bollywood;
