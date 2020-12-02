import { Request, Response } from 'express';
import { create, explore } from '../services/feed.service';

interface callback {
  [key: string]: (req: Request, res: Response) => void;
}
const feedController: callback = {};

feedController.create = async (req: Request, res: Response) => {
  const { author, feedImg } = req.body;

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

export default feedController;
