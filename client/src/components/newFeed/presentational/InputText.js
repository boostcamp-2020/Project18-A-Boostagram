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
`;

function InputText(props) {
  const { handleChange, state } = props;
  return (
    <>
      <style.InputTextContainer
        onChange={handleChange}
        value={state.textOrigin}
        name="text"
      />
    </>
  );
}

InputText.propTypes = {
  handleChange: PropTypes.func.isRequired,
  state: PropTypes.shape({
    textOrigin: PropTypes.string,
    textResult: PropTypes.string,
  }).isRequired,
};

export default InputText;
