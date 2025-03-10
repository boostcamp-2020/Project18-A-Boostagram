import dotenv from 'dotenv';
import request from 'request';
import UserModel from '../models/user.model';

dotenv.config();

const {
  NODE_ENV,
  CLIENT_ID,
  CLIENT_SECRET,
  DEPLOY_CLIENT_ID,
  DEPLOY_CLIENT_SECRET,
} = process.env;
const TOKEN_URL = 'https://github.com/login/oauth/access_token';
const USER_URL = 'https://api.github.com/user';

let clientId = CLIENT_ID;
let clientSecret = CLIENT_SECRET;
if (NODE_ENV === 'production') {
  clientId = DEPLOY_CLIENT_ID;
  clientSecret = DEPLOY_CLIENT_SECRET;
}
export const getToken = (code: any): any => {
  const options = {
    uri: TOKEN_URL,
    method: 'POST',
    body: {
      code,
      client_id: clientId,
      client_secret: clientSecret,
    },
    json: true,
  };
  return new Promise((resolve, reject) =>
    request.post(options, (err, res, body) => {
      if (err || body.error === 'Not Found') {
        reject(new Error('fail get token'));
      }
      resolve(body.access_token);
    }),
  );
};

export const getUserData = (accessToken: string): Promise<string> => {
  const options = {
    headers: {
      Authorization: `token ${accessToken}`,
      'user-agent': 'node.js',
    },
  };
  return new Promise((resolve, reject) => {
    request.get(USER_URL, options, (err, res, body) => resolve(body));
  });
};

export const createUser = async (
  userName: string,
  profileImg: string,
): Promise<any> => {
  const user = new UserModel({ userName, profileImg });
  const result = await user.createUser();
  return result;
};

export const findUser = async (userName: string): Promise<any> => {
  const user = new UserModel({ userName });
  const result = await user.findUserName();
  return result;
};
