import FeedModel, { Icomment } from '../models/feed.model';

const create = async (params: Icomment): Promise<boolean> => {
  const feed = new FeedModel();
  const result = await feed.createComment(params);
  return result;
};

export default create;
