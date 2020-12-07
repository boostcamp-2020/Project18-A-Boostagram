import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PATH from '@constants/path';
import SearchInput from '@search/presentational/SearchInput';
import SearchIcon from '@search/presentational/SearchIcon';
import ClearIcon from '@search/presentational/ClearIcon';

const style = {};
style.SearchContainer = styled.div`
  position: relative;
`;

const SearchBar = () => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState('');
  const [suggestUsers, setSuggestUsers] = useState([]);

  const handleFocus = () => setFocus(!focus);
  const handleBlur = () => {
    setValue('');
    setFocus(!focus);
  };
  const handleValue = ({ target }) => setValue(target.value);

  useEffect(() => {
    if (value !== '') {
      fetch(`${PATH.IP + PATH.API_SEARCH_USERS}${value}`)
        .then((res) => res.json())
        .then((users) => {
          const equalPrevious =
            JSON.stringify(users) === JSON.stringify(suggestUsers);
          if (!equalPrevious) setSuggestUsers(users);
        });
    }
  }, [value]);

  return (
    <style.SearchContainer>
      <SearchIcon focus={focus} />
      <SearchInput
        focus={focus}
        value={value}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        handleValue={handleValue}
      />
      <ClearIcon focus={focus} src={ClearIcon} />
    </style.SearchContainer>
  );
};

export default SearchBar;
