import db from '../Config/db.js';

// User Login
export const logUser = ((req, res) => {
    const { email, password, interest, usertype } = req.body;
    const values = [ email, password, interest, usertype ];
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";

    db.query(sql, values, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json("Server Error");
        };

        if (result.length > 0) {
            // User found
            res.status(200).json({ 
                usertype: result[0].usertype,
                interest: result[0].interest
             });
        } else {
            // User not found
            res.status(401).json({ message: "Invalid Email or Password" });
        };
    });
});