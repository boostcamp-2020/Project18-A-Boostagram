import React from 'react';
import styled from 'styled-components';

const style = {};

style.FeedExploreContainer = styled.div`
  margin: 0 auto;
  border: 1px solid red;
`;

const FeedExploreContainer = () => (
  <style.FeedExploreContainer>
    <div>아무거나</div>
  </style.FeedExploreContainer>
);

export default FeedExploreContainer;
