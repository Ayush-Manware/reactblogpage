import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Store from "../store/Store";
import like from "./like.png";
import share from "./share (1).png";
import avatar from "./jonathan-stout-C7c6H52Ucco-unsplash.jpg";
import gitIcon from "./code.png";

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
              <div className="dynamicContainerTop" key={index}>
                <div className="dynamicLeft">
                  <div className="likeContainer">
                    <img src={like} className="likeImage" alt="Err-/" />
                    <p>Like Article</p>
                  </div>
                  <div className="shareContainer">
                    <img src={share} className="shareImage" alt="Err-/" />
                    <p>Share this article</p>
                  </div>
                </div>
                <div className="dynamicRight">
                  <div className="aboutContainer">
                    <div className="avatarImgContainer">
                      <img src={avatar} alt="ERR-/" className="avatarImg" />
                    </div>
                    <div className="aboutText">
                      <h2 className="aboutHeading">Ayush Manware</h2>
                      <p className="aboutPara">MERN Stack Developer</p>
                    </div>
                    <a href="https://github.com/Ayush-Manware" target="_blank">
                      <img src={gitIcon} alt="" className="gitIcon" />
                    </a>
                  </div>
                  <img src={item.image} alt="err" className="dynamicImage" />
                  <h2 className="dynamicHeading">{item.name}</h2>
                  <p className="dynamicPara">{item.text}</p>
                  <button onClick={() => navigation(-1)} className="backButton">
                    Go Back
                  </button>
                </div>
              </div>
              <div className="dynamicBottom">
                <p className="more">More From The Siren Blogs</p>
                {dataFromStore
                  .filter((data) =>  data.category === data.id)
                  .map((item, index) => {
                    return (
                      <>
                        <div className="bottomCardContainer">
                          <div className="bottomCard">
                            <img
                              src={item.image}
                              alt="Err-/"
                              className="bottomCardImg"
                            />
                            <h2 className="bottomCardTitle">{item.name}</h2>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
            </>
          );
        })}
    </>
  );
};

export default Dynamic;
