import { Router } from 'express';
import {
  getCompanies,
  createCompany,
  getCompanyById,
  deleteCompany,
  updateCompany,
} from '../controllers/company.controller';
import checkAuth from '../middleware/checkAuth';
import tryCatch from '../middleware/tryCatch';
import validateBody from '../middleware/validateRequest';
import companyShema from '../schemas/companySchema';

const router = Router();

router.get('/', checkAuth, tryCatch(getCompanies));
router.get('/:companyId', checkAuth, tryCatch(getCompanyById));

router.post(
  '/create',
  checkAuth,
  validateBody(companyShema),
  tryCatch(createCompany),
);
router.delete('/:companyId', checkAuth, tryCatch(deleteCompany));
router.put(
  '/:companyId',
  checkAuth,
  validateBody(companyShema),
  tryCatch(updateCompany),
);

export default router;
