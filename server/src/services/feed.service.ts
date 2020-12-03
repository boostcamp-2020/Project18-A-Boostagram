import FeedModel, { IFeed } from '../models/feed.model';
import { IUser } from '../models/user.model';

const create = async (params: IFeed): Promise<boolean> => {
  const feed = new FeedModel(params);
  const result = await feed.createFeed();
  return result;
};

const explore = async (): Promise<IFeed[]> => {
  const feed = new FeedModel();
  const result = feed.exploreFeed();
  return result;
};

const following = async (params: IUser) => {
  const { follow: follows } = params;
  const userFollow: string[] = [];
  follows?.map((follow) => {
    if (follow.userId) {
      userFollow.push(follow.userId.toString());
    }
  });
  const feed = new FeedModel();
  const result = feed.followingFeed(userFollow);
  return result;
};

export { create, explore, following };
