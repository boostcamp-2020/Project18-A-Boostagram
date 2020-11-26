import React from 'react';
import styled from 'styled-components';
import icon from '@constants/icon';

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
`;

style.Logo = styled.img`
  margin-top: 7px;
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
  a:not(:first-child) {
    margin-left: 22px;
  }
`;

const Header = () => (
  <style.HeaderContainer>
    <style.Header>
      <style.LogoArea href="/">
        <style.Logo
          alt="Instagram"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        />
      </style.LogoArea>
      <style.SearchBar type="text" placeholder="검색" />
      <style.NavigationBar>
        <a href="/">
          <icon.Home />
        </a>
        <a href="/newFeed">
          <icon.NewFeed />
        </a>
        <a href="/">
          <icon.Direct />
        </a>
        <a href="/explore">
          <icon.Explore />
        </a>
        <a href="/">
          <icon.Noti />
        </a>
        <a href="/">
          <icon.Profile />
        </a>
      </style.NavigationBar>
    </style.Header>
  </style.HeaderContainer>
);

export default Header;
