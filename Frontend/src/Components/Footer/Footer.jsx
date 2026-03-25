import React from "react";
import "./Footer.css";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import logo from "../../assets/kidslogo.png";

import cloud1 from "../../assets/cloud_one_footer.webp";
import cloud2 from "../../assets/cloud_two_footer.webp";
import cloud3 from "../../assets/cloud_three_footer.webp";

import Hands from "../../assets/Hand-chlid.webp";

import girl from "../../assets/pencil_girl.webp";
import boy from "../../assets/pencil_boy.webp";

// import handSvg from "../../assets/footer-mask-dark.webp";

import g1 from "../../assets/section-content-gallery-image6.webp";
import g2 from "../../assets/section-content-gallery-image5.webp";
import g3 from "../../assets/section-content-gallery-image4.webp";
import g4 from "../../assets/section-content-gallery-image3.webp";
import g5 from "../../assets/section-content-gallery-image2.webp";
import g6 from "../../assets/section-content-image-sb1.webp";

export default function Footer() {
  return (
    <footer className="ft-footer">
      {/* clouds */}
      <img src={cloud1} className="ft-cloud c1" />
      <img src={cloud2} className="ft-cloud c2" />
      <img src={cloud1} className="ft-cloud c1" />
      <img src={cloud3} className="ft-cloud c3" />
      <img src={cloud2} className="ft-cloud c2" />

      {/* floating kids */}
      <img src={girl} className="ft-girl" />
      <img src={boy} className="ft-boy" />

      <div className="ft-container">
        {/* left */}
        <div className="ft-col">
          <img src={logo} className="ft-logo" />

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

          <div className="ft-social">
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* pages */}

<div className="ft-col">
  <h4>Pages</h4>

  <div className="ft-links">

    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Why Choose Us</li>
      <li>Our Teachers</li>
      <li>Our History</li>
    </ul>

    <ul>
      <li>Growing Stage</li>
      <li>Programms</li>
      <li>News</li>
      <li>Gallery</li>
    </ul>

  </div>
</div>

        {/* help */}

        <div className="ft-col">
          <h4>Help</h4>

          <ul>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>F.A.Q</li>
            <li>Terms & Condition</li>
          </ul>
        </div>

        {/* gallery */}

        <div className="ft-col">
          <h4>Our Galleries</h4>

          <div className="ft-gallery">
            <img src={g1} />
            <img src={g2} />
            <img src={g3} />
            <img src={g4} />
            <img src={g5} />
            <img src={g6} />
          </div>
        </div>
      </div>

      {/* zigzag */}

      <div className="ft-zig"></div>

      {/* hands */} 
      <img src={Hands} className="ft-hands" />

      {/* bottom */}

      <div className="ft-bottom">
        <p>Copyright © 2023 Kids. All Rights Reserved.</p>

        <div>Privacy Policy | Terms | Conditions</div>
      </div>
    </footer>
  );
}
