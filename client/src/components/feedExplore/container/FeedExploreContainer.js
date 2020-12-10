import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import FeedList from '@feedExplore/presentational/FeedList';
import ModalContext from '@context/modal';
import ExploreFeedAPI from '@api/ExploreFeedAPI';

const style = {};

style.FeedExploreContainer = styled.div`
  margin: 0 auto;
`;

const FeedExploreContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getMore, setGetMore] = useState('noId');
  const { modalActive } = useContext(ModalContext);

  ExploreFeedAPI(data, setData, loading, setLoading, modalActive, getMore);

  if (loading) {
    return (
      <style.FeedExploreContainer>
        <FeedList datas={data} setGetMore={setGetMore} />
      </style.FeedExploreContainer>
    );
  }
  return <>loading...</>;
};

export default FeedExploreContainer;
