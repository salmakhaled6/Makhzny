import React, { useState } from 'react'
import '../../Styles/TransferOrder.css'

function TransferOrder() {
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const orders = [
    {
      number: 'ORD12345',
      date: '2025-06-01',
      status: 'Pending',
      content: 'This order includes 2 boxes from Cairo to Giza. Pickup scheduled for 2 PM.'
    },
    {
      number: 'ORD12346',
      date: '2025-05-28',
      status: 'Pending',
      content: 'Furniture set delivery from Alexandria to Mansoura.'
    },
    {
      number: 'ORD12347',
      date: '2025-05-20',
      status: 'Complete',
      content: 'Books and items delivered from Aswan to Luxor.'
    }
  ]

  const handleViewDetails = (order) => {
    setSelectedOrder(order)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedOrder(null)
  }

  return (
    <div className="transfer-order-container">
      <div className="transfer-request">
        <div className="transfer-request-box">
          <h2>Transfer request</h2>
          <p>
            "We ensure safe and fast transfer of your belongings. Professional moving service – Punctual & fully insured"
          </p>
        </div>
      </div>

      <h3 className="orders-heading">Current Orders</h3>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Order Date</th>
            <th>Order Status</th>
            <th>Order Details</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.number}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>
                <button className="view-btn" onClick={() => handleViewDetails(order)}>
                  View details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && selectedOrder && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Order {selectedOrder.number}</h3>
            <p>{selectedOrder.content}</p>
            <button onClick={closeModal} className="close-modal-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default TransferOrder
