import React from "react";
import "../Styles/Carousl.css";
import img from "../assets/3.png";

function Carousl() {
  return (
    <div className="carousl-wrapper">
      <div className="carousl-container">
        <div>
          <h2>Store with us</h2>
          <p className="p1">​The First Self Storage Company in 🇸🇦</p>
          <p className="p2">Space for Whatever You Need 🚀</p>
          <div className="Carousl-btns">
            <button>احصل علي تسعيرة</button>
            <button>خذلك لفه في مخزني</button>
          </div>
        </div>
        <div className="imgs">
          <h3>Take a Tour with Makhzny 😍</h3>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Carousl;
