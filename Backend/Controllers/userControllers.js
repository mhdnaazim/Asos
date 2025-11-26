import db from '../Config/db.js';


// User Registration 
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
    const sql = "SELECT * FROM users";

    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json("Server Error");
        } else {
            return res.status(200).json(result);
        }
    });
});


// Delete User
export const delUser = ((req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM users WHERE userid = ?";

    db.query(sql, id, (err, result) => {
        if (err) {
            res.status(500).json("Server Error");
            console.log(err);
            
        } else {
            res.status(200).json("Deletion Success");
        }
    });
});

// Edit User 
export const editUser = ((req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM users WHERE userid = ?"

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json("Server Error")
        } else {
            res.status(200).json(result)
        }
    })
})

// Updated User 
export const updatedUser = ((req, res) => {
    const id = req.params.id;
    const { email, password, interest, usertype } = req.body
    const values = [ email, password, interest, usertype, id ]
    const sql = "UPDATE users SET email = ?, password = ?, interest = ?, usertype = ? WHERE userid = ?"

    db.query(sql, values, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json("Server Error");
        } else {
            res.status(200).json(result);
        }
    })
})