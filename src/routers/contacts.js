import { Router } from 'express';

import {
  getContactByIdController,
  getContactsController,
  createContactController,
  deleteContactController,
  upsertContactController,
  patchContactController,
} from '../controllers/contacts.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';
import { checkRoles } from '../middlewares/checkRoles.js';
import { ROLES } from '../constants/index.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get(
  '/contacts',
  checkRoles(ROLES.ADMIN),
  ctrlWrapper(getContactsController),
);

router.get(
  '/contacts/:contactId',
  checkRoles(ROLES.ADMIN, ROLES.OWNER),
  ctrlWrapper(getContactByIdController),
  isValidId,
);

router.post(
  '/contacts',
  checkRoles(ROLES.ADMIN),
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

router.delete(
  '/contacts/:contactId',
  checkRoles(ROLES.ADMIN),
  ctrlWrapper(deleteContactController),
);

router.put(
  '/contacts/:contactId',
  checkRoles(ROLES.ADMIN, ROLES.OWNER),
  validateBody(updateContactSchema),
  ctrlWrapper(upsertContactController),
  isValidId,
);

router.patch(
  '/contacts/:contactId',
  checkRoles(ROLES.ADMIN, ROLES.OWNER),
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
  isValidId,
);

router.use(authenticate);
router.get('/', ctrlWrapper(getContactsController));

export default router;
