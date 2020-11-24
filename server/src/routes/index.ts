import express from 'express';
import { indexController } from '../controllers';
import userRouter from './user.router';

const router = express.Router();

router.get('/', indexController);
router.use('/user', userRouter);

export default router;
