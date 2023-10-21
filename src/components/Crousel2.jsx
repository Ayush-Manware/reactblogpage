import React, { useState } from "react";
import image1 from "./charlize-theron-79562_1280.jpg";
import image2 from "./drone-1765145_1280.jpg";
import image4 from "./foto-sushi-6anudmpILw4-unsplash.jpg";
import image5 from "./home-office-569153_1280.jpg";
import image6 from "./jonathan-stout-C7c6H52Ucco-unsplash.jpg";
import image13 from "./oranges-1995056_1280.jpg";
import image15 from './waffles-2190961_1280.jpg'
import image16 from "./technology-4256272_1280.jpg";

const CrouselTwo = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const [allImages] = useState([
    image4,
    image1,
    image2,
    image5,
    image6,
    image13,
    image15,
    image16,
  ]);

  // useEffect(()=>{
  //     setInterval(()=>{
  //         setSelectedImage(selectedImage => selectedImage < 10 ? selectedImage + 1 : 0)
  //     },3000)
  // })

  return (
    <div className="crouselContainer">
      <img
        src={allImages[selectedImage]}
        className="crouselImages"
        alt="Err-/"
      />
      <div className="courselButton">
        <button
          className="previousBtn"
          onClick={() => {
            if (selectedImage > 0) {
              setSelectedImage(selectedImage - 1);
            }
          }}
        >
          <i className="fa-solid fa-angles-left"></i>
        </button>
        <button
          className="nextBtn"
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
