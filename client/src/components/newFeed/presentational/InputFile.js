import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const style = {};
style.InputFileContainer = styled.div`
  height: 24px;
  position: relative;
`;
style.InputFileUI = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: skyblue;
  font-size: 14px;
  padding: 0px 14px;
`;
style.InputFileComponent = styled.input`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const InputFile = (props) => {
  const { handleChange } = props;
  return (
    <style.InputFileContainer>
      <style.InputFileUI>
        Attach files by dragging &amp; dropping, selecting or pasting theme.
      </style.InputFileUI>
      <style.InputFileComponent
        type="file"
        multiple
        onChange={handleChange}
        name="file"
        accept="image/*"
      />
    </style.InputFileContainer>
  );
};

InputFile.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default InputFile;
