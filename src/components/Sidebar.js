// ... código existente ...
import React from "react";
import "../styles/Sidebar.css";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <span className="back-arrow" onClick={() => navigate(-1)}>
          &lt; ChefReady Pro
        </span>
      </div>
      <ul className="sidebar-menu">
        <li className="menu-item">
          <Link to="/" className="icon">
            📍 Dashboard
          </Link>
        </li>
        <li className="menu-item-parent">
          <span onClick={() => navigate("/categorias")}>Mise en Place</span>
          {/* Si quieres mostrar subcategorías, puedes agregar rutas dinámicas aquí */}
        </li>
        <li className="menu-item verified-list-button-container">
          <button
            className="verified-list-button"
            onClick={() => navigate("/verificados")}
          >
            Lista Verificada
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
