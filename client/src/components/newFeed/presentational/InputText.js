import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const style = {};
style.InputTextContainer = styled.div`
  margin: 50px 0;
`;
style.InputTextHeader = styled.div`
  margin-left: 15px;
  margin-bottom: 10px;
  &:after {
    display: block;
    content: '';
    width: 46px;
    border-bottom: 1px solid ${({ theme }) => theme.color.border};
  }
`;
style.InputText = styled.textarea`
  height: 300px;
  width: 92%;
  margin-bottom: -5px;
  outline: none;
  border: none;
  padding: 8px;
  resize: none;
`;

function InputText(props) {
  const { handleChange, state } = props;
  return (
    <style.InputTextContainer>
      <style.InputTextHeader>Typing</style.InputTextHeader>
      <style.InputText
        onChange={handleChange}
        value={state.textValue}
        name="write"
      />
    </style.InputTextContainer>
  );
}

InputText.propTypes = {
  handleChange: PropTypes.func.isRequired,
  state: PropTypes.shape({
    textValue: PropTypes.string,
  }).isRequired,
};

export default InputText;
