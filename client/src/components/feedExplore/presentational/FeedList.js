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
  const { datas, setGetMore } = input;
  return (
    <style.FeedList>
      {datas.map((data, index) => {
        const isLastItem = datas.length === index + 1;
        const key = `${index}-${data._id}`;
        if (isLastItem) {
          return (
            <FeedCard
              data={data}
              key={key}
              isLastItem
              setGetMore={setGetMore}
            />
          );
        }
        return <FeedCard data={data} key={key} />;
      })}
    </style.FeedList>
  );
};

export default FeedList;
