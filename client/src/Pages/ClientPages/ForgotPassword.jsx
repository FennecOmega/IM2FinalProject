import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext.jsx"; // temp
import { AuthContext } from "../../context/AuthContext.jsx"; // temp

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const { user, handleLogout } = useAuthContext(AuthContext); // temp

  return (
    <>
      <div className="flex-1 mb-24">
        <div className="max-w-lg px-12 py-5 mx-auto mt-16 text-center border-4 border-green-700 rounded-2xl">
          <h1 className="mb-3 text-3xl font-bold">Reset your password</h1>
          <p className="mb-3">
            Return to{" "}
            <span className="text-green-700">
              <Link to="/login-page">Login here</Link>
            </span>
          </p>
          <div className="flex flex-col gap-4 mb-3">
            <input
              className="px-3 py-1 bg-gray-200 rounded-lg"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email Address"
            />
          </div>
          <p className="mb-3 text-sm">
            You&apos;ll receive an email for recovering your account.
          </p>
          <Link to="/check-email">
            <button
              className="px-10 py-1 text-white bg-green-700 rounded-full"
              type="submit"
              onClick={handleLogout}
            >
              Send
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
