import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Collection from "./components/Collection";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <div className="mt-100px">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/collection" element={<Collection />} />
          <Route exact path="/product" element={<ProductPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
