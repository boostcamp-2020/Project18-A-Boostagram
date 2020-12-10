import express from 'express';
import UserController from '../controllers/user.controller';
import validation from '../passport/validation';

const router = express.Router();

router.get('/profile/:userName', UserController.getProfile);

router.post('/follow/:userName', validation, UserController.follow);

export default router;
