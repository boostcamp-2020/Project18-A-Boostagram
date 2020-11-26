import React, { useState } from 'react';
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

style.iconImg = styled.img`
  height: 15px;
  width: 15px;
  margin: auto 0;
`;

style.number = styled.div`
  margin: auto 0;
`;

style.ImgBox = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  opacity: ${(props) => (props.hover ? 0.3 : 1)};
`;

style.icon = styled.div`
  opacity: ${(props) => {
    console.log(props);
    return props.hover ? 1 : 0;
  }};
  display: flex;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const FeedCard = (input) => {
  const { feedImg, like, comments } = input.data;
  const [hover, setHover] = useState(false);
  const likeIcon =
    'https://user-images.githubusercontent.com/39620410/100316277-82a4c580-2ffd-11eb-8f22-704e6cb6d29f.png';
  const likeNum = like.length;
  const commentIcon =
    'https://user-images.githubusercontent.com/39620410/100316277-82a4c580-2ffd-11eb-8f22-704e6cb6d29f.png';
  const commentNum = comments.length;

  const hoverHandler = () => {
    setHover(!hover);
  };

  const clickHandler = () => {
    // todo: 상세 화면 출력
  };
  return (
    <>
      <style.FeedCard
        onMouseEnter={hoverHandler}
        onMouseLeave={hoverHandler}
        onClick={clickHandler}
      >
        <style.ImgBox src={feedImg[0]} hover={hover} />
        <style.icon hover={hover}>
          <style.iconImg src={likeIcon} />
          <style.number>{likeNum}</style.number>
          <style.iconImg src={commentIcon} />
          <style.number>{commentNum}</style.number>
        </style.icon>
      </style.FeedCard>
    </>
  );
};

export default FeedCard;
