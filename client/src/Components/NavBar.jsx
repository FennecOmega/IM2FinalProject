// NOTE: To be used ONLY in client pages

import { Link } from "react-router-dom"
import '../index.css'
import '../ui/Login.css'

function NavBar({LoginState, Login, Logout}){

    return (
   <>
    <nav className="fixed top-0 flex items-center justify-between flex-wrap bg-teal-500 p-6 w-screen">
      
      <div className=" block flex-grow lg:flex lg:items-center lg:w-auto">
       <div className="text-sm lg:flex-grow">
         <Link to="/AboutUs" href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">About Us</Link>

         <Link to="/ProductDisplay" href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Our Products</Link>

         <Link to="/OrderForm" href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Order Now</Link>
         </div>

         <div>
          {(!LoginState) ? <button onClick={Login} className="Login hover:bg-white mt-4 lg:mt-0">Log In</button> : <button onClick={Logout} className="Login hover:bg-white mt-4 lg:mt-0">Log Out</button>}
         </div>
       </div>
    </nav>
   </>
 )
}

export default NavBar;