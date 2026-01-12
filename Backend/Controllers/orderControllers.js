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

// Get Orders by User ID
export const getOrdersByUser = ((req, res) => {
    const userid = req.params.userid;
    const sql = "SELECT * FROM orders WHERE userid = ?";
    
    db.query(sql, [userid], (err, result) => {
        if (err) {
            res.status(500).json("SERVER ERROR")
        } else {
            res.status(200).json(result)
        }
    });
});

// Place order
export const placeOrder = (req, res) => {
    const { userid, name, address, district, state, pin, country, contact, payment_method } = req.body;
    
    // Validation
    if (!userid || !name || !address || !district || !state || !pin || !country || !contact || !payment_method) {
        return res.status(400).json("All fields are required");
    }

    const order_status = "PLACED";
    const payment_status = payment_method === "COD" ? "PENDING" : "PAID";
    const order_date = new Date();
    
    const sql = "INSERT INTO orders (userid, name, address, district, state, pin, country, contact, order_status, payment_method, payment_status, order_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [userid, name, address, district, state, pin, country, contact, order_status, payment_method, payment_status, order_date];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json("SERVER ERROR");
        } else {
            // Clear cart after successful order
            const clearCartSql = "DELETE FROM cart WHERE userid = ?";
            db.query(clearCartSql, [userid], (cartErr) => {
                if (cartErr) {
                    console.log(cartErr);
                }
                res.status(200).json({ message: "ORDER PLACED", orderId: result.insertId });
            });
        }
    });
};

// Cancel Order
export const cancelOrder = (req, res) => {
    const orderid = req.params.orderid;
    const sql = "UPDATE orders SET order_status = ? WHERE id = ?";
    
    db.query(sql, ["CANCELLED", orderid], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json("SERVER ERROR");
        } else {
            res.status(200).json("ORDER CANCELLED");
        }
    });
};