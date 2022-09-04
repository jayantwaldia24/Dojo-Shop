import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/products" element={<ProductPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
