import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const createToken = (payload: string) => {
  const secret = process.env.JWT_SECRET as string;

  const token = jwt.sign(
    {
      payload,
    },
    secret,
    {
      expiresIn: '1d',
    },
  );

  return token;
};

export default createToken;
