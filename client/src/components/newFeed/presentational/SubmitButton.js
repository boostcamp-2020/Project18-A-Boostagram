import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const style = {};
style.SubmitContainer = styled.div`
  border: none !important;
`;
style.SubmitButton = styled.button`
  outline: none;
  margin: 30px 18px;
  border: none;
  color: white;
  background-color: ${(props) => props.theme.color.green};
  width: 100px;
  height: 30px;
  border-radius: 5px;
  float: right;
  &:hover {
    background-color: ${(props) => props.theme.color.deepGreen};
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
