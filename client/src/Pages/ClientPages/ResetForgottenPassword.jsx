import { Link } from "react-router-dom";

function ResetForgottenPassword() {
  return (
    <>
      <div className="flex-1 mb-24">
        <div className="max-w-lg px-12 py-5 mx-auto mt-16 text-center border-4 border-green-700 rounded-2xl">
          <h1 className="mb-2 text-3xl font-bold">Create New Password</h1>
          <p className="mb-3">
            Enter a new password below to reset your password
          </p>
          <div className="flex flex-col gap-4 mb-3">
            <input
              className="px-3 py-1 bg-gray-200 rounded-lg"
              type="password"
              placeholder="New Password"
            />
            <input
              className="mb-2 px-3 py-1 bg-gray-200 rounded-lg"
              type="password"
              placeholder="Confirm New Password"
            />
          </div>
          <button
            className="mr-2 px-10 py-1 text-white bg-green-700 rounded-full"
            type="submit"
          >
            Cancel
          </button>
          <Link to="/success-changedpassword"><button
            className="px-5 py-1 text-white bg-green-700 rounded-full"
            type="submit"
          >
            Change Password
          </button></Link>
        </div>
      </div>
    </>
  );
}

export default ResetForgottenPassword;