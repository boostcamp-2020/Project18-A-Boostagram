import { Request, Response } from 'express';
import create from '../services/comment.service';
import getUserId from '../lib/getUserId';

interface callback {
  [key: string]: (req: Request, res: Response) => void;
}

const CommentController: callback = {};

CommentController.create = async (req, res) => {
  const { author, feedId, content } = req.body;
  const { user } = req;

  author.userId = getUserId(user);

  if (!(author && feedId && content)) {
    return res.status(400).end();
  }
  const success = await create(req.body);
  if (success) return res.status(201).end();

  return res.status(500).end();
};

export default CommentController;
