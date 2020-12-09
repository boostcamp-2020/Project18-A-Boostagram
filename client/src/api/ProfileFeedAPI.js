import { useEffect } from 'react';
import pathURL from '@constants/path';

const getData = (
  setData,
  loading,
  setLoading,
  getMore,
  userName,
  preUserName,
  feeds,
  setFeeds,
  isMounted,
  modalActive,
) => {
  const option = {
    mode: 'cors',
    method: 'GET',
  };

  async function fetchLoadData() {
    const url = `${
      pathURL.IP + pathURL.API_PROFILE + userName
    }?lastFeedId=${getMore}`;
    const response = await fetch(url, option);
    const json = await response.json();
    setData(json);
    setFeeds([...feeds, ...json.feeds]);
  }

  async function fetchNewFeedCheck(isNewUser) {
    const url = `${
      pathURL.IP + pathURL.API_PROFILE + userName
    }?lastFeedId=noId`;
    const response = await fetch(url, option);
    const json = await response.json();
    if (isNewUser) {
      setData(json);
      setFeeds(json.feeds);
    } else if (json.feeds.length > 0 && json.feeds[0]._id !== feeds[0]._id) {
      setData(json);
      setFeeds([json.feeds[0], ...feeds]);
    }
  }

  useEffect(() => {
    fetchLoadData();
    if (!loading) setLoading(true);
  }, [getMore]);

  useEffect(() => {
    if (isMounted.current) {
      fetchNewFeedCheck(false);
    }
  }, [modalActive]);

  useEffect(() => {
    if (isMounted.current) {
      fetchNewFeedCheck(true);
    } else {
      isMounted.current = true;
    }
  }, [preUserName]);
};

export default getData;
