import Sidebar from "./components/Sidebar";
import MiseEnPlaceHome from "./components/MiseEnPlaceHome";
import CategoryGrid from "./components/CategoryGrid";
import SubCategoryGrid from "./components/SubCategoryGrid";
import ItemsList from "./components/ItemsList";
import VerifiedList from "./components/VerifiedList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<MiseEnPlaceHome />} />
            <Route path="/categorias" element={<CategoryGrid />} />
            <Route path="/verificados" element={<VerifiedList />} />
            <Route
              path="/categorias/:categoria"
              element={<SubCategoryGrid />}
            />
            <Route
              path="/categorias/:categoria/:subcategoria"
              element={<ItemsList />}
            />
            {/* Agrega más rutas según lo necesites */}
          </Routes>
        </div>
      </div>

      {/* Puedes mantener tu Sidebar o Navbar aquí si es común a todas las páginas */}
    </Router>
  );
}

export default App;
