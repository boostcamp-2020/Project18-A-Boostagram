import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import ProfileInfo from '@profile/presentational/ProfileInfo';
import FeedList from '@feedExplore/presentational/FeedList';
import pathURL from '@constants/path';
import UserContext from '@context/user';

const style = {};

style.ProfileContainer = styled.div``;

const ProfileContainer = () => {
  const { login } = useContext(UserContext);
  const { userName } = login;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = () => {
    const url = pathURL.IP + pathURL.API_PROFILE + userName;
    const option = {
      mode: 'cors',
      method: 'GET',
    };
    async function fetchUrl() {
      const response = await fetch(url, option);
      const json = await response.json();
      json.feeds.reverse();
      setData(json);
      setLoading(true);
    }
    useEffect(() => {
      fetchUrl();
    }, []);
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
