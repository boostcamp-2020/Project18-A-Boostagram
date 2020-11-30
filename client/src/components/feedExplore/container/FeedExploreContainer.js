import React from 'react';
import styled from 'styled-components';
import FeedList from '@feedExplore/presentational/FeedList';
import dummy from '../dummy';

const style = {};

style.FeedExploreContainer = styled.div`
  margin: 0 auto;
`;

const FeedExploreContainer = () => (
  <style.FeedExploreContainer>
    <FeedList datas={dummy} />
  </style.FeedExploreContainer>
);

export default FeedExploreContainer;
