import React from 'react';
import styled from 'styled-components';
import FeedCard from './FeedCard';

const style = {};

style.FeedList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FeedList = (input) => {
  const { datas } = input;
  return (
    <style.FeedList>
      {datas.map((data, index) => {
        return <FeedCard data={data} key={index} />;
      })}
    </style.FeedList>
  );
};

export default FeedList;
