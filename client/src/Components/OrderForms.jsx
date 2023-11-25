import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductOrderCard from './ProductOrderCard.jsx'

function OrderForms(){

    const [list, setList] = useState({
      ID: 0,
      TransactionDate: "", 
      Name: "",
      Contact: "",
      OrderedProducts: [{}], 
      TotalPrice: 0
    })
    const [prodList, setProdList] = useState([])
    const [orderList, setOrderList] = useState([])

    console.log(list)

    function AddProduct(item) {
      console.log(item)
      var product = {ProductID: item.ProductID, Qty: 1, Subtotal: 1 * item.UnitPrice}
      var currPrice = list.TotalPrice;
      var temp = orderList.map(product => product.ProductID).indexOf(item.ProductID);
      console.log(temp)
      if(temp == -1){
      setOrderList([...orderList, product])
      }else{
      orderList[temp].Qty += 1; orderList[temp].Subtotal = item.UnitPrice * orderList[temp].Qty;
      }
      
      setList({...list, OrderedProducts: orderList, TotalPrice: currPrice + item.UnitPrice})
    }

    function DelProduct(item) {
      var temp = orderList.map(product => product.ProductID).indexOf(item.ProductID);
      var currPrice = list.TotalPrice;
      if(temp == 0 && orderList[temp].Qty > 0){
        orderList[temp].Qty--; orderList[temp].Subtotal = item.UnitPrice * orderList[temp].Qty;
      }
      setList({...list, OrderedProducts: orderList, TotalPrice: currPrice - item.UnitPrice})
    }

    // TODO
    // User inputs contact (optional), payment method, and order.
    // FINISHED The order product process works by choosing from the entire list of available products 
    // FINISHED The user then clicks on an add button to increase quantity of that specific item
    // FINISHED this item is then passed into an array of products, and will stay there even if qty is 0 
    // IF cash on delivery/cash on pickup is chosen, skip. Else, if gcash, prompt user to upload gcash receipt or reference number
    // Order post process: Before posting the order item into the backend, it will undergo 3 processes
    // Add date and time to log when the order was taken, then filter out the product order list 
    // FINISHED Filtering works by removing all product orders with a quantity of 0.
    // If this process returns an empty array, prompt the user to add items and stop the post. 
    // Else, collate the subtotal into the total price and add user account ID and post the object into the express backend.

    useEffect(() => {axios.get('http://localhost:3000/product-list')
   .then(function (response) {
     setProdList(response.data)
     console.log(response.data)
   })
   .catch(function (error){
     console.log(error)
   })}, 
   [])

  
    async function postList(){
     
        await axios.post("http://localhost:3000/append-list", list)
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error){
            console.log(error)
        })
      
    }

  async function handleClick(){
     var temp = orderList.map(product => product.Qty).indexOf(0)
     console.log(temp)

     if(temp == -1){
     setList({...list, TransactionDate: new Date().toISOString().slice(0, 19).replace('T', ' ')})

     await postList()
     setList({ID: 0, Name: "",
     Contact: "",
     OrderedProducts: [{}], 
     TotalPrice: 0})
     }

     else{
      return "ERROR: No items ordered/missing information."
     }
   }

   // todo: create a functional order 

   return (
      
      <>
      <p>name</p>
      <input type="text" className="border-4 border-black" onChange={(e) => setList({...list, Name: e.target.value})}></input>
      <p>contact no.</p>
      <input type="text" className="border-4 border-black" onChange={(e) => setList({...list, Contact: e.target.value})}></input>
      <p>Products</p>
      {prodList.map((prod, index) => <ProductOrderCard key={index} AddQty={AddProduct} DelQty={DelProduct} item={prod}/>)}
      
      <p>Current Total: {list.TotalPrice}</p>
      <button onClick={handleClick}>ADD</button>

      </>

   )

}

export default OrderForms