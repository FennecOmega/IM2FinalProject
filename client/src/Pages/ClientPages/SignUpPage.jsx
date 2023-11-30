import { Link } from "react-router-dom"

function SignUpPage(){

    return(
        <>
    <main class="mb-24 flex-1">
    <div class="mx-auto mt-16 max-w-lg rounded-2xl border-4 border-green-700 px-12 py-5 text-center">
      <h1 class="mb-3 text-3xl font-bold">Sign Up</h1>
      <p class="mb-3">Join Cookpedia now!</p>
      <p class="mb-3">
        Already have an account? <span class="text-green-700"><Link to="/login-page">Login here</Link></span>
      </p>
      <div class="mb-3 flex flex-col gap-4">
        <input class="rounded-lg bg-gray-200 px-3 py-1" type="text" placeholder="Username" />
        <input class="rounded-lg bg-gray-200 px-3 py-1" type="email" placeholder="Email Address" />
        <input class="rounded-lg bg-gray-200 px-3 py-1" type="password" placeholder="Password" />
        <input class="rounded-lg bg-gray-200 px-3 py-1" type="password" placeholder="Confirm Password" />
      </div>
      <p class="mb-3 text-sm">By creating an account. You agree to our Terms & Conditions and Privacy Policy</p>
      <button class="rounded-full bg-green-700 px-10 py-1 text-white" type="submit">Create Account</button>
    </div>
  </main>
        </>
    )
}

export default SignUpPage;