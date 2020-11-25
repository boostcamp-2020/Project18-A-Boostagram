import { Request, Response } from 'express';
import feedService from '../services/feed.service';

interface callback {
  [key: string]: any;
}
const feedController: callback = {};

feedController.create = (req: Request, res: Response) => {
  const { feedImg, author } = req.body;
  req.body.author = JSON.parse(author);
  if (!(feedImg && author)) {
    res.status(400).end();
  }
  feedService.create(req.body);

  res.send('ok');
};

export default feedController;
