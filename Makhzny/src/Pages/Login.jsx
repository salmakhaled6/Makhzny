import React, { useState } from 'react';
import '../Styles/Login.css'; 
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');


  const handleLogin = async () => {
    try {
      const res = await axios.post('https://makhzny.odoo.com/customer_login_api', {
        phone,
        otp,
      });
  
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
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

      <label htmlFor="">Send OTP</label>
      <input
        type="number"
        placeholder="Your OTP Number"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <div className='btns'>
        <button className='btn1' onClick={handleLogin}>Login</button>
        <button className='btn2' onClick={() => navigate('/SignUp')}>Sign Up</button>
      </div>
    </div>
  );
}

export default Login;
