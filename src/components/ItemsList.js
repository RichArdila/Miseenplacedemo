import React, { useState, useEffect } from "react";
import "../styles/Lists.css";
import "../styles/FilterButtons.css";
import { useParams } from "react-router-dom";
import { appData } from "../data/appData";

const ItemsList = () => {
  const { category, subcategory } = useParams();
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const updateItems = () => {
      const allItems =
        appData["Mise en Place"]?.[category]?.[subcategory] || [];

      const stored = localStorage.getItem("verifiedItems");
      const verifiedItems = stored ? JSON.parse(stored) : [];

      const unverifiedItems = allItems.filter(
        (item) =>
          !verifiedItems.some((verifiedItem) => verifiedItem.id === item.id)
      );

      setItems(unverifiedItems);
    };

    updateItems();

    const handleStorageChange = (e) => {
      if (e.key === "verifiedItems") {
        updateItems();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [category, subcategory]);

  const handleVerifyItem = (item) => {
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

    setItems((prev) => prev.filter((i) => i.id !== item.id));
  };

  const hasLocations = items.some((item) => item.location);
  const uniqueLocations = [
    ...new Set(
      items.filter((item) => item.location).map((item) => item.location)
    ),
  ];

  const filteredItems =
    filter === "All" ? items : items.filter((item) => item.location === filter);

  return (
    <div className="items-list-container">
      {hasLocations && (
        <div className="filter-buttons">
          <button
            className={`filter-button ${filter === "All" ? "active" : ""}`}
            onClick={() => setFilter("All")}
          >
            All
          </button>
          {uniqueLocations.map((loc) => (
            <button
              key={loc}
              className={`filter-button ${filter === loc ? "active" : ""}`}
              onClick={() => setFilter(loc)}
            >
              {loc}
            </button>
          ))}
        </div>
      )}
      {!hasLocations && (
        <div className="filter-buttons">
          <button className="filter-button active">All</button>
        </div>
      )}

      <div className="items-list">
        {filteredItems.length === 0 ? (
          <p>No items to verify in this subcategory.</p>
        ) : (
          filteredItems.map((item) => (
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
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ItemsList;
