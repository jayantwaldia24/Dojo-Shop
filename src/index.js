import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop";
import { CartProvider } from "./context/cart/CartContext";
import { FilterProvider } from "./context/filter/FilterContext";
import { ProductProvider } from "./context/products/ProductContext";
import { CartDrawerProvider } from "./context/navbar/CartDrawerContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <CartDrawerProvider>
        <ProductProvider>
          <CartProvider>
            <FilterProvider>
              <ScrollToTop />
              <App />
            </FilterProvider>
          </CartProvider>
        </ProductProvider>
      </CartDrawerProvider>
    </Router>
  </React.StrictMode>
);
