import React from 'react';
import styled from 'styled-components';

const style = {};

style.StoryItems = styled.div`
  min-width: 66px;
  max-width: 66px;
  height: auto;
  margin-left: 10px;
  padding: 0px 4px;
  cursor: pointer;
`;

style.Item = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 70%;
`;

const StoryItems = (input) => {
  const { author } = input.data;
  const onClick = () => {
    // todo: 모달창
  };
  return (
    <>
      <style.StoryItems>
        <style.Item src={author.profileImg} onClick={onClick} />
      </style.StoryItems>
    </>
  );
};

export default StoryItems;
