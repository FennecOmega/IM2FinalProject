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

  const handleAddCart = (item) => {
    // setCurrentCart(cart);
    // localStorage.setItem("cartKey", JSON.stringify(cart));
    // setCurrentCart(JSON.parse(localStorage.getItem("cartKey")));
    var product = {
      ProductID: item.ProductID,
      Qty: 1,
      Price: item.UnitPrice,
      Subtotal: item.UnitPrice,
    };

    let newProductIndex = currentCart.findIndex(
      (i) => item.ProductID === i.ProductID
    );

    if (newProductIndex == -1) {
      setCurrentCart([...currentCart, product]);
    } else {
      currentCart[newProductIndex].Qty++;
    }
    localStorage.setItem("cartKey", JSON.stringify(currentCart));
  };

  const handleCartDelete = (item) => {
    var temp = currentCart
      .map((product) => product.ProductID)
      .indexOf(item.ProductID);
    if (temp != -1 && currentCart[temp].Qty > 0) {
      currentCart[temp].Qty--;
      if (currentCart[temp].Qty == 0) {
        setCurrentCart(currentCart.filter((i) => i.Qty > 0));
      }
    } else if (currentCart.length == 0) {
      handleEmptyCart();
    }
    localStorage.setItem("cartKey", JSON.stringify(currentCart));
  };

  function retQty(ID) {
    var a = currentCart.findIndex((i) => ID == i.ProductID);
    if (a != -1) {
      return currentCart[a].Qty;
    } else {
      return 0;
    }
  }

  const handleEmptyCart = () => {
    localStorage.removeItem("cartKey", JSON.stringify(currentCart));
    setCurrentCart(null);
  };

  const globalState = {
    cart: currentCart,
    handleAddCart,
    handleCartDelete,
    handleEmptyCart,
    retQty,
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
