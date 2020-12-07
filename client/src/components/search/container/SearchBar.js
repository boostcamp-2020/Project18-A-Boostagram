import React from 'react';
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
  text-align: center;
  padding: 3px;
`;
style.SearchIcon = styled.span`
  position: absolute;
  left: 46px;
  top: 6px;
  width: 15px;
  height: 15px;
  background-image: url(${Search});
  background-repeat: no-repeat;
  background-size: 14px;
  opacity: 50%;
`;
style.ClearIcon = styled.img``;

const SearchBar = () => {
  return (
    <style.SearchContainer>
      <style.SearchInput type="text" placeholder="검색" />
      <style.SearchIcon />
      <style.ClearIcon src={ClearIcon} />
    </style.SearchContainer>
  );
};

export default SearchBar;
