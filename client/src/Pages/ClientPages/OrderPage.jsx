import "../../index.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import OrderForms from "../../Components/OrderForms.jsx";
import OrdersList from "../../Components/OrdersList.jsx";

function OrderPage() {
  return (
    <>
      <div className="flex flex-col items-center gap-4 p-">
        <OrderForms />
      </div>
    </>
  );
}

export default OrderPage;
