import React, { useState, useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import ProfileInfo from '@profile/presentational/ProfileInfo';
import FeedList from '@feedExplore/presentational/FeedList';
import pathURL from '@constants/path';
import UserContext from '@context/user';
import ModalContext from '@context/modal';

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

  const getData = () => {
    const option = {
      mode: 'cors',
      method: 'GET',
    };

    async function fetchUrl1() {
      const url = `${
        pathURL.IP + pathURL.API_PROFILE + userName
      }?lastFeedId=${getMore}`;
      const response = await fetch(url, option);
      const json = await response.json();
      setData(json);
      setFeeds([...feeds, ...json.feeds]);
    }

    async function fetchUrl2() {
      const url = `${
        pathURL.IP + pathURL.API_PROFILE + userName
      }?lastFeedId=noId`;
      const response = await fetch(url, option);
      const json = await response.json();
      if (json.feeds.length > 0 && json.feeds[0]._id !== feeds[0]._id) {
        setData(json);
        setFeeds([json.feeds[0], ...feeds]);
      }
    }

    useEffect(() => {
      fetchUrl1();
      if (!loading) setLoading(true);
    }, [getMore]);

    useEffect(() => {
      if (isMounted.current) {
        fetchUrl2();
        if (!loading) setLoading(true);
      } else {
        isMounted.current = true;
      }
    }, [preUserName, modalActive]);
  };
  getData();

  if (loading && data.feeds) {
    return (
      <style.ProfileContainer>
        <ProfileInfo login={login} userInfo={data.userInfo} feeds={feeds} />
        <FeedList datas={feeds} setGetMore={setGetMore} />
      </style.ProfileContainer>
    );
  }
  return <>loading...</>;
};

export default ProfileContainer;
