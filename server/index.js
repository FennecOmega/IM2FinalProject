const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");
const db = require("./database");
const routes = require('./routes');

app.use(express.json());
app.use(cors());
app.use((req,res,next) =>{
  req.db = db;
  next();
});

app.use("/signup-page", routes.customerRoute);
app.use("/login-page", routes.customerRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
