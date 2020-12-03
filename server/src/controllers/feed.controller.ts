import { Request, Response } from 'express';
import { create, explore, following } from '../services/feed.service';
import User from '../models/user.model';

interface callback {
  [key: string]: (req: Request, res: Response) => void;
}
const feedController: callback = {};

feedController.create = async (req: Request, res: Response) => {
  const { author, feedImg } = req.body;
  const { user } = req;

  const stringUser = JSON.stringify(user);
  author.userId = JSON.parse(stringUser).id;

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
  // todo: userid 변수명 수정
  const { userid } = req.params;
  const user = await User.findOne({ userName: userid });
  if (!user) {
    return res.status(400).end();
  }
  const result = await following(user);
  if (result) return res.status(200).json(result);
  return res.status(500).end();
};

export default feedController;
