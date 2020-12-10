import FeedModel from '../models/feed.model';
import UserModel, { IFollow } from '../models/user.model';
import isExists from '../lib/isExists';

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
  const liked = 1;
  const user = new UserModel({ userName: params.userName });
  const userInfo = await user.findUserName();

  if (userInfo.follow !== undefined && userInfo.follow.length > 0) {
    const exist = isExists(userInfo.follow, targetName);
    if (liked === status && exist) {
      return false;
    }
  }
  const target = new UserModel({ userName: targetName });
  const targetInfo = await target.findUserName();
  const targetFollow = {
    userId: targetInfo._id,
    userName: targetInfo.userName,
    name: targetInfo.name ? targetInfo.name : '',
    profileImg: targetInfo.profileImg,
  };
  const result =
    status === liked
      ? await user.createFollow(params, targetFollow)
      : await user.deleteFollow(params, targetFollow);
  return result;
};

export { getProfile, follow };
