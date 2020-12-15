import React, { useContext, useState, lazy, Suspense } from 'react';
import styled from 'styled-components';
import icon from '@constants/icon';
import ModalContext from '@context/modal';
import IntersectionHook from '@hooks/Intersection';
import GetOneFeedAPI from '@api/GetOneFeedAPI';

const LazyImage = lazy(() => import('./LazyImage'));
const style = {};

style.FeedCard = styled.article`
  height: 292.99px;
  width: 292.99px;
  margin-top: 28.01px;
  margin-right: 14px;
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

style.IconImg = styled.img`
  height: 15px;
  width: 15px;
  margin: auto 0;
`;

style.Number = styled.div`
  margin-left: 10px;
`;

style.ImgBox = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  opacity: ${(props) => (props.hover ? 0.3 : 1)};
  object-fit: cover;
`;

style.Icon = styled.div`
  opacity: ${(props) => (props.hover ? 1 : 0)};
  display: flex;
  text-align: center;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  margin: 0 auto;
`;

style.Hovercontent = styled.div`
  display: flex;
  margin: auto 0;
  margin-left: 20px;
`;

style.test = styled.div`
  display: flex;
  margin: 0 auto;
`;

const FeedCard = (input) => {
  const { data, isLastItem, setGetMore } = input;
  const { feedImg, like, comments } = data;
  const [hover, setHover] = useState(false);
  const [target, setTarget] = useState(null);
  const likeNum = like.length;
  const commentNum = comments.length;

  const { handleDetailModal, selectFeed } = useContext(ModalContext);

  const hoverHandler = () => {
    setHover(!hover);
  };

  const clickHandler = async () => {
    const newImgData = await GetOneFeedAPI(data._id);
    selectFeed(newImgData);
    handleDetailModal();
  };

  IntersectionHook(isLastItem, target, data._id, setGetMore);

  const jsx = (
    <>
      <Suspense fallback={<div>...loading</div>}>
        <LazyImage src={feedImg[0]} hover={hover} />
      </Suspense>
      <style.Icon hover={hover}>
        <style.test>
          <style.Hovercontent>
            <icon.Noti />
            <style.Number>{likeNum}</style.Number>
          </style.Hovercontent>
          <style.Hovercontent>
            <icon.Comment />
            <style.Number>{commentNum}</style.Number>
          </style.Hovercontent>
        </style.test>
      </style.Icon>
    </>
  );
  return (
    <>
      {isLastItem ? (
        <style.FeedCard
          onMouseEnter={hoverHandler}
          onMouseLeave={hoverHandler}
          onClick={clickHandler}
          ref={setTarget}
        >
          {jsx}
        </style.FeedCard>
      ) : (
        <style.FeedCard
          onMouseEnter={hoverHandler}
          onMouseLeave={hoverHandler}
          onClick={clickHandler}
        >
          {jsx}
        </style.FeedCard>
      )}
    </>
  );
};

export default FeedCard;
