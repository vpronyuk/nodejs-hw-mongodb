import { Router } from 'express';

import { registerUserSchema, loginUserSchema } from '../validation/auth.js';

import {
  registerUserController,
  loginUserController,
  logoutUserController,
  refreshUserSessionController,
} from '../controllers/auth.js';

import { validateBody } from '../middlewares/validateBody.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.post(
  '/auth/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

router.post(
  '/auth/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);

router.post('/auth/logout', ctrlWrapper(logoutUserController));
router.post('/auth/refresh', ctrlWrapper(refreshUserSessionController));

export default router;
