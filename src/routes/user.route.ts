import { Router } from 'express';
import {
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
} from '../controllers/user.controller';
import tryCatch from '../middleware/tryCatch';
import checkAuth from '../middleware/checkAuth';

const router = Router();

router.get('/', checkAuth, tryCatch(getUsers));
router.get('/:userId', tryCatch(getUserById));
router.delete('/:userId', tryCatch(deleteUser));
router.put('/:userId', tryCatch(updateUser));

export default router;
