const router = require("express").Router();
const db = require('../database');
const authToken = require('../middleware/authToken');

router.get("/login-page",  (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Missing email or password" });
    }
    
    db.query(
      "SELECT * FROM user WHERE email = ? AND password = ?",
      [email, password],(err, results) => {
        if (err) {
          console.error("Error retrieving user:", err);
          return res.status(500).json({ success: false, message: "Failed to log in" });
        }
    
        if (results.length === 0) {
          return res.status(404).json({ success: false, message: "Account does not exist" });
        }
    
        const user = results[0];
    
        const userDetails = {
          email: user.email,
        };
    
        return res.status(200).json({
            success: true,
            message: "Logged in successfully",
                user: userDetails,
          });
        }
    );
});
    
router.post("/", (req, res) => {
    
    const { fname, midname, lname, contact_no, birthdate, address, email, password, confirmedpassword,} = req.body;
      
    if ( !fname || !lname || !contact_no || !birthdate || !address || !email ||!password || !confirmedpassword) {
        return res.status(400).json({ success: false, message: "Missing required fields" });
    }
      
    if (password !== confirmedpassword) {
        return res.status(400).json({ success: false, message: "Password does not match" });
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
        user_type: "Customer",
    };
      
    db.query("INSERT INTO customer SET ?", userInfo, (err, result) => {
        if (err) {
            console.error("Error inserting data into customer table:", err);
            return res.status(500).json({ success: false, message: "Failed to create account" });
        } else {
        
    console.log("Data inserted into customer table successfully");
      
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
        });
        }
    });
});


router.post("/forgot-password", (req, res) => {
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