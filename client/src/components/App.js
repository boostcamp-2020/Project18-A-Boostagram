import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserContext from '@context/user';
import styled from 'styled-components';
import Header from '@common/Header';
import GlobalStyle from '@style/GlobalStyle';
import HomeContainer from '@home/container/HomeContainer';
import NewFeedContainer from '@newFeed/container/NewFeedContainer';
import FeedExploreContainer from '@feedExplore/container/FeedExploreContainer';
import pathURI from '@constants/path';
import AouthTest from './AouthTest';

const initLogin = {
  jwt: '',
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

const App = () => {
  const [modalActive, setModalActive] = useState(false);
  const [login, setLogin] = useState(initLogin);
  console.log(document.cookie);
  const handleModal = () => setModalActive(!modalActive);
  return (
    <>
      <GlobalStyle />
      <style.ModalBackground active={modalActive} onClick={handleModal} />
      <NewFeedContainer modalActive={modalActive} handleModal={handleModal} />
      <Header handleModal={handleModal} />
      <style.Contents>
        <style.RouteWrapper>
          <UserContext.Provider value={(login, setLogin)}>
            <Switch>
              <Route exact path={pathURI.HOME} component={HomeContainer} />
              <Route
                exact
                path={pathURI.EXPLORE}
                component={FeedExploreContainer}
              />
              <Route exact path="/test" component={AouthTest} />
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </UserContext.Provider>
        </style.RouteWrapper>
      </style.Contents>
    </>
  );
};

export default App;
