import db from '../Config/db.js';

export const addProduct = ((req, res) => {
    console.log(req.body);
    console.log(req.file);
    const { name } = req.body;
    const sql = "INSERT INTO products (name, image) VALUES (?,?)";
    const values = [ name, req.file.filename ]

    db.query(sql, values, (err, result) => {
        if (err) {
            console.log(err);
            
            res.status(500).json("Server Error");
        } else {
            res.status(200).json("Success");
        };
    })
});
