import React from "react";
import W1 from "../assets/1.png";
import W2 from "../assets/2.png";
import W3 from "../assets/4.png";
import W4 from "../assets/5.png";
import W5 from "../assets/7.png";
import W6 from "../assets/13.png";
import W7 from "../assets/9.png";
import W8 from "../assets/10.png";
import W9 from "../assets/11.png";

import "../Styles/InfoTwo.css";

const features = [
  { img: W1, title: "Online Booking", desc: "From anywhere and at any time." },
  { img: W2, title: "Easy Access", desc: "Accessible whenever you require it" },
  { img: W3, title: "Monitoring System", desc: "To ensure the safety of your items" },
  { img: W4, title: "Customer Service", desc: "Get the assistance you need" },
  { img: W5, title: "Smart Access", desc: "Saves your time." },
  { img: W6, title: "Certified", desc: "From Saudi Food & Drug Authority" },
  { img: W7, title: "Flexible Contracts", desc: "To make it easier for you." },
  { img: W8, title: "Insurance", desc: "To secure your investment." },
  { img: W9, title: "Customer Support", desc: "Always here to help you out." },
];

function InfoTwo() {
  return (
    <div className="info-container">
      <div className="info-header">
        <h2>Why we Are The Best Choice</h2>
        <p>Choosing Excellence with Makhzny</p>
      </div>

      <div className="info-text">
        <h4>
          Tailored Storage Services for <span className="info-text-span">Businesses 🤩</span>
        </h4>
        <p>
          Unlock seamless business operations with our tailored storage solutions at Makhzny. 
          Our comprehensive business storage services provide a secure and organized space 
          for your company’s assets. From document archives to inventory management.
        </p>
      </div>

      <div className="info-images">
  <div className="info-row first-row">
    {features.slice(0, 5).map((item, index) => (
      <div className="info-card" key={index}>
        <img src={item.img} alt={item.title} className="info-icon" />
        <h5 className="info-title">{item.title}</h5>
        <p className="info-desc">{item.desc}</p>
      </div>
    ))}
  </div>

  <div className="info-row second-row">
    {features.slice(5).map((item, index) => (
      <div className="info-card" key={index + 5}>
        <img src={item.img} alt={item.title} className="info-icon" />
        <h5 className="info-title">{item.title}</h5>
        <p className="info-desc">{item.desc}</p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}

export default InfoTwo;
