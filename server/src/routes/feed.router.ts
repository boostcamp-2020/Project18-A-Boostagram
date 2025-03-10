import express from 'express';
import feedController from '../controllers/feed.controller';
import validation from '../passport/validation';

const router = express.Router();

router.post('/', validation, feedController.create);
router.post('/like', validation, feedController.like);
router.get('/explore', feedController.explore);
router.get('/following/:userName', feedController.following);
router.get('/detail/:feedId', feedController.detail);

export default router;
