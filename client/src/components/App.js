import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from '@common/Header';
import GlobalStyle from '@style/GlobalStyle';
import NewFeedContainer from '@newFeed/container/NewFeedContainer';
import pathURI from '@constants/path';

const RouteWrapper = styled.div`
  margin-top: 100px;
  padding: 20px 100px;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <RouteWrapper>
        <Switch>
          <Route exact path={pathURI.NEWFEED} component={NewFeedContainer} />
        </Switch>
      </RouteWrapper>
    </>
  );
};

export default App;
