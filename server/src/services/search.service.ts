import UserModel, { ISearch } from '../models/user.model';

const getUsers = async (userName: string): Promise<ISearch> => {
  const user = new UserModel({ userName });
  const usersInfo = await user.findUserSuggest();
  return usersInfo;
};

export default getUsers;
