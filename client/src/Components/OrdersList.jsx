import "../index.css";
import OrderRow from "./OrderRow.jsx";
import axios from "axios";
import { useState } from "react";

function OrdersList({ Orders, setOrder }) {
  // const [loading, setLoading] = useState(false);

  function editFunction(order) {
    let orderPos = Orders.findIndex((O) => O.ID === order.ID);
  }

  function editStatus(order, e) {
    console.log("changeStatus");
    console.log(e.target.value);
    let orderPos = Orders.findIndex((O) => O.product_id === order.product_id);
    if (orderPos != -1 && order.order_status == "PENDING") {
      Orders[orderPos].order_status = e.target.value;
      updateStatus(Orders[orderPos]);
      // setLoading(true);
    }
  }

  async function updateStatus(order) {
    await axios
      .patch("http://localhost:3001/product/updateOrder", order)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    // .finally(() => {
    //   setLoading(false);
    // });
  }

  async function refreshOrders() {
    await axios
      .get("http://localhost:3000/order/send-order-list")
      .then(function (response) {
        setOrder(response.data) + console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <div className="relative w-screen overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
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
            {Orders.map((form, index) => (
              <OrderRow
                Order={form}
                Edit={editFunction}
                EditStatus={editStatus}
                key={index}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default OrdersList;
