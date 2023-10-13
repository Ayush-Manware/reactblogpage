import React, { useContext } from "react";
import Store from "../store/Store";
import { Link } from "react-router-dom";

const Fitness = () => {
  const [FitnessData] = useContext(Store);

  const cate = "Fitness";

  const filtered = FitnessData.filter((item) => item.category === cate);

  return (
    <>
      <div className="bollywoodContainer">
        <div className="left">
          <h2 className="bollywoodHeading">Fitness</h2>
          {filtered.map((item, index) => (
            <>
              <Link to={`/info/${item.id}`} >
                <div className="cardContainer">
                  <div className="cardImageContainer">
                    <img className="cardImage" src={item.image} alt="Error" />
                  </div>
                  <div className="cardContent">
                    <h2>{item.name}</h2>
                    <p>{item.text.slice(0, 130)}...</p>
                  </div>
                </div>
              </Link>
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

export default Fitness;
