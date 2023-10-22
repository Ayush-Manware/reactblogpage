import React, { useState } from "react";
import image3 from "./crouselTwo/british-library-DvgcQNAh5NA-unsplash.jpg";
import image2 from "./crouselTwo/europeana--F7h7BoDJgE-unsplash.jpg";
import image1 from "./crouselTwo/lidye-1Shk_PkNkNw-unsplash.jpg";
import image4 from "./crouselTwo/niketh-vellanki-QkSN_8XcXwQ-unsplash.jpg";
import image5 from "./crouselTwo/ronda-darby-HbMLSB-uhQY-unsplash.jpg";
// import { useEffect } from "react";

const CrouselTwo = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const [allImages] = useState([image1, image2, image3, image4, image5]);

  // useEffect(() => {
  //   setInterval(() => {
  //     setSelectedImage((selectedImage) =>
  //       selectedImage < 10 ? selectedImage + 1 : 0
  //     );
  //   }, 3000);
  // });

  return (
    <div className="homeCrouselContainer">
      <img
        src={allImages[selectedImage]}
        className="homeCrouselImages"
        alt="Err-/"
      />
      <div className="homeCrouselButtonContainer">
        <button
          className="homePreviousBtn"
          onClick={() => {
            if (selectedImage > 0) {
              setSelectedImage(selectedImage - 1);
            }
          }}
        >
          <i className="fa-solid fa-angles-left"></i>
        </button>
        <button
          className="homeNextBtn"
          onClick={() => {
            if (selectedImage < allImages.length - 1) {
              setSelectedImage(selectedImage + 1);
            }
          }}
        >
          <i className="fa-solid fa-angles-right"></i>
        </button>
      </div>
    </div>
  );
};

export default CrouselTwo;
