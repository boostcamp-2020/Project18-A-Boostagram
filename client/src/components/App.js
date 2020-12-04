import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserContext from '@context/user';
import ModalContext from '@context/modal';
import styled from 'styled-components';
import Header from '@common/Header';
import GlobalStyle from '@style/GlobalStyle';
import HomeContainer from '@home/container/HomeContainer';
import NewFeedContainer from '@newFeed/container/NewFeedContainer';
import FeedExploreContainer from '@feedExplore/container/FeedExploreContainer';
import ProfileContainer from '@profile/container/ProfileContainer';
import pathURI from '@constants/path';
import LoginContainer from './login/container/LoginContainer';

const initLogin = {
  jwt: '',
  name: '',
  userName: '',
  profileImg: '',
};
const NOT_LOGINED = 'NOT_LOGINED';
const RESPONSE_USER_DATA_NUMS = 4;
const style = {};

style.RouteWrapper = styled.div`
  margin: 0 auto;
  width: 935px;
`;

style.Contents = styled.div`
  display: flex;
  margin-top: 54px;
  background-color: ${(props) => props.theme.color.background};
`;

style.ModalBackground = styled.div`
  background-color: gray;
  height: 1000px;
  width: 100%;
  position: fixed;
  top: 0;
  display: ${(props) => (props.active ? 'block' : 'none')};
  z-index: 1;
  opacity: 50%;
`;

const removeCookie = (key) => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};

const extractCookie = (login, setLogin, cookies) => {
  const obj = {};

  cookies.forEach((cookie) => {
    const [key, val] = cookie.split('=');
    obj[key] = val === 'undefined' ? '' : val;
    localStorage.setItem(key, val);
    removeCookie(key);
  });
  setLogin({
    ...login,
    ...obj,
  });
};

const handleCookies = (login, setLogin) => {
  const cookies = document.cookie.split('; ');
  if (cookies.length >= RESPONSE_USER_DATA_NUMS) {
    extractCookie(login, setLogin, cookies);
  }
};

const compareObject = (objA, objB) => {
  return JSON.stringify(objA) === JSON.stringify(objB);
};

const handleRefresh = (login, setLogin) => {
  if (localStorage.length < RESPONSE_USER_DATA_NUMS) {
    return NOT_LOGINED;
  }

  const obj = {};

  for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i);
    obj[key] = localStorage.getItem(key);
  }

  return setLogin({
    ...login,
    ...obj,
  });
};

const App = () => {
  const [modalActive, setModalActive] = useState(false);
  const [login, setLogin] = useState(initLogin);
  const handleModal = () => setModalActive(!modalActive);

  if (compareObject(login, initLogin)) {
    // check localStorage.
    const logined = handleRefresh(login, setLogin);
    // no object in localStorage. check cookies.
    if (logined === NOT_LOGINED) {
      handleCookies(login, setLogin);
    }
  }

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ login, setLogin }}>
        <style.ModalBackground active={modalActive} onClick={handleModal} />
        <NewFeedContainer modalActive={modalActive} handleModal={handleModal} />
        <Header handleModal={handleModal} />
        <style.Contents>
          <style.RouteWrapper>
            {compareObject(login, initLogin) ? (
              <>
                <Route exact path={pathURI.LOGIN} component={LoginContainer} />
                <Route path="*">
                  <Redirect to={pathURI.LOGIN} />
                </Route>
              </>
            ) : (
              <ModalContext.Provider value={{ modalActive }}>
                <PrivateRouter />
              </ModalContext.Provider>
            )}
          </style.RouteWrapper>
        </style.Contents>
      </UserContext.Provider>
    </>
  );
};

function PrivateRouter() {
  return (
    <Switch>
      <Route exact path={pathURI.HOME} component={HomeContainer} />
      <Route exact path={pathURI.EXPLORE} component={FeedExploreContainer} />
      <Route exact path={pathURI.PROFILE} component={ProfileContainer} />
      <Route path="*">
        <Redirect to={pathURI.HOME} />
      </Route>
    </Switch>
  );
}

export default App;
