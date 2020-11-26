import express from 'express';
import feedController from '../controllers/feed.controller';

const router = express.Router();

router.post('/', feedController.create);

export default router;
