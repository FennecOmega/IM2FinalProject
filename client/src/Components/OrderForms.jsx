import { useState, useEffect } from "react";
import axios from "axios";
import ProductOrderCard from "./ProductOrderCard.jsx";

function OrderForms() {
  console.log("re-render");

  const [details, setDetails] = useState({ Name: "", Contact: "" });
  const [prodList, setProdList] = useState([]);
  const [itemList, setItemList] = useState([]);

  function AddProduct(item) {
    var product = {
      ProductID: item.ProductID,
      Qty: 1,
      Price: item.UnitPrice,
      Subtotal: 0.0,
    };

    let newProductIndex = itemList.findIndex(
      (i) => item.ProductID === i.ProductID
    );

    if (newProductIndex == -1) {
      setItemList([...itemList, product]);
    } else {
      const newCart = itemList;
      newCart[newProductIndex].Qty++;
      setItemList(newCart);
    }
  }

  function DelProduct(item) {
    var temp = itemList
      .map((product) => product.ProductID)
      .indexOf(item.ProductID);
    if (temp != -1 && itemList[temp].Qty > 0) {
      itemList[temp].Qty--;
      if (itemList[temp].Qty == 0) {
        setItemList(itemList.filter((i) => i.Qty > 0));
      }
    }
  }

  // NEW TODO
  // Finished form (Cart/itemList) will be the first page in order form.
  // Afterwards, if user is not logged in, they will be prompted to enter customer details. This will be posted to the backend.
  // Else, if user is logged in, use the current user token too check for customer type and customer ID, and Order inherits that ID.
  // Once the backend generates a unique customer ID, it will be inherited by the Order object upon continuing to payment.
  // Payment can be done in-person or through GCASH.
  // if in-person payment is chosen, immediately skip to confirming order, showing details of the customer's order.
  // else, prompt users to upload an image file of their GCASH receipt OR submit reference number. then proceed to confirmation.
  // After confirmation, print out a png/pdf of the order ticket, format will be specified.

  useEffect(() => {
    axios
      .get("http://localhost:3000/product/send-product-list")
      .then(function (response) {
        setProdList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  async function postorder(order) {
    await axios
      .post("http://localhost:3000/order/add-order", order)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async function handleClick() {
    var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
    var localISOTime = new Date(Date.now() - tzoffset)
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");
    console.log(localISOTime);

    const order = {
      ID: 0,
      TransactionDate: localISOTime,
      Name: details.Name,
      Contact: details.Contact,
      OrderedProducts: itemList.map(
        (item) => ((item.Subtotal = item.Price * item.Qty), item)
      ),
      TotalPrice: itemList.reduce(
        (currPrice, item) => (currPrice += item.Subtotal),
        0
      ),
      PaymentMethod: "",
      Status: "PENDING",
    };

    if (order.TotalPrice != 0 && details.Name != "") {
      console.log(order);
      await postorder(order);
      return (document.getElementById("errMessage").innerHTML =
        "Order successful.");
    } else if (details.Name == "") {
      const error = "ERROR: Name does not exist.";
      console.log(error);
      return (document.getElementById("errMessage").innerHTML = error);
    } else if (order.TotalPrice == 0) {
      const error = "ERROR: No items ordered.";
      console.log(error);
      return (document.getElementById("errMessage").innerHTML = error);
    }
  }

  // todo: create a functional order

  return (
    <>
      <p>name</p>
      <input
        id="username"
        type="text"
        className="border-4 border-black"
        onChange={(e) => setDetails({ ...details, Name: e.target.value })}
      ></input>
      <p>contact no.</p>
      <input
        id="contact"
        type="text"
        className="border-4 border-black"
        onChange={(e) => setDetails({ ...details, Contact: e.target.value })}
      ></input>
      <p>Products</p>
      <div className="flex gap-4">
        {prodList.map((prod, index) => (
          <ProductOrderCard
            key={index}
            AddQty={AddProduct}
            DelQty={DelProduct}
            item={prod}
          />
        ))}
      </div>

      <p>Current Total: </p>
      <button onClick={handleClick}>ADD</button>
      <p id="errMessage"></p>
    </>
  );
}

export default OrderForms;
