import React, { useContext, useState, lazy, Suspense } from 'react';
import styled from 'styled-components';
import icon from '@constants/icon';
import ModalContext from '@context/modal';
import IntersectionHook from '@hooks/Intersection';
import GetOneFeedAPI from '@api/GetOneFeedAPI';
import ReactLoading from 'react-loading';

const MINIMUN_LOAD_DELAY = 700;

const LazyImage = lazy(() => {
  return Promise.all([
    import('./LazyImage'),
    new Promise((resolve) => setTimeout(resolve, MINIMUN_LOAD_DELAY)),
  ]).then(([moduleExports]) => moduleExports);
});
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

style.IconContent = styled.div`
  display: flex;
  margin: 0 auto;
`;

style.LoadingBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0;
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

  const loading = (
    <style.LoadingBox>
      <ReactLoading type="bubbles" color="#586069" height="40px" width="40px" />
    </style.LoadingBox>
  );
  const jsx = (
    <>
      <Suspense fallback={loading}>
        <LazyImage src={feedImg[0]} hover={hover} />
      </Suspense>
      <style.Icon hover={hover}>
        <style.IconContent>
          <style.Hovercontent>
            <icon.Noti />
            <style.Number>{likeNum}</style.Number>
          </style.Hovercontent>
          <style.Hovercontent>
            <icon.Comment />
            <style.Number>{commentNum}</style.Number>
          </style.Hovercontent>
        </style.IconContent>
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
