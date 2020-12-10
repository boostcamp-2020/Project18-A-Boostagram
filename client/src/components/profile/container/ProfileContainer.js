import React, { useState, useRef, useContext } from 'react';
import styled from 'styled-components';
import ProfileInfo from '@profile/presentational/ProfileInfo';
import FeedList from '@feedExplore/presentational/FeedList';
import UserContext from '@context/user';
import ModalContext from '@context/modal';
import ProfileFeedAPI from '@api/ProfileFeedAPI';

const style = {};

style.ProfileContainer = styled.div``;

const ProfileContainer = () => {
  const { login } = useContext(UserContext);
  let userName = window.location.search.split('=')[1];
  const [preUserName, setPreUserName] = useState(userName);
  if (userName !== preUserName) setPreUserName(userName);
  if (!userName) userName = login.userName;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [feeds, setFeeds] = useState([]);
  const { modalActive } = useContext(ModalContext);
  const [getMore, setGetMore] = useState('noId');
  const isMounted = useRef(false);

  ProfileFeedAPI(
    setData,
    loading,
    setLoading,
    getMore,
    userName,
    preUserName,
    feeds,
    setFeeds,
    isMounted,
    modalActive,
  );

  if (loading && data.feeds) {
    return (
      <style.ProfileContainer>
        <ProfileInfo login={login} data={data} userInfo={data.userInfo} />
        <FeedList datas={feeds} setGetMore={setGetMore} />
      </style.ProfileContainer>
    );
  }
  return <>loading...</>;
};

export default ProfileContainer;
