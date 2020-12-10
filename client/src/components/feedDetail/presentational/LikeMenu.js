import React from 'react';
import styled from 'styled-components';
import icon from '@constants/icon';

const style = {};

style.LikeMenu = styled.div`
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.color.border};
  padding: 10px 16px;
  *:not(:first-child) {
    margin-left: 10px;
  }
`;

const LikeMenu = () => {
  return (
    <style.LikeMenu>
      <icon.Noti />
      <icon.Comment />
    </style.LikeMenu>
  );
};

export default LikeMenu;
