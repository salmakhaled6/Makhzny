import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/NavBar.css';

function NavBar() {
  const navigate = useNavigate();
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

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
      <li><Link to="/" onClick={closeMenu}>Home</Link></li>
      <li><Link to="/RentNow" onClick={closeMenu}>Rent now</Link></li>
      <li><Link to="/RequestQuote" onClick={closeMenu}>Request a quote</Link></li>
      <li><Link to="/TransferRequest" onClick={closeMenu}>Moving</Link></li>
      {/* <li> <Link to='/howitWorks'  onClick={closeMenu}>How it works </Link> </li>
      <li> <Link to='/FAQ'  onClick={closeMenu}>FAQ </Link> </li> */}
      <li> <Link to='/GetInTouch'  onClick={closeMenu}>Get In Touch </Link> </li>

      <li> <Link to='/BecomePartner'  onClick={closeMenu}>Become a Partner </Link> </li>


    </ul>

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

    </div>
  );
}

export default NavBar;
