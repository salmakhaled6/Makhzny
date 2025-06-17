import React from "react";
import back from "../../assets/back.png";
import "../../Styles/Form.css";

function Form() {
  return (
    <div className="form-container">
      <div className="transfer-request">
        <div className="transfer-request-box">
          <h2>Transfer request</h2>
          <p>
            "We ensure safe and fast transfer of your belongings. Professional
            moving service – Punctual & fully insured"
          </p>
        </div>
      </div>

      <div className="form-section">
        <div className="form-img-box">
          <img src={back} alt="Transfer illustration" className="form-image" />
          <p className="form-heading">Submit a transfer request</p>
        </div>

        <form className="transfer-form">
          <label>Item Types</label>
          <select></select>

          <label>Items Size</label>
          <select></select>

          <label>Shipping Date</label>
          <div className="date-selects">
            <div>
              <label>Day</label>
              <select></select>
            </div>
            <div>
              <label>Month</label>
              <select></select>
            </div>
            <div>
              <label>Year</label>
              <select></select>
            </div>
          </div>

          <label>Shipping Address</label>
          <div className="address-inputs">
            <p>From</p>
            <input type="text" />
            <p>To</p>
            <select>
              <option>Transfer to</option>
            </select>
          </div>

          <label>Additional Notes</label>
          <input type="text" />

          <div className="checkbox-group">
            <input type="checkbox" />
            <p>Request Items Disassembly Service</p>
          </div>

          <button className="submit-btn">Send Request</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
