import { Link } from "react-router-dom"

function LoginPage(){

  return(
    <>
  <main class="flex-1">
    <div class="mx-auto mt-16 max-w-lg rounded-2xl border-4 border-green-700 px-12 py-5 text-center">
      <h1 class="mb-3 text-3xl font-bold">Login</h1>
      <p class="mb-3">
        Don't have an account? <Link to="/signup-page"><span class="text-green-700">Sign Up</span></Link>
      </p>
      <div class="mb-3 flex flex-col gap-4">
        <input class="rounded-lg bg-gray-200 px-3 py-1" type="text" placeholder="Username" />
        <input class="rounded-lg bg-gray-200 px-3 py-1" type="text" placeholder="Password" />
      </div>
      <button class="rounded-full bg-green-700 px-10 py-1 text-white" type="submit">Login</button>
      <p class="mb-3">
      <Link to="/forgot-password">Forgot Password?</Link>
      </p>
    </div>
  </main>
    </>
  )
}

export default LoginPage;