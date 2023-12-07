const router = require('express').Router();
const db = require('../database');

router.post('/addProductToInventory', (req, res) => {
  const { productName, productDesc, unitPrice, imageUrl, supplierId, quantity } = req.body;

  db.query('SELECT product_id FROM product WHERE product_name = ? AND product_desc = ?', [productName, productDesc], (error, results, fields) => {
    if (error) {
      res.status(500).json({ error: 'Database error' });
      return;
    }

    if (results.length > 0) {
      const productId = results[0].product_id;
      db.query('SELECT * FROM inventory WHERE product_id = ?', [productId], (error, invResults, fields) => {
        if (error) {
          res.status(500).json({ error: 'Database error' });
          return;
        }

        if (invResults.length > 0) {
          db.query('UPDATE inventory SET quantity = quantity + ?, supplier_id = ?, item_type = CASE WHEN product_desc LIKE ? THEN ? WHEN product_desc LIKE ? THEN ? WHEN product_desc LIKE ? THEN ? ELSE ? END WHERE product_id = ?', 
            [quantity, supplierId, '%product%', 'product', '%ingredient%', 'ingredient', '%miscellaneous%', 'miscellaneous', 'unknown', productId], 
            (error) => {
              if (error) {
                res.status(500).json({ error: 'Database error' });
                return;
              }
              res.status(200).json({ message: 'Inventory updated' });
          });
        } else {
          db.query('INSERT INTO inventory (product_id, supplier_id, quantity, expiry_date, item_type) VALUES (?, ?, ?, ?, CASE WHEN product_desc LIKE ? THEN ? WHEN product_desc LIKE ? THEN ? WHEN product_desc LIKE ? THEN ? ELSE ? END)', 
            [productId, supplierId, quantity, 'expiry_date', '%product%', 'product', '%ingredient%', 'ingredient', '%miscellaneous%', 'miscellaneous', 'unknown'], 
            (error) => {
              if (error) {
                res.status(500).json({ error: 'Database error' });
                return;
              }
              res.status(200).json({ message: 'New inventory entry added' });
          });
        }
      });
    } else {
      db.query('INSERT INTO product (product_name, product_desc, unit_price, product_image_url) VALUES (?, ?, ?, ?)', [productName, productDesc, unitPrice, imageUrl], (error, results, fields) => {
        if (error) {
          res.status(500).json({ error: 'Database error' });
          return;
        }

        const productId = results.insertId;
        db.query('INSERT INTO inventory (product_id, supplier_id, quantity, expiry_date, item_type) VALUES (?, ?, ?, ?, CASE WHEN product_desc LIKE ? THEN ? WHEN product_desc LIKE ? THEN ? WHEN product_desc LIKE ? THEN ? ELSE ? END)', 
          [productId, supplierId, quantity, 'expiry_date', '%product%', 'product', '%ingredient%', 'ingredient', '%miscellaneous%', 'miscellaneous', 'unknown'], 
          (error) => {
            if (error) {
              res.status(500).json({ error: 'Database error' });
              return;
            }
            res.status(200).json({ message: 'New product and inventory entry added' });
        });
      });
    }
  });
});

module.exports = router;
