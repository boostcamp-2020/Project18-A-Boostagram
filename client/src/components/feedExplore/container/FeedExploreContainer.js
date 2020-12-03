import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FeedList from '@feedExplore/presentational/FeedList';
import pathURL from '@constants/path';

const style = {};

style.FeedExploreContainer = styled.div`
  margin: 0 auto;
`;

const FeedExploreContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = () => {
    const url = pathURL.IP + pathURL.API_EXPLORE;
    const option = {
      mode: 'cors',
      method: 'GET',
    };
    async function fetchUrl() {
      const response = await fetch(url, option);
      const json = await response.json();
      setData(json.reverse());
      setLoading(true);
    }
    useEffect(() => {
      fetchUrl();
    }, []);
  };

  getData();

  if (loading) {
    return (
      <style.FeedExploreContainer>
        <FeedList datas={data} />
      </style.FeedExploreContainer>
    );
  }
  return <>loading...</>;
};

export default FeedExploreContainer;
