import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const createToken = (id: number, email: string) => {
  const secret = process.env.JWT_SECRET as string;

  const token = jwt.sign(
    {
      id,
      email,
    },
    secret,
    {
      expiresIn: '1d',
    },
  );

  return token;
};

export default createToken;
