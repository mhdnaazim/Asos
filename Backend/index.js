import express from 'express';
import cors from 'cors';
import userRoutes from './Routes/userRoutes.js';
import authRoutes from './Routes/authRoutes.js';
import productRoutes from './Routes/productRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());


app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});