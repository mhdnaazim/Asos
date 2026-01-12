import express from 'express';
import { addToCart, deleteFromCart, getCart, getCartItems, updateQuantity } from '../Controllers/cartControllers.js';

const router = express.Router();

router.get("/getCart", getCart);
router.get("/getCartItems/:id", getCartItems);
router.post("/addToCart", addToCart);
router.delete("/deleteFromCart/:id", deleteFromCart);
router.put("/updateQuantity/:id" , updateQuantity);

export default router;