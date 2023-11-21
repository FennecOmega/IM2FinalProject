import "../../index.css";
import { useState, useEffect } from 'react'
import OrdersList from "../../Components/OrdersList.jsx"

function OrderList() {

  const [ forms, setForms ] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/sampleList", { // replace fetch link with express link
      method: "GET",
      header: "cors"
    })
      .then((response) => response.json())
      .then((data) => {
        setForms(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  

  console.log(forms)

  return (
   <>
    <div className="flex align-content: center mt-10">
    {forms.map((form) => <div> <OrdersList Order={form}/> </div>)}
    </div>
   </>
  );
}

export default OrderList;