import pathURL from '@constants/path';

const GetOneFeedAPI = (feedId) => {
  return fetch(`${pathURL.IP + pathURL.API_NEWFEED}/${feedId}`).then((res) =>
    res.json(),
  );
};

export default GetOneFeedAPI;
