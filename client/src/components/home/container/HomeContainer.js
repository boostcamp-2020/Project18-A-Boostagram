import React from 'react';
import styled from 'styled-components';
import Side from '@home/presentational/Side';
import Contents from '@home/presentational/Contents';

const style = {};

style.HomeContainer = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  margin-top: 30px;
`;
const HomeContainer = () => {
  return (
    <style.HomeContainer>
      <Contents />
      <Side />
    </style.HomeContainer>
  );
};

export default HomeContainer;
