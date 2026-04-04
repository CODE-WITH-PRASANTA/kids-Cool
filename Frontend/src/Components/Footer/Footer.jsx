import React from "react";
import "./Footer.css";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import logo from "../../assets/Logo1.JPG";

import cloud1 from "../../assets/cloud_one_footer.webp";
import cloud2 from "../../assets/cloud_two_footer.webp";
import cloud3 from "../../assets/cloud_three_footer.webp";

import Hands from "../../assets/Hand-chlid.webp";

import girl from "../../assets/pencil_girl.webp";
import boy from "../../assets/pencil_boy.webp";

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
      <img src={cloud1} alt="Cloud decoration" className="ft-cloud c1" />
      <img src={cloud2} alt="Cloud decoration" className="ft-cloud c2" />
      <img src={cloud1} alt="Cloud decoration" className="ft-cloud c1" />
      <img src={cloud3} alt="Cloud decoration" className="ft-cloud c3" />
      <img src={cloud2} alt="Cloud decoration" className="ft-cloud c2" />

      {/* floating kids */}
      <img src={girl} alt="Girl illustration" className="ft-girl" />
      <img src={boy} alt="Boy illustration" className="ft-boy" />

      <div className="ft-container">
        {/* left */}
        <div className="ft-col">
          <img
            src={logo}
            alt="Dream Flower Pre School logo"
            className="ft-logo"
          />

          <p>
            Dream Flower Pre School & Day Care is a trusted pre school in
            Bhubaneswar offering joyful early learning for Play, Nursery, LKG,
            and UKG in a safe, caring, and child-friendly environment.
          </p>

          <div className="ft-social">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>

            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>

            <a href="#" aria-label="Instagram">
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
              <li>About Us</li>
              <li>Our Teachers</li>
              <li>Programs</li>
              <li>Gallery</li>
              <li>Admissions</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        {/* help */}
        <div className="ft-col">
          <h4>Help</h4>

          <ul>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>FAQ</li>
            <li>Terms & Conditions</li>
            <li>Admission Enquiry</li>
            <li>Parent Support</li>
          </ul>
        </div>

        {/* gallery */}
        <div className="ft-col">
          <h4>Our Galleries</h4>

          <div className="ft-gallery">
            <img src={g1} alt="Kids activity gallery 1" />
            <img src={g2} alt="Kids activity gallery 2" />
            <img src={g3} alt="Kids activity gallery 3" />
            <img src={g4} alt="Kids activity gallery 4" />
            <img src={g5} alt="Kids activity gallery 5" />
            <img src={g6} alt="Kids activity gallery 6" />
          </div>
        </div>
      </div>

      {/* zigzag */}
      <div className="ft-zig"></div>

      {/* hands */}
      <img src={Hands} alt="Kids hands decoration" className="ft-hands" />

      {/* bottom */}
     <div className="ft-bottom">
            <p>
              © {new Date().getFullYear()} Dream Flower Pre School  All Rights Reserved.
            </p>

            <p>
              Developed with ❤️ by{" "}
              <a 
                href="https://prwebstock.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ft-dev-link"
              >
                PR WEBSTOCK
              </a>
            </p>
          </div>
    </footer>
  );
}