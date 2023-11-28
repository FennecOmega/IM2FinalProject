const express = require('express')
const app = express()
var router = express.Router()
const port = 3000
const cors = require('cors')


app.use(express.json());
app.use(cors())


const productList = [
  {
   ProductID: 1,
   ProductName: "Small Chocolate Cake",
   ProductDesc: "Our signature 8\"\ chocolate cake.",
   UnitPrice: 350.00
  },
  {
    ProductID: 2,
    ProductName: "Monster Cookie",
    ProductDesc: "A large chocolate chip cookie.",
    UnitPrice: 175.00
  },
  {
    ProductID: 3,
    ProductName: "Box of Churros",
    ProductDesc: "Freshly fried churros, 4 per box.",
    UnitPrice: 100.00
  }

]

const sampleList = [
  {
   ID: 1,
   TransactionDate: "2023-11-25 17:36:57",
   Name: "Cookie Monster",
   Contact: "+63 123 456 7890",
   OrderedProducts: [{ProductID: 2, Qty: 10, Subtotal: 1750.00}, {ProductID: 1, Qty: 1, Subtotal: 350.00}],
   TotalPrice: 2100.00,
   Status: "PENDING"
  },

  {
   ID: 2,
   TransactionDate: "2023-10-31 22:32:56",
   Name: "Mookie Nonster",
   Contact: "+63 232 454 3462",
   OrderedProducts: [{ProductID: 3, Qty: 10, Subtotal: 1000.00}, {ProductID: 1, Qty: 5, Subtotal: 1750.00}],
   TotalPrice: 2750.00,
   Status: "COMPLETED"
   }

]

var ctr = sampleList[sampleList.length-1].ID



app.post('/append-list', (req, res) => {
  req.body.ID = ++ctr;
  sampleList.push(req.body)
  res.send("Successfully Inserted")
 })

app.get('/', (req, res) => {
  res.send("Hello World!")
  console.log("Hello World!")
})

app.get('/sample-list', (req, res) => {
  res.send(sampleList)
})

app.get('/product-list', (req, res) => {
  res.send(productList)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})