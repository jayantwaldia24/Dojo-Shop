import { createContext } from "react";
import { products } from "../../backend/db/products";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const filterProduct = () => {
    return products.sort((a, b) => (a.price > b.price ? 1 : -1));
  };
  return (
    <ProductContext.Provider value={{ products, filterProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
