import FeedModel, { IFeed, Iauthor } from '../models/feed.model';
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

const following = async (params: IUser): Promise<IFeed[]> => {
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
