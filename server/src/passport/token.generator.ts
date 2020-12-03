import jwt from 'jsonwebtoken';

const makeToken = (payload: any): any => {
  const token = jwt.sign(payload, process.env.JWT_SECRET || '');
  return token;
};

export default makeToken;
