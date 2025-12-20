import db from '../Config/db.js';

// Get Orders
export const getOrders = ((req, res) => {

    db.query("SELECT * FROM orders", (err, result) => {
        if (err) {
            res.status(500).json("SERVER ERROR")
        } else {
            res.status(200).json(result)
        }
    });
});

// Add Orders