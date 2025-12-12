import express from 'express';
import { addToCart, deleteFromCart } from '../Controllers/cartControllers.js';

const router = express.Router();

router.post("/addToCart", addToCart);
router.delete("/deleteFromCart", deleteFromCart);

export default router;