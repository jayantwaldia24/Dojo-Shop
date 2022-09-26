import { useReducer, useContext } from "react";
import { cartReducer } from "./CartReducer";
const { createContext } = require("react");

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, []);

  const addToCart = (product) => {
    dispatchCart({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// cool
export const useCart = () => useContext(CartContext);
