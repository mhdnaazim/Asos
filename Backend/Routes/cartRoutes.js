import express from 'express';
import { addToCart, deleteFromCart, getCart, updateQuantity } from '../Controllers/cartControllers.js';

const router = express.Router();

router.get("/getCart", getCart);
router.post("/addToCart", addToCart);
router.delete("/deleteFromCart/:id", deleteFromCart);
router.put("/updateQuantity/:id" , updateQuantity);

export default router;