// DashboardSideBar.jsx

import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import AuthContext from "../context/AuthContext";
import { useState, useEffect } from "react";

const DashboardSideBar = () => {
  const { user, handleLogout } = useAuthContext(AuthContext);
  const [sidebar, setSideBar] = useState(false);
  const dashboardStyle = useEffect(() => {
    user.permissions != "Customer" && user.permissions != null
      ? setSideBar(true)
      : setSideBar(false);
  }, []);

  const sidebarStyles = {
    position: "absolute",
    top: "1",
    left: true ? 0 : "-150px",
    width: "64px",
    backgroundColor: "#fff",
    transition: "left 0.3s ease-in-out",
  };
  return (
    <div style={sidebarStyles}>
      <div className="flex flex-row">
        <aside>
          <div className="flex w-[150px] flex-col shadow-xl">
            <nav className="flex-1 divide-y-2">
              <ul className="flex flex-col gap-y-2">
                <li>
                  <a>
                    <Link to="/dashboard">
                      <button className="flex items-center gap-2 px-3 py-3 cursor-pointer hover:bg-green-700 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-user-square-rounded"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                          <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                          <path d="M6 20.05v-.05a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.05" />
                        </svg>
                        Dashboard
                      </button>
                    </Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to="/dashboard">
                      <button className="flex items-center gap-2 px-3 py-3 cursor-pointer hover:bg-green-700 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-user-square-rounded"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                          <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                          <path d="M6 20.05v-.05a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.05" />
                        </svg>
                        Products
                      </button>
                    </Link>
                  </a>
                </li>

                <li>
                  <a>
                    <Link to="/order-list">
                      <button className="flex items-center gap-2 px-3 py-3 cursor-pointer hover:bg-green-700 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-user-square-rounded"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                          <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                          <path d="M6 20.05v-.05a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.05" />
                        </svg>
                        Orders
                      </button>
                    </Link>
                  </a>
                </li>

                <li>
                  <a>
                    <Link to="/view-profile">
                      <button className="flex items-center gap-2 px-3 py-3 cursor-pointer hover:bg-green-700 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-user-square-rounded"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                          <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                          <path d="M6 20.05v-.05a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.05" />
                        </svg>
                        Inventory
                      </button>
                    </Link>
                  </a>
                </li>

                <li>
                  <a>
                    <Link to="/dashboard">
                      <button className="flex items-center gap-2 px-3 py-3 cursor-pointer hover:bg-green-700 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-user-square-rounded"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                          <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                          <path d="M6 20.05v-.05a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.05" />
                        </svg>
                        Users
                      </button>
                    </Link>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a>
                    <Link to="/view-profile">
                      <button className="flex items-center gap-2 px-3 py-3 cursor-pointer hover:bg-green-700 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-user-square-rounded"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                          <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                          <path d="M6 20.05v-.05a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.05" />
                        </svg>
                        Profile
                      </button>
                    </Link>
                  </a>
                </li>

                <li>
                  <a>
                    <Link to="/about-us">
                      <button
                        className="flex items-center gap-2 px-3 py-3 cursor-pointer hover:bg-green-700 hover:text-white"
                        onClick={handleLogout}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-logout"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                          <path d="M9 12h12l-3 -3" />
                          <path d="M18 15l3 -3" />
                        </svg>
                        Logout
                      </button>
                    </Link>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DashboardSideBar;
