import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const style = {};
style.SearchInput = styled.input`
  height: 20px;
  flex: 1;
  background-color: ${(props) => props.theme.color.background};
  border: 1px solid ${(props) => props.theme.color.border};
  border-radius: 3px;
  outline: none;
  padding: 3px;
  text-align: ${({ focus }) => (focus ? 'left' : 'center')};
  padding-left: ${({ focus }) => (focus ? '20px' : '0px')};
`;

const SearchInput = ({
  focus,
  value,
  handleBlur,
  handleFocus,
  handleValue,
}) => {
  return (
    <style.SearchInput
      focus={focus}
      type="text"
      placeholder="검색"
      value={value}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleValue}
    />
  );
};

SearchInput.propTypes = {
  focus: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  handleValue: PropTypes.func.isRequired,
};

export default SearchInput;
