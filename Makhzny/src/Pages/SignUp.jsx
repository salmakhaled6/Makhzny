import React, { useState } from "react";
import axios from "axios";

import "../Styles/Login.css";

function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    idNumber: '',
    phone: '',
    email: '',
    dob: '',
    goodsNature: '',
    address: '',
    companyName: '',
    cr: '',
    vat: '',
    legalId: '',
    legalName: '',
    authName: '',
    authMobile: '',
    authId: '',
  });
  
  const [type, setType] = useState("personal");
  const [otp, setOtp] = useState('');
const [otpId, setOtpId] = useState(null);


const handleSendOtp = async () => {
  if (!formData.phone) {
    alert('Please enter your phone number first.');
    return;
  }

  try {
    const response = await axios.post('https://makhzny.odoo.com/generate_otp', {
      phone_number: formData.phone,
    });

    const id = response.data?.result?.data?.otp_id;

    console.log('OTP response:', response.data);
    console.log('Extracted OTP ID:', id);


    if (id) {
      setOtpId(id);
      alert('OTP sent successfully!');
    } else {
      alert('Failed to send OTP. Please try again.');
    }
  } catch (error) {
    console.error('OTP error:', error);
    alert('Error sending OTP');
  }
};



const handleSubmit = async () => {
  try {
    const payload =
      type === 'personal'
        ? {
            name: formData.fullName,
            phone: formData.phone,
            email: formData.email,
            id_number: formData.idNumber,
            bod: formData.dob,
            auth_name: formData.fullName,
            auth_mobile: formData.phone,
            vat: formData.goodsNature || '',
            cr: '',
            otp: otp,
          }
        : {
            name: formData.companyName,
            phone: formData.phone,
            email: formData.email,
            id_number: formData.legalId,
            bod: formData.dob,
            auth_name: formData.authName,
            auth_mobile: formData.authMobile,
            vat: formData.vat || '',
            cr: formData.cr || '',
            otp: otp,
          };

          const res = await axios.post(
            'https://makhzny.odoo.com/web/register_new_customer_api',
            payload,
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
          

    if (res.data?.result?.error) {
      alert('Registration failed: ' + res.data.result.error);
      console.error('Registration failed with error:', res.data.result.error);
      console.log('Sending this payload:', payload);

    } else {
      alert('Registration successful!');
      console.log('Server response:', res.data);
    }
    
  } catch (error) {
    console.error('Error during registration:', error);
    alert('Registration failed: ' + (error.response?.data?.message || error.message));
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
            value={formData.fullName}
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
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />{" "}
        <button onClick={handleSendOtp}>Send OTP</button>
<input
  type="text"
  placeholder="Enter OTP"
  value={otp}
  onChange={(e) => setOtp(e.target.value)}
/>

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}

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


<input
  type="text"
  placeholder="Legal Representative Name"
  name="legalName"
  onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
/>

<input
  type="text"
  placeholder="Legal Representative ID Number"
  name="legalId"
  onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
/>

<input
  type="date"
  placeholder="Legal Representative Date of Birth"
  name="dob"
  onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
/>

<input
  type="text"
  placeholder="Company Name"
  name="companyName"
  value={formData.companyName}

  onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
/>

<input
  type="text"
  placeholder="C.R Number"
  name="cr"
  onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
/>

<input
  type="text"
  placeholder="VAT Registration"
  name="vat"
  onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
/>

<input
  type="text"
  placeholder="+966XXXXXXXXXXXX"
  name="phone"
  value={formData.phone}
  onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
/>

<button onClick={handleSendOtp}>Send OTP</button>

<input
  type="text"
  placeholder="Your OTP Number"
  value={otp}
  onChange={(e) => setOtp(e.target.value)}
/>

<input
  type="email"
  placeholder="Company Email"
  name="email"
  onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
/>

<input
  type="text"
  placeholder="Nature of Goods stored"
  name="goodsNature"
  onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
/>

<input
  type="text"
  placeholder="Authorized Person ID Number"
  name="authId"
  onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
/>

<input
  type="text"
  placeholder="Authorized Person Mobile Number"
  name="authMobile"
  onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
/>

<input
  type="text"
  placeholder="Authorized Person Name"
  name="authName"
  onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
/>

<input
  type="text"
  placeholder="Address (Exactly as Registered on ZATCA)"
  name="address"
  onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
/>

        </>
      )}

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
