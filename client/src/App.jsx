import { useState, useEffect } from "react";
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

function App() {
  const [isLoggedIn, setLogin] = useState(false);

  const LogIn = () => {
    setLogin(true);
  };

  const LogOut = () => {
    setLogin(false);
  };

  return (
    <>
      <BrowserRouter>
        <header>
          {!isLoggedIn ? (
            <NavBar LoginState={isLoggedIn} Login={LogIn} Logout={LogOut} />
          ) : (
            <DashboardSidePanel />
          )}
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                isLoggedIn ? (
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
        {!isLoggedIn ? <Footer /> : <></>}
      </BrowserRouter>
    </>
  );
}

export default App;
