import FeedModel, { IFeed } from '../models/feed.model';

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

export { create, explore };
