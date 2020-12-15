import React, { useState } from 'react';
import styled from 'styled-components';
import icon from '@constants/icon';
import DropBox from '../presentational/DropBox';

const style = {};

style.NotiHistoryContainer = styled.div`
  position: relative;
  margin-left: 22px !important;
  *:not(:first-child) {
    margin-left: 0px !important;
  }
`;

style.NotiIcon = styled.div`
  cursor: pointer;
`;

const NotiHistoryContainer = () => {
  const [isClicked, setIsClicked] = useState(false);
  const onClickHandler = () => {
    setIsClicked(!isClicked);
  };
  return (
    <style.NotiHistoryContainer>
      <style.NotiIcon onClick={onClickHandler}>
        <icon.Noti />
      </style.NotiIcon>
      <DropBox isClicked={isClicked} />
    </style.NotiHistoryContainer>
  );
};

export default NotiHistoryContainer;
