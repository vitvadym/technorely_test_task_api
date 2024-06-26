import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route';
import errorHandler from './middleware/errorHandler';

dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth', authRouter);

app.use(errorHandler);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
