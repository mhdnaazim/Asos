import db from '../Config/db.js';

// Add Address
export const addAddress = ((req, res) => {
    const { name, address, district, state, pin, country, contact } = req.body;
    const id = req.params.id
    const values = [name, address, district, state, pin, country, contact, id];
    const sql = "INSERT into address (name, address, district, state, pin, country, contact) VALUES (?, ?, ?, ?, ?, ?, ?)";

    db.query(sql, values, (err, result) => {
        if (err) {
            res.status(500).json("Server Error");
        } else {
            res.status(200).json("Address Added");
        }
    });
});

// Delete Address
export const deleteAddress = ((req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM address WHERE id = ?";

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.log(err);

            res.status(500).json("SERVER ERROR");
        } else {
            res.status(200).json("PRODUCT DELETED");
        }
    });
});

// Get Address
export const getAddress = ((req, res) => {
    const sql = "SELECT * FROM address";

    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json("SERVER ERROR")
        } else {
            res.status(200).json(result)
        }
    });
});