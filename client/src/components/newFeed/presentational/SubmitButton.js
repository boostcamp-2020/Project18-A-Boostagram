import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const style = {};
style.SubmitContainer = styled.div`
  margin: 16px 12px;
`;
style.SubmitButton = styled.button`
  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 30%;
        `
      : css`
          &:hover {
            cursor: pointer;
          }
        `};
  border: none;
  outline: none;
  color: ${({ theme }) => theme.color.blue};
  background-color: inherit;
  height: 30px;
  font-size: 15px;
  float: right;
`;
const SubmitButton = (props) => {
  const { handleSubmit, feedImgs } = props;
  return (
    <style.SubmitContainer>
      <style.SubmitButton
        onClick={handleSubmit}
        disabled={feedImgs.length === 0}
      >
        게시
      </style.SubmitButton>
    </style.SubmitContainer>
  );
};

SubmitButton.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  feedImgs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SubmitButton;
