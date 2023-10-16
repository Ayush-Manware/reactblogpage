import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Store from "../store/Store";
import like from "./like.png";
import share from "./share (1).png";

const Dynamic = () => {
  const id = useParams().id;
  const [dataFromStore] = useContext(Store);
  const navigation = useNavigate();

  return (
    <>
      {dataFromStore
        .filter((data) => data.id === parseInt(id))
        .map((item, index) => {
          return (
            <>
              <div className="dynamicContainer">
                <div className="dynamicLeft">
                  <div className="likeContainer">
                    <img src={like} className="likeImage" alt="Err-/" />
                    <h3>Like</h3>
                  </div>
                  <div className="shareContainer">
                    <img src={share} className="shareImage" alt="Err-/" />
                    <h3>Share thi article</h3>
                  </div>
                </div>
                <div className="dynamicRight">
                  <h2>{item.name}</h2>
                  <img src={item.image} alt="err" />
                  <p>{item.text}</p>
                  <button onClick={() => navigation(-1)}>Go Back</button>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default Dynamic;
