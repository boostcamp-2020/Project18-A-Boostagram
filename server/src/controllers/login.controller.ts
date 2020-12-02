import dotenv from 'dotenv';
import { Request, Response } from 'express';
import {
  getToken,
  getUserData,
  createUser,
  findUser,
} from '../services/login.service';

dotenv.config();

const { CLIENT_ID, REDIRECT_URL, FRONT_URL = '' } = process.env;
const GIT_URL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}`;
const MAX_AGE = 60000;

interface callback {
  [key: string]: (req: Request, res: Response) => void;
}
const loginController: callback = {};

loginController.gitUrl = async (req, res) => {
  res.json(GIT_URL);
};
loginController.gitCallback = async (req, res) => {
  const { code } = req.query;
  const accessToken = await getToken(code);
  const userData: string = await getUserData(accessToken);
  const parsedUserData = JSON.parse(userData);
  const { login: userName, avatar_url: profileImg } = parsedUserData;

  const user = await findUser(userName);
  if (user === null) {
    await createUser(userName, profileImg);
  } else {
    res.cookie('name', user.name, { maxAge: MAX_AGE });
  }
  // todo: user._id -> make jwt

  res.cookie('profileImg', profileImg, { maxAge: MAX_AGE, encode: String });
  res.cookie('userName', userName, { maxAge: MAX_AGE });
  res.cookie('accessToken', accessToken, { maxAge: MAX_AGE });
  res.redirect(FRONT_URL);
};

export default loginController;
