import { IFollow } from '../models/user.model';

const isExists = (follow: Array<IFollow>, target: string) => {
  const result = follow.find((el: IFollow) => {
    return el.userName === target;
  });
  return result !== undefined;
};

export default isExists;
