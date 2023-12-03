import { Link } from "react-router-dom";
import { useState } from "react";

function SignUpPage() {
  const [userInfo, setUserInfo] = useState({});
  const [confirmPass, setConfirmPass] = useState("");
  const [days, setDays] = useState(Array.from({ length: 31 }, (_, i) => i + 1));
  const [years, setYears] = useState(Array.from({ length: 73 }, (_, i) => 2023 - i));
  
  return (
    <>
      <div className="items-center flex-1 mb-24">
        <div className="max-w-lg px-12 py-5 mx-auto mt-16 text-center border-4 border-green-700 rounded-2xl">
          <h1 className="mb-3 text-3xl font-bold">Sign Up</h1>
          <p className="mb-3">Join BakingBread now!</p>
          <p className="mb-3">
            Already have an account?{" "}
            <span className="text-green-700">
              <Link to="/login-page">Login here</Link>
            </span>
          </p>          
            <div class="grid grid-cols-2 gap-4">
                <div class="mb-4">
                    <label for="first_name" class="block text-gray-600">First Name</label>
                    <input type="text" id="first_name" name="first_name"
                        class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"/>
                </div>
                <div class="mb-4">
                    <label for="last_name" class="block text-gray-600">Last Name</label>
                    <input type="text" id="last_name" name="last_name"
                        class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"/>
                </div>
            </div>

            <div class="mb-4">
                <label for="contact_number" class="block text-gray-600">Contact Number</label>
                <input type="text" id="contact_number" name="contact_number"
                    class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"/>
            </div>

            <div class="mb-4">
                <label for="address" class="block text-gray-600">Address</label>
                <input type="text" id="address" name="address"
                    class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"></input>
            </div>

            <label for="birthday" class="block text-gray-600 mb-3 text-black">Birthday</label>
            <div class="grid grid-cols-3 gap-4 mb-4">
                <div>
                    <label for="month" class="block text-gray-600">Month</label>
                    <select id="month" name="month"
                        class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300">
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
                        <label htmlFor="day" className="block text-gray-600">Day</label>
                        <select id="day" name="day"
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300">
                            {days.map(day => (
                                <option key={day} value={day}>{day}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="year" className="block text-gray-600">Year</label>
                        <select id="year" name="year"
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300">
                            {years.map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
            </div>

            <div class="mb-4">
                <label for="email" class="block text-gray-600">Email</label>
                <input type="email" id="email" name="email"
                    class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"/>
            </div>

            <div class="mb-4">
                <label for="password" class="block text-gray-600">Password</label>
                <input type="password" id="password" name="password"
                    class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"/>
            </div>

            <div class="mb-6">
                <label for="confirm_password" class="block text-gray-600">Confirm Password</label>
                <input type="password" id="confirm_password" name="confirm_password"
                    class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"/>
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
