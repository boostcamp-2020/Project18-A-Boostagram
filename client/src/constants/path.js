const common = {
  HOME: '/',
  LOGIN: '/login',
  NEWFEED: '/newFeed',
  API_NEWFEED: '/feed',
  EXPLORE: '/explore',
  IMG_UPLOAD: '/image',
  PROFILE: '/profile',
  API_DETAIL_FEED: '/feed/detail',
  API_HOME_FEED: '/feed/following/',
  API_PROFILE: '/user/profile/',
  API_EXPLORE: '/feed/explore',
  API_COMMENT: '/comment/',
  API_LIKE: '/feed/like/',
  API_SEARCH_USERS: '/search/users/',
  API_FOLLOW: '/user/follow/',
};

let IP = 'http://localhost:3000';
if (process.env.NODE_ENV === 'production') {
  IP = 'http://118.67.128.232:3000';
}

const pathURI = {
  ...common,
  IP,
};

export default pathURI;
