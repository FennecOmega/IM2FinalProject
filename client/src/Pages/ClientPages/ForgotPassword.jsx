import { Link } from "react-router-dom"

function ForgotPassword(){

    return(
        <>
        
  <main class="mb-24 flex-1">
    <div class="mx-auto mt-16 max-w-lg rounded-2xl border-4 border-green-700 px-12 py-5 text-center">
      <h1 class="mb-3 text-3xl font-bold">Lost Account</h1>
      <p class="mb-3">
        Return to <span class="text-green-700"><Link to="/login-page">Login here</Link></span>
      </p>
      <div class="mb-3 flex flex-col gap-4">
        <input class="rounded-lg bg-gray-200 px-3 py-1" type="email" placeholder="Email Address" />

      </div>
      <p class="mb-3 text-sm">You'll receive an email for recovering your account.</p>
      <button class="rounded-full bg-green-700 px-10 py-1 text-white" type="submit">Send</button>
    </div>
  </main>


        </>
    )
}

export default ForgotPassword;