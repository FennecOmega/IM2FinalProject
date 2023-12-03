import { Link } from "react-router-dom";
import { useState } from "react";

function CustomerDetails() {
  const [customerInfo, setCustomerInfo] = useState({});

  return (
    <>
      <div className="items-center flex-1 mb-24">
        <div className="max-w-lg px-12 py-5 mx-auto mt-16 text-center border-4 border-green-700 rounded-2xl">
          <h1 className="mb-3 text-3xl font-bold">Sign Up</h1>
          <p className="mb-3">Be a Baking Bread Member now!</p>
          <p className="mb-3">
            Already have an account?{" "}
            <span className="text-green-700">
              <Link to="/login-page">Login here</Link>
            </span>
          </p>
          <div className="flex flex-col gap-4 mb-3">
            <input
              className="px-3 py-1 bg-gray-200 rounded-lg"
              placeholder="First Name"
              onChange={(e) =>
                setCustomerInfo({ ...customerInfo, FName: e.target.value })
              }
            />
            <input
              className="px-3 py-1 bg-gray-200 rounded-lg"
              placeholder="Middle Initial"
              onChange={(e) =>
                setCustomerInfo({ ...customerInfo, MI: e.target.value })
              }
            />
            <input
              className="px-3 py-1 bg-gray-200 rounded-lg"
              placeholder="Last Name"
              onChange={(e) =>
                setCustomerInfo({ ...customerInfo, LName: e.target.value })
              }
            />
            <input
              className="px-3 py-1 bg-gray-200 rounded-lg"
              placeholder="Address"
              onChange={(e) =>
                setCustomerInfo({ ...customerInfo, Address: e.target.value })
              }
            />
            <input
              className="px-3 py-1 bg-gray-200 rounded-lg"
              placeholder="Contact Number"
              onChange={(e) =>
                setCustomerInfo({ ...customerInfo, ContactNo: e.target.value })
              }
            />
            <input
              className="px-3 py-1 bg-gray-200 rounded-lg"
              placeholder="Birthdate"
              onChange={(e) =>
                setCustomerInfo({ ...customerInfo, BirthDate: e.target.value })
              }
            />
          </div>
          <p className="mb-3 text-sm">
            By creating an account. You agree to our Terms & Conditions and
            Privacy Policy
          </p>
          <button
            className="px-10 py-1 text-white bg-green-700 rounded-full"
            type="submit"
          >
            Create Account
          </button>
        </div>
      </div>
    </>
  );
}

export default CustomerDetails;
