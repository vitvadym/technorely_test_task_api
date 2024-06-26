import { Request, Response } from 'express';
import * as authServive from '../services/auth.service';

const signUp = async (req: Request, res: Response) => {
  const newUser = await authServive.register(req.body);

  res.status(201).json(newUser);
};

const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await authServive.login(email, password);

  res.status(200).json(user);
};

export { signUp, signIn };
