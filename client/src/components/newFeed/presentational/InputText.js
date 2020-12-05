import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const style = {};
style.InputTextContainer = styled.div`
  height: 374px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
`;
style.InputText = styled.textarea`
  height: 94%;
  width: 91%;
  border: none;
  outline: none;
  padding: 8px 16px;
  resize: none;
`;

function InputText(props) {
  const { handleChange, state } = props;
  return (
    <style.InputTextContainer>
      <style.InputText
        onChange={handleChange}
        value={state.textValue}
        name="write"
        placeholder="Typing Here..."
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
