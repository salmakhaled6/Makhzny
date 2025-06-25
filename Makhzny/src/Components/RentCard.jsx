import React, { useState } from "react";
import pic1 from "../assets/pic1.jpg";
import "../Styles/RentCard.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RentCard({ cards }) {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState("");
  const navigate = useNavigate();
  const [entryDate, setEntryDate] = useState("");
  const [promoValid, setPromoValid] = useState(null);
  const [promoLoading, setPromoLoading] = useState(false);
  const checkPromoValidity = async () => {
    setPromoLoading(true);
    try {
      const response = await axios.post(
        "https://makhzny.odoo.com/check_promocde_validity",
        {
          promocode: "Makhzny",
        }
      );

      const success = response.data?.result?.data?.success;
      setPromoValid(success === true);
    } catch (error) {
      console.error("Error validating promo code:", error);
      setPromoValid(false);
    } finally {
      setPromoLoading(false);
    }
  };

  const handleBookClick = async (card) => {
    setSelectedCard(card);
    setShowPopup(true);
    await checkPromoValidity();
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedCard(null);
  };

  const handleRent = async () => {
    if (!selectedCard || !selectedPeriod || !entryDate) {
      alert("Please select a unit, period, and date.");
      return;
    }

    const periodMap = {
      monthly: 1,
      "3months": 3,
      "6months": 6,
      annual: 12,
    };

    const payload = {
      partner_id: 3,
      branch_id: selectedCard.branch_id || 2,
      unit_id: selectedCard.id,
      installment_duration: periodMap[selectedPeriod],
      move_in_date: entryDate,
    };

    try {
      const res = await axios.post(
        "https://makhzny.odoo.com/reserve_api",
        payload
      );

      const reservationId = res.data?.result;

      if (reservationId) {
        alert(`Unit reserved! Reservation ID: ${reservationId}`);
        handleClosePopup();

        navigate("/Signature", {
          state: {
            reservationId,
            selectedCard,
            selectedPeriod,
            entryDate,
          },
        });
      } else {
        alert("Reservation failed. Please try again.");
      }
    } catch (error) {
      console.error("Reservation error:", error);
      console.error("Error response:", error.response?.data);
      alert("An error occurred during reservation.");
    }
  };

  return (
    <>
      <div className="rent-cards">
        {cards.map((card) => (
          <div className="rent-card" key={card.id}>
            <img
              src={card.image ? `https://makhzny.odoo.com${card.image}` : pic1}
            />

            <p className="code">{card.title || "No title"}</p>
            <p className="size">{card.area || "N/A"} m²</p>
            <p className="price">
              {card.price || 0} <span className="monthly"> / Monthly</span>
            </p>

            <button className="book-btn" onClick={() => handleBookClick(card)}>
              Book it
            </button>
          </div>
        ))}
      </div>

      {showPopup && (
        <div className="popup-overlay-rentcard">
          <div className="popup-rentcard">
            <div className="popup-box-rentcard">
              <h3>Rental Options</h3>
              <p className="subtitle">Invoice Period</p>
              <p className="description">
                Select the duration for your payment
              </p>

              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="period"
                    value="monthly"
                    checked={selectedPeriod === "monthly"}
                    onChange={() => setSelectedPeriod("monthly")}
                  />
                  <span
                    className={selectedPeriod === "monthly" ? "selected" : ""}
                  >
                    Monthly (0% discount)
                  </span>
                </label>

                <label className="radio-option">
                  <input
                    type="radio"
                    name="period"
                    value="3months"
                    checked={selectedPeriod === "3months"}
                    onChange={() => setSelectedPeriod("3months")}
                  />
                  <span
                    className={selectedPeriod === "3months" ? "selected" : ""}
                  >
                    3 Months (5% discount)
                  </span>
                </label>
              </div>

              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="period"
                    value="6months"
                    checked={selectedPeriod === "6months"}
                    onChange={() => setSelectedPeriod("6months")}
                  />
                  <span
                    className={selectedPeriod === "6months" ? "selected" : ""}
                  >
                    6 Months (15% discount)
                  </span>
                </label>

                <label className="radio-option">
                  <input
                    type="radio"
                    name="period"
                    value="annual"
                    checked={selectedPeriod === "annual"}
                    onChange={() => setSelectedPeriod("annual")}
                  />
                  <span
                    className={selectedPeriod === "annual" ? "selected" : ""}
                  >
                    Annual (35% discount)
                  </span>
                </label>
              </div>

              <hr />

              <p className="subtitle">Select The Warehouse Entry Date</p>
              <p className="description">Choose the entry date you prefer</p>

              <label className="date-label" htmlFor="entryDate">
                Start In
              </label>
              <input
                type="date"
                id="entryDate"
                className="date-input"
                value={entryDate}
                onChange={(e) => setEntryDate(e.target.value)}
              />
            </div>
            <div className="promo-result">
              {promoLoading && <p>Checking promo code...</p>}
              {promoValid === true && (
                <p style={{ color: "green" }}>Promo code is valid!</p>
              )}
              {promoValid === false && (
                <p style={{ color: "red" }}>Promo code is invalid.</p>
              )}
            </div>

            <div className="popup-footer">
              <p className="total">Total: {selectedCard.price}</p>
              <div className="rent-card-buttons">
                <button className="rent-btn" onClick={handleClosePopup}>
                  Cancel
                </button>

                <button className="rent-btn" onClick={handleRent}>
                  Rent
                </button>
              </div>

              {/* <button className="close-btn" onClick={handleClosePopup}>Close</button> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RentCard;
