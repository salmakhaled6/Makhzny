import React from "react";
import footerlogo from "../assets/footer-logo.png";
import applestore from "../assets/group.png";
import googlestore from "../assets/group2.png";
import facebook from "../assets/facebook.png";
import tiktok from "../assets/tiktok.png";
import x from "../assets/x.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import vector1 from "../assets/vector1.png";
import vector2 from "../assets/vector2.png";
import vector3 from "../assets/vector3.png";
import "../Styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column logo-column">
        <img src={footerlogo} alt="Makhzny logo" className="footer-logo" />
      </div>

      <div className="footer-column links-column">
        <ul className="footer-links">
          <p>Quick Links</p>
          <li>Sizes & Pricing</li>
          <li>FAQ</li>
          <li>Privacy Policy</li>
          <li>Login</li>
          <li>Terms & Conditions</li>
        </ul>
        <div className="app-store-wrapper">
          <img src={applestore} alt="App Store" className="app-store" />
          <img src={googlestore} alt="Google Play" className="app-store" />
        </div>
      </div>

      <div className="footer-column contact-column">
        <ul className="footer-contact">
          <p>Contact Us</p>
          <li>
            <img src={vector1} alt="location" />
            Riyadh, Dammam and Jeddah
          </li>
          <li>
            <img src={vector2} alt="email" />
            hello@makhzny.com
          </li>
          <li>
            <img src={vector3} alt="phone" />
            +966 9200 24021
          </li>
        </ul>
        <div className="footer-social">
          {[facebook, linkedin, x, tiktok, instagram].map((icon, i) => (
            <div className="social-icon" key={i}>
              <img src={icon} alt="social" />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
