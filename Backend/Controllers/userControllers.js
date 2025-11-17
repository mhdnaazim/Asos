import db from '../Config/db.js';


// User Registration
export const addUser = ((req, res) => {
    const { email, password } = req.body;
    const sql = "INSERT INTO users (email, password) VALUES (?, ?)";
    const values = [email, password];

    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Server Error", details: err });
        }
        return res.status(200).json({ message: "Success" });
    });
});

// Fetch Users
export const fetchUsers = ((req, res) => {

    db.query("SELECT * FROM users", (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json("Server Error")
        } else {
            res.status(200).json(result)
        }
    })
})

// Delete User
export const delUser = ((req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM users WHERE userid = ?";

    db.query(sql, id, (err, result) => {
        if (err) {
            res.status(500).json("Server Error");
        } else {
            res.status(200).json("Deletion Success");
        }
    });
});