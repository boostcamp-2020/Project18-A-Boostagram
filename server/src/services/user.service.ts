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

const getUncheckedNotiCount = async (
  userName: string,
): Promise<number | undefined> => {
  const user = new UserModel({ userName });
  const userInfo = await user.findUserName();
  const uncheckedNotiList = userInfo.notiContents?.filter(
    (item) => !item.isChecked,
  );
  return uncheckedNotiList?.length;
};

interface InotiEvent {
  type: string;
  from: { name: string; userName: string; profileImg: string };
  to: {
    name: string;
    userName: string;
    profileImg: string;
    userId: string;
  };
  content: string;
}

const upsertNoti = async ({
  type,
  to,
  from,
  content,
}: InotiEvent): Promise<boolean> => {
  const data = {
    to: to.userName,
    notiContent: {
      profileImg: from.profileImg,
      userName: from.userName,
      notiType: type,
      isChecked: false,
      content,
    },
  };
  const user = new UserModel();
  const result = await user.upsertNoti(data);
  return result;
};

export { getProfile, follow, getUncheckedNotiCount, upsertNoti };
