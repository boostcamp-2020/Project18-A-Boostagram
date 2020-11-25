import express from 'express';
import { indexController } from '../controllers';
import userRouter from './user.router';
import feedRouter from './feed.router';

const router = express.Router();

router.get('/', indexController);
router.use('/user', userRouter);
router.use('/feed', feedRouter);

export default router;
