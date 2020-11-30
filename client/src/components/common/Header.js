import React from 'react';
import styled from 'styled-components';
import pathURI from '@constants/path';
import icon from '@constants/icon';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const style = {};

style.HeaderContainer = styled.div`
  width: 100%;
  height: 54px;
  border: 1px solid ${(props) => props.theme.color.border};
  position: absolute;
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

style.SearchBar = styled.input`
  height: 20px;
  flex: 1;
  background-color: ${(props) => props.theme.color.background};
  border: 1px solid ${(props) => props.theme.color.border};
  border-radius: 3px;
  text-align: center;
  padding: 3px;
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

const Header = ({ handleModal }) => (
  <style.HeaderContainer>
    <style.Header>
      <style.LogoArea href={pathURI.HOME}>
        <icon.Logo />
      </style.LogoArea>
      <style.SearchBar type="text" placeholder="검색" />
      <style.NavigationBar>
        <style.NavigationItem to={pathURI.HOME}>
          <icon.Home />
        </style.NavigationItem>
        <style.newFeedButton onClick={handleModal}>
          <icon.NewFeed />
        </style.newFeedButton>
        <style.NavigationItem to={pathURI.HOME}>
          <icon.Direct />
        </style.NavigationItem>
        <style.NavigationItem to={pathURI.EXPLORE}>
          <icon.Explore />
        </style.NavigationItem>
        <style.NavigationItem to={pathURI.HOME}>
          <icon.Noti />
        </style.NavigationItem>
        <style.NavigationItem to={pathURI.HOME}>
          <icon.Profile />
        </style.NavigationItem>
      </style.NavigationBar>
    </style.Header>
  </style.HeaderContainer>
);

Header.propTypes = {
  handleModal: PropTypes.func.isRequired,
};

export default Header;
