import { useReducer, useContext } from "react";
import { useCartDrawer } from "../navbar/CartDrawerContext";
import { cartReducer } from "./CartReducer";
const { createContext } = require("react");

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, []);
  const { setCartDrawerOpen } = useCartDrawer();

  const addToCart = (product) => {
    dispatchCart({ type: "ADD_TO_CART", payload: product });
    setCartDrawerOpen((prev) => !prev);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// cool
export const useCart = () => useContext(CartContext);
