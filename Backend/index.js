import express from 'express';
import cors from 'cors';
import userRoutes from './Routes/userRoutes.js'

const app = express();

app.use(express.json());
app.use(cors());


app.use("/api/user", userRoutes);


const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});