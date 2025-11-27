import db from '../Config/db.js';

// Add Products
export const addProduct = ((req, res) => {
    console.log(req.body);
    console.log(req.file);
    const { name, price, color, size, quantity } = req.body;
    const sql = "INSERT INTO products (name, image, price, color, size, quantity) VALUES (?,?,?,?,?,?)";
    const values = [ name, req.file.filename, price, color, size, quantity ]

    db.query(sql, values, (err, result) => {
        if (err) {
            console.log(err);
            
            res.status(500).json("Server Error");
        } else {
            res.status(200).json("Success");
        };
    });
});


// Get Products
export const getProduct = ((req,res) => {
    const sql = "SELECT * FROM products"

    db.query(sql, (err, result) => {
        if(err){
            res.status(500).json("Serverside Error");
        } else {
            res.status(200).json(result);
        };
    });
});
