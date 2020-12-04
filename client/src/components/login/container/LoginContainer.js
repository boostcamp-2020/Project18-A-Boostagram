import React from 'react';
import LoginButton from '@login/presentational/LoginButton';
import LoginHeader from '@login/presentational/LoginHeader';
import styled from 'styled-components';

const style = {};
style.LoginContainer = styled.div`
  height: 900px;
`;
style.LoginForm = styled.div`
  width: 50%;
  height: 300px;
  margin: 0 auto;
  padding: 10px;
  position: relative;
  top: 10%;
  border-radius: 5px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.color.border};
  text-align: center;
`;
const handleButton = () => {
  fetch('http://localhost:3000/login/github')
    .then((res) => res.json())
    .then((url) => {
      document.location.href = url;
    });
};

const LoginContainer = () => {
  return (
    <style.LoginContainer>
      <style.LoginForm>
        <LoginHeader />
        <LoginButton handleButton={handleButton} />
      </style.LoginForm>
    </style.LoginContainer>
  );
};

export default LoginContainer;
