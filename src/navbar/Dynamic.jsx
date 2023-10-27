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

  const moreCards = dataFromStore
    .filter((data) => data.id !== parseInt(id))
    .slice(41, 44);

  return (
    <>
      {dataFromStore
        .filter((data) => data.id === parseInt(id))
        .map((item, index) => {
          return (
            <div className="dynammic" key={index}>
              <div className="dynamicContainerTop">
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
                    <a href="https://github.com/Ayush-Manware">
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
                <div className="moreContainer">
                  {moreCards.map((item) => (
                    <div className="moreCard" key={item.id}>
                      <img
                        src={item.image}
                        alt="err"
                        className="moreCardImage"
                      />
                      <h2 className="moreCardHeading">{item.name}</h2>
                      <p className="moreCardPara">{item.text.slice(0,130)}</p>
                    </div>
                  ))}
                </div>
                <p className="more" onClick={() => navigation("/")}>
                  More From The Siren Blogs
                </p>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Dynamic;
