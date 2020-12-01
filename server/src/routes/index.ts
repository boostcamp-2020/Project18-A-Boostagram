import express from 'express';
import { indexController } from '../controllers';
import feedRouter from './feed.router';
import imageRouter from './image.router';

const router = express.Router();

router.get('/', indexController);
router.use('/feed', feedRouter);
router.use('/image', imageRouter);

export default router;
