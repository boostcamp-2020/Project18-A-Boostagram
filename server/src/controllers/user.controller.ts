import { Request, Response } from 'express';
import { getProfile, follow } from '../services/user.service';
import getUserId from '../lib/getUserId';

interface callback {
  [key: string]: (req: Request, res: Response) => void;
}

const UserController: callback = {};

UserController.getProfile = async (req, res) => {
  const { lastFeedId } = JSON.parse(JSON.stringify(req.query));
  const { userName } = req.params;
  if (!userName) {
    return res.status(400).end();
  }
  const result = await getProfile(userName, lastFeedId);
  if (result) {
    return res.status(200).json(result);
  }
  return res.status(500).end();
};

UserController.follow = async (req, res) => {
  const { author, status } = req.body;
  const { userName } = req.params;
  const { user } = req;
  author.userId = getUserId(user);
  if (!(author && userName && (status === 0 || status === 1))) {
    return res.status(400).end();
  }
  const success = await follow(author, userName, status);
  if (success) return res.status(204).end();

  return res.status(500).end();
};

export default UserController;
