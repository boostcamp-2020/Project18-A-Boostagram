import express from 'express';
import feedController from '../controllers/feed.controller';
import validation from '../passport/validation';

const router = express.Router();

router.post('/', validation, feedController.create);

router.get('/explore', feedController.explore);

router.get('/following/:userName', feedController.following);

export default router;
