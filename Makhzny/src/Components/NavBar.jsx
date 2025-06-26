import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { NavLink, useNavigate,Link } from 'react-router-dom';

import '../Styles/NavBar.css';

function NavBar() {
  const navigate = useNavigate();
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);


  return (
    <div className='Nav-Bar'>
    <div className="navbar-box">
  <div className="Nav-logo">
    <img src={logo} alt="logo" />
  </div>

  <div className="hamburger" onClick={() => setMobileMenuOpen(prev => !prev)}>
    ☰
  </div>

  <div className={MobileMenuOpen ? "menu-content open" : "menu-content"}>
    <ul className="nav-links">

<li><NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink></li>
  <li><NavLink to="/RentNow" onClick={closeMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>Rent now</NavLink></li>
  <li><NavLink to="/RequestQuote" onClick={closeMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>Request a quote</NavLink></li>
  <li><NavLink to="/TransferRequest" onClick={closeMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>Moving</NavLink></li>
  <li><NavLink to="/howitWorks" onClick={closeMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>How it works</NavLink></li>


      
 
  <li><NavLink to="/GetInTouch" onClick={closeMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>Get In Touch</NavLink></li>


  <li className="dropdown-parent">
  <span onClick={() => setDropdownOpen(prev => !prev)} className="plus-toggle">
    <span className={`arrow-icon ${dropdownOpen ? 'open' : ''}`}></span>
  </span>

  <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
    <li>
      <NavLink
        to="/BecomePartner"
        onClick={closeMenu}
        className={({ isActive }) => isActive ? 'active-link' : ''}
      >
        Become a Partner
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/FAQ"
        onClick={closeMenu}
        className={({ isActive }) => isActive ? 'active-link' : ''}
      >
        FAQ
      </NavLink>
    </li>
  </ul>
</li>


   


    </ul>

    

    


  </div>

  <div className="right-controls">
      <div className="flags">
        <select name="language" id="language-select">
          <option value="en">🇬🇧 EN</option>
          <option value="ar">🇸🇦 AR</option>
        </select>
      </div>
      <button onClick={() => {
        closeMenu();
        navigate('/LogIn');
      }}>Sign in</button>
    </div>

</div>

    </div>
  );
}

export default NavBar;
