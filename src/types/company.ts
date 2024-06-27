import { IUser } from './user';

export interface ICompany {
  id: number;
  name: string;
  address: string;
  serviceOfActivity: string;
  numberOfEmployees: number;
  description: string;
  type: string;
  user: IUser;
  userId: number;
  createdAt: string;
  updatedAt: string;
}
