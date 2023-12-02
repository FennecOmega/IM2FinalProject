import { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import AboutUs from "./Pages/ClientPages/AboutUs.jsx";
import ProductDisplay from "./Pages/ClientPages/ProductDisplay.jsx";
import OrderPage from "./Pages/ClientPages/OrderPage.jsx";
import Dashboard from "./Pages/StaffPages/Dashboard.jsx";
import DashboardSidePanel from "./Components/DashboardSidePanel.jsx";
import NavBar from "./Components/NavBar.jsx";
import OrderList from "./Pages/StaffPages/OrderList.jsx";
import Footer from "./Components/Footer.jsx";
import LoginPage from "./Pages/ClientPages/LoginPage.jsx";
import SignUpPage from "./Pages/ClientPages/SignUpPage.jsx";
import ForgotPassword from "./Pages/ClientPages/ForgotPassword.jsx";
import { useAuthContext } from "./hooks/useAuthContext.jsx";
import { AuthContext } from "./context/AuthContext.jsx";

function App() {
  const { user } = useAuthContext(AuthContext);
  return (
    <>
      <BrowserRouter>
        <header>
          {user == null ? (
            <NavBar />
          ) : user.UserType == "Customer" ? (
            <NavBar />
          ) : (
            <DashboardSidePanel />
          )}
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                user == null ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <Navigate to="/about-us" />
                )
              }
            />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-products" element={<ProductDisplay />} />
            <Route path="/order-form" element={<OrderPage />} />
            <Route path="/login-page" element={<LoginPage />} />
            <Route path="/signup-page" element={<SignUpPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/order-list" element={<OrderList />} />
          </Routes>
        </main>
        {user == null ? (
          <Footer />
        ) : user.UserType == "Customer" ? (
          <Footer />
        ) : (
          <></>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
