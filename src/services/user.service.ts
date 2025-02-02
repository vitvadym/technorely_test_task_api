import { prisma } from '../../prisma/prisma';
import { AppError } from '../middleware/AppError';
import { IUser } from '../types/user';

const getAll = async () => {
  const count = await prisma.user.count();
  const users = await prisma.user.findMany();
  return { users, count };
};

const getOne = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    throw new AppError('User not found', 404);
  }
  return user;
};

const deleteOne = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    throw new AppError('User not found', 404);
  }

  await prisma.user.delete({
    where: {
      id,
    },
  });

  return user;
};

const updateOne = async (id: number, data: IUser) => {
  const {
    email,
    description,
    firstName,
    lastName,
    position,
    phoneNumber,
    password,
    nickName,
  } = data;
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    throw new AppError('User not found', 404);
  }

  const updatedUser = await prisma.user.update({
    where: {
      id,
    },
    data: {
      email,
      description,
      firstName,
      lastName,
      position,
      phoneNumber,
      nickName,
      password,
    },
  });
  return updatedUser;
};

export { getAll, getOne, deleteOne, updateOne };
