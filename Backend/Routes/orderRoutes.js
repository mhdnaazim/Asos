import express from 'express';
import { getOrders, placeOrder } from '../Controllers/orderControllers.js';

const router = express.Router()

router.get("/getOrders", getOrders);
router.post("/placeOrder", placeOrder);

export default router