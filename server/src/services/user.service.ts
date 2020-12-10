import FeedModel from '../models/feed.model';
import UserModel, { IFollow } from '../models/user.model';

const getProfile = async (
  userName: string,
  lastFeedId?: string,
): Promise<any> => {
  const user = new UserModel({ userName });
  const userInfo = await user.findUserName();

  const feed = new FeedModel();
  const feeds = await feed.followingFeed([userInfo._id], lastFeedId);

  return { userInfo, feeds };
};

const follow = async (
  params: IFollow,
  targetName: string,
  status: number,
): Promise<boolean> => {
  const user = new UserModel({ userName: targetName });
  const userInfo = await user.findUserName();
  const target = {
    userId: userInfo._id,
    userName: userInfo.userName,
    name: userInfo.name ? userInfo.name : '',
    profileImg: userInfo.profileImg,
  };
  const liked = 1;
  const result =
    status === liked
      ? await user.createFollow(params, target)
      : await user.deleteFollow(params, target);
  return result;
};

export { getProfile, follow };
