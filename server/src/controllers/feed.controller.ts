import { Request, Response } from 'express';
import feedService from '../services/feed.service';

interface callback {
  [key: string]: (req: Request, res: Response) => void;
}
const feedController: callback = {};

feedController.create = async (req: Request, res: Response) => {
  const { feedImg, author } = req.body;
  if (!(feedImg.length !== 0 && author)) {
    return res.status(400).end();
  }
  const success = await feedService.create(req.body);
  if (success) {
    return res.status(201).end();
  }
  return res.status(400).end();
};

feedController.explore = async (req: Request, res: Response) => {
  const success = await feedService.explore(req.body);
  if (success) return res.status(201).end();
  return res.status(400).end();
};

export default feedController;
