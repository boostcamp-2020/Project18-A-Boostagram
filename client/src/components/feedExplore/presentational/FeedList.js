import React from 'react';
import styled from 'styled-components';
import FeedCard from './FeedCard';

const style = {};

style.FeedList = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
`;

const FeedList = (input) => {
  const { datas } = input;
  return (
    <style.FeedList>
      {datas.map((data) => {
        return <FeedCard data={data} key={data._id} />;
      })}
    </style.FeedList>
  );
};

export default FeedList;
