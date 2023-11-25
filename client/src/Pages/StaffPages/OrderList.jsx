import "../../index.css";
import { useState, useEffect } from 'react'
import axios from 'axios'
import OrdersList from "../../Components/OrdersList.jsx"
// import { createRequire } from 'node:module'
// const require  = createRequire(import.meta.url)
// const axios = require('axios')

function OrderList() {

   useEffect(() => {axios.get('http://localhost:3000/sample-list')
   .then(function (response) {
     setForms(response.data)
     console.log(response.data)
   })
   .catch(function (error){
     console.log(error)
   })}, 
   [])
 
  const [ forms, setForms ] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/sampleList", { // replace fetch link with express link
  //     method: "GET",
  //     header: "cors"
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setForms(data);
  //       console.log(data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);




  return (
   <>
    <div className="w-full">
    {/* {forms.map((form) => <div> <OrdersList Order={form}/> </div>)} */
    
    }
     <OrdersList Orders={forms}/>
    </div>
   </>
  );
}

export default OrderList;