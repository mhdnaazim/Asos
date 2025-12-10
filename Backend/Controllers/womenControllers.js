import db from '../Config/db.js';

// Get Product
export const getWomens = ((req, res) => {
    const sql = "SELECT * FROM womens";

    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json("SERVER ERROR");
        } else {
            res.status(200).json(result);
        };
    });
});


// Add Product
export const addWomens = ((req, res) => {

    console.log(req.body);
    console.log(req.file);
    const { name, price, color, size, quantity } = req.body;
    const sql = "INSERT INTO womens (name, image, price, color, size, quantity) VALUES (?,?,?,?,?,?)";
    const values = [name, req.file.filename, price, color, size, quantity];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json("SERVER ERROR");
        } else {
            res.status(200).json("SUCCESS");
        }
    });
});


// Update Product
export const updateWomen = ((req, res) => {

    const id = req.params.id;
    const { name, price, color, size, quantity } = req.body;
    const image = req.file ? req.file.filename : null;

    let sql = "";
    let values = [];
    
    if (image) {
        sql = "UPDATE womens SET name = ?, price = ?, color = ?, size = ?, quantity = ?, image = ? WHERE id = ?";
        values = [ name, price, color, size, quantity, image, id ];
    } else {
        sql = "UPDATE womens SET name = ?, price = ?, color = ?, size = ?, quantity = ? WHERE id = ?";
        values = [ name, price, color, size, quantity, id ];
    }



    db.query(sql, values, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json("SERVER ERROR");
        } else {
            res.status(200).json("UPDATE SUCCESS");
        }
    });
});


// Delete Product
export const deleteWomen = ((req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM womens WHERE id = ?";

    db.query(sql, [id], (err, result) => {
        if (err) {
            res.status(500).json("SERVER ERROR");
        } else {
            res.status(200).json("PRODUCT DELETED")
        }
    })
})

// Get Product Detail
export const getWomenDetail = ((req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM womens WHERE id = ?";

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json("SERVER ERROR");
        } else {
            res.status(200).json(result[0])
        }
    })
});

// Edit Product
export const editWomen = ((req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM womens WHERE id = ?";

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json("SERVER ERROR");
        } else {
            res.status(200).json(result[0])
        }
    })
})



