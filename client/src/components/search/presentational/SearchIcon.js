import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Search from '@constants/search.svg';

const style = {};
style.SearchIcon = styled.span`
  position: absolute;
  left: ${({ focus }) => (focus ? '4px' : '46px')};
  top: 8px;
  width: 15px;
  height: 15px;
  background-image: url(${Search});
  background-repeat: no-repeat;
  background-size: 13px;
  opacity: 50%;
`;

const SearchIcon = ({ focus }) => {
  return <style.SearchIcon focus={focus} />;
};

SearchIcon.propTypes = {
  focus: PropTypes.bool.isRequired,
};

export default SearchIcon;
