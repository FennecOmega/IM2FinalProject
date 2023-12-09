import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext.jsx";
import { AuthContext } from "../../context/AuthContext.jsx";

function LoginPage() {
  const [LoginDetails, setLoginDetails] = useState({});
  // const [ showPassword, setShowPassword ] = useState(false)
  const { handleLogin, user } = useAuthContext(AuthContext);

  function handleClick() {
    console.log(LoginDetails);
    handleLogin(LoginDetails);
  }

  return (
    <>
      <div className="items-center flex-1 mb-24">
        <div className="max-w-lg px-12 py-5 mx-auto mt-16 text-center border-4 border-yellow-400 rounded-2xl">
          <h1 className="mb-3 text-3xl font-bold">Login</h1>
          <p className="mb-3">
            Don&apos;t have an account?{" "}
            <Link to="/signup-page">
              <span className="font-bold text-amber-900 hover:text-amber-600">
                Sign Up
              </span>
            </Link>
          </p>
          <div className="flex flex-col gap-4 mb-4">
            <input
              className="px-3 py-2 bg-gray-200 rounded-lg"
              type="text"
              placeholder="Email"
              onChange={(e) =>
                setLoginDetails({ ...LoginDetails, email: e.target.value })
              }
            />
            <input
              className="px-3 py-2 bg-gray-200 rounded-lg"
              type="text"
              placeholder="Password"
              onChange={(e) =>
                setLoginDetails({ ...LoginDetails, password: e.target.value })
              }
            />
          </div>
          <button
            className="px-10 py-2 mb-4 font-bold text-white bg-yellow-400 rounded-full"
            type="submit"
            onClick={handleClick}
          >
            Login
          </button>
          <Link to="/forgot-password">
            <p className="mb-3 font-semibold text-amber-900 hover:text-amber-600">
              Forgot Password?
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
