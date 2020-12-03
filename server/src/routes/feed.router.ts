import express from 'express';
import feedController from '../controllers/feed.controller';
import valdation from '../passport/valaidation';

const router = express.Router();

router.post('/', valdation, feedController.create);

router.get('/explore', feedController.explore);

router.get('/following/:userid', feedController.following);

export default router;
