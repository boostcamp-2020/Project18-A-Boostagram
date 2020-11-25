import React from 'react';
import styled from 'styled-components';

const style = {};

style.NewFeedContainer = styled.div`
  background-color: gray;
`;

const NewFeedContainer = () => (
  <style.NewFeedContainer>
    <div>아무거나</div>
  </style.NewFeedContainer>
);

export default NewFeedContainer;
