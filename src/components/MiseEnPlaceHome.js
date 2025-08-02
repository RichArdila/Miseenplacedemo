import React from "react";
import "../styles/Buttons.css";
import { useNavigate } from "react-router-dom";

const MiseEnPlaceHome = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <button
        className="mise-en-place-button"
        onClick={() => navigate("/Categories")}
      >
        Mise en Place
      </button>
    </div>
  );
};

export default MiseEnPlaceHome;
