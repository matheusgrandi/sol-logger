import { Router } from 'express';
import multer from 'multer';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';
import uploadCofig from '../config/upload';

const userRoutes = Router();

const uploadAvatar = multer(uploadCofig.upload('./tmp/avatar'));
const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

userRoutes.use(ensureAuthenticated);

userRoutes.post('/', createUserController.handle);

userRoutes.patch(
  '/avatar',
  uploadAvatar.single('avatar'),
  updateUserAvatarController.handle
);

export { userRoutes };
