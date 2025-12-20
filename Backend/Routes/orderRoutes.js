import express from 'express';
import { getOrders } from '../Controllers/orderControllers.js';

const router = express.Router()

router.get("/getOrders", getOrders);

export default router