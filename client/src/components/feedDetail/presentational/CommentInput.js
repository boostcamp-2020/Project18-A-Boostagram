import React from 'react';
import styled from 'styled-components';

const style = {};

style.CommentInput = styled.div`
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.color.border};
  padding: 10px 12px;
`;

style.CommentText = styled.input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
`;

style.SubmitComment = styled.button`
  background: none;
  border: none;
  color: blue;
  font-weight: bold;
  outline: none;
  :disabled {
    cursor: default;
    opacity: 0.3;
  }
`;

const CommentInput = ({ comment, setNewComment, submitHandler }) => {
  const handleChange = (e) => {
    setNewComment(e.target.value);
  };

  return (
    <style.CommentInput>
      <style.CommentText
        placeholder="댓글 달기..."
        value={comment}
        onChange={handleChange}
      />
      <style.SubmitComment disabled={comment === ''} onClick={submitHandler}>
        게시
      </style.SubmitComment>
    </style.CommentInput>
  );
};

export default CommentInput;
