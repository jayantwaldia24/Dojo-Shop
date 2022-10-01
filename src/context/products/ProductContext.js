import { createContext, useReducer } from "react";
import { products } from "../../backend/db/products";
import { productReducer } from "./ProductReducer";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productsList, dispatchProductList] = useReducer(
    productReducer,
    products
  );

  const filterProduct = (isChecked, filterType, value) => {
    console.log(isChecked, filterType, value);
    if (filterType === "Sex" && isChecked === true) {
      const filterList = productsList;
      dispatchProductList({
        type: "FILTER_SEX",
        payload: filterList,
        value: value,
      });
    }
    if (isChecked === false) {
      const filterList = productsList;
      dispatchProductList({
        type: "DEF",
        payload: filterList,
      });
    }
  };

  const sortProduct = (sortType) => {
    if (sortType === "Price: Low to High") {
      dispatchProductList({ type: "LOW_TO_HIGH", payload: productsList });
    } else if (sortType === "Price: High to Low") {
      dispatchProductList({ type: "HIGH_TO_LOW", payload: productsList });
    } else if (sortType === "Best Rating") {
      dispatchProductList({ type: "BEST_RATING", payload: productsList });
    }
  };
  return (
    <ProductContext.Provider
      value={{ productsList, sortProduct, filterProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};
