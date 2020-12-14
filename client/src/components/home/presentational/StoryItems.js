import React from 'react';
import styled from 'styled-components';

const style = {};

style.StoryItems = styled.div`
  width: 66px;
  height: auto;
  margin-left: 10px;
  padding: 0px 4px;
  cursor: pointer;
`;

style.Item = styled.img`
  width: 66px;
  height: 66px;
  border-radius: 70%;
  overflow: hidden;
`;

style.UserName = styled.div`
  max-width: 61px;
  max-height: 13px;
  color: #262626;
  font-size: 12px;
  overflow: hidden;
  text-align: center;
`;

const StoryItems = (input) => {
  const { profileImg, userName } = input.data;
  const onClick = () => {
    // todo: 모달창
  };
  return (
    <>
      <style.StoryItems>
        <style.Item src={profileImg} onClick={onClick} />
        <style.UserName>{userName}</style.UserName>
      </style.StoryItems>
    </>
  );
};

export default StoryItems;
