import React, { useContext } from 'react';
import initLogin from '@constants/value';
import styled from 'styled-components';
import UserContext from '@context/user';

const style = {};
style.Logout = styled.button`
  outline: none;
  border: none;
  background-color: inherit;
  margin-left: 20px;
  color: ${({ theme }) => theme.color.blue};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
`;
const Logout = () => {
  const { setLogin } = useContext(UserContext);
  const handleLogout = () => {
    localStorage.clear();
    setLogin(initLogin);
  };
  return <style.Logout onClick={handleLogout}>로그아웃</style.Logout>;
};

export default Logout;
