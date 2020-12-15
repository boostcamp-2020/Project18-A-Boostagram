import React, { useContext } from 'react';
import styled from 'styled-components';
import pathURI from '@constants/path';
import icon from '@constants/icon';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserContext from '@context/user';
import SearchBar from '@search/container/SearchBar';

const style = {};

style.HeaderContainer = styled.div`
  width: 100%;
  height: 54px;
  border: 1px solid ${(props) => props.theme.color.border};
  position: fixed;
  background-color: #ffffff;
  z-index: 1;
  top: 0;
`;

style.Header = styled.div`
  width: 935px;
  height: 54px;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

style.LogoArea = styled.a`
  flex: 2;
  padding-top: 7px;
`;

style.NavigationBar = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  *:not(:first-child) {
    margin-left: 22px;
  }
`;
style.NavigationItem = styled(Link)``;
style.newFeedButton = styled.button`
  outline: none;
  border: none;
  background: white;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
`;

const Header = ({ handleModal }) => {
  const { login } = useContext(UserContext);
  return (
    <style.HeaderContainer>
      <style.Header>
        <style.LogoArea href={pathURI.HOME}>
          <icon.Logo />
        </style.LogoArea>
        <SearchBar />
        <style.NavigationBar>
          <style.NavigationItem to={pathURI.HOME}>
            <icon.Home />
          </style.NavigationItem>
          {login?.jwt !== '' && (
            <style.newFeedButton onClick={handleModal}>
              <icon.NewFeed />
            </style.newFeedButton>
          )}
          <style.NavigationItem to={pathURI.EXPLORE}>
            <icon.Explore />
          </style.NavigationItem>
          <style.NavigationItem to={pathURI.HOME}>
            <icon.Noti />
          </style.NavigationItem>
          <style.NavigationItem to={pathURI.PROFILE}>
            <icon.Profile />
          </style.NavigationItem>
        </style.NavigationBar>
      </style.Header>
    </style.HeaderContainer>
  );
};

Header.propTypes = {
  handleModal: PropTypes.func.isRequired,
};

export default Header;
