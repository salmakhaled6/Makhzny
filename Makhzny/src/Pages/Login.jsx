import React, { useState } from 'react';
import '../Styles/Login.css'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = async () => {
    if (!phone || phone.trim().length < 10) {
      alert(" Please enter a valid phone number.");
      return;
    }
  
    try {
      const requestBody = { phone_number: phone };
      console.log('Sending OTP with body:', requestBody); 
  
      const res = await axios.post('https://makhzny.odoo.com/generate_otp', requestBody);
  
      console.log('OTP sent response:', res.data);
      alert("OTP sent successfully");
      setOtpSent(true);
    } catch (err) {
      console.error('Error sending OTP:', err);
      alert('Failed to send OTP: ' + err.message);
    }
  };
  
  
  const handleLogin = async () => {
    if (!phone || phone.trim().length < 10) {
      alert(" Please enter a valid phone number.");
      return;
    }
  
    if (!otp || otp.trim().length < 4) {
      alert("Please enter a valid OTP.");
      return;
    }
  
    try {
      const requestBody = { phone, otp };
      console.log('Attempting login with body:', requestBody); 
  
      const res = await axios.post('https://makhzny.odoo.com/web/customer_login_api', requestBody);
  
      const result = res.data.result;
  
      if (result?.error === "Phone Number Does Not Exist") {
        alert(" Phone number does not exist.");
        return;
      }
  
      if (result?.error === "Otp Is invalid or expired") {
        alert(" The OTP is invalid or has expired.");
        return;
      }
  
      if (result?.error === "This Partner Is Deleted") {
        alert(" This account has been deleted.");
        return;
      }
  
      const token = res.data.token;
      const userData = { id: result?.partner_id }; 
  
      if (token) {
        localStorage.setItem('token', token);
      }
  
      if (userData?.id) {
        localStorage.setItem('user', JSON.stringify(userData));
      }
  
      alert("✅ Login successful");
      console.log(" Partner ID (user.id):", userData.id);
  
      navigate('/');
      window.location.reload();
    } catch (err) {
      console.error('Login failed:', err);
      alert('Login failed: ' + (err.response?.data?.message || err.message));
    }
  };
  
  
  

  return (
    <div className="login-container">
      <p className='heading'>Login</p>

      <input
        type="number"
        placeholder="Enter your phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button className='btn2' onClick={handleSendOtp}>Send OTP</button>

      {otpSent && (
        <>
          <input
            type="number"
            placeholder="Enter the OTP you received"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button className='btn1' onClick={handleLogin}>Login</button>
        </>
      )}

      <button className='btn2' onClick={() => navigate('/SignUp')}>Sign Up</button>
    </div>
  );
}

export default Login;
