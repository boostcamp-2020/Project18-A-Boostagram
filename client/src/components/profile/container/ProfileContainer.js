import React from 'react';
import styled from 'styled-components';
import ProfileInfo from '@profile/presentational/ProfileInfo';
import FeedList from '@feedExplore/presentational/FeedList';
import dummy from '@feedExplore/dummy';

const style = {};

style.ProfileContainer = styled.div``;

const ProfileContainer = () => {
  return (
    <style.ProfileContainer>
      <ProfileInfo />
      <FeedList datas={dummy} />
    </style.ProfileContainer>
  );
};

export default ProfileContainer;
