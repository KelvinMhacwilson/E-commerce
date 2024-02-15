"use client";

import { CartContentProvider } from "@/hooks/useCart";

interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  return (
    <div>
      <CartContentProvider>{children}</CartContentProvider>
    </div>
  );
};

export default CartProvider;
