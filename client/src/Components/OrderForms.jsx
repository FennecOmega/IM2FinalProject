import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductOrderCard from './ProductOrderCard.jsx'

function OrderForms(){
   console.log("re-render")
 
    const [details, setDetails] = useState({Name: "", Contact: ""})
    const [prodList, setProdList] = useState([])
    const [itemList, setItemList] = useState([])

    function AddProduct(item) {
      
      var product = {ProductID: item.ProductID, Qty: 1, Price: item.UnitPrice, Subtotal: 0.0}

      let newProductIndex = itemList.findIndex((i) => item.ProductID === i.ProductID)
      
      if(newProductIndex == -1){
        setItemList([...itemList, product])
      }else{
        const newCart = itemList
        newCart[newProductIndex].Qty++;
        setItemList(newCart)
      }
    }

    function DelProduct(item) {
      var temp = itemList.map(product => product.ProductID).indexOf(item.ProductID);
      if(temp != -1 && itemList[temp].Qty > 0){
        itemList[temp].Qty--;
        if(itemList[temp].Qty == 0){
          setItemList(itemList.filter((i) => i.Qty > 0))
        }
      }

    }

    // TODO
    // FINISHED The order product process works by choosing from the entire order of available products 
    // FINISHED The user then clicks on an add button to increase quantity of that specific item
    // FINISHED this item is then passed into an array of products, and will stay there even if qty is 0 
    // FINISHED Order post process: Before posting the order item into the backend, it will undergo 3 processes
    // FINISHED Add date and time to log when the order was taken, then filter out the product order 
    // FINISHED Filtering works by removing all product orders with a quantity of 0.
    // FINISHED If this process returns an empty array, prompt the user to add items and stop the post. 
    // FINISHED Else, collate the subtotal into the total price and add user account ID and post the object into the express backend.
    
    // NEW TODO
    // Finished form (Cart/itemList) will be the first page in order form.
    // Afterwards, if user is not logged in, they will be prompted to enter customer details. This will be posted to the backend.
    // Else, if user is logged in, use the current user token too check for customer type and customer ID, and Order inherits that ID.
    // Once the backend generates a unique customer ID, it will be inherited by the Order object upon continuing to payment.
    // Payment can be done in-person or through GCASH.
    // if in-person payment is chosen, immediately skip to confirming order, showing details of the customer's order.
    // else, prompt users to upload an image file of their GCASH receipt OR submit reference number. then proceed to confirmation.
    // After confirmation, print out a png/pdf of the order ticket, format will be specified.

    //BUGFIX
    // fixed jajajaja Date does not show up on post.
    // fixed jajajaja Bug where it takes 2 attempts to add itemList into OrderedProducts.

    useEffect(() => {axios.get('http://localhost:3000/product-list')
   .then(function (response) {
     setProdList(response.data)
   })
   .catch(function (error){
     console.log(error)
   })}, 
   [])

  
    async function postorder(order){
     
        await axios.post("http://localhost:3000/append-list", order)
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error){
            console.log(error)
        })
      
    }

  async function handleClick(){
     const order = {
      ID: 0,
      TransactionDate: new Date().toISOString().slice(0, 19).replace('T', ' '), 
      Name: details.Name,
      Contact: details.Contact,
      OrderedProducts: itemList.map((item) => (item.Subtotal = item.Price * item.Qty, item)), 
      TotalPrice: itemList.reduce((currPrice, item) => currPrice += item.Subtotal, 0),
      PaymentMethod: "",
      Status: "PENDING"
     }

     if(order.TotalPrice != 0 && details.Name != ""){
       console.log(order)
       await postorder(order)
     
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
      <input id="username" type="text" className="border-4 border-black" onChange={(e) => setDetails({...details, Name: e.target.value})}></input>
      <p>contact no.</p>
      <input id="contact" type="text" className="border-4 border-black" onChange={(e) => setDetails({...details, Contact: e.target.value})}></input>
      <p>Products</p>
      {prodList.map((prod, index) => <ProductOrderCard key={index} AddQty={AddProduct} DelQty={DelProduct} item={prod}/>)}
      
      <p>Current Total: </p>
      <button onClick={handleClick}>ADD</button>
      <p id="errMessage"></p>

      </>

   )

}

export default OrderForms