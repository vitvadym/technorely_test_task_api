import { Request, Response } from 'express';
import * as userService from '../services/user.service';

const getUsers = async (_: Request, res: Response) => {
  const { count, users } = await userService.getAll();
  res.status(200).json({ count, users });
};

const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const user = await userService.getOne(+userId);

  res.status(200).json(user);
};

const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  await userService.deleteOne(+userId);

  res.status(200).json({ mesage: 'User deleted successfully' });
};

const updateUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const updatedUser = await userService.updateOne(+userId, req.body);

  res.status(200).json(updatedUser);
};

export { getUsers, getUserById, deleteUser, updateUser };
