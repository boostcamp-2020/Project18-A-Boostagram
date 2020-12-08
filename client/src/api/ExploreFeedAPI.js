import { useEffect } from 'react';
import pathURL from '@constants/path';

const ExploreFeed = (
  data,
  setData,
  loading,
  setLoading,
  modalActive,
  getMore,
) => {
  const url = `${pathURL.IP + pathURL.API_EXPLORE}?lastFeedId=${getMore}`;
  const option = {
    mode: 'cors',
    method: 'GET',
  };
  async function fetchUrl() {
    const response = await fetch(url, option);
    const json = await response.json();
    if (json.length !== 0) {
      if (data.length === json.length && data[0] !== json[0]) {
        setData([json[0], ...data]);
      } else {
        setData([...data, ...json]);
      }
    }
  }
  useEffect(() => {
    if (!modalActive) fetchUrl();
    if (!loading) setLoading(true);
  }, [modalActive, getMore]);
};

export default ExploreFeed;
