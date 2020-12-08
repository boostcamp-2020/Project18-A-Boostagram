import FeedModel, { IFeed, Iauthor } from '../models/feed.model';
import { IUser } from '../models/user.model';

const create = async (params: IFeed): Promise<boolean> => {
  const feed = new FeedModel(params);
  const result = await feed.createFeed();
  return result;
};

const explore = async (lastFeedId: string): Promise<IFeed[]> => {
  const feed = new FeedModel();
  const result = feed.exploreFeed(lastFeedId);
  return result;
};

const following = async (
  params: IUser,
  lastFeedId?: string,
): Promise<IFeed[]> => {
  const { follow: follows } = params;

  const userFollow: string[] = [];
  follows?.map((follow) => {
    if (follow.userId) {
      userFollow.push(follow.userId.toString());
    }
    return follow;
  });
  const feed = new FeedModel();
  const result = await feed.followingFeed(userFollow, lastFeedId);
  return result;
};

const like = async (
  author: Iauthor,
  feedId: string,
  status: number,
): Promise<boolean> => {
  const feed = new FeedModel();
  const result =
    status === 1
      ? await feed.addLike(author, feedId)
      : await feed.deleteLike(author, feedId);
  return result;
};

export { create, explore, following, like };
