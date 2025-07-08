import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Breadcrumb from "./components/Breadcrumb";
import MiseEnPlaceHome from "./components/MiseEnPlaceHome";
import CategoryGrid from "./components/CategoryGrid";
import SubCategoryGrid from "./components/SubCategoryGrid";
import ItemsList from "./components/ItemsList";
import VerifiedList from "./components/VerifiedList";
import { appData } from "./data/appData"; // Importa los datos de la aplicación

const defaultUser = "Usuario Demo"; // Usuario por defecto para la verificación

const App = () => {
  const [path, setPath] = useState(["Home"]);
  const [verifiedItems, setVerifiedItems] = useState([]);

  // Función para navegar a una nueva ruta
  const navigate = (newPathSegment) => {
    setPath((prevPath) => {
      // Si el nuevo segmento es "Mise en Place" y ya estamos en Home, reiniciamos el path
      if (
        newPathSegment === "Mise en Place" &&
        prevPath.length === 1 &&
        prevPath[0] === "Home"
      ) {
        return ["Home", newPathSegment];
      }
      // Si el nuevo segmento es "Home", volvemos a la raíz
      if (newPathSegment === "Home") {
        return ["Home"];
      }
      // Si el nuevo segmento ya está en el path, navegamos a ese punto
      const existingIndex = prevPath.indexOf(newPathSegment);
      if (existingIndex !== -1) {
        return prevPath.slice(0, existingIndex + 1);
      }
      // Si no, agregamos el nuevo segmento al path
      return [...prevPath, newPathSegment];
    });
  };

  // Función para verificar un elemento
  const verifyItem = (item, category, subCategory) => {
    const now = new Date();
    const dateTime = now.toLocaleString(); // Formato de fecha y hora legible
    const newItem = {
      ...item,
      category,
      subCategory,
      verifiedBy: defaultUser,
      verifiedAt: dateTime,
    };
    setVerifiedItems((prevItems) => [...prevItems, newItem]);
  };

  // Determinar el contenido a mostrar basado en la ruta actual
  const renderContent = () => {
    // Si la ruta es solo "Home"
    if (path.length === 1 && path[0] === "Home") {
      return <MiseEnPlaceHome onNavigate={navigate} />;
    }

    // Si la ruta es "Home > Mise en Place"
    if (path.length === 2 && path[1] === "Mise en Place") {
      return (
        <CategoryGrid
          categories={Object.keys(appData["Mise en Place"])}
          onNavigate={navigate}
        />
      );
    }

    // Si la ruta es "Home > Mise en Place > [Category]" (e.g., Fryers)
    if (path.length === 3 && path[1] === "Mise en Place") {
      const category = path[2];
      const subCategories = appData["Mise en Place"][category];
      if (!subCategories) return <p>Categoría no encontrada.</p>;
      return (
        <SubCategoryGrid
          subCategories={Object.keys(subCategories)}
          onNavigate={navigate}
        />
      );
    }

    // Si la ruta es "Home > Mise en Place > [Category] > [SubCategory]" (e.g., Fryers > Food)
    if (path.length === 4 && path[1] === "Mise en Place") {
      const category = path[2];
      const subCategory = path[3];
      const items = appData["Mise en Place"][category]?.[subCategory];
      if (!items) return <p>Subcategoría o elementos no encontrados.</p>;
      return (
        <ItemsList
          items={items}
          onVerifyItem={(item) => verifyItem(item, category, subCategory)}
        />
      );
    }

    // Si la ruta es "Verified List"
    if (path.length === 2 && path[1] === "Verified List") {
      return <VerifiedList items={verifiedItems} />;
    }

    return <p>Contenido no encontrado.</p>;
  };

  return (
    <div className="app-container">
      <Sidebar path={path} onNavigate={navigate} appData={appData} />
      <div className="main-content">
        <Breadcrumb path={path} onNavigate={navigate} />
        <h1 className="page-title">{path[path.length - 1]}</h1>
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
