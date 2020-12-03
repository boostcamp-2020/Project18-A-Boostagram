import FeedModel, { IFeed } from '../models/feed.model';
import UserModel, { IUser } from '../models/user.model';

const getProfile = async (userId: string): Promise<any> => {
  const user = new UserModel({ userId });
  const userInfo = await user.findUserById();

  const feed = new FeedModel();
  const feeds = await feed.followingFeed([userId]);

  return { userInfo, feeds };
};

export default getProfile;
