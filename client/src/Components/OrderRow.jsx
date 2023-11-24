import "../index.css"

function OrderRow({Order, Edit, Delete, key}){

return(
         <>
           <tr className={(key % 2 == 0) ? "bg-white border-b dark:bg-gray-800 dark:border-gray-700" : "bg-white dark:bg-gray-800"}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {Order.ID}
                </th>
                <td className="px-6 py-4">
                   {Order.Name}
                </td>
                <td className="px-6 py-4">
                    {Order.Contact}
                </td>
                <td className="px-6 py-4">
                    {Order.Product}
                </td>
                <td className="px-6 py-4">
                    {Order.Quantity}
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