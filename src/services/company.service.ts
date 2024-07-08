import { prisma } from '../../prisma/prisma';
import { AppError } from '../middleware/AppError';
import { ICompany } from '../types/company';

interface QueryString {
  skip?: string;
  limit?: string;
  search?: string;
}

const getAll = async (query: QueryString) => {
  const { skip = 0, limit = 6, search = '' } = query;
  const count = await prisma.company.count();

  const companies = await prisma.company.findMany({
    skip: Number(skip),
    take: Number(limit),
    orderBy: [{ name: 'asc' }, { serviceOfActivity: 'asc' }],
    where: {
      OR: [
        {
          name: {
            contains: search,
            mode: 'insensitive',
          },
        },

        {
          type: {
            contains: search,
            mode: 'insensitive',
          },
        },
      ],
    },
  });
  return { companies, count };
};

const getMy = async (userId: number) => {
  const companies = await prisma.company.findMany({
    where: {
      userId,
    },
  });

  return companies;
};

const getOne = async (id: number) => {
  const company = await prisma.company.findUnique({
    where: {
      id,
    },
  });

  if (!company) {
    throw new AppError('Company not found', 404);
  }

  return company;
};

const deleteOne = async (id: number) => {
  const company = await prisma.company.findUnique({
    where: {
      id,
    },
  });

  if (!company) {
    throw new AppError('Company not found', 404);
  }
  await prisma.company.delete({
    where: {
      id,
    },
  });
};

const createOne = async (company: ICompany, authorId: number) => {
  const {
    address,
    description,
    name,
    numberOfEmployees,
    type,
    serviceOfActivity,
  } = company;

  const isCompanyExist = await prisma.company.findFirst({
    where: {
      OR: [{ name }, { address }],
    },
  });

  if (isCompanyExist) {
    throw new AppError('Company already exist', 404);
  }

  const existedUser = await prisma.user.findUnique({
    where: {
      id: authorId,
    },
  });

  if (!existedUser) {
    throw new AppError('User not found', 404);
  }

  const newCompany = await prisma.company.create({
    data: {
      address,
      description,
      name,
      numberOfEmployees,
      type,
      serviceOfActivity,
      user: {
        connect: {
          id: authorId,
        },
      },
    },
  });

  return newCompany;
};

const updateOne = async (id: number, company: ICompany) => {
  const {
    address,
    description,
    name,
    numberOfEmployees,
    serviceOfActivity,
    updatedAt,
  } = company;

  const existedCompany = await prisma.company.findUnique({
    where: {
      id,
    },
  });

  if (!existedCompany) {
    throw new AppError('Company not found', 404);
  }

  const updatedCompany = await prisma.company.update({
    where: {
      id,
    },
    data: {
      address,
      description,
      name,
      numberOfEmployees,
      serviceOfActivity,
      updatedAt,
    },
  });

  return updatedCompany;
};

export { createOne, deleteOne, getAll, getOne, updateOne, getMy };
