const router = require('express').Router();
const db = require('../database');
const permissionStaff = require('../middleware/permissionStaff');

router.post('/addProduct', permissionStaff, (req, res) => {
  const { product_name, product_desc, product_image_url, unit_price, expiry_date, quantity } = req.body;

  // Check if the product already exists in the product table
  db.query('SELECT * FROM product WHERE product_name = ?', [product_name], (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Database error1' });
      return;
    }

    if (results.length > 0) {
      // If the product exists, update the inventory quantity
      const productId = results[0].product_id;
      db.query('UPDATE inventory SET quantity = quantity + ? WHERE product_id = ?',
        [quantity, productId],
        (error) => {
          if (error) {
            res.status(500).json({ error: 'Database error2' });
            return;
          }
          res.status(200).json({ message: 'Inventory updated' });
        });
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
          db.query('INSERT INTO inventory (product_id, quantity) VALUES (?, ?)',
            [productId, quantity],
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
router.post('/order', permissionStaff, (req, res) => {
  const { customer_id, transaction_date, completion_date, ArrayOfProduct, payment_method, total_price, order_status } = req.body;

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
    const newOrder = { customer_id, transaction_date, completion_date: order_status === 'APPROVED' ? new Date() : null, ArrayOfProduct, payment_method, total_price, order_status };

    const values = [
      newOrder.customer_id,
      newOrder.transaction_date,
      newOrder.completion_date,
      JSON.stringify(newOrder.ArrayOfProduct),
      newOrder.payment_method,
      newOrder.total_price,
      newOrder.order_status
    ];

    db.query('INSERT INTO `order` (customer_id, transaction_date, completion_date, ArrayOfProduct, payment_method, total_price, order_status) VALUES (?, ?, ?, ?, ?, ?, ?)', values, (orderError, result) => {
      if (orderError) {
        console.error('Error inserting order:', orderError);
        res.status(500).json({ message: 'Error creating order' });
        return;
      }

      console.log('Order inserted:', result.insertId);
      res.status(201).json({ message: 'Order created successfully', order_id: result.insertId });
    });
  });
});

// GET route to retrieve a product by product_id
router.get('/:product_id', permissionStaff, (req, res) => {
  const productId = req.params.product_id;

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
