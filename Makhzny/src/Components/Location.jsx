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
                <li>
                  <span className="icon">📍</span> AL- Qadisiyah District - soon
                </li>
                <li>
                  <span className="icon">📍</span> AL- Munsiyah District - soon
                </li>
                <li>
                  <span className="icon">📍</span> AL Mahadiyah District - soon
                </li>
                <li>
                  <span className="icon">📍</span> Ghirnatuah District - soon
                </li>
                <li>
                  <span className="icon">📍</span> As-Suly District
                </li>
                <li>
                  <span className="icon"></span> + 966920024021
                </li>
              </ul>
              <button className="hover-btn">Get Directions</button>
            </div>
          </div>

          <div className="location-card">
            <img src={location4} alt="Dammam" />
            <p>Dammam</p>
            <div className="card-hover-content">
              <p>Dammam</p>
              <ul className="hover-location-list">
                <li>
                  <span className="icon">📍</span> AL Khalidiyyah AL Janubiyya
                  ,Dammam
                </li>
                <li>
                  <span className="icon">📍</span> +966920024021
                </li>
              </ul>
              <button className="hover-btn">Get Directions</button>
            </div>
          </div>
          <div className="location-card">
            <img src={location5} alt="Jeddah" />
            <p>Jeddah</p>
            <div className="card-hover-content">
              <p>Jeddah</p>
              <ul className="hover-location-list">
                <li>
                  <span className="icon">📍</span> ALRayyan District
                </li>
                <li>
                  <span className="icon">📍</span> +966920024021
                </li>
              </ul>
              <button className="hover-btn">Get Directions</button>
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

              <button className="hover-btn">Get Directions</button>
            </div>
          </div>
          <div className="location-card">
            <img src={location3} alt="Al Jubail" />
            <p>Al Jubail</p>
            <p>Soon</p>
            <div className="card-hover-content">
              <p>AL Jubail</p>
              <ul className="hover-location-list"></ul>
              <button className="hover-btn">Get Directions</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
