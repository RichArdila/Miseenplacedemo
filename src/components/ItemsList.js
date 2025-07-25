import React, { useState } from "react";
import "../styles/Lists.css";
import "../styles/FilterButtons.css";
import { useParams } from "react-router-dom";
import { appData } from "../data/appData";

const ItemsList = () => {
  const { categoria, subcategoria } = useParams();
  const initialItems =
    appData["Mise en Place"]?.[categoria]?.[subcategoria] || [];
  const [items, setItems] = useState(initialItems);

  const handleVerifyItem = (item) => {
    // Guardar en localStorage
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
    // Eliminar el ítem de la lista actual
    setItems((prev) => prev.filter((i) => i.id !== item.id));
  };

  return (
    <div className="items-list-container">
      <div className="filter-buttons">
        <button className="filter-button active">Todo</button>
        <button className="filter-button">Refrigerador 1</button>
        <button className="filter-button">Refrigerador 2</button>
        <button className="filter-button">Refrigerador 3</button>
        <button className="filter-button">Mesa 1</button>
        <button className="filter-button">Mesa 2</button>
      </div>
      <div className="items-list">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <div className="item-info">
              <span className="item-id">#{item.id}</span>
              <span className="item-name">{item.name}</span>
            </div>
            <div className="item-details">
              <span className="item-quantity">{item.quantity}</span>
              <img src={item.image} alt={item.name} className="item-image" />
              <button
                className="verify-button"
                onClick={() => handleVerifyItem(item)}
              >
                Verificar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsList;
