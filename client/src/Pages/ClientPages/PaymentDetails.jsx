import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCartContext } from "../../hooks/useCartContext.jsx";
import { CartContext } from "../../context/CartContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext.jsx";
import { AuthContext } from "../../context/AuthContext.jsx";

function PaymentDetails() {
  const { user } = useAuthContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    const loader = async () => {
      console.log(user);
      if (user === null) {
        navigate("/login-page");
      }
    };

    loader();
  }, [user, navigate]);

  const [prodList, setProdList] = useState([]);

  const { cart, handleEmptyCart } = useCartContext(CartContext);

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
      <p>This is Payment Details.jsx</p>
      <input
        id="username"
        type="text"
        className="border-4 border-black"
      ></input>
      <p>contact no.</p>
      <input id="contact" type="text" className="border-4 border-black"></input>
      <p>Products</p>
      <div>
        <button onClick={handleEmptyCart} className="mr-20">
          REMOVE ALL ITEMS
        </button>
        <Link to="/order-form/order-details">
          <button>Confirm Order Details</button>
        </Link>
      </div>
      <ToastContainer />
      <p id="errMessage"></p>
    </>
  );
}

export default PaymentDetails;
