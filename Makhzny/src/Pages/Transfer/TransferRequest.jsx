import React from 'react'
import transfer from '../../assets/transfer.png'
import '../../Styles/TransferRequest.css'
import { useNavigate } from 'react-router-dom'

function TransferRequest() {
  const navigate = useNavigate();

  const handleRequestClick = () => {
    navigate('/Form');
  };

  return (
    <div className="transfer-page">
      <div className="transfer-hero">
        <div className="transfer-hero-box">
          <h2>Transfer Request</h2>
          <p>
            "We ensure safe and fast transfer of your belongings. Professional moving service - Punctual & fully insured."
          </p>
        </div>
      </div>

      <div className="transfer-content">
        <img src={transfer} alt="Transfer Icon" />
        <p>You have no transfer requests at the moment!</p>
        <button className="transfer-btn" onClick={handleRequestClick}>Request Now</button>
      </div>
    </div>
  );
}

export default TransferRequest;
