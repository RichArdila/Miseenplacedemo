import React, { useEffect, useState } from "react";
import "../styles/Lists.css";
import "../styles/FilterButtons.css";

const VerifiedList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // get the verified items from the local storage
    const stored = localStorage.getItem("verifiedItems");
    if (stored) {
      setItems(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="verified-list-container">
      <div className="filter-buttons">
        <button className="filter-button active">All</button>
        <button className="filter-button">Refrigerator 1</button>
        <button className="filter-button">Refrigerator 2</button>
        <button className="filter-button">Refrigerator 3</button>
        <button className="filter-button">Table 1</button>
        <button className="filter-button">Table 2</button>
      </div>
      <div className="verified-items-list">
        {items.length === 0 ? (
          <p>No verified items.</p>
        ) : (
          items.map((item, index) => (
            <div key={index} className="verified-item-card">
              <div className="verified-item-info">
                <span className="verified-item-name">{item.name}</span>
                <span className="verified-item-details">
                  Verified by: {item.verifiedBy} at {item.verifiedAt}
                </span>
              </div>
              <img
                src={item.image}
                alt={item.name}
                className="verified-item-image"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default VerifiedList;
