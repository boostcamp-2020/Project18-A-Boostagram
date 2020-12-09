import React from 'react';
import styled from 'styled-components';

const style = {};

style.CommentItem = styled.div`
  display: flex;
  font-size: 14px;
  padding: 20px;
`;

style.AuthorProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  overflow: hidden;
  margin-right: 14px;
`;

style.CommentContent = styled.div`
  flex: 1;
`;

const CommentItem = ({ comment }) => {
  console.log(comment);

  return (
    <CommentItem>
      <style.AuthorProfileImg src={comment.author.profileImg} />
      <style.CommentContent>
        <b>{comment.author.userName}</b>
        &nbsp;
        {comment.content}
      </style.CommentContent>
    </CommentItem>
  );
};

export default CommentItem;
