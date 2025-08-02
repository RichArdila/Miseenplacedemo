import Sidebar from "./components/Sidebar";
import MiseEnPlaceHome from "./components/MiseEnPlaceHome";
import CategoryGrid from "./components/CategoryGrid";
import SubCategoryGrid from "./components/SubCategoryGrid";
import ItemsList from "./components/ItemsList";
import VerifiedList from "./components/VerifiedList";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Breadcrumb from "./components/Breadcrumb";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Breadcrumb />
          <div className="content">
            <Routes>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/" element={<MiseEnPlaceHome />} />
              <Route path="/Categories" element={<CategoryGrid />} />
              <Route path="/Verified" element={<VerifiedList />} />
              <Route
                path="/Categories/:category"
                element={<SubCategoryGrid />}
              />
              <Route
                path="/Categories/:category/:subcategory"
                element={<ItemsList />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
