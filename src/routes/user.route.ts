import { Router } from 'express';
import {
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
} from '../controllers/user.controller';
import tryCatch from '../middleware/tryCatch';
import checkAuth from '../middleware/checkAuth';
import validateBody from '../middleware/validateRequest';
import { userRegisterSchema } from '../schemas/userSchema';

const router = Router();

router.get('/all', checkAuth, tryCatch(getUsers));
router.get('/:userId', checkAuth, tryCatch(getUserById));

router.delete('/:userId', checkAuth, tryCatch(deleteUser));
router.put(
  '/edit/:userId',
  checkAuth,
  validateBody(userRegisterSchema),
  tryCatch(updateUser),
);

export default router;
