import express from 'express';
import path from 'path';
import multer from 'multer';
import { addProduct, deleteProduct, editProduct, getProduct, updateProduct } from '../Controllers/productControllers.js';
import { log } from 'console';

const router = express.Router()
const storage = multer.diskStorage({
    destination : function(req, file, cb)
    {
        cb(null, "Uploads/");
    },
    filename : function(req, file, cb)
    {
        cb(null,Date.now() + path.extname(file.originalname));        
    }
})

const upload = multer({
    storage : storage
});

router.post("/addProduct", upload.single("file"), addProduct);
router.get("/getProduct", getProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.get("/editProduct/:id", editProduct);
router.put("/updateProduct/:id", updateProduct);


export default router;