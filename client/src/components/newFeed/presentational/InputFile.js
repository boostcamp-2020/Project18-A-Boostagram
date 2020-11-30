import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AddIcon from '@constants/add.svg';

const style = {};
style.InputFileContainer = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  &:hover {
    background-image: url(${AddIcon});
    background-repeat: no-repeat;
  }
`;
style.InputFileComponent = styled.input`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const InputFile = (props) => {
  const { handleChange, handleHover } = props;
  return (
    <style.InputFileContainer
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <style.InputFileComponent
        type="file"
        multiple
        onChange={handleChange}
        name="upload"
        accept="image/*"
      />
    </style.InputFileContainer>
  );
};

InputFile.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleHover: PropTypes.func.isRequired,
};

export default InputFile;
