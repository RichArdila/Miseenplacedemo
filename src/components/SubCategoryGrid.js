import React from "react";
import "../styles/Buttons.css"; // Importa los estilos de botones

const SubCategoryGrid = ({ subCategories, onNavigate }) => {
  return (
    <div className="subcategory-grid">
      {subCategories.map((subCategory) => (
        <button
          key={subCategory}
          className="subcategory-button"
          onClick={() => onNavigate(subCategory)}
        >
          {subCategory}
        </button>
      ))}
    </div>
  );
};

export default SubCategoryGrid;
