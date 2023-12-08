import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import AboutUs from "./Pages/ClientPages/AboutUs.jsx";
import ProductDisplay from "./Pages/ClientPages/ProductDisplay.jsx";
import OrderPage from "./Pages/ClientPages/OrderPage.jsx";
import Dashboard from "./Pages/StaffPages/Dashboard.jsx";
import DashboardSideBar from "./Components/DashboardSideBar.jsx";
import NavBar from "./Components/NavBar.jsx";
import OrderList from "./Pages/StaffPages/OrderList.jsx";
import Footer from "./Components/Footer.jsx";
import LoginPage from "./Pages/ClientPages/LoginPage.jsx";
import SignUpPage from "./Pages/ClientPages/SignUpPage.jsx";
import ForgotPassword from "./Pages/ClientPages/ForgotPassword.jsx";
import { useAuthContext } from "./hooks/useAuthContext.jsx";
import { AuthContext } from "./context/AuthContext.jsx";
import InventoryDisplay from "./Pages/StaffPages/InventoryDisplay.jsx";
import ResetForgottenPassword from "./Pages/ClientPages/ResetForgottenPassword.jsx";
import SuccessChangedPassword from "./Pages/ClientPages/SuccessChangedPassword.jsx";
import CheckEmailNewPassword from "./Pages/ClientPages/CheckEmailNewPassword.jsx";
import ViewProfile from "./Pages/ClientPages/ViewProfile.jsx";
import PaymentDetails from "./Pages/ClientPages/PaymentDetails.jsx";

function App() {
  const { user } = useAuthContext(AuthContext);
  return (
    <>
      <BrowserRouter>
        <header>
          {user == null ? (
            <NavBar />
          ) : user.user_type == "Customer" ? (
            <NavBar />
          ) : (
            <DashboardSideBar />
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
            <Route
              path="/order-form/payment-details"
              element={<PaymentDetails />}
            />
            <Route path="/inventory-display" element={<InventoryDisplay />} />
            <Route
              path="/reset-forgottenpassword"
              element={<ResetForgottenPassword />}
            />
            <Route path="/check-email" element={<CheckEmailNewPassword />} />
            <Route
              path="/success-changedpassword"
              element={<SuccessChangedPassword />}
            />
            <Route path="/view-profile" element={<ViewProfile />} />
          </Routes>
        </main>
        {user == null ? (
          <Footer />
        ) : user.user_type == "Customer" ? (
          <Footer />
        ) : (
          <></>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
