import React from "react";
import FooterIcon from "../logo/two.png";

const Footer = () => {
  return (
    <footer>
      <img src={FooterIcon} alt="err-/" className="footerIcon" />
      <div class="footer">
        <div class="row">
          <a href="#">Career</a>
          <a href="#">Contact us</a>
          <a href="#">Our Services</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

        <div class="icons">
          <i class="fa fa-facebook"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-youtube"></i>
          <i class="fa fa-twitter"></i>
        </div>

        <div class="footerText">
          Copyright © 2021 Inferno - All rights reserved || Designed By: Ayush
          Manware
        </div>
      </div>
    </footer>
  );
};

export default Footer;
