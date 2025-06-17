import React, { useState } from 'react';
import '../Styles/FAQ.css';

const faqPart1 = [
  { question: "What is Self Storage ?", answer: "Self Storage is renting a warehouse with a private space that suits your storage needs." },
  { question: "How much Space does my Warehouse provide ?​", answer: "Private spaces, air-conditioned and monitored by cameras, start from one meter by meter to 36 square metres " },
  { question: "How much space do I need?", answer: "The space is estimated by the customer after packing and unpacking the items or placing them in boxes. If the correct estimate is not known, a picture of the items to be stored is shared and our customer service will inform you.  " },
  { question: "Are individuals included in my store?", answer: "Self-storage services are available to individuals.  " },
  { question: "Entry times?", answer: " Upon completion of the rental procedures, entry is available from 6 am to 1 midnight, all days of the week.  " },
  { question: "Items allowed to be stored", answer: " Store all personal belongings such as furniture, electronics, archive files, books or packaging materials.  " },
  { question: "Is there a transportation and packaging service?", answer: "There are transportation, packaging, and inventory management services  " },
  { question: "The contract expired and the unit was not delivered", answer: "When the contract period expires and the unit is not vacated, the contract is automatically renewed for an additional month, and it is mandatory to pay the bill  " },
  { question: "The new bill came and I could not pay while my belongings were in the storage unit", answer: " The unit will be closed by the warehouse management until the late payment is scheduled  " },



];

const faqPart2 = [
  { question: "Warehouse Permits ", answer: "We provide Food and Drug Authority permits (licensed third-party warehouse). Categories: Cosmetics – Medical Supplies – Food Products. Municipality and Civil Defense permits are also available.  " },
  { question: "Are electronic orders picked up and delivered?​", answer: "Direct pickup and delivery from our warehouse are not available, but we coordinate with another company upon agreement.  " },
  { question: "Is inventory management provided?​", answer: "We do not offer inventory management. The storage unit is managed by the customer.  " },
  { question: "Do you obtain Food and Drug Authority permits for my product?​", answer: "No, but our warehouse permit facilitates the process of obtaining your product's permit (you can apply under our license).  " },
  { question: "What are the benefits of renting a licensed warehouse?", answer: "It simplifies the process of obtaining a Food and Drug Authority permit.  " },
  { question: "What are the entry hours?", answer: "Once the rental process is complete, entry is available from 6 AM to 1 AM every day of the week.  " },
  { question: "What happens if the contract expires and the unit is not vacated?​", answer: "If the contract expires and the unit is not vacated, the contract is automatically extended for an additional month, and the invoice must be paid.  " },
  { question: "What if I can't pay the new invoice and my items are still in the storage unit?​", answer: " The unit will be locked by warehouse management until the overdue payment is scheduled.  " },
  { question: "Who manages my storage unit?", answer: "​The unit, including loading and unloading goods, is managed by the customer.  " },
  { question: "What are the payment methods?​", answer: " Tabby – Visa – Mada – Direct payment at branches.  " },
  { question: "Does my unit have electrical outlets?", answer: "No, there is no power source.  " },
  { question: "What is the temperature in the storage units?", answer: "The spaces are air-conditioned, with temperatures ranging from 18 to 26 degrees Celsius. Note: Some non-air-conditioned spaces are available at the Dammam branch.  " },
  { question: "Can I store a car or use the unit as a private parking spot ?​", answer: " No, cars cannot be stored due to the narrow aisles, which do not accommodate vehicles.  " },
  { question: "Are private offices available for customers?​", answer: " Yes, private or shared workspaces are available for monthly rent in Riyadh and Jeddah.  " },

];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [openIndex2, setOpenIndex2] = useState(null);

  const toggleFAQ = (index, setOpen, open) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-Bar">
        <div className="faq-Bar-box">
          <h2>Frequently asked questions for individuals </h2>
          <p>Designed to provide you with quick and comprehensive answers to the most common queries. We understand that clarity is key to a seamless customer experience.

.</p>
        </div>
      </div>

      <div className="FAQ-part1">
        {faqPart1.map((item, index) => (
          <div
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
            key={index}
            onClick={() => toggleFAQ(index, setOpenIndex, openIndex)}
          >
            <div className="faq-question">
              <span>{item.question}</span>
              <span className="faq-toggle">{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>

      <div className="faq-Bar">
        <div className="faq-Bar-box">
          <h2>Frequently asked questions for Companies</h2>
          <p>Designed to provide you with quick and comprehensive answers to the most common queries. We understand that clarity is key to a seamless customer experience.

.</p>
        </div>
      </div>

      <div className="FAQ-part2">
        {faqPart2.map((item, index) => (
          <div
            className={`faq-item ${openIndex2 === index ? 'open' : ''}`}
            key={index}
            onClick={() => toggleFAQ(index, setOpenIndex2, openIndex2)}
          >
            <div className="faq-question">
              <span>{item.question}</span>
              <span className="faq-toggle">{openIndex2 === index ? '-' : '+'}</span>
            </div>
            {openIndex2 === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
