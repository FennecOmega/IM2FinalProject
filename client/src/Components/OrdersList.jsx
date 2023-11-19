import "../index.css"

function OrdersList({Order}){

  return(
    <>
     <div>
        <p>{Order.ID}, {Order.Name}, {Order.Contact}, {Order.Product}, {Order.Quantity}</p>
        <br></br>
     </div>
    </>
  )

}

export default OrdersList