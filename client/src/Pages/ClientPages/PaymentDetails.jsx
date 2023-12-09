import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext.jsx";
import { AuthContext } from "../../context/AuthContext.jsx";
import { useCartContext } from "../../hooks/useCartContext.jsx";
import { CartContext } from "../../context/CartContext.jsx";
import DatePicker from "../../Components/DatePicker.jsx";
import FormatPriceToPhp from "../../functions/FormatPriceToPhp.jsx";

function PaymentDetails() {
  // const location = useLocation();
  // const { state } = location;
  // const totalPrice = state ? state.totalPrice : 0;

  const { setTotal } = useCartContext(CartContext);

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

export default PaymentDetails;
