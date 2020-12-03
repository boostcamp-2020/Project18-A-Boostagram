import express from 'express';
import UserController from '../controllers/user.controller';

const router = express.Router();

router.get('/profile/:userId', UserController.getProfile);

export default router;
