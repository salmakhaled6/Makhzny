import React from 'react'
// import '../Styles/OurServices.css'

import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'

function OurServices() {
  return (
    <div className="our-services-container">
      <h2>Our Services !</h2>
      <div className="our-services-grid">
        <div className="service-card">
          <img src={p1} alt="Self Storage" />
          <p>Self Storage</p>
        </div>
        <div className="service-card">
          <img src={p2} alt="Private Offices" />
          <p>Private Offices</p>
        </div>
        <div className="service-card">
          <img src={p3} alt="Meeting Rooms" />
          <p>Meeting Rooms</p>
        </div>
        <div className="service-card">
          <img src={p4} alt="Moving" />
          <p>Moving</p>
        </div>
      </div>
    </div>
  )
}

export default OurServices
