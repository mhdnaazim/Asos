import db from '../Config/db.js';

// Add Products
export const addProduct = ((req, res) => {
    console.log(req.body);
    console.log(req.file);
    const { name, price, color, size, quantity } = req.body;
    const sql = "INSERT INTO products (name, image, price, color, size, quantity) VALUES (?,?,?,?,?,?)";
    const values = [name, req.file.filename, price, color, size, quantity]

    db.query(sql, values, (err, result) => {
        if (err) {
            res.status(500).json("Server Error");
            console.log(err);
            
        } else {
            res.status(200).json("Success");
        };
    });
});


// Get Products
export const getProduct = ((req, res) => {
    const sql = "SELECT * FROM products"

    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json("Serverside Error");
        } else {
            res.status(200).json(result);
        };
    });
});

// Delete Products
export const deleteProduct = ((req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM products WHERE id = ?";

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json("Server error")
        } else {
            res.status(200).json("Product Deleted")
        }
    })
});

// Get Edit Product
export const editProduct = (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM products WHERE id = ?";

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json("Server error");
        }
        return res.status(200).json(result[0]);
    });
};

// Update Product
export const updateProduct = (req, res) => {
    const id = req.params.id;
    const { name, price, color, size, quantity } = req.body;
    const image = req.file ? req.file.filename : null;

    let sql = "";
    let values = [];

    if (image) {
        // If user uploaded a new image
         sql = `UPDATE products SET name = ?, price = ?, color = ?, size = ?, quantity = ?, image = ? WHERE id = ?`;
         values = [name, price, color, size, quantity, image, id];
    } else{
        // If user not updated image
         sql = `UPDATE products SET name = ?, price = ?, color = ?, size = ?, quantity = ? WHERE id = ?`;
         values = [name, price, color, size, quantity, id];
    }

    db.query(sql, values, (err, result) => {
        if (err) {
            res.status(500).json("Server Error");
        } else {
            res.status(200).json("Update Success");
        }
    })

};

