import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const createToken = (userEmail: string) => {
  return jwt.sign(
    {
      email: userEmail,
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: '1d',
    },
  );
};

export default createToken;
