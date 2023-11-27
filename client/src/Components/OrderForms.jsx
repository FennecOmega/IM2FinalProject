import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductOrderCard from './ProductOrderCard.jsx'

function OrderForms(){

    const [order, setOrder] = useState({
      ID: 0,
      TransactionDate: "", 
      Name: "",
      Contact: "",
      OrderedProducts: [{}], 
      TotalPrice: 0,
      PaymentMethod: "",
      Status: "PENDING"
    })
    const [prodList, setProdList] = useState([])
    const [itemList, setItemList] = useState([])

    function AddProduct(item) {
      
      var product = {ProductID: item.ProductID, Qty: 1, Subtotal: 1 * item.UnitPrice}
      var currPrice = order.TotalPrice;
      var temp = itemList.map(product => product.ProductID).indexOf(item.ProductID);
      
      if(temp == -1){
        setItemList([...itemList, product])
      }else{
      itemList[temp].Qty += 1; itemList[temp].Subtotal = item.UnitPrice * itemList[temp].Qty;
      }
      console.log(itemList)
      setOrder({...order, TotalPrice: currPrice + item.UnitPrice})
      setOrder({...order, OrderedProducts: itemList})
    }

    function DelProduct(item) {
      var temp = itemList.map(product => product.ProductID).indexOf(item.ProductID);
      var currPrice = order.TotalPrice;
      if(temp != -1 && itemList[temp].Qty > 0){
        itemList[temp].Qty--; itemList[temp].Subtotal = item.UnitPrice * itemList[temp].Qty;
        setOrder({...order, TotalPrice: currPrice - item.UnitPrice})
      }
      setOrder({...order, OrderedProducts: itemList})
    }

    // TODO
    // User inputs contact (optional), payment method, and order.
    // FINISHED The order product process works by choosing from the entire order of available products 
    // FINISHED The user then clicks on an add button to increase quantity of that specific item
    // FINISHED this item is then passed into an array of products, and will stay there even if qty is 0 
    // IF cash on delivery/cash on pickup is chosen, skip. Else, if gcash, prompt user to upload gcash receipt or reference number
    // Order post process: Before posting the order item into the backend, it will undergo 3 processes
    // Add date and time to log when the order was taken, then filter out the product order order 
    // FINISHED Filtering works by removing all product orders with a quantity of 0.
    // FINISHED Add the date and time of the transaction
    // If this process returns an empty array, prompt the user to add items and stop the post. 
    // Else, collate the subtotal into the total price and add user account ID and post the object into the express backend.

    //BUGFIX
    // Date does not show up on post.
    // Bug where it takes 2 attempts to add itemList into OrderedProducts.

    useEffect(() => {axios.get('http://localhost:3000/product-order')
   .then(function (response) {
     setProdList(response.data)
   })
   .catch(function (error){
     console.log(error)
   })}, 
   [])

  
    async function postorder(){
     
        await axios.post("http://localhost:3000/append-order", order)
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error){
            console.log(error)
        })
      
    }

  async function handleClick(){
     var temp = itemList.map(product => product.Qty).indexOf(0)
     console.log(temp)

     if(temp == -1 && order.Name != ""){
     order.TransactionDate = new Date().toISOString().slice(0, 19).replace('T', ' ')
     

     await postorder()
     setOrder({ID: 0,
      TransactionDate: "", 
      Name: "",
      Contact: "",
      OrderedProducts: [{}], 
      TotalPrice: 0,
      Status: "PENDING"})
     setItemList([])
     }

     else{
      const error = "ERROR: No items ordered/missing information."
      console.log(error)
      return document.getElementById("errMessage").innerHTML = error
     }
   }

   // todo: create a functional order 

   return (
      
      <>
      <p>name</p>
      <input id="username" type="text" className="border-4 border-black" onChange={(e) => setOrder({...order, Name: e.target.value})}></input>
      <p>contact no.</p>
      <input id="contact" type="text" className="border-4 border-black" onChange={(e) => setOrder({...order, Contact: e.target.value})}></input>
      <p>Products</p>
      {prodList.map((prod, index) => <ProductOrderCard key={index} AddQty={AddProduct} DelQty={DelProduct} item={prod}/>)}
      
      <p>Current Total: {order.TotalPrice}</p>
      <button onClick={handleClick}>ADD</button>
      <p id="errMessage"></p>

      </>

   )

}

export default OrderForms