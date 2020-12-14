import { Request, Response } from 'express';
import tokenGenerator from '../passport/token.generator';
import {
  getToken,
  getUserData,
  createUser,
  findUser,
} from '../services/login.service';

const {
  NODE_ENV,
  CLIENT_ID,
  REDIRECT_URL,
  FRONT_URL = '',
  DEPLOY_FRONT_URL = '',
  DEPLOY_REDIRECT_URL = '',
  DEPLOY_CLIENT_ID = '',
} = process.env;

let redirectUri = REDIRECT_URL;
let clientId = CLIENT_ID;
if (NODE_ENV === 'production') {
  redirectUri = DEPLOY_REDIRECT_URL;
  clientId = DEPLOY_CLIENT_ID;
}

const GIT_URL = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`;
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
  try {
    const accessToken = await getToken(code);
    const userData: string = await getUserData(accessToken);
    const parsedUserData = JSON.parse(userData);
    const { login: userName, avatar_url: profileImg } = parsedUserData;

    let user = await findUser(userName);
    if (user === null) {
      await createUser(userName, profileImg);
      user = await findUser(userName);
    }

    const jwt = tokenGenerator({ id: user._id });
    res.cookie('name', user.name, { maxAge: MAX_AGE });
    res.cookie('profileImg', profileImg, { maxAge: MAX_AGE, encode: String });
    res.cookie('userName', userName, { maxAge: MAX_AGE });
    res.cookie('jwt', jwt, { maxAge: MAX_AGE });
    if (NODE_ENV === 'develop') {
      return res.redirect(FRONT_URL);
    }
    return res.redirect(DEPLOY_FRONT_URL);
  } catch (err) {
    return res.status(500).end();
  }
};

export default loginController;
