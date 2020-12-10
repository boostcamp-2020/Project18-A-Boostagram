import FeedModel from '../models/feed.model';
import UserModel from '../models/user.model';

const getProfile = async (userName: string): Promise<any> => {
  const user = new UserModel({ userName });
  const userInfo = await user.findUserName();

  const feed = new FeedModel();
  const feeds = await feed.followingFeed([userInfo._id]);

  return { userInfo, feeds };
};

export default getProfile;
