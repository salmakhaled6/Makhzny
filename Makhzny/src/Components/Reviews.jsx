import React from "react";
import "../Styles/Reviews.css";
import bg from "../assets/bg.jpg";
import user1 from "../assets/user1.png";

function Reviews() {
  return (
    <div className="reviews-container">
      <h2 className="reviews-title">Testimonials & Referrals</h2>
      <p className="reviews-subtitle">
        We’re listening! Tell us about your experience.
      </p>

      <div className="reviews-scroll-wrapper">
        <div className="review-card">
          <div className="review-top">
            <img src={user1} alt="User" className="review-img" />
            <div className="review-header">
              <h3 className="review-name">John Doe</h3>
              <div className="review-rate">⭐⭐⭐⭐☆</div>
            </div>
          </div>

          <div className="review-bottom">
            <p className="review-text">
              Lorem ipsum dolor sit amet consectetur. Amet nam ut faucibus
              luctus gravida nibh diam sed.
            </p>
            <p className="review-date">2 days ago</p>
          </div>
        </div>
        <div className="review-card">
          <div className="review-top">
            <img src={user1} alt="User" className="review-img" />
            <div className="review-header">
              <h3 className="review-name">John Doe</h3>
              <div className="review-rate">⭐⭐⭐⭐☆</div>
            </div>
          </div>

          <div className="review-bottom">
            <p className="review-text">
              Lorem ipsum dolor sit amet consectetur. Amet nam ut faucibus
              luctus gravida nibh diam sed.
            </p>
            <p className="review-date">2 days ago</p>
          </div>
        </div>
        <div className="review-card">
          <div className="review-top">
            <img src={user1} alt="User" className="review-img" />
            <div className="review-header">
              <h3 className="review-name">John Doe</h3>
              <div className="review-rate">⭐⭐⭐⭐☆</div>
            </div>
          </div>

          <div className="review-bottom">
            <p className="review-text">
              Lorem ipsum dolor sit amet consectetur. Amet nam ut faucibus
              luctus gravida nibh diam sed.
            </p>
            <p className="review-date">2 days ago</p>
          </div>
        </div>
        <div className="review-card">
          <div className="review-top">
            <img src={user1} alt="User" className="review-img" />
            <div className="review-header">
              <h3 className="review-name">John Doe</h3>
              <div className="review-rate">⭐⭐⭐⭐☆</div>
            </div>
          </div>

          <div className="review-bottom">
            <p className="review-text">
              Lorem ipsum dolor sit amet consectetur. Amet nam ut faucibus
              luctus gravida nibh diam sed.
            </p>
            <p className="review-date">2 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
