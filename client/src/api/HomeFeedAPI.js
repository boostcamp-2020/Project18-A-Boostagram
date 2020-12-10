import { useEffect } from 'react';
import pathURL from '@constants/path';

const getData = (data, setData, loading, setLoading, login, getMore) => {
  const url = `${
    pathURL.IP + pathURL.API_HOME_FEED + login.userName
  }?lastFeedId=${getMore}`;
  const option = {
    mode: 'cors',
    method: 'GET',
  };
  async function fetchUrl() {
    const response = await fetch(url, option);
    const json = await response.json();
    setData([...data, ...json]);
    if (!loading) setLoading(true);
  }
  useEffect(() => {
    fetchUrl();
  }, [getMore]);
};

export default getData;
