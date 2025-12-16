import express from 'express';
import { addAddress, deleteAddress, getAddress } from '../Controllers/addressControllers.js';

const router = express.Router();

router.post("/addAddress", addAddress);
router.delete("/deleteAddress/:id", deleteAddress);
router.get("/getAddress", getAddress);

export default router;