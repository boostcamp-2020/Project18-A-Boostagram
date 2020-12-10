import { Request, Response } from 'express';
import getProfile from '../services/user.service';

interface callback {
  [key: string]: (req: Request, res: Response) => void;
}

const UserController: callback = {};

UserController.getProfile = async (req, res) => {
  const result = await getProfile(req.params.userName);
  res.json(result);
};

export default UserController;
