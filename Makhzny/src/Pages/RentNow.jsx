import React, { useState, useEffect } from "react";
import RentCard from "../Components/RentCard";
import { getBranches } from "../api/products";

import "../Styles/RentNow.css";

function RentNow() {
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minSize, setMinSize] = useState("");
  const [maxSize, setMaxSize] = useState("");

  useEffect(() => {
    async function fetchBranches() {
      try {
        const data = await getBranches();
        console.log("Fetched success:", data);
        setBranches(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to fetch ", err);
      }
    }

    fetchBranches();
  }, []);

  const handleSelect = (e) => {
    setSelectedBranch(e.target.value);
  };

  const filteredBranches = selectedBranch
    ? branches.filter((b) => b.name === selectedBranch)
    : branches;

  const handleApplyFilters = async () => {
    try {
      const filters = {
        Min_Price: minPrice || 0,
        Max_Price: maxPrice || 999999,
        Min_Size: minSize || 0,
        Max_Size: maxSize || 999999,
      };

      const data = await getBranches(filters);
      console.log("Fetched:", data);

      const locationFiltered = selectedBranch
        ? (Array.isArray(data) ? data : []).filter(
            (b) => b.name === selectedBranch
          )
        : Array.isArray(data)
        ? data
        : [];

      setBranches(locationFiltered);
    } catch (err) {
      console.error("Failed to fetch :", err);
    }
  };

  return (
    <div className="RentNow">
      <div className="Rent-Bar">
        <div className="Rent-Bar-box">
          <h2>Rent now</h2>
          <p>
            Experience the freedom of a clutter-free space today! At{" "}
            <strong>Makhzny</strong>, we invite you to elevate your lifestyle by
            renting our secure and accessible storage solutions.
          </p>
        </div>
      </div>
      <div className="range-container">
      <div className="Range-box">
        <div className="range-filter">
          <p>Price Range</p>
          <div className="input-pair">
            <input
              type="number"
              placeholder="0"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <span> - </span>
            <input
              type="number"
              placeholder="6210"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="range-filter">
          <p>Size Range</p>
          <div className="input-pair">
            <input
              type="number"
              placeholder="0"
              value={minSize}
              onChange={(e) => setMinSize(e.target.value)}
            />
            <span> - </span>
            <input
              type="number"
              placeholder="26"
              value={maxSize}
              onChange={(e) => setMaxSize(e.target.value)}
            />
          </div>
        </div>

        <div className="range-filter">
          <p>Location</p>
          <select onChange={handleSelect}>
  <option value="">All</option>
  {(() => {
    console.log("Branches for select:", branches);
    return branches.map((branch) => (
      <option key={branch.id} value={branch.name}>
        {branch.name}
      </option>
    ));
  })()}
</select>

        </div>

        <div className="range-filter apply-button">
          <button onClick={handleApplyFilters}>Apply</button>
        </div>
      </div>
      </div>

     

      <RentCard cards={filteredBranches} />
    </div>
  );
}

export default RentNow;
