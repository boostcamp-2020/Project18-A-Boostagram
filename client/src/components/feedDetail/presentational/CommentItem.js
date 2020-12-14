import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const style = {};

style.CommentItem = styled.div`
  display: flex;
  font-size: 14px;
  padding: 0 20px 20px 20px;
`;

style.AuthorProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  overflow: hidden;
  margin-right: 14px;
`;

style.CommentContent = styled.div`
  width: 200px;
  word-break: break-all;
`;

style.Link = styled(Link)`
  text-decoration: none;
  color: #262626;
`;

const CommentItem = ({ comment }) => {
  const userProfileURL = `/profile?userName=${comment.author.userName}`;
  return (
    <style.CommentItem>
      <Link to={userProfileURL}>
        <style.AuthorProfileImg src={comment.author.profileImg} />
      </Link>
      <style.CommentContent>
        <style.Link to={userProfileURL}>
          <b>{comment.author.userName}</b>
        </style.Link>
        &nbsp;
        {comment.content}
      </style.CommentContent>
    </style.CommentItem>
  );
};

export default CommentItem;
