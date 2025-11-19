import express from 'express';
import { addUser, delUser, editUser, fetchUsers, updatedUser } from '../Controllers/userControllers.js';

const router = express.Router()

router.post("/addUser", addUser);
router.get("/fetchUsers", fetchUsers);
router.delete("/delUser/:id", delUser);
router.get("/editUser/:id", editUser);
router.put("/updatedUser/:id", updatedUser);

export default router;