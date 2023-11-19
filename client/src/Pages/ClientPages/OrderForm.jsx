import "../../index.css";
import { useState } from 'react'
import NameForm from "../../Components/NameForm.jsx"
import OrdersList from "../../Components/OrdersList.jsx"

function OrderForm() {

  const [ forms, setForms ] = useState([]);

  function changeForms(form) {

    setForms((forms) => [...forms, form]) 
    

  }

  console.log(forms)

  return (
   <>
    <div className="flex align-content: center">
    <NameForm changeForms={changeForms}/>
    </div>

    <div className="flex align-content: center mt-10">
    {forms.map((form) => <OrdersList Order={form}/>)}
    </div>
   </>
  );
}

export default OrderForm;