import { Request, Response } from 'express';
import * as companyService from '../services/company.service';

const getCompanies = async (_: Request, res: Response) => {
  const companies = await companyService.getAll();
  res.status(200).json(companies);
};

const getCompanyById = async (req: Request, res: Response) => {
  const { companyId } = req.params;
  const company = await companyService.getOne(+companyId);

  res.status(200).json(company);
};

const createCompany = async (req: Request | any, res: Response) => {
  const company = await companyService.createOne(req.body, req.userId);

  res.status(201).json(company);
};

const deleteCompany = async (req: Request, res: Response) => {
  const { companyId } = req.params;
  await companyService.deleteOne(+companyId);

  res.status(200).json({ mesage: 'Company deleted' });
};

const updateCompany = async (req: Request, res: Response) => {
  const { companyId } = req.params;
  const updatedCompany = await companyService.updateOne(+companyId, req.body);

  res.status(200).json(updatedCompany);
};

export {
  getCompanies,
  getCompanyById,
  createCompany,
  deleteCompany,
  updateCompany,
};
