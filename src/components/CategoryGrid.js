import React from "react";
import "../styles/Buttons.css"; // Importa los estilos de botones

const CategoryGrid = ({ categories, onNavigate }) => {
  return (
    <div className="category-grid">
      {categories.map((category) => (
        <button
          key={category}
          className="category-button"
          onClick={() => onNavigate(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryGrid;
