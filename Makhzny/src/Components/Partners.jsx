import React from 'react';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';
import logo7 from '../assets/logo7.png';
import logo8 from '../assets/logo8.png';
import logo9 from '../assets/logo9.png';
import logo10 from '../assets/logo10.png';
import logo11 from '../assets/logo11.png';
import logo12 from '../assets/logo12.png';

import '../Styles/partners.css';

function Partners() {
  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11, logo12,
  ];

  return (
    <div className="partners-section">
      <h2>Our Clients</h2>
      <p>Driving Success Through Clients</p>
      <div className="partners-slider">
        <div className="partners-track">
          {logos.concat(logos).map((logo, index) => (
            <img key={index} src={logo} alt={`Client ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;
