// order info customer_id, transaction_date, completion_date, ArrayOfProduct, payment_method, total_price, order_status

import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext.jsx";
import { AuthContext } from "../../context/AuthContext.jsx";
import { useCartContext } from "../../hooks/useCartContext.jsx";
import { CartContext } from "../../context/CartContext.jsx";
import FormatPriceToPhp from "../../functions/FormatPriceToPhp.jsx";

function ConfirmDetails() {
  const location = useLocation();
  const { state } = location;
  const payment = state ? state.payment : null;
  console.log(payment);
  const pickupdate = state ? state.pickupdate : null;
  const [order, setOrder] = useState({});

  const { cart, setTotal } = useCartContext(CartContext);

  const { user } = useAuthContext(AuthContext);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentDetails({ ...paymentDetails, payment_method: e.target.value });
  };
  const [selectedDate, setSelectedDate] = useState({
    day: 1,
    month: "0",
    year: 2023,
  });

  console.log(order);

  useEffect(() => {
    if (user.id_no != null) {
      var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
      var localISOTime = new Date(Date.now() - tzoffset)
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");

      var pickupToISOTime = new Date(
        pickupdate.year,
        pickupdate.month,
        pickupdate.day
      )
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");
      console.log(localISOTime);
      console.log(pickupToISOTime);

      setOrder({
        customer_id: user.id_no,
        transaction_date: localISOTime,
        completion_date: pickupToISOTime,
        ArrayOfProduct: cart,
        payment_method: payment.payment_method,
        gcash_reference: payment.gcash_reference,
        total_price: setTotal(),
        order_status: "PENDING",
      });
    }
  }, []);

  async function postorder(order) {
    await axios
      .post("http://localhost:3001/order/add-order", order)
      .then(function (response) {
        console.log(response);
        toast.success(response.data, {
          position: toast.POSITION.TOP_CENTER,
        });
        return (document.getElementById("errMessage").innerHTML =
          response.data);
      })
      .catch(function (error) {
        console.log(error);
        toast.error(error.response.data.error, {
          position: toast.POSITION.TOP_CENTER,
        });
        return (document.getElementById("errMessage").innerHTML =
          error.response.data.error);
      });
  }

  async function handleClick() {
    console.log(order);
    await postorder(order);
    handleEmptyCart();
  }

  const [paymentDetails, setPaymentDetails] = useState({});

  return (
    <>
      <div className="max-w-lg px-12 py-5 mx-auto mt-16 text-center border-4 border-green-700 rounded-2xl">
        <h1 className="mb-3 text-3xl font-bold">Order Details</h1>
        <div className="flex flex-col gap-4 mb-3">
          <p>customer id: {order.customer_id}</p>
          <p>transaction date:{order.transaction_date} </p>
          <p>pickup date: {order.completion_date}</p>
          <p>
            cart:
            {order.ArrayOfProduct != undefined ? (
              cart.map((product) => (
                <div>
                  Product ID:{" " + product.product_id}, {" | "} Product Price:
                  {" " + FormatPriceToPhp(product.unit_price)},{" | "} Product
                  Quantity:
                  {" " + product.qty},{" | "} Subtotal:
                  {" " + FormatPriceToPhp(product.subtotal)}
                </div>
              ))
            ) : (
              <></>
            )}
          </p>
          <p>payment method: {order.payment_method}</p>
          {order.payment_method == "GCash" ? (
            <p>gcash reference: {order.gcash_reference}</p>
          ) : (
            <></>
          )}
          <p>total price: {FormatPriceToPhp(setTotal())}</p>

          <button
            className="px-10 py-1 text-white bg-green-700 rounded-full"
            type="Go back"
            onClick={handleGoBack}
          >
            Go Back
          </button>

          <button
            className="px-10 py-1 text-white bg-green-700 rounded-full"
            onClick={handleClick}
          >
            Confirm Order
          </button>
        </div>
      </div>
    </>
  );
}

export default ConfirmDetails;
