const express = require("express");
const app = express();
var router = express.Router();
const port = 3000;
const cors = require("cors");
const jwt = require("jsonwebtoken");
const db = require("./database.js");

app.use(express.json());
app.use(cors());

// NOTE:
// This is just a prototype, this is not the final express.js file unless circumstances require.
// ONLY use this to validate that the frontend functionalities are working, and are sending/receiving requests properly.
// Any functionalities that will be used in the final output will be commented as such (mostly jsonwebtoken auth)
// Prototype features missing: password hashes, jsonwebtoken integration

const customerList = [
  {
    CustomerID: 1,
    FName: "Gusion Lodicakes",
    MI: "A.",
    LName: "dela Cruz",
    Address: "Gyatt Towers, Skibidi City",
    ContactNo: "+63 123 456 7890",
    Birthdate: "2000-05-02",
  },
  {
    CustomerID: 2,
    FName: "Fanum",
    MI: "",
    LName: "Taxer",
    Address: "Rizzler Road, Ohio",
    ContactNo: "+63 420 6969 1337",
    Birthdate: "2002-11-12",
  },
];

const staffList = [
  {
    StaffID: 1,
    FName: "Administrator",
    MI: "D.",
    LName: "Admin",
    Residence: "Warra House Lane, Kai City",
    BirthDate: "1993-10-17",
    StaffStatus: "active",
    StaffType: "ADMIN",
  },
  {
    StaffID: 2,
    FName: "Accountancy",
    MI: "D.",
    LName: "Accountant",
    Residence: "Rizz Calculator Street, Cenat City",
    BirthDate: "2000-01-15",
    StaffStatus: "active",
    StaffType: "ACCOUNTANCY",
  },
  {
    StaffID: 3,
    FName: "Boxe",
    MI: "S.",
    LName: "Packman",
    Residence: "Cardboard Street, Fanum Town",
    BirthDate: "1993-10-17",
    StaffStatus: "active",
    StaffType: "INVENTORY",
  },
];

const userList = [
  {
    UserID: 1,
    Email: "JohnDoe23@gmail.com",
    Password: "lightweight", // lightweight
    UserType: "Customer",
    TypeID: 1,
  },
  {
    UserID: 2,
    Email: "AdminMyAdmin@gmail.com",
    Password: "AdminPassword", // AdminPassword
    UserType: "Staff",
    TypeID: 1,
  },
  {
    UserID: 3,
    Email: "LegitAccountant@gmail.com",
    Password: "ILikeNumbers89", // ILikeNumbers89
    UserType: "Staff",
    TypeID: 2,
  },
  {
    UserID: 4,
    Email: "InventoryMan@gmail.com",
    Password: "BigBoxes", // BigBoxes
    UserType: "Staff",
    TypeID: 3,
  },
  {
    UserID: 5,
    Email: "JaneDoe89@gmail.com",
    Password: "TaylorSwift89", // TaylorSwift89
    UserType: "Customer",
    TypeID: 2,
  },
];

const productList = [
  {
    ProductID: 1,
    ProductName: "Small Chocolate Cake",
    ProductDesc: 'Our signature 8" chocolate cake.',
    UnitPrice: 350.0,
  },
  {
    ProductID: 2,
    ProductName: "Monster Cookie",
    ProductDesc: "A large chocolate chip cookie.",
    UnitPrice: 175.0,
  },
  {
    ProductID: 3,
    ProductName: "Box of Churros",
    ProductDesc: "Freshly fried churros, 4 per box.",
    UnitPrice: 100.0,
  },
];

const orderList = [
  {
    ID: 1,
    TransactionDate: "2023-11-25 17:36:57",
    Name: "Cookie Monster",
    Contact: "+63 123 456 7890",
    OrderedProducts: [
      { ProductID: 2, Qty: 10, Subtotal: 1750.0 },
      { ProductID: 1, Qty: 1, Subtotal: 350.0 },
    ],
    TotalPrice: 2100.0,
    Status: "PENDING",
  },

  {
    ID: 2,
    TransactionDate: "2023-10-31 22:32:56",
    Name: "Mookie Nonster",
    Contact: "+63 232 454 3462",
    OrderedProducts: [
      { ProductID: 3, Qty: 10, Subtotal: 1000.0 },
      { ProductID: 1, Qty: 5, Subtotal: 1750.0 },
    ],
    TotalPrice: 2750.0,
    Status: "COMPLETED",
  },
];

var ctr = orderList[orderList.length - 1].ID;

app.post("/order/add-order", (req, res) => {
  // Adds order into the list of orders named orderList
  let tempOrder = req.body;

  if (req.body.Name == "") {
    res.status(400).send({ error: "Name is empty!" });
  } else if (req.body.TotalPrice == 0) {
    res.status(400).send({ error: "No products in cart!" });
  } else {
    req.body.ID = ++ctr;
    orderList.push(req.body);
    res.send("Successfully Inserted");
  }
});

app.patch("/order/update-status", (req, res) => {
  // Updates the order status to APPROVED, CANCELLED, or appends edited changes made to the order.
  var temp = orderList.findIndex((SL) => SL.ID === req.body.ID);
  orderList[temp] = req.body;
  res.send("Order successfully " + req.body.Status);
});

app.get("/order/send-list", (req, res) => {
  // Sends order list to frontend.
  res.send(orderList);
});

app.get("/product/send-list", (req, res) => {
  // Sends product list to frontend.
  res.send(productList);
});

app.post("/user/login", (req, res) => {
  // receives user login information and authenticates it
  let userPos = userList.findIndex((u) => req.body.Email == u.Email);
  if (userPos == -1) {
    res.status(400).send({ error: "Email and/or Password Mismatch" });
  } else if (userList[userPos].Password != req.body.Password) {
    res.status(400).send({ error: "Password Mismatch" });
  } else {
    const userInfo = {
      message: "Successfully logged in!",
      data: userList[userPos],
    };
    res.send(userInfo);
  }
});

app.post("/user/signup", (req, res) => {
  // Receives signup details from frontend.
  res.send(productList);
});

app.post("/customer/send-details", (req, res) => {
  // Reveices
  res.send(productList);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
