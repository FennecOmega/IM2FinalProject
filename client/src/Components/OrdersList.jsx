import "../index.css"
import OrderRow from "./OrderRow.jsx"
import axios from 'axios'


function OrdersList({Orders, setOrder}){

 

  function editFunction(){

  }

  function approveFunction(){

  }

  function cancelFunction(){

  }

  return(
    <>
     <div className="relative w-screen overflow-x-auto shadow-md sm:rounded-lg ">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Order ID
                </th>
                <th scope="col" className="px-6 py-3">
                    Transaction Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Customer Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Contact Number
                </th>
                <th scope="col" className="px-6 py-3">
                    Products Ordered
                </th>
                <th scope="col" className="px-6 py-3">
                    Total Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
            {Orders.map((form, index) => <OrderRow Order={form} Edit={editFunction} Delete={deleteFunction} key={index}/>)}
        </tbody>
    </table>
</div>
    </>
  )

}

export default OrdersList