import express from 'express';
import { indexController } from '../controllers';
import userRouter from './userRouter';

const router = express.Router();

router.get('/', indexController);
router.use('/user', userRouter);

export default router;
