import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from '@common/Header';
import GlobalStyle from '@style/GlobalStyle';
import NewFeedContainer from '@newFeed/container/NewFeedContainer';
import FeedExploreContainer from '@feedExplore/container/FeedExploreContainer';
import pathURI from '@constants/path';

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

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <style.Contents>
        <style.RouteWrapper>
          <Switch>
            <Route exact path={pathURI.NEWFEED} component={NewFeedContainer} />
            <Route
              exact
              path={pathURI.EXPLORE}
              component={FeedExploreContainer}
            />
          </Switch>
        </style.RouteWrapper>
      </style.Contents>
    </>
  );
};

export default App;
