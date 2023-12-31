const router = require('express').Router();
const db = require('../database');


router.post('/addProduct', (req, res) => {
  const { item_type, product_name, product_desc, product_image_url, unit_price, expiry_date, quantity, supplier_id, staff_id } = req.body;

  // Check if the product already exists in the product table
  db.query('SELECT * FROM product WHERE product_name = ?', [product_name], (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Database error1' });
      return;
    }

    if (results.length > 0) {
      // If the product exists, update the inventory quantity and other details
      const productId = results[0].product_id;
      db.query(
        'UPDATE inventory SET item_type = ?, supplier_id = ?, staff_id = ?, quantity = quantity + ? WHERE product_id = ?',
        [item_type, supplier_id, staff_id, quantity, productId],
        (error) => {
          if (error) {
            res.status(500).json({ error: 'Database error2' });
            return;
          }
          res.status(200).json({ message: 'Inventory updated' });
        }
      );
    } else {
      // If the product doesn't exist, create a new product and add it to inventory
      db.query('INSERT INTO product (product_name, product_desc, product_image_url, unit_price, expiry_date) VALUES (?, ?, ?, ?, ?)',
        [product_name, product_desc, product_image_url, unit_price, expiry_date],
        (error, results) => {
          if (error) {
            console.log(error);
            res.status(500).json({ error: 'Database error3' });
            return;
          }
          
          const productId = results.insertId;
          // Determine the table to use based on the item_type
          const inventoryTable = item_type === 'product' ? 'ingredient' : 'miscellaneous';
          
          // Insert into the respective inventory table with additional details
          db.query(`INSERT INTO inventory (product_id, quantity, supplier_id, staff_id) VALUES (?, ?, ?, ?)`,
            [productId, quantity, supplier_id, staff_id],
            (error) => {
              console.log(error);
              if (error) {
                res.status(500).json({ error: 'Database error4' });
                return;
              }
              res.status(200).json({ message: 'New product and inventory entry added' });
            });
        });
    }
  });
});


//POST route to handle order creation
router.post('/order', (req, res) => {
  const { customer_id, transaction_date, completion_date, ArrayOfProduct, payment_method, total_price, order_status, gcash_reference } = req.body;

  // First, check if the customer exists in the database
  db.query('SELECT * FROM customer WHERE customer_id = ?', [customer_id], (error, customerResult) => {
    if (error) {
      console.error('Error checking customer:', error);
      res.status(500).json({ message: 'Error checking customer' });
      return;
    }

    if (customerResult.length === 0) {
      res.status(404).json({ message: 'Customer not found' });
      return;
    }

    // Customer exists, proceed with order creation
    const newOrder = { customer_id, transaction_date, completion_date, ArrayOfProduct, payment_method, gcash_reference, total_price, order_status };

    // order_status === 'APPROVED' ? new Date()
    const values = [
      newOrder.customer_id,
      newOrder.transaction_date,
      newOrder.completion_date,
      JSON.stringify(newOrder.ArrayOfProduct),
      newOrder.payment_method,
      newOrder.total_price,
      newOrder.order_status,
      newOrder.gcash_reference,
    ];

    db.query('INSERT INTO `order` (customer_id, transaction_date, completion_date, ArrayOfProduct, payment_method, total_price, order_status, GCash_Reference) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', values, (orderError, orderResult) => {
      if (orderError) {
        console.error('Error inserting order:', orderError);
        res.status(500).json({ message: 'Error creating order' });
        return;
      }

      const orderId = orderResult.insertId;
      console.log('Order inserted:', orderId);

      // Create the receipt right after the order is inserted
      const receiptValues = [
        orderId,
        customer_id,
        transaction_date,
        payment_method,
        total_price,
        // Add more receipt fields as needed
      ];

      db.query('INSERT INTO receipt (order_id, customer_id, transaction_date, payment_method, total_price) VALUES (?, ?, ?, ?, ?)', receiptValues, (receiptError, receiptResult) => {
        if (receiptError) {
          console.error('Error inserting receipt:', receiptError);
          res.status(500).json({ message: 'Error creating receipt' });
          return;
        }

        console.log('Receipt inserted:', receiptResult.insertId);
        res.status(201).json({ message: 'Order and receipt created successfully', order_id: orderId, receipt_id: receiptResult.insertId });
      });
    });
  });
});

router.get('/receipt/:order_id', (req, res) => {

  const orderId = req.params.order_id;  

  db.query('SELECT * FROM `order` WHERE order_id = ?', [orderId], (error, orderResult) => {
    if (error) {
      console.error('Error retrieving order:', error);
      res.status(500).json({ message: 'Error fetching order details' });
      return;
    }

    if (orderResult.length === 0) {
      res.status(404).json({ message: 'Order not found' });
      return;
    }

    const order = orderResult[0];
    const { customer_id, transaction_date, payment_method } = order;

    // Retrieve customer details based on customer_id
    db.query('SELECT * FROM customer WHERE customer_id = ?', [customer_id], (customerError, customerResult) => {
      if (customerError) {
        console.error('Error retrieving customer details:', customerError);
        res.status(500).json({ message: 'Error fetching customer details' });
        return;
      }

      if (customerResult.length === 0) {
        res.status(404).json({ message: 'Customer not found' });
        return;
      }

      const customer = customerResult[0];
      const { fname, mname, lname } = customer;
      const customerName = [fname, mname, lname].filter(Boolean).join(' ');

      // Construct the receipt object
      const receipt = {
        customer_name: customerName,
        transaction_date,
        payment_method,
        order_id: orderId,
        // Add more fields as needed based on your receipt structure or order details
      };

      res.status(200).json({ receipt });
    });
  });
});

//GET route to retrieve the products
router.get("/getProduct", (req, res) => {
  db.query('SELECT * FROM product', (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Database error' });
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ error: 'Products do not exist' });
      return;
    } else {
      res.send(results)
    }
  });
});

router.get("/getOrders", (req, res) => {
  db.query('SELECT * FROM `order` ', (error, results) => {
    if (error) {
      console.log(error)
      res.status(500).json({ error: 'Database error' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Orders do not exist' });
      return;
    } else {
      res.send(results)
    }
  });
});

router.patch("/updateOrder", (req, res) => {
  console.log(req.body)
  const order_status = req.body.order_status
  const prod_id = req.body.order_id
  db.query('UPDATE `order` SET `order_status` = ? WHERE order_id = ?', [order_status, prod_id], (error, results) => {
    if (error) {
      console.log(error)
      res.status(500).json({ error: 'Database error' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Orders do not exist' });
      return;
    } else {
      res.send(results)
    }
  });

});


// GET route to retrieve a product by product_id
router.get('/:id', (req, res) => {
  const productId = req.params.id; // Using 'id' as the parameter here

  // Check if the product exists in the database by product_id
  db.query('SELECT * FROM product WHERE product_id = ?', [productId], (error, results) => {
    if (error) {
      console.error('Error fetching product:', error);
      res.status(500).json({ message: 'Error fetching product' });
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }

    const product = results[0];
    res.status(200).json({ product });
  });
});

module.exports = router;
