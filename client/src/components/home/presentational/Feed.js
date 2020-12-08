import React from 'react';
import styled from 'styled-components';
import FeedItem from '@home/presentational/FeedItem';

const style = {};

style.Feed = styled.div``;

const Feed = (input) => {
  const { data: datas } = input;

  return (
    <style.Feed>
      {datas.map((data, index) => {
        const isLastItem = datas.length === index + 1;
        if (isLastItem) {
          return <FeedItem key={data._id} data={data} isLastItem />;
        }
        return <FeedItem key={data._id} data={data} />;
      })}
    </style.Feed>
  );
};

export default Feed;
