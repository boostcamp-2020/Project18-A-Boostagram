import express from 'express';
import { indexController } from '../controllers';
import feedRouter from './feed.router';
import imageRouter from './image.router';
import loginRouter from './login.router';
import userRouter from './user.router';
import commentRouter from './comment.router';

const router = express.Router();

router.get('/', indexController);
router.use('/feed', feedRouter);
router.use('/image', imageRouter);
router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/comment', commentRouter);

export default router;
