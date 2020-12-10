import React, { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '@context/user';
import { Link } from 'react-router-dom';
import pathURI from '@constants/path';
import Logout from './Logout';

const style = {};

style.Side = styled.div`
  display: flex;
  width: 263;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
  position: fixed;
  left: 65%;
  top: 115px;
`;

style.SideContainer = styled.div``;

style.ProfileImg = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 70%;
  cursor: pointer;
`;
style.User = styled.div`
  padding-top: 5px;
  margin-left: 10px;
`;
style.UserName = styled.div`
  font-weight: 600;
  color: #262626;
  margin-left: 12px;
  text-decoration: none;
  font: 14px;
  cursor: pointer;
`;
style.Name = styled.div`
  font: 14px;
  color: #8e8e8e;
  font-weight: 400;
  margin-left: 12px;
`;

style.ProfileLink = styled(Link)`
  display: flex;
  text-decoration: none;
`;

const Side = () => {
  const { login } = useContext(UserContext);
  return (
    <style.Side>
      <style.ProfileLink to={pathURI.PROFILE}>
        <style.ProfileImg draggable="false" src={login.profileImg} />
        <style.User>
          <style.UserName>{login.userName}</style.UserName>
          <style.Name>{login.name}</style.Name>
        </style.User>
      </style.ProfileLink>
      <Logout />
    </style.Side>
  );
};

export default Side;
