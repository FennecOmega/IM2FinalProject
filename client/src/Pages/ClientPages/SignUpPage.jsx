import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import DatePicker from "../../Components/DatePicker.jsx";

function SignUpPage() {
  const [userInfo, setUserInfo] = useState({});
  const [customerInfo, setCustomerInfo] = useState({});
  // const [selectedDay, setSelectedDay] = useState(2);
  // const [selectedMonth, setSelectedMonth] = useState("0");
  // const [selectedYear, setSelectedYear] = useState(2023);

  const [selectedDate, setSelectedDate] = useState({
    day: 1,
    month: "0",
    year: 2023,
  });

  console.log(selectedDate);
  console.log(
    new Date(selectedDate.year, selectedDate.month, selectedDate.day)
  );
  // const years = Array.from({ length: 110 }, (_, i) => 2023 - i);

  // const handleMonthChange = (e) => {
  //   setSelectedDate({...selectedDate, month: e.target.value});
  // };

  // const handleDayChange = (e) => {
  //   setSelectedDate({...selectedDate, day: e.target.value});
  // };

  // const handleYearChange = (e) => {
  //   setSelectedDate({...selectedDate, year: e.target.value});
  // };

  // useEffect(() => {
  //   const daysInMonth = calculateDaysInMonth(selectedDate.Month, selectedDate.Year) + 1;
  //   if (selectedDate.day > daysInMonth) {
  //     setSelectedDate({...selectedDate, daysInMonth});
  //   }
  // }, [selectedDate.day, selectedDate.month, selectedDate.year]);

  // const calculateDaysInMonth = (month, year) => {
  //   if (month === "1") {
  //     return year % 4 === 0 ? 29 : 28;
  //   } else if (["3", "5", "8", "10"].includes(month)) {
  //     return 30;
  //   } else {
  //     return 31;
  //   }
  // };

  async function handleClick() {
    const date = new Date(
      selectedDate.year,
      selectedDate.month,
      selectedDate.day
    );
    const bdate = date.toISOString().slice(0, 10);

    const userDetails = {
      fname: customerInfo.fname,
      midname: customerInfo.midname,
      lname: customerInfo.lname,
      contact_no: customerInfo.contact_no,
      birthdate: bdate,
      address: customerInfo.address,
      email: userInfo.email,
      password: userInfo.password,
      confirmedpassword: userInfo.confirmedpassword,
    };

    await sendDetails(userDetails);
  }

  async function sendDetails(user) {
    await axios
      .post("http://localhost:3001/signup-page", user)
      .then(function (response) {
        console.log(response);
        toast.success(response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch(function (error) {
        console.log(error);
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  }

  return (
    <>
      <div className="items-center flex-1 mb-24">
        <div className="max-w-lg px-12 py-5 mx-auto mt-16 text-center border-4 border-yellow-400 rounded-2xl">
          <h1 className="mb-3 text-3xl font-bold">Sign Up</h1>
          <p className="mb-3">Be a Banana Cupcake Member now!</p>
          <p className="mb-3">
            Already have an account?{" "}
              <Link to="/login-page">
                <span className="font-bold text-amber-900 hover:text-amber-600">Login here</span>
              </Link>
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="first_name" className="font-semibold block text-gray-600">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                onChange={(e) => {
                  setCustomerInfo({ ...customerInfo, fname: e.target.value });
                }}
                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="last_name" className="font-semibold block text-gray-600">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                onChange={(e) => {
                  setCustomerInfo({ ...customerInfo, lname: e.target.value });
                }}
                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="contact_number" className="font-semibold block text-gray-600">
              Contact Number
            </label>
            <input
              type="text"
              id="contact_number"
              name="contact_number"
              onChange={(e) => {
                setCustomerInfo({
                  ...customerInfo,
                  contact_no: e.target.value,
                });
              }}
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="font-semibold block text-gray-600">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              onChange={(e) => {
                setCustomerInfo({ ...customerInfo, address: e.target.value });
              }}
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            ></input>
          </div>

          <label htmlFor="birthday" className="block mb-3 text-gray-600">
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
                onChange={handleMonthChange}
                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="0">January</option>
                <option value="1">February</option>
                <option value="2">March</option>
                <option value="3">April</option>
                <option value="4">May</option>
                <option value="5">June</option>
                <option value="6">July</option>
                <option value="7">August</option>
                <option value="8">September</option>
                <option value="9">October</option>
                <option value="10">November</option>
                <option value="11">December</option>
              </select>
            </div>
            <div>
              <label htmlFor="day" className="block text-gray-600">
                Day
              </label>
              <select
                id="day"
                name="day"
                onChange={handleDayChange}
                value={selectedDay}
                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              >
                {Array.from(
                  { length: calculateDaysInMonth(selectedMonth, selectedYear) },
                  (_, i) => i + 1
                ).map((day) => (
                  <option key={day} value={day + 1}>
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
                onChange={handleYearChange}
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
            <label htmlFor="email" className="font-semibold block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => {
                setUserInfo({ ...userInfo, email: e.target.value });
              }}
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="font-semibold block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => {
                setUserInfo({ ...userInfo, password: e.target.value });
              }}
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="confirm_password" className="font-semibold block text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              onChange={(e) => {
                setUserInfo({ ...userInfo, confirmedpassword: e.target.value });
              }}
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <p className="mb-4 text-sm">
            By creating an account. You agree to our Terms & Conditions and
            Privacy Policy
          </p>
          <button
            className="px-10 py-3 font-bold text-white bg-yellow-400 rounded-full"
            onClick={handleClick}
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
