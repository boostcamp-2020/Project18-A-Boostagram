import React from 'react';
import styled from 'styled-components';
import icon from '@constants/icon';

const style = {};
style.LoginHeader = styled.div`
  margin: 30px 0;
`;
const LoginHeader = () => (
  <style.LoginHeader>
    <icon.Logo />
  </style.LoginHeader>
);

export default LoginHeader;
