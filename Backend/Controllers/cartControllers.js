import db from '../Config/db.js';

// Add to Cart
export const addToCart = (req, res) => {
    const { name, userid, image, price, color, size, quantity } = req.body;

    const sql = "INSERT INTO cart (name, userid, image, price, color, size, quantity) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [name, userid, image, price, color, size, quantity];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json("SERVER ERROR");
        }
        res.status(200).json("SUCCESS");
    });
};


// Get Cart Items
export const getCart = ((req, res) => {
    const sql = "SELECT * FROM cart";

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json("SERVER ERROR");
        } else {
            res.status(200).json(result);
        }
    });
});


// Delete from Cart
export const deleteFromCart = ((req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM cart WHERE id = ?";

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json("SERVER ERROR");
        } else {
            res.status(200).json("PRODUCT DELETED");
        }
    });
});

// Update Quantity
export const updateQuantity = ((req, res) => {
    const { quantity } = req.body;
    const id = req.params.id;
    const sql = "UPDATE cart SET quantity = ? WHERE id = ?";
    const values = [quantity, id];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json("SERVER ERROR")
        } else {
            res.status(200).json("QTY UPDATED")
        }
    })
})
