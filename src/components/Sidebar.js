import React from "react";
import "../styles/Sidebar.css"; // Importa los estilos de la barra lateral
import { appData } from "../data/appData"; // Importa los datos de la aplicación

const Sidebar = ({ path, onNavigate }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <span
          className="back-arrow"
          onClick={() =>
            path.length > 1 && onNavigate(path[path.length - 2] || "Home")
          }
        >
          &lt; ChefReady Pro
        </span>
      </div>
      <ul className="sidebar-menu">
        <li
          className={`menu-item ${
            path[0] === "Home" && path.length === 1 ? "active" : ""
          }`}
          onClick={() => onNavigate("Home")}
        >
          <span className="icon">📍</span> Dashboard
        </li>
        <li className="menu-item-parent">
          <span onClick={() => onNavigate("Mise en Place")}>Mise en Place</span>
          {path.includes("Mise en Place") && (
            <ul className="submenu">
              {Object.keys(appData["Mise en Place"]).map((category) => (
                <li
                  key={category}
                  className={`submenu-item ${
                    path.includes(category) ? "active" : ""
                  }`}
                  onClick={() => onNavigate(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className="menu-item verified-list-button-container">
          <button
            className="verified-list-button"
            onClick={() => onNavigate("Verified List")}
          >
            Lista Verificada
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
