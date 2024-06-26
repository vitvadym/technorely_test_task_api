import { prisma } from '../../prisma/prisma';
import bcrypt from 'bcrypt';
import { AppError } from '../middleware/AppError';
import { IUser } from '../types/user';
import createToken from '../utils/generateToken';

const register = async (user: IUser) => {
  const {
    email,
    password,
    firstName,
    lastName,
    position,
    phoneNumber,
    nickName,
    description,
  } = user;

  const isUserExist = await prisma.user.findFirst({
    where: {
      OR: [{ email }, { phoneNumber }, { nickName }],
    },
  });

  if (isUserExist) {
    throw new AppError('User already exist', 404);
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const token = createToken(email);

  const newUser = await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      position,
      phoneNumber,
      nickName,
      description,
      password: hashedPassword,
    },
  });

  return { ...newUser, token };
};

const login = async (email: string, password: string) => {
  const existedUser = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!existedUser) {
    throw new AppError('User not found', 404);
  }

  const isPasswordCorect = await bcrypt.compare(password, existedUser.password);

  if (!isPasswordCorect) {
    throw new AppError('Wrong credentials', 404);
  }

  const token = createToken(email);
  return {
    ...existedUser,
    token,
  };
};

export { register, login };
