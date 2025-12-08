import db from '../Config/db.js';

// Get Product
export const getWomens = ((req, res) => {
    const sql = "SELECT * FROM womens";

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json("SERVER ERROR");
        } else {
            res.status(200).json("PRODUCTS FETCHED");
        };
    });
});


// Add Product
export const addWomens = ((req, res) => {
    db.query((er, result) => {

    });
});


// Update Product
export const updateWomen = ((req,res) => {
    db.query((err, result) => {

    })
})


// Delete Product
export const deleteWomen = ((req,res) => {
    const id = req.params.id;
    const sql = "DELETE FROM womens WHERE id = ?";

    db.query(sql, [id], (err,result) => {
        if (err) {
            console.log(err);
            res.status(500).json("SERVER ERROR");
        } else {
            res.status(200).json("PRODUCT DELETED")
        }
    })
})

// Get Product Detail
export const getWomenDetail = ((req,res) => {
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
export const editWomen = ((req,res) => {
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



