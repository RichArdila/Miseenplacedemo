import React from "react";
import "../styles/App.css";
import { useLocation, useNavigate } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Divide la ruta en segmentos, ignorando el primer elemento vacío
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="breadcrumb">
      <span onClick={() => navigate("/")}>
        <span className="barra-verde"></span>Inicio
      </span>
      {pathnames.map((segment, index) => {
        const to = "/" + pathnames.slice(0, index + 1).join("/");
        return (
          <span key={to} onClick={() => navigate(to)}>
            {" > "}
            {segment}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
