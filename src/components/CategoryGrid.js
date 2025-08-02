import React from "react";
import "../styles/Buttons.css";
import { useNavigate } from "react-router-dom";
import { appData } from "../data/appData";

const CategoryGrid = () => {
  const navigate = useNavigate();

  const Categories = Object.keys(appData["Mise en Place"]);

  return (
    <div className="category-grid">
      {Categories.map((category) => (
        <button
          key={category}
          className="category-button"
          onClick={() => navigate(`/Categories/${category}`)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryGrid;
