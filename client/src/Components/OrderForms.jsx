import { useState, useEffect } from "react";
import axios from "axios";
import ProductOrderCard from "./ProductOrderCard.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCartContext } from "../hooks/useCartContext.jsx";
import { CartContext } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";

function OrderForms() {
  const [prodList, setProdList] = useState([]);

  const { cart, handleEmptyCart } = useCartContext(CartContext);

  // NEW TODO
  // Finished form (Cart/itemList) will be the first page in order form.
  // Afterwards, if user is not logged in, they will be prompted to enter customer details. This will be posted to the backend.
  // Else, if user is logged in, use the current user token too check for customer type and customer ID, and Order inherits that ID.
  // Once the backend generates a unique customer ID, it will be inherited by the Order object upon continuing to payment.
  // Payment can be done in-person or through GCASH.
  // if in-person payment is chosen, immediately skip to confirming order, showing details of the customer's order.
  // else, prompt users to upload an image file of their GCASH receipt OR submit reference number. then proceed to confirmation.
  // After confirmation, print out a png/pdf of the order ticket, format will be specified.

  function setTotal() {
    if (cart != null) {
      cart.map((item) => ((item.Subtotal = item.Price * item.Qty), item));
      return cart.reduce((currPrice, item) => (currPrice += item.Subtotal), 0);
    }
  }

  useEffect(() => {
    axios
      .get("http://localhost:3001/product/send-product-list")
      .then(function (response) {
        setProdList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // async function postorder(order) {
  //   await axios
  //     .post("http://localhost:3001/order/add-order", order)
  //     .then(function (response) {
  //       console.log(response);
  //       toast.success(response.data, {
  //         position: toast.POSITION.TOP_CENTER,
  //       });
  //       return (document.getElementById("errMessage").innerHTML =
  //         response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       toast.error(error.response.data.error, {
  //         position: toast.POSITION.TOP_CENTER,
  //       });
  //       return (document.getElementById("errMessage").innerHTML =
  //         error.response.data.error);
  //     });
  // }

  // async function handleClick() {
  //   var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
  //   var localISOTime = new Date(Date.now() - tzoffset)
  //     .toISOString()
  //     .slice(0, 19)
  //     .replace("T", " ");
  //   console.log(localISOTime);

  //   const order = {
  //     ID: 0,
  //     TransactionDate: localISOTime,
  //     Name: details.Name,
  //     Contact: details.Contact,
  //     OrderedProducts: itemList.map(
  //       (item) => ((item.Subtotal = item.Price * item.Qty), item)
  //     ),
  //     TotalPrice: itemList.reduce(
  //       (currPrice, item) => (currPrice += item.Subtotal),
  //       0
  //     ),
  //     PaymentMethod: "",
  //     Status: "PENDING",
  //   };

  //   console.log(order);
  //   await postorder(order);
  //   handleEmptyCart([]);
  // }

  // todo: create a functional order

  return (
    <>
      <p>name</p>
      <input
        id="username"
        type="text"
        className="border-4 border-black"
      ></input>
      <p>contact no.</p>
      <input id="contact" type="text" className="border-4 border-black"></input>
      <p>Products</p>
      <div className="flex gap-4">
        {prodList.map((prod, index) => (
          <ProductOrderCard key={index} item={prod} />
        ))}
      </div>

      <p>Current Total: {setTotal()}</p>
      <div>
        <button onClick={handleEmptyCart} className="mr-20">
          REMOVE ALL ITEMS
        </button>
        <Link to="/order-form/payment-details">
          <button>GO TO PAYMENT</button>
        </Link>
      </div>
      <ToastContainer />
      <p id="errMessage"></p>
    </>
  );
}

export default OrderForms;
