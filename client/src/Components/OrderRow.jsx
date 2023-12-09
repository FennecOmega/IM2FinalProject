import axios from "axios";
import { useEffect, useState } from "react";
import FormatPriceToPhp from "../functions/FormatPriceToPhp";

function OrderRow({ Order, Edit, Approve, Cancel, index }) {
  const [prodList, setProdList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/product/send-product-list")
      .then(function (response) {
        setProdList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function getProdName(product) {
    var temp = prodList
      .map((prod) => prod.ProductID)
      .indexOf(product.ProductID);
    try {
      return prodList[temp].ProductName;
    } catch (e) {
      return "undefined";
    }
  }

  function EditFunc() {
    Edit(Order);
  }
  function ApproveFunc() {
    Approve(Order);
  }
  function CancelFunc() {
    Cancel(Order);
  }

  return (
    <>
      <tr
        className={
          index % 2 == 0
            ? "bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            : "bg-white dark:bg-gray-800"
        }
      >
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {Order.ID}
        </th>
        <td>{Order.TransactionDate}</td>
        <td className="px-6 py-4">{Order.Name}</td>
        <td className="px-6 py-4">{Order.Contact}</td>
        <td className="px-6 py-4">
          {Order.OrderedProducts.map((product, index) => {
            return (
              <div key={index}>
                {getProdName(product)} | Quantity: {product.Qty} |{" "}
                {FormatPriceToPhp(product.Subtotal)}
              </div>
            );
          })}
        </td>
        <td className="px-6 py-4">{convertPhp(Order.TotalPrice)}</td>
        <td className="px-6 py-4">{Order.Status}</td>
        <td className="px-6 py-4">
          <button
            className="mr-5 font-medium text-blue-600 dark:text-blue-500 hover:underline"
            onClick={ApproveFunc}
          >
            Approve
          </button>
          <button
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            onClick={EditFunc}
          >
            Edit
          </button>
          <button
            className="ml-5 font-medium text-blue-600 dark:text-blue-500 hover:underline"
            onClick={CancelFunc}
          >
            Cancel
          </button>
        </td>
      </tr>
    </>
  );
}

export default OrderRow;
