import React from "react";
import "../styles/Buttons.css";
import { useParams, useNavigate } from "react-router-dom";
import { appData } from "../data/appData";

const SubCategoryGrid = () => {
  const { categoria } = useParams();
  const navigate = useNavigate();

  // Obtén las subcategorías desde los datos
  const subCategories = Object.keys(
    appData["Mise en Place"]?.[categoria] || {}
  );

  return (
    <div className="subcategory-grid">
      {subCategories.map((subCategory) => (
        <button
          key={subCategory}
          className="subcategory-button"
          onClick={() => navigate(`/categorias/${categoria}/${subCategory}`)}
        >
          {subCategory}
        </button>
      ))}
    </div>
  );
};

export default SubCategoryGrid;
