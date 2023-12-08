import { createContext, useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [currentCart, setCurrentCart] = useState(null);

  const getLocalStorageCart = () => {
    const storedCart = localStorage.getItem("cartKey");
    if (storedCart) {
      setCurrentCart(JSON.parse(storedCart));
    }
  };

  useEffect(() => {
    getLocalStorageCart();
  }, []);

  const handleCart = (cart) => {
    // setCurrentCart(cart);
    localStorage.setItem("cartKey", JSON.stringify(cart));
    setCurrentCart(JSON.parse(localStorage.getItem("cartKey")));
  };

  const handleEmptyCart = () => {
    localStorage.removeItem("cartKey", JSON.stringify(currentCart));
    setCurrentCart(null);
  };

  const globalState = {
    cart: currentCart,
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
