import { Router } from 'express';
import { signUp, signIn } from '../controllers/auth.controller';
import validateBody from '../middleware/validateRequest';
import tryCatch from '../middleware/tryCatch';
import { userRegisterSchema, userLoginSchema } from '../schemas/userSchema';

const router = Router();

router.post('/signup', validateBody(userRegisterSchema), tryCatch(signUp));
router.post('/signin', validateBody(userLoginSchema), tryCatch(signIn));

export default router;
