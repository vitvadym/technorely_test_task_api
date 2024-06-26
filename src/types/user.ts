import { ICompany } from './company';

export interface IUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  nickName: string;
  password: string;
  phoneNumber: string;
  description: string;
  position: string;
  isAdmin: boolean;
  token: string;
  companies: ICompany[];
  createdAt: string;
  updatedAt: string;
}
