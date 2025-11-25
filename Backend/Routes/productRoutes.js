import express from 'express';
import path from 'path';
import multer from 'multer';
import { addProduct } from '../Controllers/productControllers.js';

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
})

router.post("/addProduct", upload.single("file"), addProduct);


export default router;