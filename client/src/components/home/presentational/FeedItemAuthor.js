import React from 'react';
import styled from 'styled-components';
import UserName from '@home/presentational/UserName';
import { Link } from 'react-router-dom';

const style = {};

style.UserInfo = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  cursor: pointer;
`;

style.Link = styled(Link)`
  margin: auto 0;
  text-decoration: none;
`;

style.UserProfileImg = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 16px;
  border-radius: 70%;
  cursor: pointer;
`;

const FeedItemAuthor = (input) => {
  const { author } = input;
  const { userName, profileImg } = author;
  const href = `/profile?userName=${userName}`;

  return (
    <style.UserInfo>
      <style.Link to={href}>
        <style.UserProfileImg src={profileImg} />
      </style.Link>
      <style.Link to={href}>
        <UserName>{userName}</UserName>
      </style.Link>
    </style.UserInfo>
  );
};

export default FeedItemAuthor;
