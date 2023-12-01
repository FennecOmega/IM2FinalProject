import { Link } from "react-router-dom";
import { useState } from "react";

function SignUpPage() {
  const [userInfo, setUserInfo] = useState({});
  const [confirmPass, setConfirmPass] = useState("");

  return (
    <>
      <div className="items-center flex-1 mb-24">
        <div className="max-w-lg px-12 py-5 mx-auto mt-16 text-center border-4 border-green-700 rounded-2xl">
          <h1 className="mb-3 text-3xl font-bold">Sign Up</h1>
          <p className="mb-3">Join Cookpedia now!</p>
          <p className="mb-3">
            Already have an account?{" "}
            <span className="text-green-700">
              <Link to="/login-page">Login here</Link>
            </span>
          </p>
          <div className="flex flex-col gap-4 mb-3">
            <input
              className="px-3 py-1 bg-gray-200 rounded-lg"
              type="text"
              placeholder="Username"
            />
            <input
              className="px-3 py-1 bg-gray-200 rounded-lg"
              type="email"
              placeholder="Email Address"
            />
            <input
              className="px-3 py-1 bg-gray-200 rounded-lg"
              type="password"
              placeholder="Password"
            />
            <input
              className="px-3 py-1 bg-gray-200 rounded-lg"
              type="password"
              placeholder="Confirm Password"
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
