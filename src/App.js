import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Collection from "./components/Collection";
import ProductPage from "./pages/ProductPage";
import CollectionPage from "./pages/CollectionPage";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/collections" element={<CollectionPage />} />
          <Route exact path="/collections/:id" element={<ProductPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
