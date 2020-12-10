import React from 'react';
import styled from 'styled-components';
import Comment from '@home/presentational/Comment';

const style = {};

style.Comments = styled.div`
  margin-bottom: 5px;
  margin-top: 5px;
`;

const FeedItemComment = (input) => {
  const { comments } = input;
  return (
    <style.Comments>
      {comments.map((comment, index) => {
        const key = comment._id + Math.random().toString(36);
        if (index < comments.length - 2) {
          return <div key={key} />;
        }
        return (
          <Comment
            author={comment.author}
            content={comment.content}
            key={key}
          />
        );
      })}
    </style.Comments>
  );
};

export default FeedItemComment;
