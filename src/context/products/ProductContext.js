import { createContext, useReducer } from "react";
import { products } from "../../backend/db/products";
import { productReducer } from "./ProductReducer";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productsList, dispatchProductList] = useReducer(
    productReducer,
    products
  );
  const sortProduct = (filterType) => {
    console.log(typeof filterType, filterType);
    if (filterType === "Price: Low to High") {
      dispatchProductList({ type: "LOW_TO_HIGH", payload: productsList });
    }
    if (filterType === "Price: High to Low") {
      dispatchProductList({ type: "HIGH_TO_LOW", payload: productsList });
    }
  };
  return (
    <ProductContext.Provider value={{ productsList, sortProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
