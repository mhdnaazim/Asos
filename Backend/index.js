import express from 'express';
import cors from 'cors';
import userRoutes from './Routes/userRoutes.js';
import authRoutes from './Routes/authRoutes.js'

const app = express();

app.use(express.json());
app.use(cors());


app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes)

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});