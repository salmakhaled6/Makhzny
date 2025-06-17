import React from 'react'
import transfer from '../../assets/transfer.png'
import '../../Styles/TransferRequest.css'
import { useNavigate } from 'react-router-dom'


function TransferRequest() {
  const navigate = useNavigate()

  const handleRequestClick = () => {
    navigate('/Form')
  }

  return (
    <div className='transferReques-page'>
        <div className="transfer-request">
        <div className="transfer-request-box">

<h2>Transfer request</h2>
<p>
"We ensure safe and fast transfer of your belongings Professional moving service - Punctual & fully insured"
</p>
</div>
        </div>
        <div className="transfer-content">
        <img src={transfer} alt="transfer icon" />
        <p>You have no transfer requests at the moment!</p>
        <button className="request-btn" onClick={handleRequestClick}>Request Now</button>
      </div>

      
    </div>
  )
}

export default TransferRequest
