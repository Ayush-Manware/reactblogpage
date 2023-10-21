import React from "react";
import FooterIcon from "../logo/two.png";

const Footer = () => {
  return (
    <footer>
      <img src={FooterIcon} alt="err-/" className="footerIcon" />
      <div className="footer">
        <div className="row">
          <p>Career</p>
          <p>Contact us</p>
          <p>Our Services</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

        <div className="icons">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-youtube"></i>
          <i className="fa fa-twitter"></i>
        </div>

        <div className="footerText">
          Copyright © 2021 Inferno - All rights reserved || Designed By: Ayush
          Manware
        </div>
      </div>
    </footer>
  );
};

export default Footer;
