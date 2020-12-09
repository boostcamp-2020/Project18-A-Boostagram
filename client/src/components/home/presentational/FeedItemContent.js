import React, { useState } from 'react';
import styled from 'styled-components';
import Comment from '@home/presentational/Comment';
import FeedItemComment from '@home/presentational/FeedItemComment';
import excuteTime from '@utils/excuteTIme';

const style = {};

style.MoreComent = styled.div`
  display: ${(props) => (props.commentLength > 2 ? 'block' : 'none')};
  cursor: pointer;
  color: #8e8e8e;
  font-size: 14px;
  margin-left: 16px;
  margin-top: 5px;
`;

style.Time = styled.div`
  margin-left: 16px;
  margin-bottom: 5px;
  font-size: 10px;
  color: #8e8e8e;
`;

const getCommentLength = (comments) => {
  return comments.length;
};
const FeedItemContent = (input) => {
  const { author, content, createdAt, comments } = input;
  const moreCommentMessage = `댓글 ${getCommentLength(comments)}개 모두 보기`;
  return (
    <>
      <Comment author={author} content={content} />
      <style.MoreComent commentLength={getCommentLength(comments)}>
        {moreCommentMessage}
      </style.MoreComent>
      <FeedItemComment comments={comments} />
      <style.Time>{excuteTime(createdAt)}</style.Time>
    </>
  );
};

export default FeedItemContent;
