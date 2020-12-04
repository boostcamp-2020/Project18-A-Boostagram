import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const style = {};
style.SubmitContainer = styled.div`
  border: none !important;
  margin: 30px;
`;
style.SubmitButton = styled.button`
  outline: none;
  margin-right: 26px;
  border: none;
  color: white;
  background-color: ${(props) => props.theme.color.green};
  width: 100px;
  height: 30px;
  border-radius: 5px;
  float: right;
  &:hover {
    background-color: ${(props) => props.theme.color.deepGreen};
    cursor: pointer;
  }
`;
const SubmitButton = (props) => {
  const { handleSubmit } = props;
  return (
    <style.SubmitContainer>
      <style.SubmitButton onClick={handleSubmit}>Submit</style.SubmitButton>
    </style.SubmitContainer>
  );
};

SubmitButton.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SubmitButton;
