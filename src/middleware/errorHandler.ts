import { Request, Response, NextFunction } from 'express';

interface CustomError extends Error {
  statusCode: number;
}

const errorHandler = (
  error: CustomError,
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || 'Something went wrong';

  return res.status(statusCode).json({ message });
};

export default errorHandler;
