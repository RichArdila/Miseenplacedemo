// ... código existente ...
import React, { useEffect, useState } from "react";
import "../styles/Lists.css";
import "../styles/FilterButtons.css";

const VerifiedList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Obtener los items verificados desde localStorage
    const stored = localStorage.getItem("verifiedItems");
    if (stored) {
      setItems(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="verified-list-container">
      <div className="filter-buttons">
        <button className="filter-button active">Todo</button>
        <button className="filter-button">Refrigerador 1</button>
        <button className="filter-button">Refrigerador 2</button>
        <button className="filter-button">Refrigerador 3</button>
        <button className="filter-button">Mesa 1</button>
        <button className="filter-button">Mesa 2</button>
      </div>
      <div className="verified-items-list">
        {items.length === 0 ? (
          <p>No hay elementos verificados.</p>
        ) : (
          items.map((item, index) => (
            <div key={index} className="verified-item-card">
              <div className="verified-item-info">
                <span className="verified-item-name">{item.name}</span>
                <span className="verified-item-details">
                  Verificado por: {item.verifiedBy} el {item.verifiedAt}
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
