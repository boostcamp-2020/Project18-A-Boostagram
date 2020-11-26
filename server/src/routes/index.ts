import express from 'express';
import { indexController } from '../controllers';
import feedRouter from './feed.router';

const router = express.Router();

router.get('/', indexController);
router.use('/feed', feedRouter);

export default router;
