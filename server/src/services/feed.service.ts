import FeedModel, { IFeed } from '../models/feed.model';

interface IcreateParam {
  author?: Record<string, unknown>;
  content?: string;
  location?: string;
  like?: [];
  feedImg?: [];
  comments?: [];
}

const create = async (params: IcreateParam): Promise<boolean> => {
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
