import { Link } from "react-router-dom";

function SuccessChangedPassword() {
  return (
    <>
      <div className="flex-1 mb-24">
        <div className="max-w-lg px-12 py-5 mx-auto mt-16 text-center border-4 border-yellow-400 rounded-2xl">
          <h1 className="mb-2 text-3xl font-bold">Success!</h1>
          <p className="mb-3">Your password has been updated successfully</p>
          <Link to="/login-page">
            <button
              className="px-5 py-1 text-white bg-amber-900 rounded-full"
              type="submit"
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SuccessChangedPassword;
