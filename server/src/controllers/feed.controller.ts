import { Request, Response } from 'express';
import { create, explore } from '../services/feed.service';

interface callback {
  [key: string]: (req: Request, res: Response) => void;
}
const feedController: callback = {};

feedController.create = async (req: Request, res: Response) => {
  const params = {
    author: undefined,
    content: req.body.content,
    location: req.body.location,
    like: undefined,
    feedImg: undefined,
    comments: undefined,
  };

  if (req.body.author) params.author = JSON.parse(req.body.author);
  else return res.status(400).end();

  if (req.body.feedImg) params.feedImg = JSON.parse(req.body.feedImg);
  else return res.status(400).end();

  if (req.body.like) params.like = JSON.parse(req.body.like);

  if (req.body.comments) params.comments = JSON.parse(req.body.comments);

  const success = await create(params);
  if (success) return res.status(201).end();

  return res.status(400).end();
};

feedController.explore = async (req: Request, res: Response) => {
  const result = await explore();
  if (result) return res.status(201).json(result).end();
  return res.status(400).end();
};

export default feedController;
