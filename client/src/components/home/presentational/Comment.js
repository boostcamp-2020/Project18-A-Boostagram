import React from 'react';
import styled from 'styled-components';
import UserName from '@home/presentational/UserName';

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

const Comment = (input) => {
  const { author, content } = input;
  return (
    <style.Comment>
      <UserName>{author.userName}</UserName>
      <style.Content>{content}</style.Content>
    </style.Comment>
  );
};

export default Comment;
