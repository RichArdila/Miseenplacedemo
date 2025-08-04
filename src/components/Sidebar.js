import React from "react";
import "../styles/Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { LuBookText } from "react-icons/lu";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleClearVerified = () => {
    localStorage.removeItem("verifiedItems");
    window.location.reload();
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <span className="back-arrow" onClick={() => navigate(-1)}>
          &lt; ChefReady Pro
        </span>
      </div>
      <ul className="sidebar-menu">
        <li className="menu-item">
          <Link to="Dashboard" className="dashboard-link">
            <MdDashboard className="icon" /> Dashboard
          </Link>
        </li>
        <li className="menu-item-parent">
          <span onClick={() => navigate("/Categories")}>
            <LuBookText className="icon" /> Mise en Place
          </span>
        </li>
        <li className=" verified-list-button-container">
          <button
            className="verified-list-button"
            onClick={() => navigate("/Verified")}
          >
            Verified List
          </button>
        </li>
        <li className="">
          <button
            className="verified-list-button"
            onClick={handleClearVerified}
          >
            Clear verified list
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
