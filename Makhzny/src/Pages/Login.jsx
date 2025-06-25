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
    try {
      const res = await axios.post('https://makhzny.odoo.com/generate_otp', {
        phone_number: phone
      });

      console.log('OTP sent:', res.data);
      alert("OTP sent successfully ");
      setOtpSent(true); 
    } catch (err) {
      console.error('Error sending OTP:', err);
      alert('Failed to send OTP: ' + err.message);
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post('https://makhzny.odoo.com/web/customer_login_api', {
        phone,
        otp,
      });

      console.log('Login response:', res.data);
      localStorage.setItem('token', res.data.token); 
      alert("Login successful ");
      navigate('/');
    } catch (err) {
      console.error('Login failed:', err);
      alert('Login failed: ' + err.response?.data?.message || err.message);
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
