import React, { useState, useEffect } from "react";
import "../styles/Lists.css";
import "../styles/FilterButtons.css";
import { useParams } from "react-router-dom";
import { appData } from "../data/appData";

const ItemsList = () => {
  const { category, subcategory } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    // get all the items from the subcategory
    const allItems = appData["Mise en Place"]?.[category]?.[subcategory] || [];

    // get the verified items from the local storage
    const stored = localStorage.getItem("verifiedItems");
    const verifiedItems = stored ? JSON.parse(stored) : [];

    //filter the items that are not verified
    const unverifiedItems = allItems.filter(
      (item) =>
        !verifiedItems.some((verifiedItem) => verifiedItem.id === item.id)
    );

    setItems(unverifiedItems);
  }, [category, subcategory]);

  const handleVerifyItem = (item) => {
    // save the item in the local storage
    const stored = localStorage.getItem("verifiedItems");
    const verifiedItems = stored ? JSON.parse(stored) : [];
    if (!verifiedItems.some((i) => i.id === item.id)) {
      const verifiedItem = {
        ...item,
        verifiedBy: "Usuario Demo",
        verifiedAt: new Date().toLocaleString(),
      };
      verifiedItems.push(verifiedItem);
      localStorage.setItem("verifiedItems", JSON.stringify(verifiedItems));
    }
    // remove the item from the list
    setItems((prev) => prev.filter((i) => i.id !== item.id));
  };

  return (
    <div className="items-list-container">
      <div className="filter-buttons">
        <button className="filter-button active">All</button>
        <button className="filter-button">Refrigerator 1</button>
        <button className="filter-button">Refrigerator 2</button>
        <button className="filter-button">Refrigerator 3</button>
        <button className="filter-button">Table 1</button>
        <button className="filter-button">Table 2</button>
      </div>
      <div className="items-list">
        {items.length === 0 ? (
          <p>No items to verify in this subcategory.</p>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="item-card"
              onClick={() => handleVerifyItem(item)}
              style={{ cursor: "pointer" }}
            >
              <div className="item-info">
                <span className="item-id">#{item.id}</span>
                <span className="item-name">{item.name}</span>
              </div>
              <div className="item-details">
                <span className="item-quantity">{item.quantity}</span>
                <img src={item.image} alt={item.name} className="item-image" />
                {/* <button
                  className="verify-button"
                  onClick={() => handleVerifyItem(item)}
                >
                  Validate
                </button> */}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ItemsList;
