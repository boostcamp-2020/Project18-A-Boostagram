import React from 'react';
import clear from '@public/clear.png';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const style = {};
style.ClearIcon = styled.img`
  display: ${({ focus }) => (focus ? 'block' : 'none')};
  position: absolute;
  right: 3px;
  top: 8px;
  width: 12px;
  height: 12px;
  border-radius: 25px;
  margin-right: 3px;
  opacity: 50%;
`;

const ClearIcon = ({ focus }) => {
  return <style.ClearIcon focus={focus} src={clear} />;
};

ClearIcon.propTypes = {
  focus: PropTypes.bool.isRequired,
};

export default ClearIcon;
