import React from 'react';
import styled from 'styled-components';

const style = {};

style.InputComment = styled.div`
  display: flex;
`;

style.TextArea = styled.textarea`
  flex: 1;
  margin: auto 0;
  margin-left: 16px;
  margin-right: 10px;
  border: 0;
  outline: none;
  resize: none;
`;

style.CommentSubmit = styled.button`
  opacity: 1;
  background: none;
  border: none;
  cursor: pointer;
  color: #0095f6;
  font-size: 14px;
  font-weight: 600;
  margin: auto 0;
  margin-left: auto;
  margin-right: 15px;
  :disabled {
    cursor: default;
    opacity: 0.3;
  }
`;

const FeedItemInput = (input) => {
  const { feedComment, setFeedComment, CommentSubmitHandler } = input;
  return (
    <style.InputComment>
      <style.TextArea
        placeholder="댓글 달기..."
        onChange={setFeedComment}
        value={feedComment}
      />
      <style.CommentSubmit
        type="submit"
        onClick={CommentSubmitHandler}
        disabled={feedComment === ''}
      >
        게시
      </style.CommentSubmit>
    </style.InputComment>
  );
};

export default FeedItemInput;
