// order info customer_id, transaction_date, completion_date, ArrayOfProduct, payment_method, total_price, order_status

import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext.jsx";
import { AuthContext } from "../../context/AuthContext.jsx";
import { useCartContext } from "../../hooks/useCartContext.jsx";
import { CartContext } from "../../context/CartContext.jsx";
import DatePicker from "../../Components/DatePicker.jsx";
import FormatPriceToPhp from "../../functions/FormatPriceToPhp.jsx";

function ConfirmDetails() {
  const location = useLocation();
  const { state } = location;
  const payment = state ? state.payment : 0;
  const pickupdate = state ? state.pickupdate : null;

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

  useEffect(() => {
    const loader = async () => {
      console.log(user);
      if (user === null) {
        navigate("/login-page");
      }
    };

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
      // order info customer_id, transaction_date, completion_date, ArrayOfProduct, payment_method, total_price, order_status

      const order = {
        customer_id: user.id_no,
        transaction_date: localISOTime,
        completion_date: pickupToISOTime,
        ArrayOfProduct: cart,
        payment_method: "",
        total_price: setTotal(),
        order_status: "PENDING",
      };

      console.log(order);
      await postorder(order);
      handleEmptyCart();
    }

    loader();
  }, [user, navigate]);

  const [paymentDetails, setPaymentDetails] = useState({});

  return (
    <>
      <div className="max-w-lg px-12 py-5 mx-auto mt-16 text-center border-4 border-green-700 rounded-2xl">
        <h1 className="mb-3 text-3xl font-bold">Payment Details</h1>
        <div className="flex flex-col gap-4 mb-3">
          <div>
            <label htmlFor="payment_method" className="block text-gray-600">
              Payment Method
            </label>
            <select
              id="payment_method"
              name="payment_method"
              onChange={handlePaymentMethodChange}
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="Onsite">Onsite</option>
              <option value="GCash">GCash</option>
            </select>
          </div>
          {paymentDetails.payment_method === "GCash" ? (
            <>
              <p>
                Scan this GCash QR code and pay the amount of:{" "}
                {FormatPriceToPhp(setTotal())}
              </p>
              <p>Or input this number in express send: 09469338740</p>
              <p className="mb-3">GCash reference no:</p>
              <input
                className="px-3 py-1 bg-gray-200 rounded-lg"
                type="text"
                placeholder="GCash reference no."
                onChange={(e) =>
                  setPaymentDetails({
                    ...paymentDetails,
                    gcash_reference: e.target.value,
                  })
                }
              />
            </>
          ) : null}
        </div>
        <DatePicker
          Date={selectedDate}
          DateChange={setSelectedDate}
          DateType="Pickup Date"
        />
        <button
          className="px-10 py-1 text-white bg-green-700 rounded-full"
          type="Go back"
          onClick={handleGoBack}
        >
          Go Back
        </button>
        <Link
          to="/order-form/confirm-order"
          state={{ pickupdate: selectedDate, payment: paymentDetails }}
        >
          <button className="px-10 py-1 text-white bg-green-700 rounded-full">
            Proceed to Confirmation
          </button>
        </Link>
      </div>
    </>
  );
}

export default ConfirmDetails;
