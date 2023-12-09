import { useState, useEffect } from "react";
import axios from "axios";
import ProductOrderCard from "./ProductOrderCard.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCartContext } from "../hooks/useCartContext.jsx";
import { CartContext } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";
import FormatPriceToPhp from "../functions/FormatPriceToPhp.jsx";

function OrderForms() {
  const [prodList, setProdList] = useState([]);

  const { handleEmptyCart, setTotal } = useCartContext(CartContext);

  useEffect(() => {
    axios
      .get("http://localhost:3001/product/getProduct")
      .then(function (response) {
        setProdList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // todo: create a functional order

  return (
    <>
      <div className="items-center flex-1 mb-24">
        <div className="max-w-xl px-12 py-8 mx-auto mt-16 text-center border-4 border-yellow-400 rounded-2xl">
          <h1 className="mb-3 text-3xl font-bold">Order Now!</h1>
          <div className="mb-4">
            <p className="font-semibold block text-gray-600">Name</p>
            <input
              id="username"
              type="text"
              className="w-5/6 p-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            ></input>
          </div>
          <div className="mb-4">
            <p className="font-semibold block text-gray-600">Contact Number</p>
            <input
              id="contact"
              type="text"
              className="w-5/6 p-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            ></input>
          </div>
          <p className="mb-4 block font-semibold text-gray-600">Products</p>
          <div className="flex gap-4">
            {prodList.map((prod, index) => (
              <ProductOrderCard key={index} item={prod} />
            ))}
          </div>

          <p className="mb-8 font-bold block text-gray-600">
            Current Total: {FormatPriceToPhp(setTotal())}
          </p>
          <div>
            <button
              onClick={() => handleEmptyCart()}
              className="mr-20 bg-red-500 text-white"
            >
              REMOVE ALL ITEMS
            </button>
            <Link to="/order-form/payment-details">
              <button className="bg-green-500 text-white">GO TO PAYMENT</button>
            </Link>
          </div>
          <ToastContainer />
          <p id="errMessage"></p>
        </div>
      </div>
    </>
  );
}

export default OrderForms;
