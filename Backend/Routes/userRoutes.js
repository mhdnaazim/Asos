import express from 'express';
import { addUser, delUser, fetchUsers } from '../Controllers/userControllers.js';

const router = express.Router()

router.post("/addUser", addUser);
router.get("/users", fetchUsers);
router.delete("/delUser/:id", delUser);

export default router