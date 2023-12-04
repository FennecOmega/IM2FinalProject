const express = require("express");
const app = express();
var router = express.Router();
const port = 3007;
const cors = require("cors");
app.use(express.json());
app.use(cors());
var database = require('./database');
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bananadb'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// NOTE:
// This is just a prototype, this is not the final express.js file unless circumstances require.
// ONLY use this to validate that the frontend functionalities are working, and are sending/receiving requests properly.
// Any functionalities that will be used in the final output will be commented as such (mostly jsonwebtoken auth)
// Prototype features missing: password hashes, jsonwebtoken integration

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
  req.body.ID = ++ctr;
  orderList.push(req.body);
  res.send("Successfully Inserted");
});

app.patch("/order/update-order-status", (req, res) => {
  // Updates the order status to APPROVED, CANCELLED, or appends edited changes made to the order.
  var temp = orderList.findIndex((SL) => SL.ID === req.body.ID);
  orderList[temp] = req.body;
  res.send("Order successfully " + req.body.Status);
});

app.get("/order/send-order-list", (req, res) => {
  // Sends order list to frontend.
  res.send(orderList);
});

app.get("/product/send-product-list", (req, res) => {
  // Sends product list to frontend.
  res.send(productList);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("Hello World!");
});

app.post('/signup-page', (req, res) => {
  const { fname, midname, lname, contact_no, birthdate, address, email, password, confirmedpassword } = req.body;

  if (!fname || !lname || !contact_no || !birthdate || !address || !email || !password || !confirmedpassword) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  if (password !== confirmedpassword) {
    return res.status(400).json({ success: false, message: 'Password does not match' });
  }

  const userInfo = {
    fname: fname.trim(),
    midname: midname ? midname.trim() : null,
    lname: lname.trim(),
    contact_no: contact_no.trim(),
    birthdate: birthdate.trim(),
    address: address.trim(), 
  };

  const userCredentials = {
    email: email.trim(),
    password: password,
    user_type: 'Customer'
  };

  db.query('INSERT INTO customer SET ?', userInfo, (err, result) => {
    if (err) {
      console.error('Error inserting data into customer table:', err);
      return res.status(500).json({ success: false, message: 'Failed to create account' });
    } else {
      console.log('Data inserted into customer table successfully');

      db.query('INSERT INTO user SET ?', userCredentials, (userErr, userResult) => {
        if (userErr) {
          console.error('Error inserting user credentials:', userErr);
          return res.status(500).json({ success: false, message: 'Failed to create account' });
        } else {
          console.log('Data inserted into user table successfully');
          return res.status(200).json({ success: true, message: 'Account created successfully' });
        }
      });
    }
  });
});

app.get('/login-page', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Missing email or password' });
  }

  db.query('SELECT * FROM user WHERE email = ? AND password = ?', [email, password], (err, results) => {
    if (err) {
      console.error('Error retrieving user:', err);
      return res.status(500).json({ success: false, message: 'Failed to log in' });
    }

    if (results.length === 0) {
      return res.status(404).json({ success: false, message: 'Account does not exist' });
    }

    const user = results[0];

    const userDetails = {
      email: user.email,
    };

    return res.status(200).json({ success: true, message: 'Logged in successfully', user: userDetails });
  });
});


app.post('/forgot-password', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required' });
  }

  db.query('SELECT * FROM user WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('Error checking email:', err);
      return res.status(500).json({ success: false, message: 'Failed to check email' });
    }

    if (results.length === 0) {
      return res.status(404).json({ success: false, message: 'Email not found' });
    }

    return res.status(200).json({ success: true, message: 'Email exists', email });
  });
});


app.put('/ForgetPassword', (req, res) => {
  const { email, newPassword } = req.body;

  if (!email || !newPassword) {
    return res.status(400).json({ success: false, message: 'Email and newPassword are required' });
  }

  db.query('SELECT * FROM user WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('Error retrieving user:', err);
      return res.status(500).json({ success: false, message: 'Failed to update password' });
    }

    if (results.length === 0) {
      return res.status(404).json({ success: false, message: 'Email not found' });
    }

    db.query('UPDATE user SET password = ? WHERE email = ?', [newPassword, email], (updateErr, updateResult) => {
      if (updateErr) {
        console.error('Error updating password:', updateErr);
        return res.status(500).json({ success: false, message: 'Failed to update password' });
      }

      return res.status(200).json({ success: true, message: 'Password updated successfully' });
    });
  });
});


app.listen(port, () => {
  console.log("Example app listening on port ${port}");
});