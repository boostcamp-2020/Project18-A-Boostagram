import React from 'react';
import styled from 'styled-components';

const style = {};

style.FeedCard = styled.article`
  height: 292.99px;
  width: 292.99px;
  margin-top: 28.01px;
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

style.ImgBox = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  opacity: 1;
`;

const FeedCard = (input) => {
  const { imgUrl } = input.data;

  return (
    <>
      <style.FeedCard>
        <style.ImgBox src={imgUrl[0]} />
      </style.FeedCard>
    </>
  );
};

export default FeedCard;
