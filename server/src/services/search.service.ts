import UserModel, { UserNames } from '../models/user.model';

const getUsers = async (userName: string): Promise<UserNames> => {
  const user = new UserModel({ userName });
  const userNames = await user.findUserSuggest();
  return userNames;
};

export default getUsers;
