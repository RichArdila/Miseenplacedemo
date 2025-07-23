import React from "react";
import "../styles/Buttons.css";
import { useNavigate } from "react-router-dom";
import { appData } from "../data/appData"; // Asegúrate de importar tus datos

const CategoryGrid = () => {
  const navigate = useNavigate();

  // Obtén las categorías desde los datos
  const categories = Object.keys(appData["Mise en Place"]);

  return (
    <div className="category-grid">
      {categories.map((category) => (
        <button
          key={category}
          className="category-button"
          onClick={() => navigate(`/categorias/${category}`)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryGrid;
