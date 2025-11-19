import db from '../Config/db.js';

export const addUser = (req, res) => {
    const { email, password, interest } = req.body;

    const checkSql = "SELECT * FROM users WHERE email = ?";
    
    db.query(checkSql, [email], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json("Server Error");
        }

        if (result.length > 0) {
            return res.status(202).json("Email already exists");
        }

        const insertSql = "INSERT INTO users (email, password, interest) VALUES (?,?,?)";
        const values = [email, password, interest];

        db.query(insertSql, values, (err2, result2) => {
            if (err2) {
                console.log(err2);
                return res.status(500).json({ error: "Server Error", details: err2 });
            }
            return res.status(200).json("Success");
        });
    });
};



// Fetch Users
export const fetchUsers = ((req, res) => {

    db.query("SELECT * FROM users", (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json("Server Error");
        } else {
            res.status(200).json(result);
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