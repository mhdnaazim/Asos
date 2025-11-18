import express from 'express';
import { logUser } from '../Controllers/authControllers.js';

const router = express.Router();

router.post("logUser", logUser);

export default router