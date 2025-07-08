import React from "react";
import "../styles/Buttons.css"; // Importa los estilos de botones

const MiseEnPlaceHome = ({ onNavigate }) => {
  return (
    <div className="home-container">
      <button
        className="mise-en-place-button"
        onClick={() => onNavigate("Mise en Place")}
      >
        Mise en Place
      </button>
    </div>
  );
};

export default MiseEnPlaceHome;
