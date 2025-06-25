import React, { useState } from "react";
import "../../Styles/RequestQuote.css";

function RequestQuote() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");

  const [quotation, setQuotation] = useState([]);
  const [loadingQuote, setLoadingQuote] = useState(false);
  const [showPersonalInfoPopup, setShowPersonalInfoPopup] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: "", email: "", phone: "" });
  const [receivingMethod, setReceivingMethod] = useState("");

  const handleReceivingOption = (method) => {
    setReceivingMethod(method);
    setShowPersonalInfoPopup(true);
  };
  const getPriceBasedOnDuration = (duration) => {
    if (duration === "3 Months") return 2000;
    if (duration === "1 Month") return 2100;
    return 0;
  };

  const handleSubmitQuote = async () => {
    try {
      setLoadingQuote(true);

      const requestBody = {
        branch: selectedBranch,
        area: parseFloat(selectedSize),
        price: getPriceBasedOnDuration(selectedDuration),
        title: "Storage",
        partner_name: userInfo.name,
        partner_email: userInfo.email,
        partner_phone: userInfo.phone,
        is_email: receivingMethod === "email",
        is_wp: receivingMethod === "whatsapp",
        is_pdf: receivingMethod === "pdf",
      };


      const response = await fetch("https://makhzny.odoo.com/get_quot_pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log(" returned:", data);
      console.log(" Sent request body:", requestBody);
      console.log(" PDF URL returned:", data.result);

      if (receivingMethod === "pdf") {
        const pdfUrl = data.result;
        if (pdfUrl && pdfUrl.startsWith("http")) {
          window.open(pdfUrl, "_blank");
        } else {
          alert("Failed to retrieve the PDF.");
        }
      } else if (
        (receivingMethod === "email" || receivingMethod === "whatsapp") &&
        data.result === "Sent"
      ) {
        alert(
          receivingMethod === "email"
            ? "The quotation has been sent to your email address."
            : "The quotation has been sent to your WhatsApp."
        );
      } else {
        alert("Something went wrong. Please try again.");
      }

      setShowPersonalInfoPopup(false);
    } catch (error) {
      console.error("Failed to send quote:", error);
      alert("Failed to send quote. Please try again.");
    } finally {
      setLoadingQuote(false);
    }
  };

  const handleBranchSelect = (branch) => {
    setSelectedBranch(branch);
    setCurrentStep(2);
  };
  const handleAreaSelect = (area) => {
    setSelectedSize(area);
    setCurrentStep(3);
  };

  const handleDurationSelect = (duration) => {
    setSelectedDuration(duration);
    setCurrentStep(4);
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
      <div className="request-quote">
        <div className="request-quote-box">
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
            <button onClick={() => handleAreaSelect("1")}>1 M</button>
            <button onClick={() => handleAreaSelect("2")}>2 M</button>
            <button onClick={() => handleAreaSelect("3")}>3 M</button>
            <button onClick={() => handleAreaSelect("4")}>4 M</button>
            <button onClick={() => handleAreaSelect("5")}>5 M</button>
          </div>

          <div className="step-buttons">
            <button onClick={handlePreviousStep}>Previous</button>
            {/* <button onClick={() => setCurrentStep(3)}>Next</button> */}
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className="step-content">
          <h3>Step 3: Rental Duration</h3>

          <button onClick={() => handleDurationSelect("1 Month")}>
            Monthly (0% Discount)
          </button>
          <button onClick={() => handleDurationSelect("3 Months")}>
            3 Months (5% Discount)
          </button>

          <div className="step-buttons">
            <button onClick={handlePreviousStep}>Previous</button>
            {/* <button onClick={() => setCurrentStep(4)}>Next</button> */}
          </div>
        </div>
      )}

      {currentStep === 4 && (
        <div className="step-content">
          <h3>Step 4: Receiving Method</h3>
          <button onClick={() => handleReceivingOption("email")}>
            Send via Email
          </button>
          <button onClick={() => handleReceivingOption("whatsapp")}>
            Send via WhatsApp
          </button>
          <button onClick={() => handleReceivingOption("pdf")}>
            Download PDF
          </button>

          <div className="step-buttons">
            <button onClick={handlePreviousStep}>Previous</button>
          </div>
        </div>
      )}

      {showPersonalInfoPopup && (
        <div className="popup-overlay-quote">
          <div className="popup-box-quote">
            <h3>Enter Your Personal Info</h3>

            <div className="input-fields-wrapper">
              <input
                type="text"
                placeholder="Full Name"
                value={userInfo.name}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email Address"
                value={userInfo.email}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, email: e.target.value })
                }
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={userInfo.phone}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, phone: e.target.value })
                }
              />
            </div>

            <div className="popup-actions">
              <button onClick={() => setShowPersonalInfoPopup(false)}>
                Cancel
              </button>
              <button onClick={handleSubmitQuote}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RequestQuote;
