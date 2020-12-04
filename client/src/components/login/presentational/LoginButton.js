import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import icon from '@constants/icon';

const style = {};
style.LoginButton = styled.button`
  outline: none;
  border: none;
  color: white;
  background-color: ${(props) => props.theme.color.dark};
  width: 160px;
  height: 30px;
  border-radius: 5px;
  display: flex;
  padding-top: 4px;
  padding-left: 20px;
  margin: 80px auto;
  &:hover {
    cursor: pointer;
  }
`;
style.Text = styled.div`
  margin-top: 2px;
  margin-left: 4px;
  font-size: 15px;
`;

const LoginButton = ({ handleButton }) => {
  return (
    <style.LoginButton onClick={handleButton}>
      <icon.GitLogo />
      <style.Text>GitHub Login</style.Text>
    </style.LoginButton>
  );
};

LoginButton.propTypes = {
  handleButton: PropTypes.func.isRequired,
};

export default LoginButton;
