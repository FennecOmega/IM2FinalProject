import "../../index.css";
import { useState, useEffect } from "react";
import axios from "axios";
import OrdersList from "../../Components/OrdersList.jsx";

function OrderList() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/order/send-order-list")
      .then(function (response) {
        setForms(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const [order, setOrder] = useState({});
  const [forms, setForms] = useState([]);

  return (
    <>
      <div className="w-full">
        <OrdersList
          Orders={forms}
          item={order}
          setItem={setOrder}
          setOrder={setForms}
          key={1}
        />
      </div>
    </>
  );
}

export default OrderList;
