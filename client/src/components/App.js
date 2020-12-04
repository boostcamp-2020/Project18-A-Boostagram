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

const extractCookie = (login, setLogin, cookies) => {
  const obj = {};

  cookies.forEach((cookie) => {
    const [key, val] = cookie.split('=');
    obj[key] = val === 'undefined' ? '' : val;
    if (key !== 'jwt') {
      document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    }
  });
  setLogin({
    ...login,
    ...obj,
  });
};

const handleLogin = (login, setLogin) => {
  const cookies = document.cookie.split('; ');
  if (cookies.length > 1) {
    extractCookie(login, setLogin, cookies);
  }
};

const compareObject = (objA, objB) => {
  return JSON.stringify(objA) === JSON.stringify(objB);
};

const App = () => {
  const [modalActive, setModalActive] = useState(false);
  const [login, setLogin] = useState(initLogin);
  const handleModal = () => setModalActive(!modalActive);

  handleLogin(login, setLogin);

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
              <LoginContainer />
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
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;
