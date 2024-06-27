import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { AppError } from './AppError';

interface jwtPayload extends JwtPayload {
  id: string;
  email: string;
}

const checkAuth = (req: Request | any, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new AppError('Unauthorized', 401);
    }
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string,
    ) as jwtPayload;

    req.userId = decoded.id;

    next();
  } catch (error) {
    next(error);
  }
};

export default checkAuth;
