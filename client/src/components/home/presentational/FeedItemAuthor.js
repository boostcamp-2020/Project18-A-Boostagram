import React from 'react';
import styled from 'styled-components';
import UserName from '@home/presentational/UserName';

const style = {};

style.UserInfo = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
`;

style.UserProfileImg = styled.img`
  width: 32px;
  height: 32px;
  margin: auto 0;
  margin-left: 16px;
  border-radius: 70%;
  cursor: pointer;
`;

const FeedItemAuthor = (input) => {
  const { author } = input;
  return (
    <style.UserInfo>
      <style.UserProfileImg src={author.profileImg} />
      <UserName>{author.userName}</UserName>
    </style.UserInfo>
  );
};

export default FeedItemAuthor;
