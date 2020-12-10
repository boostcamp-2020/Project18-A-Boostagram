import React from 'react';
import styled from 'styled-components';
import Story from '@home/presentational/Story';
import Feed from '@home/presentational/Feed';
import icon from '@constants/icon';

const style = {};

style.Contents = styled.div`
  flex: 2;
  min-width: 614px;
  max-width: 614px;
`;

style.GuideMessage = styled.div`
  display: flex;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  background: #ffffff;
  padding: 10px;
  align-content: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const Contents = (input) => {
  const { data, setGetMore } = input;
  return (
    <style.Contents>
      <Story datas={data} />
      <Feed data={data} setGetMore={setGetMore} />
      {data.length === 0 ? (
        <>
          <style.GuideMessage>
            <icon.Home />
            &nbsp; 홈 화면에서는 팔로우한 사용자들의 글을 볼 수 있어요!
          </style.GuideMessage>
          <style.GuideMessage>
            <icon.Explore />
            &nbsp; 오른쪽 위 나침반 모양을 눌러 다른 사람들의 글을 읽어보세요!
          </style.GuideMessage>
        </>
      ) : (
        <></>
      )}
    </style.Contents>
  );
};

export default Contents;
