import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import errorHandler from './middleware/errorHandler';

import authRouter from './routes/auth.route';
import userRouter from './routes/user.route';
import companyRouter from './routes/company.route';

dotenv.config();
const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/company', companyRouter);

app.use(errorHandler);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
