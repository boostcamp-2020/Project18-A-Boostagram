import React from 'react';
import styled from 'styled-components';
import UserName from '@home/presentational/UserName';
import { Link } from 'react-router-dom';

const style = {};

style.Comment = styled.div`
  display: flex;
  margin-top: 5px;
`;

style.Content = styled.div`
  margin-left: 5px;
  font-size: 14px;
  color: #262626;
  text-overflow: ellipsis;
`;

style.Link = styled(Link)`
  text-decoration: none;
`;

const Comment = (input) => {
  const { author, content } = input;
  const { userName } = author;
  const href = `/profile?userName=${userName}`;

  return (
    <style.Comment>
      <style.Link to={href}>
        <UserName>{userName}</UserName>
      </style.Link>
      <style.Content>{content}</style.Content>
    </style.Comment>
  );
};

export default Comment;
