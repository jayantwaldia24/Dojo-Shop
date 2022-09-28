import { useState, useContext } from "react";
const { createContext } = require("react");

export const CartDrawerContext = createContext();

export const CartDrawerProvider = ({ children }) => {
  const [isCartDrawerOpen, setCartDrawerOpen] = useState(false);

  return (
    <CartDrawerContext.Provider value={{ isCartDrawerOpen, setCartDrawerOpen }}>
      {children}
    </CartDrawerContext.Provider>
  );
};

// cool
export const useCartDrawer = () => useContext(CartDrawerContext);
