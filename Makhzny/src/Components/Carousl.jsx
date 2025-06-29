import React from "react";
import "../Styles/Carousl.css";
import img from "../assets/3.png";
import { useNavigate } from "react-router-dom";
import { useLang } from "../contexts/LanguageContext";

function Carousl() {
  const navigate = useNavigate();
  const { t } = useLang(); 

  return (
    <div className="carousl-wrapper">
      <div className="carousl-container">
        <div>
          <h2>{t("storeWithUs")}</h2>
          <p className="p1">{t("firstStorageCompany")}</p>
          <p className="p2">{t("spaceForNeed")}</p>
          <div className="Carousl-btns">
            <button onClick={() => navigate("/RequestQuote")}>
              {t("requestQuote")}
            </button>
            <button>{t("takeTour")}</button>
          </div>
        </div>
        <div className="imgs">
          <h3>{t("takeTour")}</h3>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Carousl;
