import React, { useState, useEffect, useContext } from 'react';
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
  const { modalActive } = useContext(ModalContext);
  const getData = () => {
    const url = pathURL.IP + pathURL.API_PROFILE + userName;
    const option = {
      mode: 'cors',
      method: 'GET',
    };
    async function fetchUrl() {
      const response = await fetch(url, option);
      const json = await response.json();
      json.login = login;
      setData(json);
      setLoading(true);
    }
    useEffect(() => {
      fetchUrl();
    }, [preUserName, modalActive]);
  };
  getData();
  if (loading) {
    return (
      <style.ProfileContainer>
        <ProfileInfo data={data} />
        <FeedList datas={data.feeds} />
      </style.ProfileContainer>
    );
  }
  return <>loading...</>;
};

export default ProfileContainer;
