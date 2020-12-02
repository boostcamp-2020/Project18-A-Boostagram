import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Side from '@home/presentational/Side';
import Contents from '@home/presentational/Contents';
import pathURL from '@constants/path';

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
  // const user = useContext(userContext);
  const userId = '5fc73c8d690808276cab1a88';
  console.log('1');
  const getData = () => {
    const url = pathURL.IP + pathURL.API_HOME_FEED + userId;
    console.log(url);
    const option = {
      mode: 'cors',
      method: 'GET',
    };
    console.log('2');
    async function fetchUrl() {
      const response = await fetch(url, option);
      const json = await response.json();
      console.log('2.5');
      setData(json);
      setLoading(true);
    }
    useEffect(() => {
      console.log('?');
      fetchUrl();
    }, []);
  };
  console.log('3');
  getData();
  console.log('4');
  if (loading) {
    console.log(loading);
    return (
      <style.HomeContainer>
        <Contents data={data} />
        <Side />
      </style.HomeContainer>
    );
  }
  console.log('!');
  return <>loading...</>;
};

export default HomeContainer;
