import React, { useEffect, useState } from "react";
import axios from "axios";
import back from "../../assets/back.png";
import "../../Styles/Form.css";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    partner_id: 4202,
    item_type_id: "",
    item_size_id: "",
    date: "",
    city_id: "",
    branch_id: 2,
    detailed_address_from: "",
    notes: "",
    request_unpacking: false,
  });

  const [itemTypes, setItemTypes] = useState([]);
  const [itemSizes, setItemSizes] = useState([]);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    axios
      .get("https://makhzny.odoo.com/api/item_types")
      .then((res) => setItemTypes(res.data.data));

    axios
      .get("https://makhzny.odoo.com/api/item_sizes")
      .then((res) => setItemSizes(res.data.data));

    axios
      .get("https://makhzny.odoo.com/api/get_cities")
      .then((res) => setCities(res.data.data));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://makhzny.odoo.com/api/transport_requests",
        formData
      );
      alert("Transfer request submitted successfully!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to submit transfer request");
    }
  };

  return (
    <div className="form-container">
      <div className="transfer-hero">
        <div className="transfer-hero-box">
          <h2>Transfer request</h2>
          <p>
            "We ensure safe and fast transfer of your belongings. Professional
            moving service – Punctual & fully insured"
          </p>
        </div>
      </div>

      <div className="form-section">
        <div className="form-img-box">
          <img
            src={back}
            alt="Back"
            className="form-image"
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer" }}
          />
          <p className="form-heading">Submit a transfer request</p>
        </div>

        <form className="transfer-form" onSubmit={handleSubmit}>
          <label>Item Types</label>
          <select
            name="item_type_id"
            value={formData.item_type_id}
            onChange={handleChange}
            required
          >
            <option value="">Select Item Type</option>
            {itemTypes &&
              itemTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
          </select>

          <label>Items Size</label>
          <select
            name="item_size_id"
            value={formData.item_size_id}
            onChange={handleChange}
            required
          >
            <option value="">Select Item Size</option>
            {itemSizes &&
              itemSizes.map((size) => (
                <option key={size.id} value={size.id}>
                  {size.name}
                </option>
              ))}
          </select>

          <label>Shipping Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label>Shipping Address</label>
          <div className="address-inputs">
            <p>From</p>
            <input
              type="text"
              name="detailed_address_from"
              value={formData.detailed_address_from}
              onChange={handleChange}
              required
            />
            <p>To</p>
            <select
              name="city_id"
              value={formData.city_id}
              onChange={handleChange}
              required
            >
              <option value="">Transfer to</option>
              {cities &&
                cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
            </select>
          </div>

          <label>Additional Notes</label>
          <input
            type="text"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />

          <div className="checkbox-group">
            <input
              type="checkbox"
              name="request_unpacking"
              checked={formData.request_unpacking}
              onChange={handleChange}
            />
            <p>Request Items Disassembly Service</p>
          </div>

          <button className="submit-btn" type="submit">
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
