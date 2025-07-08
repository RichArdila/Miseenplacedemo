import React from "react";
import "../styles/App.css"; // Contiene los estilos para el breadcrumb

const Breadcrumb = ({ path, onNavigate }) => {
  return (
    <div className="breadcrumb">
      {path.map((segment, index) => (
        <span key={index} onClick={() => onNavigate(segment)}>
          {segment} {index < path.length - 1 && "> "}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
