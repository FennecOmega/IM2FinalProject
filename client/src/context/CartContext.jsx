import { createContext, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [currentCart, setCurrentCart] = useState(null);

  const handleCart = (cart) => {
    setCurrentCart(cart);
  };

  const handleEmptyCart = () => {
    setCurrentCart(null);
  };

  const globalState = {
    user: currentCart,
    handleCart,
    handleEmptyCart,
  };

  console.log("Cart state: ", currentCart);
  return (
    <CartContext.Provider value={globalState}>
      <ToastContainer></ToastContainer>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
