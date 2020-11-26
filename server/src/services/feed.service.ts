import FeedModel from '../models/feed.model';

interface createParams {
  feedImg: Array<string>;
  content: string;
  location: string;
  tag: string;
  author: string;
}
type feedServiceType = (params: createParams) => Promise<boolean>;
interface callback {
  [key: string]: feedServiceType;
}
const feedService: callback = {};

feedService.create = async (params: createParams) => {
  const doc = new FeedModel(params);
  const success = await doc.createFeed();
  if (success) {
    return true;
  }
  return false;
};

feedService.explore = async () => true;

export default feedService;
