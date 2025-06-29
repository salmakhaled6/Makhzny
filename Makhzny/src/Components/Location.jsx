import React from "react";
import { useLang } from "../contexts/LanguageContext";
import location1 from "../assets/location1.png";
import location2 from "../assets/location2.png";
import location3 from "../assets/location3.png";
import location4 from "../assets/location4.png";
import location5 from "../assets/location5.png";
import "../Styles/location.css";

function Location() {
  const { t, lang } = useLang();

  return (
    <div className="location-section">
      <h2>{t("whereToFindUs")}</h2>
      <p>{t("exploreLocations")}</p>

      <div className="location-grid">
        <div className="row">
          <div className="location-card tall">
            <img src={location1} alt={t("riyadh")} />
            <p>{t("riyadh")}</p>
            <div className="card-hover-content">
              <p>{t("riyadh")}</p>
              <ul
  className="hover-location-list"
  style={{ direction: lang === "ar" ? "rtl" : "ltr", textAlign: lang === "ar" ? "right" : "left" }}
>                <li className="soon-location">
                  <span className="icon">📍</span> {t("qadisiyah")} - {t("soon")}
                </li>
                <li className="soon-location">
                  <span className="icon">📍</span> {t("munsiyah")} - {t("soon")}
                </li>
                <li className="soon-location">
                  <span className="icon">📍</span> {t("mahadiyah")} - {t("soon")}
                </li>
                <li className="soon-location">
                  <span className="icon">📍</span> {t("ghirnatuah")} - {t("soon")}
                </li>
                <li>
                  <span className="icon">📍</span>
                  <span className="green-location">{t("suly")}</span>
                </li>
                <li>
                  <span className="icon">📍</span> +966920024021
                </li>
              </ul>

              <a
                href="https://www.google.com/maps/place/Makhzny..."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="hover-btn">{t("getDirections")}</button>
              </a>
            </div>
          </div>

          <div className="location-card">
            <img src={location4} alt={t("dammam")} />
            <p>{t("dammam")}</p>
            <div className="card-hover-content">
              <p>{t("dammam")}</p>
              <ul
  className="hover-location-list"
  style={{ direction: lang === "ar" ? "rtl" : "ltr", textAlign: lang === "ar" ? "right" : "left" }}
>                  <li className="soon-location">
                  <span className="icon">📍</span> {t("saif")} - {t("soon")}
                </li>
                <li>
                  <span className="icon">📍</span>
                  <span className="green-location">{t("khalidiyyah")}</span>
                </li>
                <li>
                  <span className="icon">📍</span> +966920024021
                </li>
              </ul>
              <a
                href="https://www.google.com/maps/place/Makhzny..."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="hover-btn">{t("getDirections")}</button>
              </a>
            </div>
          </div>

          <div className="location-card">
            <img src={location5} alt={t("jeddah")} />
            <p>{t("jeddah")}</p>
            <div className="card-hover-content">
              <p>{t("jeddah")}</p>
              <ul
  className="hover-location-list"
  style={{ direction: lang === "ar" ? "rtl" : "ltr", textAlign: lang === "ar" ? "right" : "left" }}
>                <li>
                  <span className="icon">📍</span>
                  <span className="green-location">{t("rayyan")}</span>
                </li>
                <li>
                  <span className="icon">📍</span> +966920024021
                </li>
              </ul>
              <a
                href="https://www.google.com/maps/place/Makhzny..."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="hover-btn">{t("getDirections")}</button>
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="location-card">
            <img src={location2} alt={t("abha")} />
            <p>{t("abha")}</p>
            <p>{t("soon")}</p>
          </div>
          <div className="location-card">
            <img src={location3} alt={t("jubail")} />
            <p>{t("jubail")}</p>
            <p>{t("soon")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
