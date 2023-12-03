import { Link, Router, BrowserRouter } from "react-router-dom";
import { useState } from "react";

function SignUpPage() {
  const [userInfo, setUserInfo] = useState({});
  const [customerInfo, setCustomerInfo] = useState({});
  const [confirmPass, setConfirmPass] = useState("");
  const [days, setDays] = useState(Array.from({ length: 31 }, (_, i) => i + 1));
  const [years, setYears] = useState(
    Array.from({ length: 110 }, (_, i) => 2023 - i)
  );

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
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="first_name" className="block text-gray-600">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="last_name" className="block text-gray-600">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="contact_number" className="block text-gray-600">
              Contact Number
            </label>
            <input
              type="text"
              id="contact_number"
              name="contact_number"
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-600">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            ></input>
          </div>

          <label
            htmlFor="birthday"
            className="block mb-3 text-black text-gray-600"
          >
            Birthday
          </label>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label htmlFor="month" className="block text-gray-600">
                Month
              </label>
              <select
                id="month"
                name="month"
                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
            </div>
            <div>
              <label htmlFor="day" className="block text-gray-600">
                Day
              </label>
              <select
                id="day"
                name="day"
                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              >
                {days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="year" className="block text-gray-600">
                Year
              </label>
              <select
                id="year"
                name="year"
                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="confirm_password" className="block text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
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

export default SignUpPage;
