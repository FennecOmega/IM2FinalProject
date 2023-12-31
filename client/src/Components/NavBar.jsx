// NOTE: To be used ONLY in client pages

import React, { useState } from "react";
import DashboardSideBar from "./DashboardSideBar";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import "../index.css";
import "../ui/Login.css";
import BakingBreadLogo from "/data/images/logo.png";
import { useAuthContext } from "../hooks/useAuthContext.jsx";
import { AuthContext } from "../context/AuthContext.jsx";

function NavBar() {
  const location = useLocation();
  location.pathname;

  const { user, handleLogout } = useAuthContext(AuthContext);
  console.log(user);

  // const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  // const toggleSideBar = () => {
  //   setIsSideBarOpen((prev) => !prev);
  // };

  // const closeSideBar = () => {
  //   setIsSideBarOpen(false);
  // };

  return (
    <>
      <nav className="sticky top-0 z-20 w-full bg-yellow-400 dark:bg-gray-900 start-0 ">
        <div className="flex flex-wrap items-center justify-between w-85 p-4 mx-auto ml-4 mr-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div
              className="flex-shrink-0 cursor-pointer"
              // onClick={toggleSideBar}
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-5"
              >
                <path d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" />
              </svg> */}
            </div>

            <a
              href=""
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Link to="/about-us"><img
                src={BakingBreadLogo}
                className="w-16 h-16 lg:w-24 lg:h-24 xl:w-32 xl:h-32"
                alt="Banana Cupcake Logo"
              /></Link>
               <Link to="/about-us"><span className="self-center text-2xl font-semibold whitespace-nowrap md:text-white dark:text-white">
                Banana Cupcake
              </span></Link>
            </a>
          </div>
          <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
            {user == null ? (
              <Link to="/login-page">
                <button
                  type="button"
                  className="px-4 py-2 text-base font-semibold text-center text-white bg-amber-700 rounded-lg hover:bg-amber-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login
                </button>
              </Link>
            ) : (
              <button
                type="button"
                className="px-4 py-2 text-base font-semibold text-center text-white bg-sky-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
            {/* <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button> */}
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 text-lg font-semibold border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-yellow-400 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 hover: font-bold">
              <li>
                <Link
                  to="/about-us"
                  className={
                    location.pathname == "/about-us"
                      ? "currentPage"
                      : "otherPage"
                  }
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/our-products"
                  className={
                    location.pathname == "/our-products"
                      ? "currentPage"
                      : "otherPage"
                  }
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  to="/order-form"
                  className={
                    location.pathname == "/order-form"
                      ? "currentPage"
                      : "otherPage"
                  }
                >
                  Order Now
                </Link>
              </li>
              {user != null ? (
                <li>
                  <Link
                    to="/view-profile"
                    className={
                      location.pathname == "/view-profile"
                        ? "currentPage"
                        : "otherPage"
                    }
                  >
                    View Profile
                  </Link>
                </li>
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* <DashboardSideBar isOpen={isSideBarOpen} onClose={closeSideBar} /> */}
    </>
  );
}

export default NavBar;
