import express from 'express';
import path from 'path';
import multer from 'multer';
import { addWomens, deleteWomen, editWomen, getWomenDetail, getWomens } from '../Controllers/womenControllers.js';

const router = express.Router();

const storage = multer.diskStorage({
    destination : function(req,file,cb)
    {
        cb(null, "Uploads/");
    },
    filename : function(req,file,cb)
    {
        cb(null,Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage : storage
})


router.get("/getWomens", getWomens);
router.get("/getWomenDetail/:id", getWomenDetail);
router.get("/editWomen/:id", editWomen);
router.delete("/deleteWomen", deleteWomen);
router.post("/addWomens", addWomens)

export default router;