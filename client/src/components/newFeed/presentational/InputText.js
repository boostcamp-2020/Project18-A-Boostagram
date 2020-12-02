import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const style = {};
style.InputTextContainer = styled.textarea`
  height: 300px;
  width: 100%;
  margin-bottom: -5px;
  outline: none;
  border: none;
  padding: 8px;
`;

function InputText(props) {
  const { handleChange, state } = props;
  return (
    <>
      <style.InputTextContainer
        onChange={handleChange}
        value={state.textValue}
        name="write"
      />
    </>
  );
}

InputText.propTypes = {
  handleChange: PropTypes.func.isRequired,
  state: PropTypes.shape({
    textValue: PropTypes.string,
  }).isRequired,
};

export default InputText;
