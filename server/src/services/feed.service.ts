import feedModel from '../models/feed.model';

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

feedService.create = (params: createParams) => {
  // todo: return fail/success
  feedModel.create(params);
};

export default feedService;
