import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';
import { AppError } from './AppError';

const validateBody = (shema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = shema.validate(req.body);

    if (error) {
      throw new AppError(error.details[0].message, 400);
    }
    next();
  };
};

export default validateBody;
