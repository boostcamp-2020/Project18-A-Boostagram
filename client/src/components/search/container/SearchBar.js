import React, { useState } from 'react';
import styled from 'styled-components';
import Search from '../../../constants/search.svg';
import ClearIcon from '../../../public/clear.png';

const style = {};
style.SearchContainer = styled.div`
  position: relative;
`;
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

const SearchBar = () => {
  const [focus, setFocus] = useState(false);
  const handleFocus = () => setFocus(!focus);
  return (
    <style.SearchContainer>
      <style.SearchInput
        focus={focus}
        onFocus={handleFocus}
        onBlur={handleFocus}
        type="text"
        placeholder="검색"
      />
      <style.SearchIcon focus={focus} />
      <style.ClearIcon src={ClearIcon} focus={focus} />
    </style.SearchContainer>
  );
};

export default SearchBar;
