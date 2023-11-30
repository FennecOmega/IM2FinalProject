import { Link } from "react-router-dom"
import { useState } from "react"


function SignUpPage(){

  const [ userInfo, setUserInfo ] = useState({})
  const [ confirmPass, setConfirmPass ] = useState("")

    return(
        <>
    <main className="mb-24 flex-1">
    <div className="mx-auto mt-16 max-w-lg rounded-2xl border-4 border-green-700 px-12 py-5 text-center">
      <h1 className="mb-3 text-3xl font-bold">Sign Up</h1>
      <p className="mb-3">Join Cookpedia now!</p>
      <p className="mb-3">
        Already have an account? <span className="text-green-700"><Link to="/login-page">Login here</Link></span>
      </p>
      <div className="mb-3 flex flex-col gap-4">
        <input className="rounded-lg bg-gray-200 px-3 py-1" type="text" placeholder="Username" />
        <input className="rounded-lg bg-gray-200 px-3 py-1" type="email" placeholder="Email Address" />
        <input className="rounded-lg bg-gray-200 px-3 py-1" type="password" placeholder="Password" />
        <input className="rounded-lg bg-gray-200 px-3 py-1" type="password" placeholder="Confirm Password" />
      </div>
      <p className="mb-3 text-sm">By creating an account. You agree to our Terms & Conditions and Privacy Policy</p>
      <button className="rounded-full bg-green-700 px-10 py-1 text-white" type="submit">Create Account</button>
    </div>
  </main>
        </>
    )
}

export default SignUpPage;