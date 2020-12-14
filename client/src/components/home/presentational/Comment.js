import React from 'react';
import styled from 'styled-components';
import UserName from '@home/presentational/UserName';
import { Link } from 'react-router-dom';

const style = {};

style.Comment = styled.div`
  display: flex;
  margin-top: 5px;
  word-break: break-all;
`;

style.Content = styled.span`
  font-size: 14px;
  color: #262626;
`;

style.Link = styled(Link)`
  text-decoration: none;
`;

style.CommentContent = styled.div`
  width: auto;
  word-break: break-all;
  margin-left: 16px;
`;

style.UserName = styled.b`
  width: auto;
  font-weight: 600;
  font-size: 14px;
  color: #262626;
`;

const Comment = (input) => {
  const { author, content } = input;
  const { userName } = author;
  const href = `/profile?userName=${userName}`;

  return (
    <style.CommentContent>
      <style.Link to={href}>
        <style.UserName>{author.userName}</style.UserName>
      </style.Link>
      &nbsp;
      <style.Content>{content}</style.Content>
    </style.CommentContent>
  );
};

export default Comment;
