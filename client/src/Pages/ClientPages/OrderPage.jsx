import "../../index.css";
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import OrderForms from "../../Components/OrderForms.jsx"
import OrdersList from "../../Components/OrdersList.jsx"

function OrderPage() {

  return (
   <>
    <div className="flex align-content: center">
    <OrderForms/>
    </div>
   </>
  );
}

export default OrderPage;