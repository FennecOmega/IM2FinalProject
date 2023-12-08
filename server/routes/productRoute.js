const router = require("express").Router();
const db = require('../database');
const bcrypt = require('bcrypt');
const authToken = require('../middleware/authToken');
const jwt = require('jsonwebtoken');

// Logging In
router.post("/login-page", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
      return res.status(400).json({ success: false, message: "Missing email or password" });
  }

  db.query("SELECT * FROM user WHERE email = ?", [email], async (err, results) => {
      if (err) {
          console.error("Error retrieving user:", err);
          return res.status(500).json({ success: false, message: "Failed to log in" });
      }

      if (results.length === 0) {
          return res.status(404).json({ success: false, message: "Account does not exist" });
      }

      const user = results[0];

      try {
          const match = await bcrypt.compare(password, user.password);

          if (match) {
              const permission = user.user_type === 'Customer' ? 'Customer' : (
                  // Query staff table to get staff_type based on user.id_no
                  // Adjust this query based on your database schema
                  // Assuming the staff table has staff_type column
                  await new Promise((resolve, reject) => {
                      db.query("SELECT staff_type FROM staff WHERE id_no = ?", [user.id_no], (staffErr, staffResults) => {
                          if (staffErr) {
                              console.error("Error retrieving staff information:", staffErr);
                              reject("Failed to retrieve staff information");
                          } else if (staffResults.length > 0) {
                              resolve(staffResults[0].staff_type);
                          } else {
                              resolve('DefaultStaffType'); // Provide a default staff type if not found
                          }
                      });
                  })
              );

              const token = jwt.sign(
                  {
                      user_type: user.user_type,
                      id_no: user.id_no,
                      permissions: permission
                  },
                  "secretToken",
                  { expiresIn: '1h' }
              );

              const userDetails = {
                  email: user.email,
              };

              return res.status(200).json({
                  user: userDetails,
                  token: token,
                  message: "Logged in successfully",
              });
          } else {
              return res.status(401).json({ success: false, message: "Incorrect password" });
          }
      } catch (error) {
          console.error("Error comparing passwords:", error);
          return res.status(500).json({ success: false, message: "Failed to log in" });
      }
  });
});

// Creating A new Customer
router.post("/signup-page", authToken, async (req, res) => {
    const { fname, midname, lname, contact_no, birthdate, address, email, password, confirmedpassword } = req.body;
  
    if (!fname || !lname || !contact_no || !birthdate || !address || !email || !password || !confirmedpassword) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }
  
    if (password !== confirmedpassword) {
      return res.status(400).json({ success: false, message: "Password does not match" });
    }
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10); // Hash the password with bcrypt
  
      const userInfo = {
        fname: fname.trim(),
        midname: midname ? midname.trim() : null,
        lname: lname.trim(),
        contact_no: contact_no.trim(),
        birthdate: birthdate.trim(),
        address: address.trim(),
      };
  
      // Inserting customer information into the customer table
      db.query("INSERT INTO customer SET ?", userInfo, (err, result) => {
        if (err) {
          console.error("Error inserting data into customer table:", err);
          return res.status(500).json({ success: false, message: "Failed to create account" });
        } else {
          console.log("Data inserted into customer table successfully");
  
          // Retrieving the last inserted customer_id
          const customerId = result.insertId;
  
          const userCredentials = {
            email: email.trim(),
            password: hashedPassword, // Store the hashed password
            user_type: 'Customer', // Set user_type as 'Customer'
            id_no: customerId // Link user to the customer ID
          };
  
          // Inserting user credentials into the user table
          db.query(
            "INSERT INTO user SET ?",
            userCredentials,
            (userErr, userResult) => {
              if (userErr) {
                console.error("Error inserting user credentials:", userErr);
                return res.status(500).json({ success: false, message: "Failed to create account" });
              } else {
                console.log("Data inserted into user table successfully");
                return res.status(200).json({ success: true, message: "Account created successfully" });
              }
            }
          );
        }
      });
    } catch (error) {
      console.error("Error hashing password:", error);
      return res.status(500).json({ success: false, message: "Failed to create account" });
    }
});

// Forgetting Password
router.post("/", authToken, (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: "Email is required" });
  }

  db.query("SELECT * FROM user WHERE email = ?", [email], (err, results) => {
    if (err) {
      console.error("Error checking email:", err);
      return res.status(500).json({ success: false, message: "Failed to check email" });
    }

    if (results.length === 0) {
      return res.status(404).json({ success: false, message: "Email not found" });
    }

    return res.status(200).json({ success: true, message: "Email exists", email });
  });
});

module.exports = router;
