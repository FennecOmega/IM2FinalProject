import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function LoginPage() {
  const [LoginDetails, setLoginDetails] = useState({});
  // const [ showPassword, setShowPassword ] = useState(false)

  function handleClick() {}

  return (
    <>
      <div className="max-w-lg px-12 py-5 mx-auto mt-16 text-center border-4 border-green-700 rounded-2xl">
        <h1 className="mb-3 text-3xl font-bold">Login</h1>
        <p className="mb-3">
          Don't have an account?{" "}
          <Link to="/signup-page">
            <span className="text-green-700">Sign Up</span>
          </Link>
        </p>
        <div className="flex flex-col gap-4 mb-3">
          <input
            className="px-3 py-1 bg-gray-200 rounded-lg"
            type="text"
            placeholder="Email"
            onChange={(e) =>
              setLoginDetails({ ...LoginDetails, Email: e.target.value })
            }
          />
          <input
            className="px-3 py-1 bg-gray-200 rounded-lg"
            type="text"
            placeholder="Password"
            onChange={(e) =>
              setLoginDetails({ ...LoginDetails, Password: e.target.value })
            }
          />
        </div>
        <button
          className="px-10 py-1 text-white bg-green-700 rounded-full"
          type="submit"
          onClick=""
        >
          Login
        </button>
        <p className="mb-3">
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
      </div>
    </>
  );
}

export default LoginPage;
