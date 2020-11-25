import FeedModel from '../models/feed.model';

interface callback {
  [key: string]: any;
}
const feedService: callback = {};

interface createParams {
  feedImg: Array<string>;
  content: string;
  location: string;
  tag: string;
  author: string;
}

feedService.create = async (params: createParams) => {
  // todo: return fail/success
  const doc = new FeedModel(params);
  const success = await doc.createFeed();
  if (success) {
    return true;
  }
  return false;
};

export default feedService;
