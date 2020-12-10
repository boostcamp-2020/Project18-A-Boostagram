import { useRef, useEffect } from 'react';
import pathURL from '@constants/path';

const ExploreFeed = (
  data,
  setData,
  loading,
  setLoading,
  modalActive,
  getMore,
) => {
  const option = {
    mode: 'cors',
    method: 'GET',
  };
  const isMounted = useRef(false);

  async function fetchLoadData() {
    const url = `${pathURL.IP + pathURL.API_EXPLORE}?lastFeedId=${getMore}`;
    const response = await fetch(url, option);
    const json = await response.json();
    setData([...data, ...json]);
  }

  async function fetchNewFeedCheck() {
    const url = `${pathURL.IP + pathURL.API_EXPLORE}?lastFeedId=noId`;
    const response = await fetch(url, option);
    const json = await response.json();
    if (json.length > 0 && json[0]._id !== data[0]._id)
      setData([json[0], ...data]);
  }

  useEffect(() => {
    fetchLoadData();
    if (!loading) setLoading(true);
  }, [getMore]);

  useEffect(() => {
    if (isMounted.current) {
      if (!modalActive) fetchNewFeedCheck();
      if (!loading) setLoading(true);
    } else {
      isMounted.current = true;
    }
  }, [modalActive]);
};

export default ExploreFeed;
