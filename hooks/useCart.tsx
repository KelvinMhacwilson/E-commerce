import { createContext, useContext, useState } from "react";

type CartContextType = {
  cartTotalQuantity: number;
};

interface Props {
  [propName: string]: any;
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartContentProvider = (props: Props) => {
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);

  const value = {
    cartTotalQuantity,
  };

  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }

  return context;
};
