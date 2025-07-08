import React from "react";
import "../styles/Lists.css"; // Importa los estilos de listas
import "../styles/FilterButtons.css"; // Importa los estilos de botones de filtro

const ItemsList = ({ items, onVerifyItem }) => {
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
                onClick={() => onVerifyItem(item)}
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
