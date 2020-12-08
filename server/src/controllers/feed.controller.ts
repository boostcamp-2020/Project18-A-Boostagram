import { Request, Response } from 'express';
import { create, explore, following, like } from '../services/feed.service';
import User from '../models/user.model';
import getUserId from '../lib/getUserId';

interface callback {
  [key: string]: (req: Request, res: Response) => void;
}
const feedController: callback = {};

feedController.create = async (req: Request, res: Response) => {
  const { author, feedImg } = req.body;
  const { user } = req;

  author.userId = getUserId(user);

  if (!(author && feedImg.length !== 0)) {
    return res.status(400).end();
  }
  const success = await create(req.body);
  if (success) return res.status(201).json({ messege: 'success' });

  return res.status(500).end();
};

feedController.explore = async (req: Request, res: Response) => {
  const result = await explore();
  if (result) return res.status(200).json(result);
  return res.status(500).end();
};

feedController.following = async (req: Request, res: Response) => {
  const { userName } = req.params;

  const { lastFeedId } = JSON.parse(JSON.stringify(req.query));

  const user = await User.findOne({ userName });
  if (!user) {
    return res.status(400).end();
  }

  const result = await following(user, lastFeedId);
  if (result) return res.status(200).json(result);
  return res.status(500).end();
};

feedController.like = async (req: Request, res: Response) => {
  const { author, feedId, status } = req.body;
  const { user } = req;

  author.userId = getUserId(user);

  if (!(author && feedId && (status === 0 || status === 1))) {
    return res.status(400).end();
  }
  const success = await like(author, feedId, status);
  if (success) return res.status(201).json({ messege: 'success' });

  return res.status(500).end();
};

export default feedController;
