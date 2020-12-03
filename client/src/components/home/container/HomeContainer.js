import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Side from '@home/presentational/Side';
import Contents from '@home/presentational/Contents';
import pathURL from '@constants/path';
import UserContext from '@context/user';

const style = {};

style.HomeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-top: 30px;
`;
const HomeContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { login } = useContext(UserContext);
  // todo: userId -> context userId
  // const userId = '5fc84e31ed1cf4160ca80c18';
  const getData = () => {
    const url = pathURL.IP + pathURL.API_HOME_FEED + login.userName;
    const option = {
      mode: 'cors',
      method: 'GET',
    };
    async function fetchUrl() {
      const response = await fetch(url, option);
      const json = await response.json();
      setData(json.reverse());
      setLoading(true);
    }
    useEffect(() => {
      fetchUrl();
    }, []);
  };
  getData();
  if (loading) {
    return (
      <style.HomeContainer>
        <Contents data={data} />
        <Side />
      </style.HomeContainer>
    );
  }
  return <>loading...</>;
};

export default HomeContainer;
