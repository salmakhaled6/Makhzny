import React, { useState } from "react";
import "../../Styles/RequestQuote.css";

function RequestQuote() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedBranch, setSelectedBranch] = useState("");

  const [showPersonalInfoPopup, setShowPersonalInfoPopup] = useState(false);
  const handleReceivingOption = () => {
    setShowPersonalInfoPopup(true);
  };

  const handleBranchSelect = (branch) => {
    setSelectedBranch(branch);
    setCurrentStep(2);
  };

  const steps = [
    { number: 1, label: "Choose Branch" },
    { number: 2, label: "Choose Area" },
    { number: 3, label: "Rental Duration" },
    { number: 4, label: "Receiving Method" },
  ];
  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="request-quote-container">
      <div className="transfer-request">
        <div className="transfer-request-box">
          <h2>Request a Quote</h2>
          <p>
            Are you looking to rent a storage unit, office, or a locker? Please
            use our form below to get an accurate and instant quote.
          </p>
        </div>
      </div>

      <div className="steps-indicator">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="step-item">
              <div
                className={`step-circle ${
                  currentStep >= step.number ? "active" : ""
                }`}
              >
                {step.number}
              </div>
              <div className="step-label">{step.label}</div>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`step-line ${
                  currentStep > step.number ? "active" : ""
                }`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {currentStep === 1 && (
        <div className="step-content">
          <h3>Step 1: Choose a Branch</h3>
          <button onClick={() => handleBranchSelect("Riyadh")}>
            Riyadh Branch
          </button>
          <button onClick={() => handleBranchSelect("Dammam")}>
            Dammam Branch
          </button>
          <button onClick={() => handleBranchSelect("Jeddah")}>
            Jeddah Branch
          </button>
        </div>
      )}

      {currentStep === 2 && (
        <div className="step-content">
          <h3>Step 2: Choose Area</h3>
          <p>Selected Branch: {selectedBranch}</p>

          <div className="area-buttons-group">
            <button>1 M</button>
            <button>3 M</button>
            <button>4 M</button>
            <button>5 M</button>
            <button>6 M</button>
          </div>

          <div className="step-buttons">
            <button onClick={handlePreviousStep}>Previous</button>
            <button onClick={() => setCurrentStep(3)}>Next</button>
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className="step-content">
          <h3>Step 3: Rental Duration</h3>

          <button>Monthly (0% Discount)</button>
          <button>3 Months (5% Discount)</button>

          <div className="step-buttons">
            <button onClick={handlePreviousStep}>Previous</button>
            <button onClick={() => setCurrentStep(4)}>Next</button>
          </div>
        </div>
      )}

      {currentStep === 4 && (
        <div className="step-content">
          <h3>Step 4: Receiving Method</h3>
          <button onClick={handleReceivingOption}>View Email</button>
          <button onClick={handleReceivingOption}>View Whatsapp</button>
          <button onClick={handleReceivingOption}>Download PDF</button>

          <div className="step-buttons">
            <button onClick={handlePreviousStep}>Previous</button>
          </div>
        </div>
      )}

      {showPersonalInfoPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>Enter Your Personal Info</h3>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Phone Number" />
            <div className="popup-actions">
              <button onClick={() => setShowPersonalInfoPopup(false)}>
                Cancel
              </button>
              <button
                onClick={() => {
                  alert("Quote requested successfully!");
                  setShowPersonalInfoPopup(false);
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RequestQuote;
