import db from '../Config/db.js';

// Add Address
export const addAddress = (req, res) => {
    const { name, address, district, state, pin, country, contact, userid } = req.body;
    if (!userid) {
        return res.status(400).json("User ID is required");
    }
    const values = [name, address, district, state, pin, country, contact, userid];
    const sql = `INSERT INTO address (name, address, district, state, pin, country, contact, userid) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, values, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json("Server Error");
        } else {
            res.status(200).json("Address Added Successfully");
        }
    });
};

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
export const getAddress = (req, res) => {
    const userid = req.params.userid;
    const sql = "SELECT * FROM address WHERE userid = ?";

    db.query(sql, [userid], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json("Server Error");
        } else {
            res.status(200).json(result);
        }
    });
};
