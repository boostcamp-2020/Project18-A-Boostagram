import FeedModel, { IFeed, Iauthor } from '../models/feed.model';
import { IUser } from '../models/user.model';

const create = async (params: IFeed): Promise<boolean | undefined> => {
  const feed = new FeedModel(params);
  try {
    const result = await feed.createFeed();
    return result;
  } catch (err) {
    return undefined;
  }
};

const explore = async (lastFeedId: string): Promise<IFeed[] | undefined> => {
  const feed = new FeedModel();
  try {
    const result = await feed.exploreFeed(lastFeedId);
    return result;
  } catch (err) {
    return undefined;
  }
};

const following = async (
  params: IUser,
  lastFeedId?: string,
): Promise<IFeed[] | undefined> => {
  const { follow: follows } = params;

  const userFollow: string[] = [];
  follows?.map((follow) => {
    if (follow.userId) {
      userFollow.push(follow.userId.toString());
    }
    return follow;
  });
  const feed = new FeedModel();
  try {
    const result = await feed.followingFeed(userFollow, lastFeedId);
    return result;
  } catch (err) {
    return undefined;
  }
};

const like = async (
  author: Iauthor,
  feedId: string,
  status: number,
): Promise<boolean | undefined> => {
  const feed = new FeedModel();
  try {
    const result =
      status === 1
        ? await feed.addLike(author, feedId)
        : await feed.deleteLike(author, feedId);
    return result;
  } catch (err) {
    return undefined;
  }
};

export { create, explore, following, like };
