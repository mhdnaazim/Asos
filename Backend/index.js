import express from 'express';
import cors from 'cors';
import userRoutes from './Routes/userRoutes.js';
import authRoutes from './Routes/authRoutes.js';
import productRoutes from './Routes/productRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const _filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_filename);

app.use('/api/Uploads', express.static(path.join(__dirname, '/Uploads')));

app.use(express.json());
app.use(cors());


app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});