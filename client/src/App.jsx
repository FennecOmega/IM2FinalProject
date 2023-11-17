import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import "./index.css";
import AboutUs from "./Pages/ClientPages/AboutUs.jsx"
import ProductDisplay from "./Pages/ClientPages/ProductDisplay.jsx"
import OrderForm from "./Pages/ClientPages/OrderForm.jsx"
import Dashboard from "./Pages/StaffPages/Dashboard.jsx"
import DashboardSidePanel from "./Components/DashboardSidePanel.jsx"
import NavBar from "./Components/NavBar.jsx"


function App() {

const [ isLoggedIn, setLogin ] = useState(false);


  return (
    <>
      <BrowserRouter>
        <header>
          { (!isLoggedIn) ? <NavBar/> : <DashboardSidePanel/> }
        </header>
        <main className="flex mt-20">
         
         <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard"/> : <Navigate to="/about-us"/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/product-display" element={<ProductDisplay/>}/>
          <Route path="/order-form" element={<OrderForm/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
         </Routes>
        
        </main> 
      </BrowserRouter>
    </>
  );
}

export default App;
