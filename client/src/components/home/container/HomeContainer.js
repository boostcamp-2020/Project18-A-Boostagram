import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Side from '@home/presentational/Side';
import Contents from '@home/presentational/Contents';
import UserContext from '@context/user';
import HomeFeedAPI from '@api/HomeFeedAPI';

const style = {};

style.HomeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-top: 30px;
`;
const HomeContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getMore, setGetMore] = useState('noId');
  const { login } = useContext(UserContext);

  HomeFeedAPI(data, setData, loading, setLoading, login, getMore);

  if (loading) {
    return (
      <style.HomeContainer>
        <Contents data={data} setGetMore={setGetMore} />
        <Side />
      </style.HomeContainer>
    );
  }
  return <>loading...</>;
};

export default HomeContainer;
