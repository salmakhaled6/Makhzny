import React from 'react';
import '../Styles/BecomePartner.css'; 

function BecomePartner() {
  return (
    <div className="become-partner-container">
   <div className="become-partner-bar">
  <div className=" become-partner-box">

          <h2>
            Interested in becoming a partner with <strong>Makhzny.</strong>
          </h2>
          <p>
            Please tell us about your work and how we could create something amazing together.
          </p>
        </div>
      </div>

      <form className="partner-form container">
        <label htmlFor="name">Your Name *</label>
        <input id="name" type="text" required />

        <label htmlFor="phone">Phone Number</label>
        <input id="phone" type="text" />

        <label htmlFor="email">Your Email *</label>
        <input id="email" type="email" required />

        <label htmlFor="company">Your Company</label>
        <input id="company" type="text" />

        <label htmlFor="subject">Subject *</label>
        <input id="subject" type="text" required />

        <label htmlFor="question">Your Question *</label>
        <textarea id="question" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BecomePartner;
