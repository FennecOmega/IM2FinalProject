import "../../index.css";
import { useState } from 'react'
import NameForm from "../../Components/NameForm.jsx"
import OrdersList from "../../Components/OrdersList.jsx"

function OrderForm() {

  return (
   <>
    <div className="flex align-content: center">
    <NameForm/>
    </div>
   </>
  );
}

export default OrderForm;