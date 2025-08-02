import React from "react";
import "../styles/Buttons.css";
import { useParams, useNavigate } from "react-router-dom";
import { appData } from "../data/appData";

const SubCategoryGrid = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const subCategories = Object.keys(appData["Mise en Place"]?.[category] || {});

  return (
    <div className="subcategory-grid">
      {subCategories.map((subCategory) => (
        <button
          key={subCategory}
          className="subcategory-button"
          onClick={() => navigate(`/Categories/${category}/${subCategory}`)}
        >
          {subCategory}
        </button>
      ))}
    </div>
  );
};

export default SubCategoryGrid;
