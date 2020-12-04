import React, { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '@context/user';
import icon from '@constants/icon';

const style = {};
style.Profile = styled.div`
  height: 72px;
  display: block;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
`;
style.Container = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  left: 5%;
  width: 90%;
`;
style.Img = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 42px;
`;
style.Text = styled.span`
  position: absolute;
  top: 4px;
  margin-left: 14px;
  & > div:first-child {
    font-weight: 600;
  }
`;
style.Detail = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  &:hover {
    cursor: pointer;
  }
`;
const Profile = () => {
  const { login } = useContext(UserContext);
  return (
    <style.Profile>
      <style.Container>
        <style.Img src={login.profileImg} />
        <style.Text>
          <div>{login.userName}</div>
          <div>{login.name}</div>
        </style.Text>
        <style.Detail>
          <icon.Detail />
        </style.Detail>
      </style.Container>
    </style.Profile>
  );
};

export default Profile;
