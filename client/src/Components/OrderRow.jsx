import "../index.css"
import axios from 'axios'
import { useEffect, useState } from 'react'
 
function OrderRow({Order, Edit, Delete, key}){

    const [prodList, setProdList] = useState([])

    useEffect(() => {axios.get('http://localhost:3000/product-list')
    .then(function (response) {
      setProdList(response.data)
      console.log(response.data)
    })
    .catch(function (error){
      console.log(error)
    })}, 
    [])

    function getProdName(product){
        var temp = prodList.map((prod) => prod.ProductID).indexOf(product.ProductID)
        try{
        return prodList[temp].ProductName
        }catch (e){
        return "undefined" 
       }
    }
    function convertPhp(price){
        return Intl.NumberFormat('en-DE', {style: 'currency', currency: 'PHP'}).format(price)
    }

return(
         <>
           <tr className={(key % 2 == 0) ? "bg-white border-b dark:bg-gray-800 dark:border-gray-700" : "bg-white dark:bg-gray-800"}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {Order.ID}
                </th>
                <td>
                   {Order.TransactionDate}
                </td>
                <td className="px-6 py-4">
                   {Order.Name}
                </td>
                <td className="px-6 py-4">
                    {Order.Contact}
                </td>
                <td className="px-6 py-4">
                    {Order.OrderedProducts.map((product, index) => {return <div>{getProdName(product)} | Quantity: {product.Qty} | {convertPhp(product.Subtotal)}</div>})}
                </td>
                <td className="px-6 py-4">
                    {convertPhp(Order.TotalPrice)}
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-5">Delete</a>
                </td>
            </tr>
         </>
     )
}

export default OrderRow