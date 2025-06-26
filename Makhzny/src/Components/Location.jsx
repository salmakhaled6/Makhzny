import React from "react";
import location1 from "../assets/location1.png";
import location2 from "../assets/location2.png";
import location3 from "../assets/location3.png";
import location4 from "../assets/location4.png";
import location5 from "../assets/location5.png";
import "../Styles/location.css";

function Location() {
  return (
    <div className="location-section">
      <h2>Where to find us</h2>
      <p>Explore Our Site Locations.</p>

      <div className="location-grid">
        <div className="row">
          <div className="location-card tall">
            <img src={location1} alt="Riyadh" />
            <p>Riyadh</p>
            <div className="card-hover-content">
              <p>Riyadh</p>
              <ul className="hover-location-list">
  <li className="soon-location">
    <span className="icon">📍</span> AL- Qadisiyah District - soon
  </li>
  <li className="soon-location">
    <span className="icon">📍</span> AL- Munsiyah District - soon
  </li>
  <li className="soon-location">
    <span className="icon">📍</span> AL Mahadiyah District - soon
  </li>
  <li className="soon-location">
    <span className="icon">📍</span> Ghirnatuah District - soon
  </li>
  <li>
    <span className="icon">📍</span>
    <span className="green-location">As-Suly District</span>
  </li>
  <li>
    <span className="icon">📍</span> + 966920024021
  </li>
</ul>

<a
  href="https://www.google.com/maps/place/Makhzny+Self+Storage+%D9%85%D8%AE%D8%B2%D9%86%D9%8A%E2%80%AD/@24.6544882,46.8338866,17z/data=!3m1!4b1!4m6!3m5!1s0x3e2fa9ea333cd53f:0xfe165baea21e32e8!8m2!3d24.6544882!4d46.8364615!16s%2Fg%2F11pdf98cpy?entry=ttu"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="hover-btn">Get Directions</button>
</a>
            </div>
          </div>

          <div className="location-card">
  <img src={location4} alt="Dammam" />
  <p>Dammam</p>
  <div className="card-hover-content">
    <p>Dammam</p>
    <ul className="hover-location-list">
  <li>
    <span className="icon">📍</span>
    <span className="green-location">AL Khalidiyyah AL Janubiyya</span>
  </li>
  <li className="soon-location">
    <span className="icon">📍</span> AL Saif District -soon
  </li>
  <li>
    <span className="icon">📍</span> +966920024021
  </li>
</ul>

<a
  href="https://www.google.com/maps/place/Makhzny+Self+Storage+%D9%85%D8%AE%D8%B2%D9%86%D9%8A%E2%80%AD/@26.3941375,50.1571361,17z/data=!3m1!4b1!4m6!3m5!1s0x3e49e515812e8195:0xade05ccd3f3141a8!8m2!3d26.3941375!4d50.159711!16s%2Fg%2F11dy1l1sb1?entry=ttu"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="hover-btn">Get Directions</button>
</a>
  </div>
</div>

<div className="location-card">
  <img src={location5} alt="Jeddah" />
  <p>Jeddah</p>
  <div className="card-hover-content">
    <p>Jeddah</p>
    <ul className="hover-location-list">
      <li>
        <span className="icon">📍</span>
        <span className="green-location">AL Rayyan District</span>
      </li>
      <li>
        <span className="icon">📍</span> +966920024021
      </li>
    </ul>
    <a
  href="https://www.google.com/maps/place/Makhzny+Self+Storage+%D9%85%D8%AE%D8%B2%D9%86%D9%8A%E2%80%AD/@21.6965408,39.2071257,17z/data=!3m1!4b1!4m6!3m5!1s0x15c17dfe799262c7:0x4add1a8d3032f54!8m2!3d21.6965408!4d39.2097006!16s%2Fg%2F11lcr_1qq5?entry=ttu"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="hover-btn">Get Directions</button>
</a>
  </div>
</div>

        </div>

        <div className="row">
          <div className="location-card">
            <img src={location2} alt="Abha" />
            <p>Abha</p>
            <p>Soon</p>
            <div className="card-hover-content">
              <p>Abha</p>

              {/* <button className="hover-btn">Get Directions</button> */}
            </div>
          </div>
          <div className="location-card">
            <img src={location3} alt="Al Jubail" />
            <p>Al Jubail</p>
            <p>Soon</p>
            <div className="card-hover-content">
              <p>AL Jubail</p>
              <ul className="hover-location-list"></ul>
              {/* <button className="hover-btn">Get Directions</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
