import express from 'express';
import feedController from '../controllers/feed.controller';

const router = express.Router();

router.post('/', feedController.create);

router.get('/explore', feedController.explore);

router.get('/following/:userid', feedController.following);

export default router;
