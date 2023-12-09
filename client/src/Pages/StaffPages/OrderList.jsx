import "../../index.css";
import { useState, useEffect } from "react";
import axios from "axios";
import OrdersList from "../../Components/OrdersList.jsx";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext.jsx";
import { AuthContext } from "../../context/AuthContext.jsx";

function OrderList() {
  const { user } = useAuthContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    const loader = async () => {
      console.log(user);
      if (user.user_type != "Staff") {
        navigate("/about-us");
      }
    };

    loader();
  }, [user, navigate]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/product/getOrders")
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
      <div className="flex ml-40">
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
