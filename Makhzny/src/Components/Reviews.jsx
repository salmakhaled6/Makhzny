import React from "react";
import "../Styles/Reviews.css";
import user1 from "../assets/user1.png";
import { useLang } from "../contexts/LanguageContext";

function Reviews() {
  const { t } = useLang();

  return (
    <div className="reviews-container">
      <h2 className="reviews-title">{t("reviewsTitle")}</h2>
      <p className="reviews-subtitle">{t("reviewsSubtitle")}</p>

      <div className="reviews-scroll-wrapper">
        {[...Array(4)].map((_, i) => (
          <div className="review-card" key={i}>
            <div className="review-top">
              <img src={user1} alt="User" className="review-img" />
              <div className="review-header">
                <h3 className="review-name">{t("reviewerName")}</h3>
                <div className="review-rate">⭐⭐⭐⭐☆</div>
              </div>
            </div>

            <div className="review-bottom">
              <p className="review-text">{t("reviewText")}</p>
              <p className="review-date">{t("reviewDate")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
