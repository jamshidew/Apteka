import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartDatas, setCartDatas] = useState([]);

  return (
    <CartContext.Provider value={{ cartDatas, setCartDatas }}>
      {children}
    </CartContext.Provider>
  );
};
