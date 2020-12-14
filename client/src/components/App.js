import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserContext from '@context/user';
import SocketContext from '@context/socket';
import ModalContext from '@context/modal';
import styled from 'styled-components';
import socketIOClient from 'socket.io-client';
import Header from '@common/Header';
import GlobalStyle from '@style/GlobalStyle';
import HomeContainer from '@home/container/HomeContainer';
import NewFeedContainer from '@newFeed/container/NewFeedContainer';
import FeedExploreContainer from '@feedExplore/container/FeedExploreContainer';
import ProfileContainer from '@profile/container/ProfileContainer';
import pathURI from '@constants/path';
import initLogin from '@constants/value';
import ProfileFeedAPI from '@api/ProfileFeedAPI';
import LoginContainer from './login/container/LoginContainer';
import FeedDetailContainer from './feedDetail/container/FeedDetailContainer';

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
`;

style.ModalBackground = styled.div`
  background-color: gray;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  display: ${(props) => (props.active ? 'block' : 'none')};
  z-index: 2;
  opacity: 50%;
`;

const clearCookie = (key) => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};

const extractCookie = (login, setLogin, cookies) => {
  const userInfo = {};

  cookies.forEach((cookie) => {
    const [key, val] = cookie.split('=');
    userInfo[key] = val === 'undefined' ? '' : val;
    localStorage.setItem(key, val);
    clearCookie(key);
  });
  setLogin({
    ...login,
    ...userInfo,
  });
};

const handleCookies = (login, setLogin) => {
  const cookies = document.cookie.split('; ');
  if (cookies.length >= RESPONSE_USER_DATA_NUMS) {
    extractCookie(login, setLogin, cookies);
  }
};

const isEqualObj = (objA, objB) => {
  return JSON.stringify(objA) === JSON.stringify(objB);
};

const handleRefresh = (login, setLogin) => {
  if (localStorage.length < RESPONSE_USER_DATA_NUMS) {
    return NOT_LOGINED;
  }

  const obj = {};

  for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i);
    const val = localStorage.getItem(key);
    obj[key] = val === 'undefined' ? '' : val;
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

  const [selectedFeed, selectFeed] = useState({});
  const [detailActive, setDetailActive] = useState(false);
  const handleDetailModal = () => setDetailActive(!detailActive);

  const [socket, setSocket] = useState();

  if (isEqualObj(login, initLogin)) {
    // check localStorage.
    const logined = handleRefresh(login, setLogin);
    // no object in localStorage. check cookies.
    if (logined === NOT_LOGINED) {
      handleCookies(login, setLogin);
    }
  }

  useEffect(async () => {
    const url = `${
      pathURI.IP + pathURI.API_PROFILE + login.userName
    }?lastFeedId=noId`;
    const option = {
      mode: 'cors',
      method: 'GET',
    };
    const response = await fetch(url, option);
    const json = await response.json();
    setLogin({
      ...login,
      follow: json.userInfo.follow,
    });
    setSocket(
      socketIOClient(`${pathURI.IP}`, {
        transports: ['websocket'],
        auth: { userName: login.userName },
      }),
    );
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('noticeFeedLike', (msg) => {
        console.log(msg);
      });
    }
  }, [socket]);

  const handleNoticeFeedLike = (user, targetAuthor) => {
    socket.emit('like', { user, targetAuthor });
  };

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ login, setLogin }}>
        <SocketContext.Provider value={{ handleNoticeFeedLike }}>
          <style.ModalBackground active={modalActive} onClick={handleModal} />
          <style.ModalBackground
            active={detailActive}
            onClick={handleDetailModal}
          />
          <NewFeedContainer
            modalActive={modalActive}
            handleModal={handleModal}
          />
          <Header handleModal={handleModal} />
          <style.Contents>
            <style.RouteWrapper>
              {isEqualObj(login, initLogin) ? (
                <>
                  <Route
                    exact
                    path={pathURI.LOGIN}
                    component={LoginContainer}
                  />
                  <Route path="*">
                    <Redirect to={pathURI.LOGIN} />
                  </Route>
                </>
              ) : (
                <ModalContext.Provider
                  value={{
                    modalActive,
                    detailActive,
                    handleDetailModal,
                    selectedFeed,
                    selectFeed,
                  }}
                >
                  <FeedDetailContainer />
                  <PrivateRouter />
                </ModalContext.Provider>
              )}
            </style.RouteWrapper>
          </style.Contents>
        </SocketContext.Provider>
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
