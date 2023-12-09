const router = require("express").Router();
const db = require("../database");
const bcrypt = require("bcrypt");
// cons = require('../middlewar');

// Logging In
router.post("/login-page", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Missing email or password" });
  }

  db.query(
    "SELECT * FROM user WHERE email = ?",
    [email],
    async (err, results) => {
      if (err) {
        console.error("Error retrieving user:", err);
        return res
          .status(500)
          .json({ success: false, message: "Failed to log in" });
      }

      if (results.length === 0) {
        return res
          .status(404)
          .json({ success: false, message: "Account does not exist" });
      }

      const user = results[0];

      try {
        const match = await bcrypt.compare(password, user.password); // Compare hashed passwords

        if (match) {
          // START OF CHANGES
          // GETS PERMISSION STATUS OF USER

          const getDetails = async () => {
            return new Promise((resolve, reject) => {
              if (user.user_type === "Staff") {
                db.query(
                  "SELECT * FROM staff WHERE staff_id = ?",
                  [user.id_no],
                  (err, results) => {
                    if (err) {
                      console.error("Error retrieving staff details", err);
                      reject("Failed to retrieve details");
                    }

                    if (results.length === 0) {
                      reject("Staff member does not exist");
                    }

                    if (results[0].staff_status === "inactive") {
                      reject("Staff member is inactive");
                    }

                    const data = {
                      fname: results[0].fname,
                      midname: results[0].mname,
                      lname: results[0].lname,
                      permission: results[0].staff_type,
                    };

                    resolve(data);
                  }
                );
              } else {
                db.query(
                  "SELECT * FROM customer WHERE customer_id = ?",
                  [user.id_no],
                  (err, results) => {
                    if (err) {
                      console.error("Error retrieving customer details", err);
                      reject("Failed to retrieve customer details");
                    }

                    if (results.length === 0) {
                      reject("Customer does not exist");
                    }

                    const data = {
                      fname: results[0].fname,
                      midname: results[0].mname,
                      lname: results[0].lname,
                      permission: "Customer",
                    };

                    resolve(data);
                  }
                );
              }
            });
          };
          // END OF CHANGES
          const UD = await getDetails();
          console.log(UD);
          const userDetails = {
            customer_id: user.customer_id,
            fname: UD.fname,
            midname: UD.midname,
            lname: UD.lname,
            email: user.email,
            user_type: user.user_type,
            permissions: UD.permission,
          };
          console.log(userDetails);

          return res.status(200).json({
            user: userDetails,
            message: "Logged in successfully",
          });
        } else {
          return res
            .status(401)
            .json({ success: false, message: "Incorrect password" });
        }
      } catch (error) {
        console.error("Error comparing passwords:", error);
        return res
          .status(500)
          .json({ success: false, message: "Failed to log in" });
      }
    }
  );
});

// Creating A new Customer
router.post("/signup-page", async (req, res) => {
  const { fname, midname, lname, contact_no, birthdate, address, email, password, confirmedpassword } = req.body;

  if (
    !fname ||
    !lname ||
    !contact_no ||
    !birthdate ||
    !address ||
    !email ||
    !password ||
    !confirmedpassword
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Missing required fields" });
  }

  if (password !== confirmedpassword) {
    return res
      .status(400)
      .json({ success: false, message: "Password does not match" });
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
        return res
          .status(500)
          .json({ success: false, message: "Failed to create account" });
      } else {
        console.log("Data inserted into customer table successfully");

        // Retrieving the last inserted customer_id
        const customerId = result.insertId;

        const userCredentials = {
          email: email.trim(),
          password: hashedPassword, // Store the hashed password
          user_type: "Customer", // Set user_type as 'Customer'
          id_no: customerId, // Link user to the customer ID
        };

        // Inserting user credentials into the user table
        db.query(
          "INSERT INTO user SET ?",
          userCredentials,
          (userErr, userResult) => {
            if (userErr) {
              console.error("Error inserting user credentials:", userErr);
              return res
                .status(500)
                .json({ success: false, message: "Failed to create account" });
            } else {
              console.log("Data inserted into user table successfully");
              return res.status(200).json({
                success: true,
                message: "Account created successfully",
              });
            }
          }
        );
      }
    });
  } catch (error) {
    console.error("Error hashing password:", error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to create account" });
  }
});

// Forgetting Password
router.post("/forgot-password", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: "Email is required" });
  }

  db.query("SELECT * FROM user WHERE email = ?", [email], (err, results) => {
    if (err) {
      console.error("Error checking email:", err);
      return res
        .status(500)
        .json({ success: false, message: "Failed to check email" });
    }

    if (results.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Email not found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Email exists", email });
  });
});

module.exports = router;
