import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { NavLink, useNavigate,Link } from 'react-router-dom';
import { useLang } from '../contexts/LanguageContext';
import { useEffect } from 'react';



import '../Styles/NavBar.css';

function NavBar() {
  const navigate = useNavigate();
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const [showUserMenu, setShowUserMenu] = useState(false);
const token = localStorage.getItem('token');

  const [userName, setUserName] = useState(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    return storedUser?.name || null;
  });

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user'); 
    setShowUserMenu(false);
    navigate('/');
    window.location.reload(); 
  };
  
  
  



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

    <li><NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>{t('home')}</NavLink></li>
<li><NavLink to="/RentNow" onClick={closeMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>{t('rentNow')}</NavLink></li>
<li><NavLink to="/RequestQuote" onClick={closeMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>{t('requestQuote')}</NavLink></li>
<li><NavLink to="/TransferRequest" onClick={closeMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>{t('moving')}</NavLink></li>
<li><NavLink to="/howitWorks" onClick={closeMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>{t('howItWorks')}</NavLink></li>
<li><NavLink to="/GetInTouch" onClick={closeMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>{t('getInTouch')}</NavLink></li>


      
 


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
        {t('becomePartner')}
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/FAQ"
        onClick={closeMenu}
        className={({ isActive }) => isActive ? 'active-link' : ''}
      >
        {t('faq')}
      </NavLink>
    </li>
  </ul>
</li>



   


    </ul>

    
{MobileMenuOpen && (
  <div className="right-controls mobile-only">
    <div className="flags">
      <select
        name="language"
        id="language-select"
        value={lang}
        onChange={(e) => {
          const newLang = e.target.value;
          setLang(newLang);
          document.body.dir = newLang === 'ar' ? 'rtl' : 'ltr';
        }}
      >
        <option value="en">🇬🇧 EN</option>
        <option value="ar">🇸🇦 AR</option>
      </select>
    </div>

    {token ? (
  <div className="user-dropdown">
    <span
      className="user-name"
      onClick={() => setShowUserMenu((prev) => !prev)}
      style={{ cursor: 'pointer' }}
    >
      👤 Welcome ▾
    </span>

    {showUserMenu && (
      <ul className="dropdown-logout">
        <li onClick={handleLogout}>Logout</li>
      </ul>
    )}
  </div>
) : (
  <button onClick={() => navigate('/LogIn')}>
    {t('signIn')}
  </button>
)}



  </div>
)}

    


  </div>
<div className="right-controls desktop-only">
  <div className="flags">
    <select
      name="language"
      id="language-select"
      value={lang}
      onChange={(e) => {
        const newLang = e.target.value;
        setLang(newLang);
        document.body.dir = newLang === 'ar' ? 'rtl' : 'ltr';
      }}
    >
      <option value="en">🇬🇧 EN</option>
      <option value="ar">🇸🇦 AR</option>
    </select>
  </div>

  {token ? (
  <div className="user-dropdown">
    <span
      className="user-name"
      onClick={() => setShowUserMenu((prev) => !prev)}
      style={{ cursor: 'pointer' }}
    >
      👤 Welcome ▾
    </span>

    {showUserMenu && (
      <ul className="dropdown-logout">
        <li onClick={handleLogout}>Logout</li>
      </ul>
    )}
  </div>
) : (
  <button onClick={() => navigate('/LogIn')}>
    {t('signIn')}
  </button>
)}



</div>


</div>

    </div>
  );
}

export default NavBar;
