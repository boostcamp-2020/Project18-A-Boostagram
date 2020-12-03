import React from 'react';
import styled from 'styled-components';
// import dummy from '@feedExplore/dummy';
import FeedItem from '@home/presentational/FeedItem';

const style = {};

style.Feed = styled.div``;

const Feed = (input) => {
  const { data: dummy } = input;
  return (
    <style.Feed>
      {dummy.map((data) => {
        return <FeedItem key={data._ID} data={data} />;
      })}
    </style.Feed>
  );
};

export default Feed;
