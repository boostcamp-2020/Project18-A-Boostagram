import express from 'express';
import CommentController from '../controllers/comment.controller';
import validation from '../passport/validation';

const router = express.Router();

router.post('/', validation, CommentController.create);

export default router;
