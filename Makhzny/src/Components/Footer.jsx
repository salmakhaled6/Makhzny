import React from "react";
import footerlogo from "../assets/footer-logo.png";
import applestore from "../assets/group.png";
import googlestore from "../assets/googlestore.png";
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
      <div className="footer-column">
        <img src={footerlogo} alt="Makhzny logo" className="footer-logo" />
      </div>

      <div className="footer-column">
        <ul className="footer-links">
          <p>Quick Links</p>
          <li>Sizes & Pricing</li>
          <li>FAQ</li>
          <li>Privacy Policy</li>
          <li>Login</li>
          <li>Terms & Conditions</li>
        </ul>
        <img src={applestore} alt="App Store" className="app-store" />
        {/* <img src={googlestore}  className="app-store" />  */}
      </div>

      <div className="footer-column">
        <ul className="footer-contact">
          <p>Contact Us</p>
          <li>
            <img src={vector1} alt="location" /> Riyadh, Dammam and Jeddah
          </li>
          <li>
            <img src={vector2} alt="email" /> hello@makhzny.com
          </li>
          <li>
            <img src={vector3} alt="phone" /> +966 9200 24021
          </li>
        </ul>
        <div className="footer-social">
          <div className="social-icon">
            <img src={facebook} alt="Facebook" />
          </div>
          <div className="social-icon">
            <img src={linkedin} alt="LinkedIn" />
          </div>
          <div className="social-icon">
            <img src={x} alt="X" />
          </div>
          <div className="social-icon">
            <img src={tiktok} alt="TikTok" />
          </div>
          <div className="social-icon">
            <img src={instagram} alt="Instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
