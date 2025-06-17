import React, { useState } from "react";
import axios from "axios";

import "../Styles/Login.css";

function SignUp() {
  const [type, setType] = useState("personal");
  const [formData, setFormData] = useState({});

  const handleSubmit = async () => {
    try {
      console.log("Sending formData:", formData);
      const res = await axios.post(
        "https://makhzny.odoo.com/register_new_customer_api",
        formData
      );
      console.log(res.data);
      alert("Registration successful!");
    } catch (error) {
      console.error("Error during registration:", error);
      alert(
        "Registration failed: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <div className="login-container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        <button
          onClick={() => setType("personal")}
          style={{
            backgroundColor: type === "personal" ? "#410B5F" : "#ccc",
            color: "#fff",
            marginRight: "10px",
            padding: "8px 16px",
            border: "none",
            borderRadius: "40px",
            cursor: "pointer",
            fontSize: "25px",
            textTransform: "uppercase",
          }}
        >
          Personal
        </button>
        <button
          onClick={() => setType("business")}
          style={{
            backgroundColor: type === "business" ? "#410B5F" : "#ccc",
            color: "#fff",
            padding: "8px 16px",
            border: "none",
            borderRadius: "40px",
            fontSize: "25px",
            textTransform: "uppercase",

            cursor: "pointer",
          }}
        >
          Business
        </button>
      </div>

      {type === "personal" && (
        <>
          <p className="signup-heading">Your Personal Information</p>
          <p>
            Please ensure that you enter the information in accordance with
            official documents.
          </p>
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="ID Number"
            name="idNumber"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="+966XXXXXXXXXXXX"
            name="phone"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />{" "}
          <p>send OTP</p>
          <input type="text" placeholder="Your OTP Number" />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Nature of Goods stored"
            name="goodsNature"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <input
            type="date"
            placeholder="Date of Birth"
            name="dob"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />{" "}
        </>
      )}

      {type === "business" && (
        <>
          <h3>Your Business Information</h3>
          <p>
            Please ensure that you enter the information in accordance with
            official documents.
          </p>

          <input type="text" placeholder="Legal Representative Name" />
          <input type="text" placeholder="Legal Representative ID Number" />
          <input type="date" placeholder="Legal Representative Date of Birth" />
          <input type="text" placeholder="Company Name" />
          <input type="text" placeholder="C.R Number" />
          <input type="text" placeholder="VAT Registration" />
          <input type="text" placeholder="+966XXXXXXXXXXXX" />
          <p>send OTP</p>
          <input type="text" placeholder="Your OTP Number" />
          <input type="email" placeholder="Company Email" />
          <input type="text" placeholder="Nature of Goods stored" />
          <input type="text" placeholder="Authorized Person ID Number" />
          <input type="text" placeholder="Authorized Person Mobile Number" />
          <input type="text" placeholder="Authorized Person Name" />
          <input
            type="text"
            placeholder="Address (Exactly as Registered on ZATCA)"
          />
        </>
      )}

      {/* <button style={{ width: '100%', marginTop: '1rem',backgroundColor:"#410B5F" , color:'white' ,texttransform:'uppercase',border:'none',borderRadius:'25px',padding:'10px' }}>CONTINUE</button> */}
      <button
        style={{
          width: "100%",
          marginTop: "1rem",
          backgroundColor: "#410B5F",
          color: "white",
          textTransform: "uppercase",
          border: "none",
          borderRadius: "25px",
          padding: "10px",
        }}
        onClick={handleSubmit}
      >
        CONTINUE
      </button>
    </div>
  );
}

export default SignUp;
