import { createContext, useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [currentCart, setCurrentCart] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getLocalStorageCart = () => {
    const storedCart = localStorage.getItem("cartKey");
    if (storedCart) {
      setCurrentCart(JSON.parse(storedCart));
    }
  };

  useEffect(() => {
    getLocalStorageCart();
  }, []);

  const setTotal = () => {
    if (currentCart != null) {
      currentCart.map(
        (item) => ((item.subtotal = item.unit_price * item.qty), item)
      );
      console.log(
        currentCart.reduce((currPrice, item) => (currPrice += item.subtotal), 0)
      );
      return currentCart.reduce(
        (currPrice, item) => (currPrice += item.subtotal),
        0
      );
    } else {
      return 0;
    }
  };

  const handleAddCart = (item) => {
    // setCurrentCart(cart);
    // localStorage.setItem("cartKey", JSON.stringify(cart));
    // setCurrentCart(JSON.parse(localStorage.getItem("cartKey")));
    var product = {
      product_id: item.product_id,
      qty: 1,
      unit_price: item.unit_price,
      subtotal: item.unit_price,
    };

    let newProductIndex = currentCart.findIndex(
      (i) => item.product_id === i.product_id
    );

    if (newProductIndex == -1) {
      setCurrentCart([...currentCart, product]);
    } else {
      currentCart[newProductIndex].qty++;
      setRefresh(!refresh);
    }
    localStorage.setItem("cartKey", JSON.stringify(currentCart));
  };

  const handleCartDelete = (item) => {
    var temp = currentCart
      .map((product) => product.product_id)
      .indexOf(item.product_id);
    if (temp != -1 && currentCart[temp].qty > 0) {
      currentCart[temp].qty--;
      setRefresh(!refresh);
      if (currentCart[temp].qty == 0) {
        setCurrentCart(currentCart.filter((i) => i.qty > 0));
      }
    } else if (currentCart.length == 0) {
      handleEmptyCart();
    }
    localStorage.setItem("cartKey", JSON.stringify(currentCart));
  };

  function retQty(ID) {
    var a = currentCart.findIndex((i) => ID == i.product_id);
    if (a != -1) {
      return currentCart[a].qty;
    } else {
      return 0;
    }
  }

  const handleEmptyCart = () => {
    localStorage.removeItem("cartKey", JSON.stringify(currentCart));
    setCurrentCart([]);
  };

  const globalState = {
    cart: currentCart,
    handleAddCart,
    handleCartDelete,
    handleEmptyCart,
    retQty,
    setTotal,
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
