import axios from "axios";
import { useEffect, useState } from "react";
import FormatPriceToPhp from "../functions/FormatPriceToPhp";

function OrderRow({ Order, Edit, EditStatus, index }) {
  const [prodList, setProdList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/product/getProduct")
      .then(function (response) {
        setProdList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function getProdName(product) {
    var temp = prodList
      .map((prod) => prod.product_id)
      .indexOf(product.product_id);
    try {
      return prodList[temp].product_name;
    } catch (e) {
      return "undefined";
    }
  }

  function ShowProducts(Products) {
    const product = JSON.parse(Products);
    console.log(product);

    return product.map((product, index) => {
      return (
        <div key={index}>
          {getProdName(product)} | Quantity: {product.qty} |{" "}
          {FormatPriceToPhp(product.subtotal)}
        </div>
      );
    });
  }

  function EditFunc() {
    Edit(Order);
  }
  function EditStatusFunc(e) {
    EditStatus(Order, e);
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
        <td>{Order.transaction_date}</td>
        <td className="px-6 py-4">{Order.Name}</td>
        <td className="px-6 py-4">{Order.Contact}</td>
        <td className="px-6 py-4">
          {
            /* {Order.ArrayOfProducts.map((product, index) => {
            return (
              <div key={index}>
                {getProdName(product)} | Quantity: {product.Qty} |{" "}
                {FormatPriceToPhp(product.Subtotal)}
              </div>
            );
          })} */ ShowProducts(Order.ArrayOfProduct)
          }
        </td>
        <td className="px-6 py-4">{FormatPriceToPhp(Order.total_price)}</td>
        <td className="px-6 py-4">{Order.order_status}</td>
        <td className="px-6 py-4">
          <button
            value="APPROVED"
            className="mr-5 font-medium text-blue-600 dark:text-blue-500 hover:underline"
            onClick={(e) => EditStatusFunc(e)}
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
            value="CANCELLED"
            className="ml-5 font-medium text-blue-600 dark:text-blue-500 hover:underline"
            onClick={(e) => EditStatusFunc(e)}
          >
            Cancel
          </button>
        </td>
      </tr>
    </>
  );
}

export default OrderRow;
