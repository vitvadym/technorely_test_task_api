import express from 'express';
import dotenv from 'dotenv';
import errorHandler from './middleware/errorHandler';

import authRouter from './routes/auth.route';
import userRouter from './routes/user.route';

dotenv.config();
const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);

app.use(errorHandler);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
