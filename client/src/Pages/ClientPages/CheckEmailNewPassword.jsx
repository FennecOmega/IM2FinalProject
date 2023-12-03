import { Link } from "react-router-dom";

function CheckEmailNewPassword() {
  return (
    <>
      <div className="flex-1 mb-24">
        <div className="max-w-lg px-12 py-5 mx-auto mt-16 border-4 border-green-700 rounded-2xl">
          <h1 className="mb-2 text-3xl font-bold">Check your email</h1>
          <p className="mb-3">
          Please check your email inbox and click on the provided link to reset your password. 
          If you don't receive email, <Link to="/">click here to resend</Link>
          </p>
          <Link to="/login-page"><button
            className="px-5 py-1 text-white bg-green-700 rounded-full"
            type="submit"
          >
            Login
          </button></Link>
        </div>
      </div>
    </>
  );
}

export default CheckEmailNewPassword;
