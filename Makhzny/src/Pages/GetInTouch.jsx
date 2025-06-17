import React from 'react';
import '../Styles/GetInTouch.css'; 

function GetInTouch() {
  return (
    <div className="get-in-touch-container">
      <div className="getinTouch-bar">
        <div className="container getinTouch-box">
          <h2>Get in touch!</h2>
          <p>
            Ready to declutter your life? Contact us today to discuss your storage needs.
            Our friendly team is here to assist you!
          </p>
        </div>
      </div>

      <div className="container contact-info">
        <div className="info-box">
          <img src="" alt="Phone Icon" />
          <div>
            <p className="info-title">Phone Number</p>
            <p className="info-text">+966545933222</p>
          </div>
        </div>

        <div className="info-box">
          <img src="" alt="Location Icon" />
          <div>
            <p className="info-title">Address</p>
            <p className="info-text">Dammam, Alkhaldyiah Aljanoubiyah, Salman Alfarsi St</p>
          </div>
        </div>

        <div className="info-box">
          <img src="" alt="Email Icon" />
          <div>
            <p className="info-title">Email</p>
            <p className="info-text">hello@makhzny.com</p>
          </div>
        </div>
      </div>

      <form className="container contact-form">
        <div className="form-row">
          <label htmlFor="name">Your Name *</label>
          <input id="name" type="text" required />
        </div>

        <div className="form-row">
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" type="text" />
        </div>

        <div className="form-row">
          <label htmlFor="email">Your Email *</label>
          <input id="email" type="email" required />
        </div>

        <div className="form-row">
          <label htmlFor="question">Your Question *</label>
          <input id="question" type="text" required />
        </div>

        <div className="form-row">
          {/* <label></label> */}
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default GetInTouch;
