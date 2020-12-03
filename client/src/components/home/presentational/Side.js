import React, { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '@context/user';

const style = {};

style.Side = styled.div`
  display: flex;
  width: 293px;
  margin-left: auto;
  margin-top: 30px;
`;

style.ProfileImg = styled.img`
  width: 56px;
  height: 56px;
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

const Side = () => {
  const { login } = useContext(UserContext);
  return (
    <style.Side>
      <style.ProfileImg draggable="false" src={login.profileImg} />
      <style.User>
        <style.UserName>{login.userName}</style.UserName>
        <style.Name>{login.name}</style.Name>
      </style.User>
    </style.Side>
  );
};

export default Side;
