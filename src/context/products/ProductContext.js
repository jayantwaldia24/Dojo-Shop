import { createContext, useReducer } from "react";
import { products } from "../../backend/db/products";
import { productReducer } from "./ProductReducer";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productsList, dispatchProductList] = useReducer(
    productReducer,
    products
  );

  const getFilteredProducts = (productsList, filterType, value) => {
    if (filterType === "Sex") {
      if (value === "Men") {
        return productsList.filter((product) => product.category === "men");
      }
      if (value === "Women") {
        return productsList.filter((product) => product.category === "women");
      } else return productsList;
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
      value={{ productsList, sortProduct, getFilteredProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};
