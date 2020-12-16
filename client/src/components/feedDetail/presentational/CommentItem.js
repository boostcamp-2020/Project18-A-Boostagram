import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import excuteTime from '@utils/excuteTime';

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
style.Content = styled.div``;
style.CreateTime = styled.div`
  font-size: 12px;
  color: #8e8e8e;
`;
const CommentItem = ({ comment }) => {
  const userProfileURL = `/profile?userName=${comment.author.userName}`;
  return (
    <style.CommentItem>
      <Link to={userProfileURL}>
        <style.AuthorProfileImg src={comment.author.profileImg} />
      </Link>
      <style.Content>
        <style.CommentContent>
          <style.Link to={userProfileURL}>
            <b>{comment.author.userName}</b>
          </style.Link>
          &nbsp;
          {comment.content}
        </style.CommentContent>
        <style.CreateTime>{excuteTime(comment.createdAt)}</style.CreateTime>
      </style.Content>
    </style.CommentItem>
  );
};

export default CommentItem;
