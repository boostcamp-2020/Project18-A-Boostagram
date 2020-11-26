import React from 'react';
import styled from 'styled-components';
import FeedList from '@feedExplore/presentational/FeedList';

const style = {};

style.FeedExploreContainer = styled.div`
  margin: 0 auto;
  border: 1px solid red;
`;

const dummy = [];

const FeedExploreContainer = () => (
  <style.FeedExploreContainer>
    <FeedList datas={dummy} />
  </style.FeedExploreContainer>
);

export default FeedExploreContainer;
