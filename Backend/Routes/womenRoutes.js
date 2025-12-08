import express from 'express';
import path from 'path';
import multer from 'multer';
import { deleteWomen, editWomen, getWomenDetail, getWomens } from '../Controllers/womenControllers';

const router = express.Router();


router.get("/getWomens", getWomens);
router.get("/getWomenDetail/:id", getWomenDetail);
router.get("/editWomen/:id", editWomen);
router.delete("/deleteWomen", deleteWomen);
router.post()
router.put()

export default router;